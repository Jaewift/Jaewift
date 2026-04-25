"use client";

import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  ExternalLink,
  Check,
  Square,
  Copy,
  CheckCheck,
} from "lucide-react";

type NotionBlockWithChildren = BlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};

interface Props {
  blocks: NotionBlockWithChildren[];
}

const colorMap: Record<string, string> = {
  default: "text-text",
  gray: "text-text/60",
  brown: "text-amber-700 dark:text-amber-500",
  orange: "text-orange-600 dark:text-orange-400",
  yellow: "text-yellow-600 dark:text-yellow-400",
  green: "text-green-600 dark:text-green-400",
  blue: "text-blue-600 dark:text-blue-400",
  purple: "text-purple-600 dark:text-purple-400",
  pink: "text-pink-600 dark:text-pink-400",
  red: "text-red-600 dark:text-red-400",
  gray_background: "bg-gray-100 dark:bg-gray-800",
  brown_background: "bg-amber-100 dark:bg-amber-900/30",
  orange_background: "bg-orange-100 dark:bg-orange-900/30",
  yellow_background: "bg-yellow-100 dark:bg-yellow-900/30",
  green_background: "bg-green-100 dark:bg-green-900/30",
  blue_background: "bg-blue-100 dark:bg-blue-900/30",
  purple_background: "bg-purple-100 dark:bg-purple-900/30",
  pink_background: "bg-pink-100 dark:bg-pink-900/30",
  red_background: "bg-red-100 dark:bg-red-900/30",
};

const RichText = ({ richText }: { richText: RichTextItemResponse[] }) => {
  return (
    <>
      {richText.map((text, index) => {
        if (text.type === "text") {
          let className = "";
          const annotations = text.annotations;

          if (annotations.bold) className += " font-bold";
          if (annotations.italic) className += " italic";
          if (annotations.strikethrough) className += " line-through";
          if (annotations.underline) className += " underline";
          if (annotations.code) {
            className +=
              " px-1.5 py-0.5 mx-0.5 rounded bg-surface text-primary font-mono text-sm";
          }
          if (annotations.color !== "default") {
            className += ` ${colorMap[annotations.color] || ""}`;
          }

          const textContent = text.text.content
            .split("\n")
            .map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ));

          const content = text.text.link ? (
            <Link
              href={text.text.link.url}
              target="_blank"
              className="text-primary hover:underline break-all inline">
              {textContent}
              <ExternalLink className="w-3 h-3 inline ml-1" />
            </Link>
          ) : (
            textContent
          );

          return (
            <span key={index} className={className.trim()}>
              {content}
            </span>
          );
        }

        if (text.type === "mention") {
          if (text.mention.type === "date") {
            return (
              <span
                key={index}
                className="px-1.5 py-0.5 rounded bg-surface text-text/80 text-sm">
                {text.mention.date?.start}
                {text.mention.date?.end && ` → ${text.mention.date.end}`}
              </span>
            );
          }
          return <span key={index}>{text.plain_text}</span>;
        }

        if (text.type === "equation") {
          return (
            <span key={index} className="font-mono text-primary">
              {text.equation.expression}
            </span>
          );
        }

        return (
          <span key={index}>{(text as RichTextItemResponse).plain_text}</span>
        );
      })}
    </>
  );
};

