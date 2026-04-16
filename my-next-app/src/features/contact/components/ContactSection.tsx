"use client";

import { motion } from "framer-motion";
import { GoogleMap } from "./GoogleMap";
import { ContactForm } from "./ContactForm";
import { blurReveal, luxuryEase } from "@/lib/motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream-50 relative pointer-events-auto">
      <div className="container mx-auto px-4 md:px-6">
        {/* The Bento Box Wrapper — Blur reveal animation */}
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full flex flex-col lg:flex-row rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-brown-900 border border-brown-100/20"
        >
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-[45%] lg:min-h-[640px]">
            <ContactForm />
          </div>

          {/* Right Column: Google Map */}
          <div className="w-full h-[400px] lg:w-[55%] lg:h-auto min-h-[400px] relative">
            <GoogleMap />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
