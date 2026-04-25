import { Date, File, Name, Number } from "@/shared/types/fields";

export interface License {
  name: Name;
  issue_date: Date;
  score?: Number;
  certification: File;
}