"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { productsData } from "../data/products-data";
import { subtleScaleReveal, luxuryEase } from "@/lib/motion";

export function ProductGrid() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto min-h-[500px]">
        {productsData.length === 0 ? (
          <div className="w-full text-center py-20 text-brown-600">
            Không tìm thấy sản phẩm nào trong danh mục này.
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {productsData.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: luxuryEase,
                    delay: index * 0.12 
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
