import { Client, DataSourceObjectResponse } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,  
});

export const getDatabases = async () => {
  const res = await notion.search({
    filter: {
      property: "object",
      value: "data_source",
    },
  });

  return res.results.map((db) => ({
    id: db.id,
    title: (db as DataSourceObjectResponse).title?.[0]?.plain_text ?? "(no title)",
  }));
}