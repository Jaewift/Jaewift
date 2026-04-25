"use client";

import { ResultResponse } from "@/shared/types/result-response";
import { Project } from "@/entities/project/types";
import ProjectCard from "./ProjectCard";
import Masonry from "react-masonry-css";

interface Props {
  projects: ResultResponse<Project>[];
}

const ProjectsGrid = ({ projects }: Props) => {
  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1024: 2,
    768: 2,
    640: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-4 sm:-ml-5 md:-ml-6 lg:-ml-7 xl:-ml-8 w-auto"
      columnClassName="pl-4 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 bg-clip-padding">
      {projects.map((project) => (
        <div key={project.id} className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
          <ProjectCard 
            project={project.properties} 
            projectId={project.id}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default ProjectsGrid;
