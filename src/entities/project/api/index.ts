import { notion } from "@/shared/libs/notion";
import { ResultResponse } from "@/shared/types/result-response";
import { Project } from "../types";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockWithChildren } from "@/shared/types/notion-block-with-children";

export const ProjectApi = {
  id: process.env.PROJECT_DB_ID!,

  async getProjects(size?: number) {
    const res = await notion.dataSources.query({
      data_source_id: this.id,
      sorts: [
        {
          property: "slug",
          direction: "descending",
        },
      ],
      page_size: size,
    });

    return res.results as ResultResponse<Project>[];
  },

  async getProjectById(blockId: ResultResponse<Project>["id"]) {
    const page = await notion.pages.retrieve({ page_id: blockId });
    const properties = (page as ResultResponse<Project>).properties;

    const blocks: NotionBlockWithChildren[] = [];
    let cursor: string | undefined;

    while (true) {
      const res = await notion.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor,
      });

      const fullBlocks = res.results.filter(
        (block): block is BlockObjectResponse => "type" in block,
      );

      blocks.push(...fullBlocks);

      if (!res.has_more) break;
      cursor = res.next_cursor ?? undefined;
    }

    for (const block of blocks) {
      if (block.has_children) {
        const childBlocks = await this.getBlockChildren(block.id);
        block.children = childBlocks;
      }
    }

    return { properties, blocks };
  },

  async getBlockChildren(blockId: string): Promise<NotionBlockWithChildren[]> {
    const blocks: NotionBlockWithChildren[] = [];
    let cursor: string | undefined;

    while (true) {
      const res = await notion.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor,
      });

      const fullBlocks = res.results.filter(
        (block): block is BlockObjectResponse => "type" in block,
      );

      blocks.push(...fullBlocks);

      if (!res.has_more) break;
      cursor = res.next_cursor ?? undefined;
    }

    for (const block of blocks) {
      if (block.has_children) {
        block.children = await this.getBlockChildren(block.id);
      }
    }

    return blocks;
  },
};
