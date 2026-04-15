"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  isCTA?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] bg-[#1A0A00]/98 backdrop-blur-md flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center space-y-8 w-full px-6">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "text-xl font-medium tracking-wide transition-colors",
                    link.isCTA 
                      ? "bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-8 py-3 rounded-full font-bold w-full text-center hover:from-gold-400 hover:to-gold-300 shadow-[0_4px_14px_0_rgba(212,168,67,0.39)]"
                      : "text-white-90 hover:text-gold-400"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
