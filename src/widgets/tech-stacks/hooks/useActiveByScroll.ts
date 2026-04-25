import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const useActiveByScroll = (categories: string[]) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start center", "end center"],
  });

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [-1, categories.length - 1],
  );

  useMotionValueEvent(progress, "change", (latest) => {
    const newIndex = Math.round(latest);
    setActiveIndex(newIndex);
  });

  return {
    wrapperRef,
    activeIndex,
  }
};
