"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blurReveal, staggerSlow } from "@/lib/motion";

export function ProductGallery() {
  return (
    <motion.div 
      variants={staggerSlow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full grid grid-cols-2 gap-4 h-full relative group pb-12"
    >
      {/* Cột Trái chứa 3 ảnh */}
      <div className="flex flex-col gap-4 mt-8">
        <motion.div variants={blurReveal} className="relative w-full h-[280px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/nha-yen.webp"
            alt="Hang đá tự nhiên nhà yến"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        <motion.div variants={blurReveal} className="relative w-full h-[350px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/nguoi-hai-yen.webp"
            alt="Người thợ thu hoạch yến"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        <motion.div variants={blurReveal} className="relative w-full h-[300px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/tho-mai.webp"
            alt="Bàn tay thợ tinh chế yến"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Cột Phải chứa 3 ảnh */}
      <div className="flex flex-col gap-4">
        <motion.div variants={blurReveal} className="relative w-full h-[360px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/chen-yen.webp"
            alt="Chén yến chưng nghệ thuật"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        <motion.div variants={blurReveal} className="relative w-full h-[320px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/thu-cong.webp"
            alt="Thợ kỹ thuật nhặt lông yến cẩn thận"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        <motion.div variants={blurReveal} className="relative w-full h-[240px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/nghe-thuat.webp"
            alt="Tổ yến thuần khiết tỏa sáng"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
