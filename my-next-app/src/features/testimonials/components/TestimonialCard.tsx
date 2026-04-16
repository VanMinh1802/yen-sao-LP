import { cn } from "@/lib/utils";
import { Testimonial } from "../data/testimonials-data";

interface TestimonialCardProps {
  data: Testimonial;
  className?: string;
}

export function TestimonialCard({ data, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[24px] shadow-[0_16px_50px_rgba(0,0,0,0.06)] p-8 md:p-[40px_48px] w-full max-w-[600px] mx-auto text-center flex flex-col relative",
        className
      )}
    >
      {/* Quote Mark */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 text-[60px] md:text-[100px] leading-none text-gold-200 opacity-40 font-serif z-0 select-none pointer-events-none mt-2 md:mt-4">
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col h-full items-center">
        {/* Star Rating */}
        <div className="flex gap-[6px] justify-center mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-xl md:text-[20px] text-gold-500 drop-shadow-sm">
              ★
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-brown-800 text-base md:text-lg italic leading-[1.8] mb-8 font-medium">
          "{data.text}"
        </p>

        <div className="mt-auto flex flex-col items-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-gold-500 flex items-center justify-center text-white text-xl font-bold shadow-md mb-4 border-[3px] border-white ring-2 ring-gold-200/50">
            {data.authorInitials}
          </div>
          
          {/* Author Info */}
          <h4 className="text-lg font-bold text-brown-900 mb-1">{data.authorName}</h4>
          <span className="text-sm text-brown-600 font-medium">{data.authorLocation}</span>
        </div>
      </div>
    </div>
  );
}
