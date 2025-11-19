"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", { redirect: false, username, password });
    if (res?.error) setError(res.error || "Invalid credentials");
    else router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-xl border border-slate-800/60 bg-slate-900/40">
      <h1 className="text-xl font-semibold mb-4">Sign in</h1>
      <button onClick={() => router.push("/google-signin")} className="w-full mb-4 px-4 py-2 rounded-md border border-slate-700 hover:bg-white/5">
        Continue with Google
      </button>

      <div className="my-4 text-center opacity-70 text-sm">or</div>

      <form onSubmit={onSubmit} className="space-y-3">
        <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full px-3 py-2 rounded-md bg-transparent border border-slate-700 outline-none" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full px-3 py-2 rounded-md bg-transparent border border-slate-700 outline-none" />
        {error && <div className="text-sm text-rose-400">{error}</div>}
        <button type="submit" className="w-full px-4 py-2 rounded-md border border-slate-700 hover:bg-white/5">Sign in</button>
      </form>
    </div>
  );
}
