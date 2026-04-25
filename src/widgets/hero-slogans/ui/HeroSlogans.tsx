import Reveal from "@/shared/ui/Reveal";
import { SLOGANS } from "../constants";
import Cursor from "@/shared/icons/Cursor";

const HeroSlogans = () => {
  return (
    <section className="w-full max-w-440 lg:py-32 md:py-16 py-8 mx-auto px-4 flex flex-col lg:gap-18 md:gap-12 sm:gap-8 gap-6">
      {SLOGANS.map((slogan) => (
        <Reveal
          className={slogan.className}
          delay={slogan.delay}
          key={slogan.key}
          triggerOnce>
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl relative hover:[&>div]:opacity-100">
            {slogan.emoji && !slogan.emojiPosition && (
              <span className="animate-bounce inline-block">
                {slogan.emoji}
              </span>
            )}{" "}
            <span className="font-medium font-playpen">{slogan.title}</span>{" "}
            {slogan.emoji && slogan.emojiPosition === "end" && (
              <span className="animate-bounce inline-block animation-delay-300">
                {slogan.emoji}
              </span>
            )}
            {slogan.pointer && (
              <span className="absolute top-[90%] right-10 -rotate-25 text-4xl animate-bounce animation-delay-500 hidden xl:block">
                <Cursor />
              </span>
            )}
            <div
              className={`absolute -bottom-12 ${slogan.tooltipPosition} opacity-0 transition-opacity duration-500 bg-primary text-white px-8 py-2 rounded-md`}>
              <p className="text-lg">{slogan.description}</p>
            </div>
          </h1>
        </Reveal>
      ))}
    </section>
  );
};

export default HeroSlogans;
