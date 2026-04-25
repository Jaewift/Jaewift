import type { License } from "@/entities/license/types";
import Reveal from "@/shared/ui/Reveal";
import { formatDate } from "@/shared/utils/format-date";

interface Props {
  licenses: License[];
}

const LicenseList = ({ licenses }: Props) => {
  return (
    <Reveal>
      <div className="w-full flex flex-col items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">자격증</h3>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 w-full md:w-auto">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="bg-surface rounded-sm p-3 px-4 sm:px-5 md:p-4 md:px-6 lg:px-7 xl:px-8 flex items-center justify-between hover:bg-surface/80 transition-colors border border-border gap-2 sm:gap-3 md:gap-4">
              <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <div className="text-base sm:text-lg lg:text-xl font-medium">
                  {license.name.title[0].plain_text}
                </div>
                <div className="text-xs sm:text-sm text-text/50">
                  {formatDate(license.issue_date.date.start)}
                </div>
              </div>
              {license.score?.number && (
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary">
                  {license.score.number}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default LicenseList;
