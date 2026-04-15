"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "../types/product.types";
import { ProductCardBack } from "./ProductCardBack";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle on mobile click
  const handleInteract = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-full h-[480px] [perspective:1000px] cursor-pointer group"
      onClick={handleInteract}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={cn(
          "w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-gold-500/20 [backface-visibility:hidden] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </div>
          )}
          
          <div className="w-full h-[240px] relative overflow-hidden bg-cream-50">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-[20px] font-bold text-brown-800 mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-brown-600 line-clamp-2 mb-4 leading-[1.6]">
              {product.description}
            </p>
            
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-brown-100/50">
              <span className="text-red-500 font-semibold italic">{product.price}</span>
              <span className="text-gold-500 text-sm font-medium">Chi tiết ⤻</span>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <ProductCardBack product={product} />
      </div>
    </div>
  );
}
