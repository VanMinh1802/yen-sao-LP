import { cn } from "@/lib/utils";

interface SkipLinkProps {
  className?: string;
}

export function SkipLink({ className }: SkipLinkProps) {
  return (
    <a
      href="#main-content"
      className={cn(
        "absolute top-[-100%] left-0 z-[1001] bg-red-500 text-white px-4 py-3 font-semibold",
        "transition-all focus:top-0 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-br-md",
        className
      )}
    >
      Chuyển đến nội dung chính
    </a>
  );
}
