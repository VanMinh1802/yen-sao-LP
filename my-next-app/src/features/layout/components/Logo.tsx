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
      <div className="relative w-[140px] h-[50px] sm:w-[180px] sm:h-[60px] md:w-[220px] md:h-[70px] xl:w-[380px] xl:h-[120px]">
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
