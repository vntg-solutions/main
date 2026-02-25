"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "../lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export function Section({ children, className, ...rest }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("px-4 md:px-0", className)}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

