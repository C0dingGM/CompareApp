"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <button onClick={() => signIn("google")} className="px-4 py-2 rounded-md border border-slate-700 hover:bg-white/5">
        Continue with Google
      </button>
    </div>
  );
}
