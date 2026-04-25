import type { PersonalInfo } from "@/entities/personal-info/types";
import Reveal from "@/shared/ui/Reveal";

interface Props {
  personalInfo: PersonalInfo;
}

const ValuesQuote = ({ personalInfo }: Props) => {
  return (
    <Reveal>
      <section className="w-full max-w-440 mx-auto px-4 flex flex-col text-center relative xl:mb-32 mb-16">
        <p className="md:text-2xl sm:text-lg whitespace-pre-wrap leading-[180%] border-y border-border xl:px-20 px-12 py-20 lg:mx-8 italic font-semibold">
          {personalInfo.values}
        </p>
        <span className="absolute top-16 xl:left-28 lg:left-20 left-8 text-5xl text-primary">
          &ldquo;
        </span>
        <span className="absolute bottom-16 xl:right-28 lg:right-20 right-8 text-5xl text-primary">
          &rdquo;
        </span>
      </section>
    </Reveal>
  );
};

export default ValuesQuote;
