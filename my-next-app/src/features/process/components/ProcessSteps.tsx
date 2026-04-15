"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { processData } from "../data/process-data";
import { ProcessStep } from "./ProcessStep";

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[1200px] mx-auto py-12 px-4 md:px-0"
    >
      {/* Horizontal Progress Line (Desktop) */}
      <div className="hidden md:block absolute left-[10%] right-[10%] top-[98px] h-[2px] bg-gold-400/20 z-[0]" />
      <motion.div 
        className="hidden md:block absolute left-[10%] right-[10%] top-[98px] h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 z-[0] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Vertical Progress Line (Mobile) */}
      {/* Center of Mobile Icon (px-4 = 16px, w-20 = 80px/2 = 40px) -> left-56px */}
      <div className="md:hidden absolute left-[56px] top-[40px] bottom-[40px] w-[2px] bg-gold-400/20 z-[0]" />
      <motion.div 
        className="md:hidden absolute left-[56px] top-[40px] bottom-[40px] w-[2px] bg-gradient-to-b from-gold-400 to-gold-600 z-[0] origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-0">
        {processData.map((step, index) => (
          <motion.div
            key={step.number}
            custom={index}
            variants={staggerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-1"
          >
            <ProcessStep data={step} isLast={index === processData.length - 1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
