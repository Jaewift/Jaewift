import { notion } from "@/shared/libs/notion";
import { ResultResponse } from "@/shared/types/result-response";
import { Award } from "../types";

export const AwardApi = {
  id: process.env.AWARD_DB_ID!,

  async getAwards() {
    const res = await notion.dataSources.query({
      data_source_id: this.id,
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    });

    return res.results as ResultResponse<Award>[];
  },
};
