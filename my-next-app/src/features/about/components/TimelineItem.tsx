import Image from "next/image";
import { cn } from "@/lib/utils";
import { TimelineItemData } from "../data/timeline-data";

interface TimelineItemProps {
  data: TimelineItemData;
  isLeft: boolean;
}

export function TimelineItem({ data, isLeft }: TimelineItemProps) {
  return (
    <div className={cn(
      "w-full md:w-[50%] flex flex-col md:flex-row relative z-10",
      isLeft ? "md:pr-12 md:self-start md:justify-end" : "md:pl-12 md:self-end md:justify-start"
    )}>
      {/* Center Dot (Desktop) */}
      <div className={cn(
        "hidden md:block absolute top-[50px] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20",
        isLeft ? "right-[-8px]" : "left-[-8px]"
      )} />

      {/* Left Dot (Mobile) */}
      <div className="md:hidden absolute left-[-8px] top-[50px] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20" />

      {/* Card Content */}
      <div className={cn(
        "group flex flex-col sm:flex-row items-center gap-6 p-6 bg-cream-100 border border-gold-500/15 rounded-2xl w-full",
        "transition-all duration-300 hover:-translate-y-[5px] hover:border-gold-500 hover:shadow-[0_12px_40px_rgba(212,168,67,0.15)]",
        isLeft ? "sm:flex-row-reverse sm:text-right" : "text-left"
      )}>
        {/* Image */}
        <div className="relative w-20 h-20 sm:w-[100px] sm:h-[100px] shrink-0 overflow-hidden rounded-xl border border-gold-500/20">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, 100px"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 w-full text-left">
          <div className={cn(
            "flex items-center gap-3 mb-2",
            isLeft ? "sm:justify-end" : "justify-start"
          )}>
            <span className="text-2xl font-extrabold text-red-500">
              {data.year}
            </span>
            <div className={cn(
              "w-8 h-[2px] bg-gold-400 mt-1",
              isLeft ? "hidden sm:block" : ""
            )} />
          </div>
          <h3 className={cn(
            "text-lg font-bold text-brown-800 mb-2",
            isLeft ? "sm:text-right" : ""
          )}>
            {data.title}
          </h3>
          <p className={cn(
            "text-sm text-brown-600 leading-[1.6]",
            isLeft ? "sm:text-right" : ""
          )}>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
