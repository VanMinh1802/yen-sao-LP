"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { HeroStats } from "./HeroStats";
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative z-[2] w-full xl:w-[48%] 2xl:w-[45%] h-full flex flex-col justify-center px-6 xl:pl-[8vw] 2xl:pl-[12vw] xl:pr-8 py-[40px] xl:h-screen"
    >
      <div className="flex flex-col space-y-4">
        {/* Label */}
        <motion.div variants={fadeInUp} className="flex items-center space-x-4">
          <div className="w-10 h-[1px] bg-gold-500" />
          <span className="text-[clamp(11px,1vw,14px)] text-[#ffeeba] uppercase tracking-[3px] font-semibold">
            Hơn 20 Năm Uy Tín
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={fadeInUp}
          className="font-display text-[clamp(42px,6vw,90px)] text-[#ffeeba] leading-[1.15] flex flex-col pt-2"
        >
          <span>Yến Sào</span>
          <em>Ngọc Thảo</em>
        </motion.h1>

        {/* Slogan */}
        <motion.div 
          variants={fadeInUp}
          className="text-[#ffeeba] text-[clamp(18px,1.8vw,26px)] italic flex flex-col pt-2"
        >
          <span>Thành Ý Gửi Trao</span>
          <span className="text-[0.9em] opacity-85">— Tâm Giao Nhân Khắp</span>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeInUp}>
          <HeroButtons />
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp}>
          <HeroStats />
        </motion.div>
      </div>
    </motion.div>
  );
}
