import { ProjectApi } from "@/entities/project/api";
import Reveal from "@/shared/ui/Reveal";
import ProjectsGrid from "@/widgets/projects/ui/ProjectsGrid";
import { Metadata } from "next";

export const revalidate = 31536000;

export const metadata: Metadata = {
  title: "jaekyu's Projects",
  description: "진행했던 프로젝트들을 확인하세요",
  openGraph: {
    title: "jaekyu's Projects",
    description: "진행했던 프로젝트들을 확인하세요",
    type: "website",
    url: "https://cher1shrxd.me/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "jaekyu's Projects",
    description: "진행했던 프로젝트들을 확인하세요",
  },
};

export default async function ProjectsPage() {
  const projects = await ProjectApi.getProjects();

  return (
    <section className="w-full max-w-440 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-4 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <Reveal triggerOnce>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-playpen tracking-widest mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          jaekyu&rsquo;s Projects
        </h1>
      </Reveal>

      <Reveal delay={0.3} triggerOnce>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-text/70 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          진행했던 프로젝트들을 확인하세요
        </p>
      </Reveal>

      <ProjectsGrid projects={projects} />
    </section>
  );
}
