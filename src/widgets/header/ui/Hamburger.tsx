"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ isMenuOpened, setIsMenuOpened }: Props) => {
  return (
    <button
      onClick={() => setIsMenuOpened((prev) => !prev)}
      className="w-12 h-12 flex flex-col items-center justify-center gap-3 relative cursor-pointer"
      aria-label="메뉴">
      <motion.div
        className="w-10 h-0.5 bg-text origin-center"
        animate={{
          rotate: isMenuOpened ? 45 : 0,
          y: isMenuOpened ? 14 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="w-10 h-0.5 bg-text"
        animate={{
          opacity: isMenuOpened ? 0 : 1,
          scale: isMenuOpened ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="w-10 h-0.5 bg-text origin-center"
        animate={{
          rotate: isMenuOpened ? -45 : 0,
          y: isMenuOpened ? -14 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </button>
  );
};

export default Hamburger;
