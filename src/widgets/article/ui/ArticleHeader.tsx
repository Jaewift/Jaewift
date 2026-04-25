import { Project } from "@/entities/project/types";
import { formatDate } from "@/shared/utils/format-date";
import Image from "next/image";
import { Link } from "@cher1shrxd/loading";
import A from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/shared/ui/Reveal";
import Github from "@/shared/icons/Github";

interface Props {
  project: Project;
}

const ArticleHeader = ({ project }: Props) => {
  const startDate = project.duration.date?.start;
  const endDate = project.duration.date?.end;
  const fileUrl = project.thumbnail?.files[0]?.file?.url;
  const externalUrl = project.thumbnail?.files[0]?.external?.url;

  const image = fileUrl || externalUrl || null;

  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
      <Reveal triggerOnce>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text/60 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">프로젝트 목록</span>
        </Link>
      </Reveal>

      <Reveal delay={0.1} triggerOnce>
        <div className="flex items-center gap-4 sm:gap-6 mb-2">
          {image && (
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-border bg-surface">
              <Image
                src={image}
                alt={project.name.title[0]?.plain_text || "Project logo"}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text">
            {project.name.title[0]?.plain_text}
          </h1>
        </div>
      </Reveal>

      {project.description.rich_text[0] && (
        <Reveal delay={0.2} triggerOnce>
          <p className="text-base sm:text-lg text-text/60 mb-10">
            {project.description.rich_text[0].plain_text}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.3} triggerOnce>
        <h2 className="text-lg sm:text-xl font-bold text-text mb-4 tracking-wide">
          METADATA
        </h2>
        <div className="border-t-2 border-text pt-6 mb-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div className="space-y-3">
              {project.teammates?.number !== null && project.teammates?.number !== undefined && (
                <div className="flex items-baseline gap-2">
                  <span className="text-sm sm:text-base font-bold text-text min-w-20">
                    개발 인원:
                  </span>
                  <span className="text-sm sm:text-base text-text/80">
                    {project.teammates.number}명
                  </span>
                </div>
              )}
              {project.team_structure.rich_text[0] && (
                <div className="flex items-baseline gap-2">
                  <span className="text-sm sm:text-base font-bold text-text min-w-20">
                    인원 구성:
                  </span>
                  <span className="text-sm sm:text-base text-text/80">
                    {project.team_structure.rich_text[0].plain_text}
                  </span>
                </div>
              )}
              {startDate && (
                <div className="flex items-baseline gap-2">
                  <span className="text-sm sm:text-base font-bold text-text min-w-20">
                    개발 기간:
                  </span>
                  <span className="text-sm sm:text-base text-text/80">
                    {formatDate(startDate)} -{" "}
                    {endDate ? formatDate(endDate) : "진행중"}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
              {project.tech_stacks.multi_select.map((tech) => (
                <span
                  key={tech.id}
                  className="h-7.5 px-3 py-1 text-sm font-medium text-text bg-transparent border border-text rounded-full whitespace-nowrap">
                  {tech.name.replace(/\s+/g, " ").trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {(project.github_repo?.url || project.deployed_url?.url) && (
        <Reveal delay={0.4} triggerOnce>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.github_repo?.url && (
              <A
                href={project.github_repo.url}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-text rounded-full hover:bg-text hover:text-background transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </A>
            )}
            {project.deployed_url?.url && (
              <A
                href={project.deployed_url.url}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-text text-background rounded-full hover:bg-text/80 transition-colors">
                <span>서비스 바로가기</span>
              </A>
            )}
          </div>
        </Reveal>
      )}
    </header>
  );
};

export default ArticleHeader;
