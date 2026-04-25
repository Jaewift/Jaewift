import { Date, Name, Select } from "@/shared/types/fields";

export interface Education {
  name: Name;
  school_level: Select;
  duration: Date
}