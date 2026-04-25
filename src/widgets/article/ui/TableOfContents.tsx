"use client";

import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { List } from "lucide-react";
import { useAnchor } from "../hooks/useAnchor";

type NotionBlockWithChildren = BlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};

interface Props {
  blocks: NotionBlockWithChildren[];
}

const TableOfContents = ({ blocks }: Props) => {
  const { headings, activeId, isOpen, setIsOpen, handleClick } =
    useAnchor(blocks);

  if (headings.length === 0) return null;

  return (
    <>
      <nav className="hidden xl:block fixed right-8 top-44 bottom-20 w-64 overflow-y-auto">
        <div className="p-4 bg-surface/50 backdrop-blur-sm border border-border rounded-xl sticky top-0">
          <h3 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-4">
            On this page
          </h3>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => handleClick(heading.id)}
                  className={`text-left w-full text-sm transition-all duration-200 hover:text-primary cursor-pointer ${
                    heading.level === 1
                      ? "font-medium"
                      : heading.level === 2
                        ? "pl-3"
                        : "pl-6 text-xs"
                  } ${
                    activeId === heading.id
                      ? "text-primary font-medium"
                      : "text-text/60"
                  }`}>
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-background rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Table of Contents">
          <List className="w-5 h-5 text-white" />
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border rounded-t-2xl transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}>
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-4" />
            <h3 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-4">
              On this page
            </h3>
            <ul className="space-y-3">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => handleClick(heading.id)}
                    className={`text-left w-full transition-colors hover:text-primary ${
                      heading.level === 1
                        ? "font-medium text-base"
                        : heading.level === 2
                          ? "pl-4 text-sm"
                          : "pl-8 text-sm"
                    } ${
                      activeId === heading.id
                        ? "text-primary font-medium"
                        : "text-text/70"
                    }`}>
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableOfContents;
