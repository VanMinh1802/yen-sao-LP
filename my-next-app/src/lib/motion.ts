import { Variants } from "framer-motion";

// ─── Luxury Easing Curves ─────────────────────────────────────────
// Slow start, smooth acceleration, gentle landing
export const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const defaultEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

// ─── Core Variants ────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

// Blur-to-sharp reveal — luxury "emerging from mist" effect
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: luxuryEase },
  },
};

// Line growing from center outward
export const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase, delay: 0.3 },
  },
};

// Vertical line drawing from top to bottom
export const drawLine: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: luxuryEase },
  },
};

// Subtle scale reveal — card/box "breathing into existence"
export const subtleScaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
};

// ─── Container Variants ───────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Slower stagger for gallery/visual sections
export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
    },
  },
};
