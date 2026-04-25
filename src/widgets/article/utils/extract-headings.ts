import { NotionBlockWithChildren } from "@/shared/types/notion-block-with-children";

interface HeadingItem {
  id: string;
  text: string;
  level: 1 | 2 | 3;
}

export const extractHeadings = (blocks: NotionBlockWithChildren[]): HeadingItem[] => {
  const headings: HeadingItem[] = [];

  for (const block of blocks) {
    if (block.type === "heading_1") {
      headings.push({
        id: block.id,
        text: block.heading_1.rich_text.map((t) => t.plain_text).join(""),
        level: 1,
      });
    } else if (block.type === "heading_2") {
      headings.push({
        id: block.id,
        text: block.heading_2.rich_text.map((t) => t.plain_text).join(""),
        level: 2,
      });
    }
  }

  return headings;
};