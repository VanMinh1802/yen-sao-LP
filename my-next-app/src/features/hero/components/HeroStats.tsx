"use client";

import { motion } from "framer-motion";
import { lineGrow, luxuryEase } from "@/lib/motion";

interface HeroStatProps {
  value: string;
  label: string;
}

const stats: HeroStatProps[] = [
  { value: "20+", label: "Năm" },
  { value: "100%", label: "Tự Nhiên" },
  { value: "1000+", label: "Khách Hàng" },
];

const statItemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.8,
      ease: luxuryEase,
    },
  }),
};

export function HeroStats() {
  return (
    <div className="relative mt-10 pt-8">
      {/* Animated decorative top border */}
      <motion.div
        variants={lineGrow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/25 origin-left"
      />
      
      <div className="flex flex-row justify-between lg:justify-start gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={statItemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-[clamp(24px,3vw,44px)] font-bold text-white leading-none mb-1">
              {stat.value}
            </span>
            <span className="text-[clamp(11px,1vw,15px)] text-gold-400 uppercase tracking-[1.5px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
