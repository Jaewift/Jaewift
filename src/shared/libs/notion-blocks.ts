import { notion } from "./notion";
import {
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionBlock = BlockObjectResponse;

export const getPageBlocks = async (pageId: string): Promise<NotionBlock[]> => {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    const fullBlocks = response.results.filter(
      (block): block is BlockObjectResponse => "type" in block
    );

    blocks.push(...fullBlocks);
    cursor = response.next_cursor ?? undefined;
  } while (cursor);

  for (const block of blocks) {
    if (block.has_children) {
      const children = await getPageBlocks(block.id);
      (block as NotionBlock & { children?: NotionBlock[] }).children = children;
    }
  }

  return blocks;
};

export const getBlockChildren = async (
  blockId: string
): Promise<NotionBlock[]> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  return response.results.filter(
    (block): block is BlockObjectResponse => "type" in block
  );
};
