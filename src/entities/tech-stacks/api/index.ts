import { notion } from "@/shared/libs/notion";
import { ResultResponse } from "@/shared/types/result-response";
import { TechStack } from "../types";

export const TechStackApi = {
	id: process.env.TECHSTACK_DB_ID!,

	async getTechStacks() {
		const res = await notion.dataSources.query({
			data_source_id: this.id,
			sorts: [
				{
					property: "category",
					direction: "ascending",
				},
				{
					property: "level",
					direction: "descending",
				},
			],
		});

		return res.results as ResultResponse<TechStack>[];
	},
};
