import { BlogApi } from "@/entities/blog/api";
import { redirect, notFound } from "next/navigation";
import BlogHeader from "@/widgets/blog/ui/BlogHeader";
import ArticleContent from "@/widgets/article/ui/ArticleContent";
import TableOfContents from "@/widgets/article/ui/TableOfContents";
import BlogNavigation from "@/widgets/blog/ui/BlogNavigation";
import BlogSubscribe from "@/widgets/blog/ui/BlogSubscribe";
import { Metadata } from "next";
import Script from "next/script";

export const revalidate = 31536000;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blockId?: string }>;
}): Promise<Metadata> {
  const { blockId } = await params;

  if (!blockId) {
    return {
      title: "Blog | jaekyu",
    };
  }

  const data = await getBlogData(blockId);

  if (!data) {
    return {
      title: "Blog Not Found | jaekyu",
    };
  }

  const title = data.properties.name.title[0]?.plain_text || "Untitled";
  const description = title;
  const fileUrl = data.properties.thumbnail?.files[0]?.file?.url;
  const externalUrl = data.properties.thumbnail?.files[0]?.external?.url;

  const thumbnail = fileUrl || externalUrl || null;

  return {
    title: `${title} | jaekyu`,
    description,
    alternates: {
      canonical: `https://cher1shrxd.me/blog/${blockId}`,
    },
    openGraph: {
      title: `${title} | jaekyu`,
      description,
      type: "article",
      url: `https://cher1shrxd.me/blog/${blockId}`,
      images: thumbnail ? [{ url: thumbnail }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | jaekyu`,
      description,
      images: thumbnail ? [thumbnail] : [],
    },
  };
}

export const generateStaticParams = async () => {
  const posts = await BlogApi.getPosts();
  return posts.map((post) => ({
    blockId: post.id,
  }));
};

const getBlogData = async (pageId: string) => {
  try {
    return await BlogApi.getPostById(pageId);
  } catch {
    return null;
  }
};

const getAdjacentPosts = async (currentPageId: string) => {
  try {
    const posts = await BlogApi.getPosts();
    const currentIndex = posts.findIndex((p) => p.id === currentPageId);

    if (currentIndex === -1) return { prevPost: null, nextPost: null };
    const prevPost =
      currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

    return {
      prevPost: prevPost
        ? {
            pageId: prevPost.id,
            title: prevPost.properties.name.title[0]?.plain_text || "Untitled",
          }
        : null,
      nextPost: nextPost
        ? {
            pageId: nextPost.id,
            title: nextPost.properties.name.title[0]?.plain_text || "Untitled",
          }
        : null,
    };
  } catch {
    return { prevPost: null, nextPost: null };
  }
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blockId?: string }>;
}) {
  const { blockId } = await params;
  if (!blockId) {
    redirect("/blog");
  }

  const data = await getBlogData(blockId);
  if (!data) {
    notFound();
  }

  const { properties, blocks } = data;
  const { prevPost, nextPost } = await getAdjacentPosts(blockId);

  const title = properties.name.title[0]?.plain_text || "Untitled";
  const fileUrl = properties.thumbnail?.files[0]?.file?.url;
  const externalUrl = properties.thumbnail?.files[0]?.external?.url;
  const thumbnail = fileUrl || externalUrl || null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: thumbnail ? [thumbnail] : [],
    datePublished: data.properties.created_at.created_time,
    dateModified: data.properties.updated_at.last_edited_time,
    author: {
      "@type": "Person",
      name: "박재규",
      url: "https://cher1shrxd.me",
    },
    publisher: {
      "@type": "Person",
      name: "jaekyu",
      url: "https://cher1shrxd.me",
    },
    description: title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cher1shrxd.me/blog/${blockId}`,
    },
  };

  return (
    <main className="min-h-screen pb-20">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHeader post={properties} blockId={blockId} />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <ArticleContent blocks={blocks} />
      </article>

      <BlogNavigation
        prevPost={prevPost || undefined}
        nextPost={nextPost || undefined}
      />

      <div className="max-w-2xl px-4 sm:px-6 mt-32 mx-auto">
        <BlogSubscribe />
      </div>

      <TableOfContents blocks={blocks} />
    </main>
  );
}
