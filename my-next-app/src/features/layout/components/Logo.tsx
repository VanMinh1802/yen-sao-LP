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
      className={cn("relative w-[220px] md:w-[350px] h-[36px] md:h-[48px] flex items-center justify-start shrink-0", className)}
    >
      <div className="absolute top-[-28px] md:top-[-40px] left-[-30px] md:left-[-150px] h-[90px] md:h-[130px] w-[250px] md:w-[350px]">
        <Image
          src="/images/logo/logoyen.webp"
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
