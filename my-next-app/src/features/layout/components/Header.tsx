"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { label: "Giới Thiệu", href: "#about" },
  { label: "Sản Phẩm", href: "#products" },
  { label: "Tại Sao Chọn Chúng Tôi", href: "#why-us" },
  { label: "Đánh Giá", href: "#testimonials" },
];

const CTA_LINK = {
  label: "Liên Hệ Ngay",
  href: "#contact",
  isCTA: true,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scroll handler to ensure we don't jump abruptly if CSS scroll-behavior isn't supported
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 h-[70px] z-[1000] transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-[#1A0A00]/95 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Logo 
            onClick={() => {
              setIsMenuOpen(false);
              document.querySelector("#hero")?.scrollIntoView({ behavior: 'smooth' });
            }} 
          />

          {/* Center/Right: Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white-90 hover:text-gold-400 font-medium tracking-wide transition-colors relative group text-[15px]"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={CTA_LINK.href}
              onClick={(e) => handleNavClick(e, CTA_LINK.href)}
              className="bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-6 py-2.5 rounded-full font-bold select-none hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.39)] hover:from-gold-400 hover:to-gold-300 transition-all duration-300 text-[15px]"
            >
              {CTA_LINK.label}
            </a>
          </nav>

          {/* Right: Mobile Hamburger */}
          <button
            type="button"
            className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[5px] z-[1001]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={String(isMenuOpen) as "true" | "false"}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            <span 
              className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300",
                isMenuOpen && "translate-y-[7px] rotate-45"
              )} 
            />
            <span 
              className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300",
                isMenuOpen && "opacity-0"
              )} 
            />
            <span 
              className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300",
                isMenuOpen && "-translate-y-[7px] -rotate-45"
              )} 
            />
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        links={[...NAV_LINKS, CTA_LINK]} 
      />
    </>
  );
}
