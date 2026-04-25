import { OVERVIEW_DESCRIPTION } from "@/entities/personal-info/datasets";
import Reveal from "@/shared/ui/Reveal";
import NavigationCard from "./NavigationCard";

const OverviewSection = () => {
  return (
    <Reveal threshold={0.3}>
      <section className="w-full max-w-440 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-4 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-playpen tracking-widest">
          OVERVIEW.
        </h1>
        <div className="w-full max-w-440 mx-auto px-0 sm:px-2 md:px-4 flex flex-col text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl whitespace-pre-wrap leading-[160%] italic border-y border-border py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 mx-2 sm:mx-4 md:mx-6 lg:mx-7 xl:mx-8">
            {OVERVIEW_DESCRIPTION}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          <NavigationCard
            href="/projects"
            title="PROJECTS"
            description="진행했던 프로젝트들을 확인하세요"
          />
        </div>
      </section>
    </Reveal>
  );
};

export default OverviewSection;
