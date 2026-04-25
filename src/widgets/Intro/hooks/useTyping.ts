import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useTyping = (
  text: string,
  speed: number,
  pauseTime: number,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (!inView) return;

    if (!isDeleting && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      const id = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex(0);
      }, 0);

      return () => clearTimeout(id);
    }
  }, [currentIndex, displayedText, text, speed, pauseTime, isDeleting, inView]);

  return { displayedText, ref };
};
