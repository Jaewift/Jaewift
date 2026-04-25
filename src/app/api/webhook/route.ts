import {
  NotionWebhookEvent,
  NotionWebhookVerify,
} from "@/shared/types/notion-webhook-event";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(reg: Request) {
  const body = (await reg.json()) as NotionWebhookEvent | NotionWebhookVerify;

  if ("verification_token" in body) {
    console.info(
      "Notion webhook verification token received:",
      body.verification_token,
    );
    return NextResponse.json({ message: "token received" }, { status: 200 });
  }

  const PROJECT_DB_ID = process.env.PROJECT_DB_ID!;

  const receivedId = body.data.parent.data_source_id;

  if (!receivedId) {
    return NextResponse.json({ message: "No data_source_id" }, { status: 200 });
  }

  try {
    revalidatePath("/");
    fetch("https://www.cher1shrxd.me")
      .then(() => console.log("Main Page warmed"))
      .catch((error) => console.error("Main page warming failed:", error));
    switch (receivedId) {
      case PROJECT_DB_ID:
        await handleProjectWebhook(body);
        break;
    }
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { message: "Processing failed but acknowledged" },
      { status: 200 },
    );
  }

  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}

async function handleProjectWebhook(body: NotionWebhookEvent) {
  revalidatePath("/projects");

  if (body.type === "page.deleted") {
    return;
  }

  const pageId = body.entity.id;
  revalidatePath(`/projects/${pageId}`);

  try {
    await Promise.all([
      fetch("https://www.cher1shrxd.me/projects")
        .then(() => console.log("Projects list warmed"))
        .catch((error) =>
          console.error("Projects list warming failed:", error),
        ),
      fetch(`https://www.cher1shrxd.me/projects/${pageId}`)
        .then(() => console.log(`Project ${pageId} warmed`))
        .catch((error) =>
          console.error(`Project ${pageId} warming failed:`, error),
        ),
    ]);
  } catch (error) {
    console.error("Project webhook handling error:", error);
  }
}
