import { BlockObjectResponse } from "@notionhq/client";

export type NotionBlockWithChildren = BlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};
