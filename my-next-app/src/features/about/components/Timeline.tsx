"use client";

import { motion } from "framer-motion";
import { timelineData } from "../data/timeline-data";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <div className="relative max-w-[1000px] mx-auto w-full py-2 flex flex-col gap-12 md:gap-8 overflow-hidden">
      {/* Vertical Line */}
      <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gold-500/30 z-[1]" />

      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex relative pl-[56px] md:pl-0"
          >
            {/* Mobile Center Dot */}
            <div className="md:hidden absolute left-[24px] top-[50px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20" />
            
            <TimelineItem data={item} isLeft={isLeft} />
          </motion.div>
        );
      })}
    </div>
  );
}
