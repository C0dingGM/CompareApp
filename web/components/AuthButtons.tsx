"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return null;

  if (!session) {
    return (
      <button onClick={() => signIn("google")} className="px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">
        Sign in with Google
      </button>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm opacity-80">{session.user?.name || session.user?.email}</span>
      <button onClick={() => signOut()} className="px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">
        Sign out
      </button>
    </div>
  );
}
