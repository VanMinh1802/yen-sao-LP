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
      "group flex gap-5 p-6 bg-cream-100 border border-gold-500/15 rounded-2xl w-full items-start",
      "shadow-[0_10px_30px_rgba(0,0,0,0.03)]",
      "transition-all duration-300 hover:-translate-y-[5px] hover:border-gold-400 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]",
      isLeft ? "flex-row-reverse text-right" : "flex-row text-left"
    )}>
      {/* Image */}
      <div className="relative w-[100px] h-[100px] shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          className="object-cover"
          sizes="100px"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1">
        <div className={cn(
          "flex items-center gap-3 mb-1",
          isLeft ? "flex-row-reverse" : "flex-row"
        )}>
          <span className="text-2xl font-extrabold text-red-500">
            {data.year}
          </span>
          <div className="flex-1 h-[1px] bg-gold-500/30" />
        </div>
        <h3 className="text-lg font-bold text-brown-800 mb-2">
          {data.title}
        </h3>
        <p className="text-sm text-brown-600 leading-[1.6]">
          {data.description}
        </p>
      </div>
    </div>
  );
}
