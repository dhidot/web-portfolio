"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeroAnimationProps {
  children: ReactNode;
  delay?: number;
}

export default function HeroAnimation({
  children,
  delay = 0,
}: HeroAnimationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}