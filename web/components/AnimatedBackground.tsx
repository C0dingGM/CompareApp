"use client";
import { useRef, useState, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [drag, setDrag] = useState<{ i: number; startX: number; startY: number; ox: number; oy: number } | null>(null);
  const initial = [
    { x: 260, y: 560 },
    { x: 760, y: 520 },
    { x: 1120, y: 560 },
  ];
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>(initial);
  const velRef = useRef<{ vx: number; vy: number }[]>([
    { vx: 0, vy: 0 },
    { vx: 0, vy: 0 },
    { vx: 0, vy: 0 },
  ]);
  const dragTrackRef = useRef<{ i: number; lastX: number; lastY: number; lastT: number } | null>(null);
  const inertiaIdsRef = useRef<(number | null)[]>([null, null, null]);
  const router = useRouter();
  const [q, setQ] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const stars = useMemo(() => {
    // create random stars across the sky region (top 60%)
    const N = 90;
    const rng = (seed: number) => () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const r = rng(123456);
    return Array.from({ length: N }).map((_, i) => ({
      x: Math.floor(20 + r() * 1400),
      y: Math.floor(20 + r() * 520),
      r: +(0.6 + r() * 1.8).toFixed(2),
      delay: +(r() * 6).toFixed(2),
      dur: +(3 + r() * 6).toFixed(2),
    }));
  }, []);


  useEffect(() => {
    fetch('/api/brands')
      .then(r => r.json())
      .then(j => { setBrands(j.items || []); setCategories(j.categories || []); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!q || q.trim().length < 1) { setSuggestions([]); return; }
    const ac = new AbortController();
    const t = setTimeout(async () => {
      try {
        const url = `/api/search?q=${encodeURIComponent(q)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`;
        const res = await fetch(url, { signal: ac.signal });
        const json = await res.json();
        setSuggestions(json.items || []);
      } catch {}
    }, 200);
    return () => { ac.abort(); clearTimeout(t); };
  }, [q, brand, category]);

  const submitSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const qq = q.trim();
    if (!qq) return;
    setLoading(true);
    const url = `/?q=${encodeURIComponent(qq)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`;
    try { router.push(url); } finally { setLoading(false); setSuggestions([]); }
  };










  const startInertia = (i: number) => {
    let vx = velRef.current[i].vx;
    let vy = velRef.current[i].vy;
    const min = 0.02;
    const friction = 0.9;
    let last = performance.now();

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      const decay = Math.pow(friction, dt / 16);
      vx *= decay;
      vy *= decay;
      if (Math.hypot(vx, vy) < min) {
        if (inertiaIdsRef.current[i]) cancelAnimationFrame(inertiaIdsRef.current[i]!);
        inertiaIdsRef.current[i] = null;
        try {
          localStorage.setItem("ab_tag_offsets", JSON.stringify(offsets));
        } catch {}
        return;
      }
      setOffsets((prev) => {
        const next = [...prev];
        next[i] = { x: next[i].x + vx * dt, y: next[i].y + vy * dt };
        return next;
      });
      inertiaIdsRef.current[i] = requestAnimationFrame(step);
    };
    if (inertiaIdsRef.current[i]) cancelAnimationFrame(inertiaIdsRef.current[i]!);
    inertiaIdsRef.current[i] = requestAnimationFrame(step);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ab_tag_offsets");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === 3) setOffsets(parsed);
      } else {
        setOffsets(initial);
      }
    } catch {}
  }, []);

  const onDown = (i: number) => (e: any) => {
    setDrag({ i, startX: e.clientX, startY: e.clientY, ox: offsets[i].x, oy: offsets[i].y });
    dragTrackRef.current = { i, lastX: e.clientX, lastY: e.clientY, lastT: performance.now() };
    velRef.current[i] = { vx: 0, vy: 0 };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e: any) => {
    if (!drag || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 1440 / rect.width;
    const scaleY = 900 / rect.height;
    const dx = (e.clientX - drag.startX) * scaleX;
    const dy = (e.clientY - drag.startY) * scaleY;
    setOffsets((prev) =>
      prev.map((o, idx) => (idx === drag.i ? { x: drag.ox + dx, y: drag.oy + dy } : o))
    );
    if (dragTrackRef.current) {
      const dt = Math.max(1, performance.now() - dragTrackRef.current.lastT);
      const vx = ((e.clientX - dragTrackRef.current.lastX) * scaleX) / dt;
      const vy = ((e.clientY - dragTrackRef.current.lastY) * scaleY) / dt;
      velRef.current[drag.i] = { vx, vy };
      dragTrackRef.current.lastX = e.clientX;
      dragTrackRef.current.lastY = e.clientY;
      dragTrackRef.current.lastT = performance.now();
    }
  };

  const onUp = () => {
    if (drag) startInertia(drag.i);
    setDrag(null);
    try {
      localStorage.setItem("ab_tag_offsets", JSON.stringify(offsets));
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-30 overflow-hidden">
      <svg
        ref={svgRef}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ab-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#8b5cf6;#f97316;#0ea5e9"
                dur="30s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15">
              <animate
                attributeName="stop-color"
                values="#8b5cf6;#f97316;#0ea5e9;#8b5cf6"
                dur="30s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="ab-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="ab-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <linearGradient id="ab-star" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* randomized sky stars that fade in/out at random intervals */}
        <g className="rand-stars" opacity="0.95" pointerEvents="none">
          {stars.map((s, i) => (
            <circle
              key={i}
              className="star"
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#ffffff"
              style={{ ['--dur' as any]: `${s.dur}s`, ['--delay' as any]: `${s.delay}s`, opacity: 0.1 as any }}
            />
          ))}
        </g>


        {/* gradient backdrop */}

        {/* shooting stars (more frequent) */}
        <g opacity="0.95" pointerEvents="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} className={`shooting-star delay-${(i%6)+1}`} transform={`translate(${80 + (i%6)*220} ${60 + (i%4)*70})`}>
              <line x1="0" y1="0" x2="64" y2="0" stroke="url(#ab-star)" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="2.2" fill="#fff" />
            </g>
          ))}
        </g>

        <rect x="0" y="0" width="1440" height="900" fill="url(#ab-grad)" pointerEvents="none" />

        {/* clouds */}
        <g filter="url(#ab-blur)" opacity="0.35" pointerEvents="none">
          <g transform="translate(-200,80)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 80,0; 0,0"
              dur="45s"
              repeatCount="indefinite"
              additive="sum"
            />
            <circle cx="200" cy="80" r="80" fill="#94a3b8" />
            <circle cx="270" cy="90" r="60" fill="#94a3b8" />
            <circle cx="140" cy="100" r="50" fill="#94a3b8" />
          </g>
          <g transform="translate(1000,140) scale(1.2)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-40,0; 40,0; -40,0"
              dur="60s"
              repeatCount="indefinite"
              additive="sum"
            />
            <circle cx="200" cy="80" r="70" fill="#94a3b8" />
            <circle cx="260" cy="90" r="50" fill="#94a3b8" />
            <circle cx="140" cy="100" r="45" fill="#94a3b8" />
          </g>
          <g transform="translate(300,200) scale(0.9)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-30,0; 30,0; -30,0"
              dur="55s"
              repeatCount="indefinite"
              additive="sum"
            />
            <circle cx="200" cy="80" r="60" fill="#94a3b8" />
            <circle cx="260" cy="90" r="45" fill="#94a3b8" />
            <circle cx="140" cy="100" r="40" fill="#94a3b8" />
          </g>
        </g>
        {/* Search bar with brand/category filters and suggestions */}
        <g pointerEvents="auto">
          <foreignObject x="270" y="362" width="900" height="136">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <form onSubmit={submitSearch} style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', width: '100%', maxWidth: 840, position: 'relative' }}>
                  <select value={brand} onChange={(e) => setBrand(e.target.value)} style={{ padding: '10px', borderRadius: 10, background: 'rgba(0,0,0,0.2)', color: '#eaf2ff', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <option value="">All companies</option>
                    {brands.map((b) => (<option key={b} value={b}>{b}</option>))}
                  </select>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '10px', borderRadius: 10, background: 'rgba(0,0,0,0.2)', color: '#eaf2ff', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <option value="">All categories</option>
                    {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
                  </select>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <div style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#90e0ff" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 20.49 21.49 19l-5.99-5zM4 9.5C4 6.46 6.46 4 9.5 4S15 6.46 15 9.5 12.54 15 9.5 15 4 12.54 4 9.5Z"/></svg>
                    </div>
                    <input name="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products, categories or brands…" style={{ width: '100%', height: 48, padding: '10px 14px 10px 42px', borderRadius: 10, border: 'none', outline: 'none', fontSize: 16, background: 'rgba(255,255,255,0.03)', color: '#eaf2ff', boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.02)' }} />
                    {q.trim().length >= 1 && (
                      <div style={{ position: 'absolute', left: 0, right: 0, top: 52, zIndex: 10, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, maxHeight: 240, overflowY: 'auto', backdropFilter: 'blur(8px)' }}>
                        {(suggestions?.length || 0) > 0 ? suggestions.map((p) => (
                          <a key={p.id} href={`/product/${p.id}`} style={{ display: 'block', padding: '8px 10px', color: '#eaf2ff', textDecoration: 'none' }}>
                            {p.title} — <span style={{ color: '#a5b4fc' }}>{p.brand}</span>
                          </a>
                        )) : (
                          <div style={{ padding: '8px 10px', color: '#94a3b8' }}>No results</div>
                        )}
                      </div>
                    )}
                  </div>
                  <button type="submit" disabled={loading || q.trim().length < 1} style={{ height: 48, padding: '0 18px', borderRadius: 10, border: 'none', background: '#6b4bff', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 15, opacity: loading ? 0.8 : 1 }}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </foreignObject>
        </g>

        {/* skyline silhouettes */}
        <g transform="translate(0,620)" opacity="0.9" pointerEvents="none">
          <rect x="0" y="80" width="1440" height="200" fill="#0b1220" />
          <g fill="#0f172a">
            <rect x="40" y="0" width="70" height="160" />
            <rect x="140" y="40" width="90" height="120" />
            <rect x="270" y="10" width="110" height="150" />
            <rect x="420" y="30" width="80" height="130" />
            <rect x="540" y="0" width="70" height="165" />
            <rect x="650" y="50" width="100" height="115" />
            <rect x="790" y="10" width="90" height="155" />
            <rect x="910" y="35" width="110" height="130" />
            <rect x="1060" y="0" width="85" height="165" />
            <rect x="1180" y="45" width="95" height="120" />
            <rect x="1300" y="20" width="70" height="145" />
          </g>

          {/* twinkling windows */}
          <g className="ab-twinkles">
            {Array.from({ length: 28 }).map((_, i) => {
              const x = 60 + ((i * 46) % 1360);
              const y = 10 + ((i * 23) % 140);
              const d = 2 + (i % 3);
              return <rect key={i} x={x} y={y} width={d} height={d} fill="#fbbf24" opacity="0.6" className={`tw-${i % 7}`} />;
            })}
          </g>

          {/* glowing shop signs */}
          <g filter="url(#ab-soft)">
            <rect x="300" y="120" rx="4" ry="4" width="60" height="16" fill="#22d3ee" opacity="0.7" />
            <rect x="740" y="90" rx="4" ry="4" width="70" height="16" fill="#a78bfa" opacity="0.7" />
            <rect x="1120" y="110" rx="4" ry="4" width="58" height="16" fill="#34d399" opacity="0.7" />
          </g>
        </g>



        {/* data lines */}
        <g stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.5" pointerEvents="none">
          <path className="ab-line" d="M220 640 C 420 560, 720 720, 960 660">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="8s" repeatCount="indefinite" />
          </path>
          <path className="ab-line" d="M420 680 C 600 620, 820 600, 1200 640" stroke="#a78bfa">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="10s" repeatCount="indefinite" />
          </path>
          <path className="ab-line" d="M140 700 C 360 640, 540 760, 820 720" stroke="#34d399">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="12s" repeatCount="indefinite" />
          </path>
        </g>

        {/* floating price tags */}
        <g className="ab-tags" opacity="0.8" style={{ pointerEvents: "auto" }}>
          {offsets.map((pos, i) => (
            <g
              key={i}
              transform={`translate(${pos.x} ${pos.y})`}
              onPointerDown={onDown(i)}
              style={{ cursor: "grab" }}
            >
              <rect
                x="-20"
                y="-10"
                rx="6"
                ry="6"
                width="52"
                height="22"
                fill={["#0ea5e9", "#8b5cf6", "#34d399"][i]}
                opacity="0.9"
              />
              <text x="4" y="6" fontSize="12" fill={["#03111f", "#100a1f", "#052012"][i]}>
                {["$24", "$19", "$31"][i]}


              </text>
            </g>
          ))}
        </g>
      </svg>


    </div>
  );
}
