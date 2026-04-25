import { Date, Name, RichText, Select } from "@/shared/types/fields";

export interface Award {
  name: Name;
  date: Date;
  honor: RichText;
  award_category: Select;
}