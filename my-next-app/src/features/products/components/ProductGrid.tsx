"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductTabs } from "./ProductTabs";
import { ProductCard } from "./ProductCard";
import { productsData } from "../data/products-data";

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === "all") return true;
    return product.category === activeTab;
  });

  return (
    <div className="w-full">
      <ProductTabs activeTab={activeTab} onChange={setActiveTab} />
      
      <div className="max-w-[1200px] mx-auto min-h-[500px]">
        {filteredProducts.length === 0 ? (
          <div className="w-full text-center py-20 text-brown-600">
            Không tìm thấy sản phẩm nào trong danh mục này.
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
