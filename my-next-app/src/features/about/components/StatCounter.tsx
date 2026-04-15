"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCounter({ value, label, className }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Extract the numeric part and non-numeric suffix
  const numMatch = value.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, "");

  useEffect(() => {
    if (isInView && targetNum > 0) {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * targetNum));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetNum);
        }
      };

      requestAnimationFrame(animate);
    } else if (targetNum === 0) {
      setCount(0);
    }
  }, [isInView, targetNum]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col items-center justify-center p-6 bg-cream-200 rounded-2xl border border-gold-500/10",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-gold-500",
        className
      )}
    >
      <span className="text-[36px] font-bold text-red-500 mb-2">
        {targetNum > 0 ? count : ""}{suffix}
      </span>
      <span className="text-[13px] text-brown-800 uppercase tracking-[1px] font-semibold text-center mt-1">
        {label}
      </span>
    </motion.div>
  );
}
