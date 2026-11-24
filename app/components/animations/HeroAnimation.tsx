"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface HeroAnimationProps {
  children: ReactNode;
  delay?: number;
}

export default function HeroAnimation({
  children,
  delay = 0,
}: HeroAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="motion-reduce:!opacity-100 motion-reduce:!transform-none"
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
