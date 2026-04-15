"use client";

import { motion } from "framer-motion";
import { timelineData } from "../data/timeline-data";
import { TimelineItem } from "./TimelineItem";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <div className="relative max-w-[1000px] mx-auto w-full py-5 mt-8 md:mt-16">
      {/* Center Vertical Line */}
      <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-gold-500/30 z-[1]" />

      <div className="flex flex-col gap-4 md:gap-0">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "relative pl-[56px] md:pl-0 md:py-[10px]",
                // On desktop: left items occupy left 50%, right items occupy right 50%
                isLeft 
                  ? "md:w-1/2 md:pr-10 md:self-start" 
                  : "md:w-1/2 md:pl-10 md:self-end"
              )}
            >
              {/* Mobile Dot */}
              <div className="md:hidden absolute left-[24px] top-[40px] -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20" />

              {/* Desktop Dot */}
              <div className={cn(
                "hidden md:block absolute top-[40px] w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20",
                isLeft ? "right-[-8px]" : "left-[-8px]"
              )} />
              
              <TimelineItem data={item} isLeft={isLeft} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
