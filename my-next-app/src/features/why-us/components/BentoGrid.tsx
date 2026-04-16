"use client";

import { motion, Variants } from "framer-motion";
import { whyUsData } from "../data/why-us-data";
import { BentoCard } from "./BentoCard";
import { luxuryEase } from "@/lib/motion";

export function BentoGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  // Blur reveal variant for luxury feel
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.96,
      filter: "blur(6px)",
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.0, ease: luxuryEase }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-[280px_280px] gap-6 w-full max-w-[1240px] mx-auto z-10 relative mt-16"
    >
      {whyUsData.map((item) => (
        <motion.div 
          key={item.id} 
          variants={itemVariants}
          className={
            item.variant === "large" 
              ? "lg:col-span-2 lg:row-span-2 h-full" 
              : "h-full"
          }
        >
           <BentoCard data={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
