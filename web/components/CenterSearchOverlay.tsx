"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function CenterSearchOverlay() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch('/api/brands').then(r => r.json()).then(j => { setBrands(j.items || []); setCategories(j.categories || []); }).catch(() => {});
  }, []);
  if (pathname !== "/") return null;
  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const qq = q.trim();
    if (!qq) return;
    const url = `/?q=${encodeURIComponent(qq)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`;
    router.push(url);
    /*

    router.push(url);



          </select>


    */

  };
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center pointer-events-none">
      <form onSubmit={submit} className="pointer-events-auto w-full max-w-xl px-4">
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-xl shadow-2xl ring-1 ring-slate-700/40 p-2 flex flex-wrap sm:flex-nowrap items-center gap-2">
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-700 bg-transparent">
            <option value="">All companies</option>
            {brands.map((b) => (<option key={b} value={b}>{b}</option>))}
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-700 bg-transparent">
            <option value="">All categories</option>
            {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          <svg className="text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products"
            className="flex-1 bg-transparent outline-none text-base sm:text-lg placeholder-slate-500"
            autoFocus
          />
          <button type="submit" onClick={() => submit()} className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm sm:text-base">Search</button>
        </div>
      </form>
    </div>
  );
}
