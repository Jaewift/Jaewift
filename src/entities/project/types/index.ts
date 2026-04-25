import {
  CreatedAt,
  Url,
  MultiSelect,
  Name,
  Status,
  UpdatedAt,
  Date,
  Number,
  RichText,
  File,
} from "@/shared/types/fields";

export interface Project {
  github_repo: Url | null;
  status: Status;
  is_deployed: Status;
  updated_at: UpdatedAt;
  created_at: CreatedAt;
  duration: Date;
  tech_stacks: MultiSelect;
  slug: Number;
  name: Name;
  deployed_url: Url | null;
  description: RichText;
  thumbnail: File| null;
  teammates?: Number;
  team_structure: RichText;
}
