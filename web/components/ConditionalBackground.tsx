"use client";
import { usePathname } from "next/navigation";
import AnimatedBackground from "./AnimatedBackground";

export default function ConditionalBackground() {
  const pathname = usePathname();
  if (pathname.startsWith("/products") || pathname.startsWith("/product")) return null;
  return <AnimatedBackground />;
}
