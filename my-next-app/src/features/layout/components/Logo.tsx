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
      className={cn("relative w-[350px] h-[48px] flex items-center justify-start shrink-0", className)}
    >
      <div className="absolute top-[-40px] left-[-150px] h-[130px] w-[350px]">
        <Image
          src="/images/logo/logoyen.png"
          alt="Logo Yến Sào Ngọc Thảo"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 768px) 250px, 350px"
        />
      </div>
    </Link>
  );
}
