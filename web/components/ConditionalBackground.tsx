"use client";
import { usePathname } from "next/navigation";
import AnimatedBackground from "./AnimatedBackground";

interface ConditionalBackgroundProps {
  onWishlistClick?: () => void;
}

export default function ConditionalBackground({ onWishlistClick }: ConditionalBackgroundProps) {
  const pathname = usePathname();
  if (pathname.startsWith("/products") || pathname.startsWith("/product") || pathname.startsWith("/wishlist")) return null;
  return <AnimatedBackground onWishlistClick={onWishlistClick} />;
}
