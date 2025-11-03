"use client";
import { useState } from 'react';

export default function HeaderSearch() {
  const [v, setV] = useState("");
  return (
    <form action="/" method="GET" className="relative hidden sm:block">
      <input
        type="search"
        name="q"
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder="Search products..."
        className="w-48 sm:w-64 md:w-80 pl-8 pr-3 py-2 rounded-md border border-slate-700/60 bg-transparent placeholder-slate-500 focus:outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/20"
      />
      <svg
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </form>
  );
}
