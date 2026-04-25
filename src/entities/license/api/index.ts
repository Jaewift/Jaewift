import { notion } from "@/shared/libs/notion";
import { License } from "../types";
import { ResultResponse } from "@/shared/types/result-response";

export const LicenseApi = {
  id: process.env.LICENSE_DB_ID!,

  async getLicenses() {
    const res = await notion.dataSources.query({
      data_source_id: this.id,
      sorts: [
        {
          property: "issue_date",
          direction: "descending",
        },
      ],
    });

    return res.results as ResultResponse<License>[];
  },
};
