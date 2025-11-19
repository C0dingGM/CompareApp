"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Link href="/signin" className="px-4 py-2 rounded-md border border-slate-700 hover:bg-white/5">
        Go to Sign in
      </Link>
    </div>
  );
}
