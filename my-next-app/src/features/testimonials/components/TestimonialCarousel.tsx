"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "framer-motion";
import { testimonialsData } from "../data/testimonials-data";
import { TestimonialCard } from "./TestimonialCard";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    // Auto advance every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isInView, nextSlide, activeIndex]); // activeIndex dependency resets interval on click

  const getCardState = (index: number) => {
    if (index === activeIndex) return "active";
    
    const prevIndex = activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1;
    if (index === prevIndex) return "prev";
    
    const nextIndex = (activeIndex + 1) % testimonialsData.length;
    if (index === nextIndex) return "next";
    
    return "hidden";
  };

  const getStateClasses = (state: string) => {
    switch (state) {
      case "active":
        return "translate-x-0 scale-100 opacity-100 z-30 shadow-xl pointer-events-auto blur-none";
      case "prev":
        return "scale-95 -translate-x-[20px] opacity-0 md:-translate-x-[55%] md:scale-[0.85] md:opacity-40 z-20 pointer-events-none md:blur-[2px]";
      case "next":
        return "scale-95 translate-x-[20px] opacity-0 md:translate-x-[55%] md:scale-[0.85] md:opacity-40 z-20 pointer-events-none md:blur-[2px]";
      default:
        return "translate-x-0 scale-[0.80] opacity-0 z-10 pointer-events-none hidden";
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "w-full max-w-[1240px] mx-auto min-h-[500px] flex flex-col justify-center transition-all duration-1000",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center [perspective:1200px]">
        {testimonialsData.map((testimonial, i) => {
          const state = getCardState(i);
          return (
            <div
              key={testimonial.id}
              className={cn(
                "absolute top-0 bottom-0 left-0 right-0 mx-auto w-full md:w-[600px] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                getStateClasses(state)
              )}
            >
              <div className="w-[90%] md:w-full">
                <TestimonialCard data={testimonial} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center flex-row gap-3 mt-12 md:mt-16 relative z-40">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={cn(
              "h-[10px] rounded-full transition-all duration-300",
              i === activeIndex 
                ? "w-8 bg-gold-500 shadow-md" 
                : "w-[10px] bg-gold-500/30 hover:bg-gold-400/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
