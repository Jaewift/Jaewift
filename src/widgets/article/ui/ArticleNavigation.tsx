import { Link } from "@cher1shrxd/loading";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  prevProject?: {
    id: string;
    title: string;
  };
  nextProject?: {
    id: string;
    title: string;
  };
}

const ArticleNavigation = ({ prevProject, nextProject }: Props) => {
  return (
    <nav className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.id}`}
          className="group relative bg-surface border border-border rounded-lg p-6 flex flex-col gap-2 hover:border-primary transition-all duration-300 overflow-hidden">
          <div className="flex items-center gap-2 text-sm text-text/60">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>이전 프로젝트</span>
          </div>
          <h3 className="text-lg font-bold text-text line-clamp-1">
            {prevProject.title}
          </h3>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={`/projects/${nextProject.id}`}
          className="group relative bg-surface border border-border rounded-lg p-6 flex flex-col gap-2 hover:border-primary transition-all duration-300 overflow-hidden sm:items-end sm:text-right">
          <div className="flex items-center gap-2 text-sm text-text/60">
            <span>다음 프로젝트</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <h3 className="text-lg font-bold text-text line-clamp-1">
            {nextProject.title}
          </h3>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};

export default ArticleNavigation;
