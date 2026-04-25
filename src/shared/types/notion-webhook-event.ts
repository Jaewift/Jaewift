export interface NotionWebhookVerify {
  verification_token: string;
}

export interface NotionWebhookEvent {
  id: string;
  timestamp: string;
  workspace_id: string;
  workspace_name: string;
  subscription_id: string;
  integration_id: string;
  authors: NotionWebhookAuthor[];
  attempt_number: number;
  api_version: string;
  entity: NotionWebhookEntity;
  type: NotionWebhookEventType;
  data: NotionPageContentUpdatedData;
}

export type NotionWebhookEventType = "page.content_updated" | "page.created" | "page.deleted";

export interface NotionWebhookAuthor {
  id: string;
  type: "person" | "bot";
}

export interface NotionWebhookEntity {
  id: string;
  type: "page";
}

export interface NotionPageContentUpdatedData {
  parent: NotionWebhookParent;
  updated_blocks: NotionWebhookUpdatedBlock[];
}

export interface NotionWebhookParent {
  id: string;
  type: "database" | "page" | "workspace";
  data_source_id?: string;
}

export interface NotionWebhookUpdatedBlock {
  id: string;
  type: "block";
}
