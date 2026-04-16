"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, lineGrow, luxuryEase } from "@/lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  variant = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = variant === 'dark';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.15 }}
      className={cn("flex flex-col items-center text-center space-y-4 mb-12", className)}
    >
      <motion.span
        variants={fadeInUp}
        className={cn(
          "text-xs md:text-sm font-semibold tracking-[0.15em] uppercase",
          isDark ? "text-gold-400" : "text-red-500"
        )}
      >
        {label}
      </motion.span>
      
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight",
          isDark ? "text-white" : "text-brown-800"
        )}
      >
        {title}
      </motion.h2>
      
      {/* Animated Divider — grows from center */}
      <motion.div
        variants={lineGrow}
        className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-gold-500 to-gold-400 mt-2 mb-4 shadow-[0_0_10px_rgba(212,168,67,0.3)] origin-center"
      />
      
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "max-w-2xl text-base md:text-lg",
            isDark ? "text-white-70" : "text-brown-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
