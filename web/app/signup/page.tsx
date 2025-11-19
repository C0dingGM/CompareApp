"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) { setError("Passwords do not match"); return; }
    if (username.trim().length < 3 || password.length < 6) { setError("Username or password too short"); return; }
    const res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
    const json = await res.json();
    if (!res.ok || !json.ok) { setError(json.error || 'Failed to register'); return; }
    const si = await signIn('credentials', { redirect: false, username, password });
    if (si?.error) router.push('/signin'); else router.push('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-xl border border-slate-800/60 bg-slate-900/40">
      <h1 className="text-xl font-semibold mb-4">Create account</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username (min 3)" className="w-full px-3 py-2 rounded-md bg-transparent border border-slate-700 outline-none" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password (min 6)" className="w-full px-3 py-2 rounded-md bg-transparent border border-slate-700 outline-none" />
        <input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" placeholder="Confirm password" className="w-full px-3 py-2 rounded-md bg-transparent border border-slate-700 outline-none" />
        {error && <div className="text-sm text-rose-400">{error}</div>}
        <button type="submit" className="w-full px-4 py-2 rounded-md border border-slate-700 hover:bg-white/5">Create account</button>
      </form>
      <div className="mt-4 text-sm text-center opacity-80">
        Already have an account? <a href="/signin" className="underline">Sign in</a>
      </div>
    </div>
  );
}
