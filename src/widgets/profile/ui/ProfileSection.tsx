import type { Award } from "@/entities/award/types";
import type { Education } from "@/entities/education/types";
import type { License } from "@/entities/license/types";
import type { PersonalInfo } from "@/entities/personal-info/types";
import Reveal from "@/shared/ui/Reveal";
import Image from "next/image";
import ProfileTable from "./ProfileTable";
import LicenseList from "./LicenseList";
import AwardList from "./AwardList";
import EducationTimeline from "./EducationTimeline";

interface Props {
  personalInfo: PersonalInfo;
  licenses: License[];
  awards: Award[];
  educations: Education[];
}

const ProfileSection = ({
  personalInfo,
  licenses,
  awards,
  educations,
}: Props) => {
  return (
    <section className="w-full max-w-440 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-4 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 mb-32 sm:mb-40 md:mb-48 lg:mb-56 xl:mb-64">
      <Reveal triggerOnce>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-playpen tracking-widest">
          PROFILE.
        </h1>
      </Reveal>
      <div className="w-full flex flex-col md:flex-row items-center justify-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <Reveal delay={0.3} triggerOnce>
          <Image
            src="/profile-2026.JPG"
            alt="증명사진"
            width={240}
            height={240}
            className="w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 xl:w-60 xl:h-80 object-cover object-top rounded-xl"
          />
        </Reveal>
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 w-full md:w-auto">
          <Reveal delay={0.6} triggerOnce>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center md:text-left">
              {personalInfo.name}
              <span className="text-sm sm:text-base md:text-lg xl:text-xl ml-2 font-playpen text-text/50">
                {personalInfo.nickname}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.9} triggerOnce>
            <ProfileTable personalInfo={personalInfo} />
          </Reveal>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 lg:pr-16 xl:pr-24">
        <div className="flex-1 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 w-full">
          <LicenseList licenses={licenses} />
          <AwardList awards={awards} />
        </div>
        <EducationTimeline educations={educations} />
      </div>
    </section>
  );
};

export default ProfileSection;
