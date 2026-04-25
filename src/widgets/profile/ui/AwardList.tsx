import type { Award } from "@/entities/award/types";
import Reveal from "@/shared/ui/Reveal";
import { formatDate } from "@/shared/utils/format-date";

interface Props {
  awards: Award[];
}

const AwardList = ({ awards }: Props) => {
  return (
    <Reveal>
      <div className="w-full flex flex-col items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">수상경력</h3>
        <div className="w-full sm:w-auto grid grid-cols-2 gap-1.5 sm:gap-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-surface rounded-sm p-3 px-4 sm:px-5 md:p-4 md:px-6 lg:px-7 xl:px-8 flex flex-col gap-0.5 md:gap-1">
              <div className="text-[10px] sm:text-xs text-text/50 font-semibold">
                {award.award_category.select.name || ""} ·{" "}
                <span className="text-yellow-600">
                  {award.honor.rich_text[0].plain_text}
                </span>
              </div>
              <div className="flex items-start xl:items-end flex-col xl:flex-row gap-0.5 sm:gap-1">
                <div className="text-[10px] sm:text-base md:text-lg lg:text-xl font-medium">
                  {award.name.title[0].plain_text}
                </div>
                <div className="text-xs md:text-sm text-text/50">
                  {formatDate(award.date.date.start, 1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default AwardList;
