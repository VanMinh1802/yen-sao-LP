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
      className="relative z-[3] w-full xl:w-[clamp(44%,48vw,48%)] h-full flex flex-col justify-center px-5 sm:px-6 xl:pl-[clamp(80px,8vw,200px)] xl:pr-8 pt-4 pb-[40px] xl:py-[40px] xl:h-screen -mt-[180px] sm:-mt-[220px] xl:mt-0"
    >
      <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4 ml-[5%]">
        {/* Label */}
        <motion.div variants={fadeInUp} className="flex items-center gap-[clamp(12px,1vw,24px)]">
          <div className="w-[clamp(32px,3vw,48px)] h-[1px] bg-gold-500" />
          <span className="text-[clamp(11px,1vw,14px)] text-[#ffeeba] uppercase tracking-[3px] font-semibold">
            Hơn 20 Năm Uy Tín
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={fadeInUp}
          className="font-display text-[32px] sm:text-[38px] xl:text-[clamp(42px,6vw,90px)] text-[#ffeeba] leading-[1.1] flex flex-col pt-0 xl:pt-2"
        >
          <span>Yến Sào</span>
          <em>Ngọc Thảo</em>
        </motion.h1>

        {/* Slogan */}
        <motion.div 
          variants={fadeInUp}
          className="text-[#ffeeba] text-[16px] sm:text-[18px] xl:text-[clamp(18px,1.8vw,26px)] italic flex flex-col pt-0 xl:pt-2"
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
