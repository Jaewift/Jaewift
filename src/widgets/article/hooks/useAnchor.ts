import { useEffect, useState } from "react";
import { extractHeadings } from "../utils/extract-headings";
import { NotionBlockWithChildren } from "@/shared/types/notion-block-with-children";

export const useAnchor = (blocks: NotionBlockWithChildren[]) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const headings = extractHeadings(blocks);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return {
    headings,
    activeId,
    isOpen,
    setIsOpen,
    handleClick,
  }
};
