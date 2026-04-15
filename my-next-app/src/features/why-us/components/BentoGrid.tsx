"use client";

import { motion, Variants } from "framer-motion";
import { whyUsData } from "../data/why-us-data";
import { BentoCard } from "./BentoCard";

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
