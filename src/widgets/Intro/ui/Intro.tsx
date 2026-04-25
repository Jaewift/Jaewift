"use client";

import { useTyping } from "../hooks/useTyping";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const text = "기술보다\n문제를 먼저 바라보는 개발자,\n박재규입니다.";
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { displayedText, ref: typingRef } = useTyping(text, 80, 1000);

  return (
    <div
      ref={ref}
      className={`w-full h-[calc(95vh-10rem)] flex flex-col items-center justify-center bg-surface transition-[margin] duration-700 sticky top-24 ${
        inView ? "mx-0 rounded-0" : "xl:mx-40 xl:rounded-4xl"
      } overflow-hidden delayed-show animation-delay-1000`}>
      <div className="w-full md:p-4 p-2 bg-border flex gap-2">
        <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-red-600"></div>
        <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-green-600"></div>
      </div>
      <div className="flex-1" />
      <p
        className="xl:text-6xl lg:text-4xl md:text-2xl text-xl xl:w-165 lg:w-99 md:w-66 w-55 xl:h-66 lg:h-38 md:h-25.5 h-21 font-medium whitespace-pre-wrap leading-[140%] font-mulmaru text-primary/80"
        ref={typingRef}>
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
      <div className="flex-1" />
    </div>
  );
};

export default Intro;
