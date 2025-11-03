"use client";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="ab-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15">
              <animate attributeName="stop-color" values="#0ea5e9;#8b5cf6;#f97316;#0ea5e9" dur="30s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15">
              <animate attributeName="stop-color" values="#8b5cf6;#f97316;#0ea5e9;#8b5cf6" dur="30s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="ab-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="ab-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        {/* gradient backdrop */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#ab-grad)" />

        {/* clouds */}
        <g filter="url(#ab-blur)" opacity="0.35">
          <g transform="translate(-200,80)">
            <animateTransform attributeName="transform" type="translate" values="0,0; 80,0; 0,0" dur="45s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="80" fill="#94a3b8" />
            <circle cx="270" cy="90" r="60" fill="#94a3b8" />
            <circle cx="140" cy="100" r="50" fill="#94a3b8" />
          </g>
          <g transform="translate(1000,140) scale(1.2)">
            <animateTransform attributeName="transform" type="translate" values="-40,0; 40,0; -40,0" dur="60s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="70" fill="#94a3b8" />
            <circle cx="260" cy="90" r="50" fill="#94a3b8" />
            <circle cx="140" cy="100" r="45" fill="#94a3b8" />
          </g>
          <g transform="translate(300,200) scale(0.9)">
            <animateTransform attributeName="transform" type="translate" values="-30,0; 30,0; -30,0" dur="55s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="60" fill="#94a3b8" />
            <circle cx="260" cy="90" r="45" fill="#94a3b8" />
            <circle cx="140" cy="100" r="40" fill="#94a3b8" />
          </g>
        </g>

        {/* skyline silhouettes */}
        <g transform="translate(0,620)" opacity="0.9">
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
              const x = 60 + (i * 46) % 1360;
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

        {/* data lines with moving dashes */}
        <g stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.5">
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
        <g className="ab-tags" opacity="0.8">
          <g className="ab-tag" transform="translate(260,560)">
            <animateTransform attributeName="transform" type="translate" values="0,0; 60,-10; 140,0; 80,16; 0,0" dur="20s" repeatCount="indefinite" additive="sum" />
            <rect x="-20" y="-10" rx="6" ry="6" width="48" height="22" fill="#0ea5e9" opacity="0.9" />
            <text x="4" y="6" fontSize="12" fill="#03111f">$24</text>
          </g>
          <g className="ab-tag" transform="translate(760,520)">
            <animateTransform attributeName="transform" type="translate" values="0,0; 80,-14; 160,6; 120,20; 40,-4; 0,0" dur="24s" repeatCount="indefinite" additive="sum" />
            <rect x="-20" y="-10" rx="6" ry="6" width="54" height="22" fill="#8b5cf6" opacity="0.9" />
            <text x="4" y="6" fontSize="12" fill="#100a1f">$19</text>
          </g>
          <g className="ab-tag" transform="translate(1120,560)">
            <animateTransform attributeName="transform" type="translate" values="0,0; 70,-8; 140,12; 90,24; 0,10; -20,0; 0,0" dur="28s" repeatCount="indefinite" additive="sum" />
            <rect x="-20" y="-10" rx="6" ry="6" width="52" height="22" fill="#34d399" opacity="0.9" />
            <text x="4" y="6" fontSize="12" fill="#052012">$31</text>
          </g>
        </g>
      </svg>

      <style jsx>{`
        .ab-line { stroke-dasharray: 6 10; }

        .ab-twinkles rect { animation: twinkle 3s ease-in-out infinite; }
        .ab-twinkles .tw-1 { animation-delay: .4s }
        .ab-twinkles .tw-2 { animation-delay: .8s }
        .ab-twinkles .tw-3 { animation-delay: 1.2s }
        .ab-twinkles .tw-4 { animation-delay: 1.6s }
        .ab-twinkles .tw-5 { animation-delay: 2.0s }
        .ab-twinkles .tw-6 { animation-delay: 2.4s }
        @keyframes twinkle { 0%,100% { opacity: .15 } 50% { opacity: .7 } }
      `}</style>
    </div>
  );
}