const CodeBlock = ({
  block,
}: {
  block: Extract<BlockObjectResponse, { type: "code" }>;
}) => {
  const [copied, setCopied] = useState(false);
  const code = block.code.rich_text.map((t) => t.plain_text).join("");
  const language = block.code.language;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-surface/80 border border-border rounded-t-xl">
        <span className="text-xs text-text/60 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="text-text/60 hover:text-text transition-colors"
          title="Copy code">
          {copied ? (
            <CheckCheck className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <pre className="p-4 bg-surface border border-t-0 border-border rounded-b-xl overflow-x-auto">
        <code className="text-sm font-mono text-text/90">{code}</code>
      </pre>
      {block.code.caption.length > 0 && (
        <p className="mt-2 text-sm text-text/50 text-center">
          <RichText richText={block.code.caption} />
        </p>
      )}
    </div>
  );
};

const ToggleBlock = ({
  block,
  childBlocks,
}: {
  block: Extract<BlockObjectResponse, { type: "toggle" }>;
  childBlocks?: NotionBlockWithChildren[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-3 pl-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left hover:bg-surface/50 rounded-lg p-2 -ml-2 transition-colors">
        <ChevronRight
          className={`w-4 h-4 text-text/60 transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
        <span className={colorMap[block.toggle.color] || ""}>
          <RichText richText={block.toggle.rich_text} />
        </span>
      </button>
      {isOpen && childBlocks && (
        <div className="ml-6 mt-2 pl-4 border-l-2 border-border">
          <ArticleContent blocks={childBlocks} />
        </div>
      )}
    </div>
  );
};

const BlockRenderer = ({ block }: { block: NotionBlockWithChildren }) => {
  switch (block.type) {
    case "paragraph": {
      if (block.paragraph.rich_text.length === 0) {
        return <div className="h-3" />;
      }
      return (
        <p
          className={`my-2 leading-relaxed text-text/80 ${colorMap[block.paragraph.color] || ""} pl-8 wrap-break-word overflow-wrap-anywhere`}>
          <RichText richText={block.paragraph.rich_text} />
        </p>
      );
    }

    case "heading_1": {
      return (
        <h1
          id={block.id}
          className={`text-xl md:text-3xl lg:text-4xl font-bold text-text mt-14 mb-4 pt-4 scroll-mt-24 tracking-wide uppercase ${colorMap[block.heading_1.color] || ""} border-b border-border pb-1 md:pb-2 wrap-break-word`}>
          <RichText richText={block.heading_1.rich_text} />
        </h1>
      );
    }

    case "heading_2": {
      return (
        <div
          id={block.id}
          className="flex items-stretch gap-3 mt-8 mb-3 scroll-mt-24 pl-4">
          <div className="w-1 bg-text shrink-0" />
          <h2
            className={`text-lg md:text-xl lg:text-2xl font-bold text-text ${colorMap[block.heading_2.color] || ""} wrap-break-word`}>
            <RichText richText={block.heading_2.rich_text} />
          </h2>
        </div>
      );
    }

    case "heading_3": {
      return (
        <div
          id={block.id}
          className="flex items-stretch gap-3 my-2 scroll-mt-24 pl-4">
          <h4
            className={`md:text-lg lg:tex-xl font-bold text-text/90 ${colorMap[block.heading_3.color] || ""} wrap-break-word`}>
            <RichText richText={block.heading_3.rich_text} />
          </h4>
        </div>
      );
    }

    case "bulleted_list_item": {
      return (
        <li
          className={`ml-5 my-1.5 list-disc text-sm text-text/80 marker:text-text/40 ${colorMap[block.bulleted_list_item.color] || ""} wrap-break-word`}>
          <RichText richText={block.bulleted_list_item.rich_text} />
          {block.children && block.children.length > 0 && (
            <ul className="mt-1">
              <ArticleContent blocks={block.children} />
            </ul>
          )}
        </li>
      );
    }

    case "numbered_list_item": {
      return (
        <li
          className={`ml-5 my-1.5 list-decimal text-sm text-text/80 marker:text-text/60 ${colorMap[block.numbered_list_item.color] || ""} wrap-break-word`}>
          <RichText richText={block.numbered_list_item.rich_text} />
          {block.children && block.children.length > 0 && (
            <ol className="mt-1">
              <ArticleContent blocks={block.children} />
            </ol>
          )}
        </li>
      );
    }

    case "to_do": {
      return (
        <div
          className={`flex items-start gap-3 my-2 pl-8 ${colorMap[block.to_do.color] || ""}`}>
          {block.to_do.checked ? (
            <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
          ) : (
            <Square className="w-5 h-5 text-text/40 mt-0.5 shrink-0" />
          )}
          <span
            className={block.to_do.checked ? "line-through text-text/50" : ""}>
            <RichText richText={block.to_do.rich_text} />
          </span>
        </div>
      );
    }

    case "toggle": {
      return <ToggleBlock block={block} childBlocks={block.children} />;
    }

    case "code": {
      return (
        <div className="pl-8">
          <CodeBlock block={block} />
        </div>
      );
    }

    case "quote": {
      return (
        <blockquote
          className={`p-6.5 bg-surface rounded-lg md:rounded-xl my-4 ml-8 text-text/70 ${colorMap[block.quote.color] || ""} wrap-break-word relative`}>
          <span className="text-2xl md:text-4xl text-primary h-5 absolute top-2.5 left-2.5">
            &ldquo;
          </span>
          <span className="text-2xl md:text-4xl text-primary h-5 absolute bottom-2.5 right-2.5">
            &rdquo;
          </span>
          <RichText richText={block.quote.rich_text} />
          {block.children && block.children.length > 0 && (
            <div className="mt-2">
              <ArticleContent blocks={block.children} />
            </div>
          )}
        </blockquote>
      );
    }

    case "callout": {
      const icon = block.callout.icon;
      const emoji = icon?.type === "emoji" ? icon.emoji : "💡";

      return (
        <div className="flex gap-3 p-4 my-4 ml-8 bg-surface/30 rounded-lg">
          <span className="text-xl shrink-0">{emoji}</span>
          <div className="flex-1 text-text/80 text-sm leading-relaxed wrap-break-word">
            <RichText richText={block.callout.rich_text} />
          </div>
        </div>
      );
    }

    case "divider": {
      return <hr className="my-8 ml-8 border-t border-text/20" />;
    }

    case "image": {
      const imageUrl =
        block.image.type === "external"
          ? block.image.external.url
          : block.image.type === "file"
            ? block.image.file.url
            : null;

      if (!imageUrl) return null;

      return (
        <figure className="my-2 pl-8">
          <div className="overflow-hidden rounded-lg border border-border bg-surface/30 inline-block max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={
                block.image.caption?.map((c) => c.plain_text).join("") ||
                "Image"
              }
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
          {block.image.caption && block.image.caption.length > 0 && (
            <figcaption className="mt-2 text-center text-xs text-text/50">
              <RichText richText={block.image.caption} />
            </figcaption>
          )}
        </figure>
      );
    }

    case "video": {
      const videoUrl =
        block.video.type === "external"
          ? block.video.external.url
          : block.video.type === "file"
            ? block.video.file.url
            : null;

      if (!videoUrl) return null;

      const youtubeMatch = videoUrl.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/,
      );

      if (youtubeMatch) {
        return (
          <div className="my-8 pl-8">
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
                className="w-full h-full"
                allowFullScreen
                title="YouTube video"
              />
            </div>
          </div>
        );
      }

      return (
        <div className="pl-8">
          <video
            controls
            className="w-full my-8 rounded-xl border border-border">
            <source src={videoUrl} />
          </video>
        </div>
      );
    }

    case "embed": {
      return (
        <div className="my-8 pl-8">
          <iframe
            src={block.embed.url}
            className="w-full aspect-video rounded-xl border border-border"
            allowFullScreen
          />
        </div>
      );
    }

    case "bookmark": {
      return (
        <Link
          href={block.bookmark.url}
          target="_blank"
          className="flex items-center gap-4 p-5 my-6 ml-8 border border-border rounded-xl hover:border-primary transition-colors group bg-surface/30">
          <ExternalLink className="w-6 h-6 text-text/40 group-hover:text-primary shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-text truncate font-medium">
              {block.bookmark.url}
            </p>
            {block.bookmark.caption.length > 0 && (
              <p className="text-sm text-text/50 mt-1">
                <RichText richText={block.bookmark.caption} />
              </p>
            )}
          </div>
        </Link>
      );
    }

    case "table": {
      return (
        <div className="my-8 pl-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse">
            {block.children && (
              <tbody>
                {block.children.map((row, rowIndex) => {
                  if (row.type !== "table_row") return null;

                  return (
                    <tr
                      key={row.id}
                      className={
                        rowIndex === 0 && block.table.has_column_header
                          ? "bg-surface"
                          : rowIndex % 2 === 1
                            ? "bg-surface/30"
                            : ""
                      }>
                      {row.table_row.cells.map((cell, cellIndex) => {
                        const isHeaderCell =
                          (block.table.has_column_header && rowIndex === 0) ||
                          (block.table.has_row_header && cellIndex === 0);

                        const CellTag = isHeaderCell ? "th" : "td";

                        return (
                          <CellTag
                            key={cellIndex}
                            className={`border-b border-border px-4 py-3 text-left ${
                              isHeaderCell ? "font-semibold bg-surface" : ""
                            }`}>
                            <RichText richText={cell} />
                          </CellTag>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      );
    }

    case "column_list": {
      return (
        <div className="flex flex-col md:flex-row gap-6 my-6">
          {block.children?.map((column) => (
            <div key={column.id} className="flex-1">
              {column.children && <ArticleContent blocks={column.children} />}
            </div>
          ))}
        </div>
      );
    }

    case "equation": {
      return (
        <div className="my-6 p-6 ml-8 bg-surface rounded-xl text-center font-mono text-lg border border-border">
          {block.equation.expression}
        </div>
      );
    }

    case "file": {
      const fileUrl =
        block.file.type === "external"
          ? block.file.external.url
          : block.file.type === "file"
            ? block.file.file.url
            : null;

      if (!fileUrl) return null;

      return (
        <Link
          href={fileUrl}
          target="_blank"
          className="flex items-center gap-3 p-4 my-4 border border-border rounded-xl hover:border-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
          <span>{block.file.name || "Download file"}</span>
        </Link>
      );
    }

    case "pdf": {
      const pdfUrl =
        block.pdf.type === "external"
          ? block.pdf.external.url
          : block.pdf.type === "file"
            ? block.pdf.file.url
            : null;

      if (!pdfUrl) return null;

      return (
        <div className="my-8">
          <iframe
            src={pdfUrl}
            className="w-full h-150 rounded-xl border border-border"
          />
        </div>
      );
    }

    case "audio": {
      const audioUrl =
        block.audio.type === "external"
          ? block.audio.external.url
          : block.audio.type === "file"
            ? block.audio.file.url
            : null;

      if (!audioUrl) return null;

      return (
        <audio controls className="w-full my-6">
          <source src={audioUrl} />
        </audio>
      );
    }

    case "synced_block": {
      if (block.children) {
        return <ArticleContent blocks={block.children} />;
      }
      return null;
    }

    case "child_page": {
      return (
        <div className="p-4 my-4 border border-border rounded-xl hover:border-primary transition-colors">
          <span className="text-lg">📄 {block.child_page.title}</span>
        </div>
      );
    }

    case "child_database": {
      return (
        <div className="p-4 my-4 border border-border rounded-xl hover:border-primary transition-colors">
          <span className="text-lg">📊 {block.child_database.title}</span>
        </div>
      );
    }

    case "table_of_contents": {
      return null;
    }

    case "breadcrumb": {
      return null;
    }

    case "link_preview": {
      return (
        <Link
          href={block.link_preview.url}
          target="_blank"
          className="flex items-center gap-3 p-4 my-4 border border-border rounded-xl hover:border-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
          <span className="truncate">{block.link_preview.url}</span>
        </Link>
      );
    }

    default: {
      return null;
    }
  }
};

const groupListItems = (
  blocks: NotionBlockWithChildren[],
): NotionBlockWithChildren[][] => {
  const groups: NotionBlockWithChildren[][] = [];
  let currentGroup: NotionBlockWithChildren[] = [];
  let currentType: string | null = null;

  for (const block of blocks) {
    const isBulleted = block.type === "bulleted_list_item";
    const isNumbered = block.type === "numbered_list_item";

    if (isBulleted || isNumbered) {
      if (currentType === block.type) {
        currentGroup.push(block);
      } else {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }
        currentGroup = [block];
        currentType = block.type;
      }
    } else {
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
        currentGroup = [];
        currentType = null;
      }
      groups.push([block]);
    }
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
};

const ArticleContent = ({ blocks }: Props) => {
  const groups = groupListItems(blocks);

  return (
    <div className="article-content">
      {groups.map((group, groupIndex) => {
        const firstBlock = group[0];

        if (firstBlock.type === "bulleted_list_item") {
          return (
            <ul key={groupIndex} className="my-4 ml-8">
              {group.map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))}
            </ul>
          );
        }

        if (firstBlock.type === "numbered_list_item") {
          return (
            <ol key={groupIndex} className="my-4 ml-8">
              {group.map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))}
            </ol>
          );
        }

        return group.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ));
      })}
    </div>
  );
};

export default ArticleContent;
