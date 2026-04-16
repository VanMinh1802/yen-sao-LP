"use client";

import { motion } from "framer-motion";
import { timelineData } from "../data/timeline-data";
import { TimelineItem } from "./TimelineItem";
import { cn } from "@/lib/utils";
import { fadeInLeft, fadeInRight, scaleIn, drawLine, luxuryEase } from "@/lib/motion";

export function Timeline() {
  return (
    <div className="relative max-w-[1000px] mx-auto w-full py-5 mt-8 md:mt-16">
      {/* Center Vertical Line — Animated draw from top to bottom */}
      <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-gold-500/10 z-[1]" />
      <motion.div
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-gold-500/30 z-[1] origin-top"
      />

      <div className="flex flex-col gap-4 md:gap-0">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              variants={isLeft ? fadeInLeft : fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "relative pl-[56px] md:pl-0 md:py-[10px]",
                isLeft 
                  ? "md:w-1/2 md:pr-10 md:self-start" 
                  : "md:w-1/2 md:pl-10 md:self-end"
              )}
            >
              {/* Mobile Dot — Animated scale-in */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: luxuryEase, delay: 0.3 }}
                className="md:hidden absolute left-[24px] top-[40px] -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20"
              />

              {/* Desktop Dot — Animated scale-in */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: luxuryEase, delay: 0.3 }}
                className={cn(
                  "hidden md:block absolute top-[40px] w-4 h-4 rounded-full bg-white border-[4px] border-gold-500 z-20",
                  isLeft ? "right-[-8px]" : "left-[-8px]"
                )}
              />
              
              <TimelineItem data={item} isLeft={isLeft} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
