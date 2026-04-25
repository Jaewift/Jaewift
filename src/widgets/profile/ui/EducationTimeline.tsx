import type { Education } from "@/entities/education/types";
import Reveal from "@/shared/ui/Reveal";
import { formatDate } from "@/shared/utils/format-date";

interface Props {
  educations: Education[];
}

const EducationTimeline = ({ educations }: Props) => {
  return (
    <Reveal className="w-full md:w-auto lg:sticky lg:top-50">
      <div className="w-full flex flex-col items-end gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 mt-0 sm:mt-4 md:mt-6 lg:mt-10 xl:mt-12">
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold">학력</h3>
        <div className="w-full relative flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="absolute right-2 sm:right-2.5 md:right-3 lg:right-3.5 xl:right-4 top-3 sm:top-4 md:top-5 xl:top-6 bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-6 w-0.5 bg-border"></div>
          {educations.reverse().map((education, index) => (
            <div
              key={index}
              className="relative pr-8 sm:pr-10 md:pr-12 lg:pr-14 xl:pr-16 flex flex-col items-end gap-1 sm:gap-1.5 md:gap-2">
              <div className="text-[10px] sm:text-xs text-text/70 bg-primary/40 px-2 py-0.5 sm:px-3 md:py-1 lg:px-4 rounded-full">
                {education.school_level.select.name}
              </div>
              <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-medium text-center lg:text-right">
                {education.name.title[0].plain_text}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-text/50">
                {formatDate(education.duration.date.start)} -{" "}
                {formatDate(education.duration.date.end || "")}
              </div>
              <div className="absolute right-0 top-1.5 sm:top-2 md:top-2.5 xl:top-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-primary border-2 sm:border-3 md:border-3 lg:border-4 border-background"></div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default EducationTimeline;
