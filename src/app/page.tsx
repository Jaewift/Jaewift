import { AwardApi } from "@/entities/award/api";
import { EducationApi } from "@/entities/education/api";
import { LicenseApi } from "@/entities/license/api";
import { PersonalInfoApi } from "@/entities/personal-info/api";
import { TechStackApi } from "@/entities/tech-stacks/api";
import { ProjectApi } from "@/entities/project/api";
import Reveal from "@/shared/ui/Reveal";
import Intro from "@/widgets/Intro/ui/Intro";
import TechStacks from "@/widgets/tech-stacks/ui/TechStacks";
import HeroSlogans from "@/widgets/hero-slogans/ui/HeroSlogans";
import ValuesQuote from "@/widgets/values-quote/ui/ValuesQuote";
import ProfileSection from "@/widgets/profile/ui/ProfileSection";
import OverviewSection from "@/widgets/overview/ui/OverviewSection";
import HomeContent from "@/widgets/overview/ui/HomeContent";
import Script from "next/script";
import { Metadata } from "next";
import { SITE_URL } from "@/shared/config/site-url";

export const revalidate = 31536000;

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function HomePage() {
  const [
    techStacks,
    awards,
    educations,
    licenses,
    personalInfo,
    projects,
  ] = await Promise.all([
    TechStackApi.getTechStacks(),
    AwardApi.getAwards(),
    EducationApi.getEducations(),
    LicenseApi.getLicenses(),
    PersonalInfoApi.getPersonalInfo(),
    ProjectApi.getProjects(4),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "박재규",
    alternateName: "jaekyu",
    url: SITE_URL,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    jobTitle: "Frontend Developer",
    description: "다음 사람이 망설이지 않는 코드를 쓰는 개발자",
    sameAs: [
      personalInfo.github,
    ].filter(Boolean),
    knowsAbout: techStacks.map((t) => t.properties.name.title[0]?.plain_text).filter(Boolean),
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlogans />
      <section className="w-full xl:h-[150vh] xl:pt-32 pb-16 flex items-start justify-center">
        <Intro />
      </section>
      <ValuesQuote personalInfo={personalInfo} />
      <ProfileSection
        personalInfo={personalInfo}
        licenses={licenses.map((l) => l.properties)}
        awards={awards.map((a) => a.properties)}
        educations={educations.map((e) => e.properties)}
      />
      <section className="w-full max-w-440 mx-auto px-4 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 md:mb-64 mb-16">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-playpen tracking-widest">
            TECH STACKS.
          </h1>
        </Reveal>
        <TechStacks data={techStacks.map((t) => t.properties)} />
      </section>
      <OverviewSection />
      <HomeContent projects={projects} />
    </>
  );
}
