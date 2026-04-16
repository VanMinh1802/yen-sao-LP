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
      className="relative z-[3] w-full xl:w-[clamp(44%,48vw,48%)] h-full flex flex-col justify-center px-5 sm:px-6 xl:pl-[clamp(80px,8vw,200px)] xl:pr-8 pt-4 pb-[40px] xl:py-[40px] xl:h-screen -mt-[210px] sm:-mt-[230px] xl:mt-0"
    >
      <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4 ml-0">
        {/* Text Block container with max-width on mobile to avoid overlapping the products on the right */}
        <div className="relative -top-[24px] sm:-top-[32px] md:-top-[40px] xl:top-0 w-[65%] sm:w-[55%] xl:w-full flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4">
          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-[26px] xs:text-[28px] sm:text-[34px] xl:text-[clamp(42px,6vw,90px)] text-[#ffeeba] leading-[1.1] flex flex-col pt-0 xl:pt-2"
          >
            <span>Yến Sào</span>
            <em>Ngọc Thảo</em>
          </motion.h1>

          {/* Slogan */}
          <motion.div 
            variants={fadeInUp}
            className="text-[#ffeeba] text-[14px] sm:text-[16px] xl:text-[clamp(18px,1.8vw,26px)] italic flex flex-col pt-0 xl:pt-2"
          >
            <span>Thành Ý Gửi Trao</span>
            <span className="text-[0.9em] opacity-85">— Tâm Giao Nhân Khắp</span>
          </motion.div>
        </div>

        {/* Interaction Block */}
        <div className="flex flex-col w-full sm:w-max">
          {/* Buttons */}
          <motion.div variants={fadeInUp} className="pt-4 sm:pt-6 md:pt-8 xl:pt-2 w-full">
            <HeroButtons />
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp} className="w-full">
            <HeroStats />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
