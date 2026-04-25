import { NotionUser } from "./notion-user";
import { ParentObject } from "./parent-object";

export interface ResultResponse<T> {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: string | null;
  icon: string | null;
  parent: ParentObject;
  archived: boolean;
  in_trash: boolean;
  is_locked: boolean;
  properties: T;
  url: string;
  public_url: string | null;
}
