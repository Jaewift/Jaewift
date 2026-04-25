"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

export default function Reveal({ children, className, delay = 0, triggerOnce = false, threshold = 1 }: Props) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
