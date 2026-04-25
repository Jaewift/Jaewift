import { notion } from "@/shared/libs/notion";
import { Education } from "../types";
import { ResultResponse } from "@/shared/types/result-response";

export const EducationApi = {
  id: process.env.EDUCATION_DB_ID!,

  async getEducations() {
    const res = await notion.dataSources.query({
      data_source_id: this.id,
      sorts: [
        {
          property: "duration",
          direction: "descending",
        },
      ],
    });

    return res.results as ResultResponse<Education>[];
  }
}