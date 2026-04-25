"use client";

import Reveal from "@/shared/ui/Reveal";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="w-full min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-40rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-440 mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <Reveal triggerOnce>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold font-playpen text-primary">
            ERROR
          </h1>
        </Reveal>
        <Reveal delay={0.3} triggerOnce>
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
              Something went wrong!
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text/70 text-center max-w-2xl">
              문제가 발생했습니다. 홈으로 돌아가주세요.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.6} triggerOnce>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="group relative bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg sm:rounded-xl md:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-playpen hover:bg-primary/80 transition-all duration-300 overflow-hidden cursor-pointer">
              <span className="relative z-10">GO HOME</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
