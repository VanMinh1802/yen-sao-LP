import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link 
      href="#hero" 
      onClick={(e) => {
        if (onClick) onClick();
      }}
      className={cn("relative shrink-0 overflow-visible", className)}
    >
      <div className="relative w-[clamp(140px,22vw,380px)] h-[clamp(50px,7vw,120px)]">
        <Image
          src="/images/logo/logoyen.webp"
          alt="Logo Yến Sào Ngọc Thảo"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1280px) 220px, 280px"
        />
      </div>
    </Link>
  );
}
