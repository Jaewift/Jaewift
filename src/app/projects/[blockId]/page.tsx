import { ProjectApi } from "@/entities/project/api";
import { redirect, notFound } from "next/navigation";
import ArticleHeader from "@/widgets/article/ui/ArticleHeader";
import ArticleContent from "@/widgets/article/ui/ArticleContent";
import TableOfContents from "@/widgets/article/ui/TableOfContents";
import ArticleNavigation from "@/widgets/article/ui/ArticleNavigation";
import { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/shared/config/site-url";

export const revalidate = 31536000;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blockId?: string }>;
}): Promise<Metadata> {
  const { blockId } = await params;

  if (!blockId) {
    return {
      title: "Projects | jaekyu",
    };
  }

  const data = await getArticleData(blockId);

  if (!data) {
    return {
      title: "Project Not Found | jaekyu",
    };
  }

  const title = data.properties.name.title[0]?.plain_text || "Untitled";
  const description =
    data.properties.description?.rich_text[0]?.plain_text || title;
  const fileUrl = data.properties.thumbnail?.files[0]?.file?.url;
  const externalUrl = data.properties.thumbnail?.files[0]?.external?.url;

  const thumbnail = fileUrl || externalUrl || null;

  return {
    title: `${title} | jaekyu`,
    description,
    alternates: {
      canonical: `${SITE_URL}/projects/${blockId}`,
    },
    openGraph: {
      title: `${title} | jaekyu`,
      description,
      type: "article",
      url: `${SITE_URL}/projects/${blockId}`,
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
  const projects = await ProjectApi.getProjects();
  return projects.map((project) => ({
    blockId: project.id,
  }));
};

const getArticleData = async (blockId: string) => {
  try {
    return await ProjectApi.getProjectById(blockId);
  } catch {
    return null;
  }
};

const getAdjacentProjects = async (currentBlockId: string) => {
  try {
    const projects = await ProjectApi.getProjects();
    const currentIndex = projects.findIndex((p) => p.id === currentBlockId);

    if (currentIndex === -1) return { prevProject: null, nextProject: null };

    // projects는 최신 순으로 정렬되어 있음
    // prevProject: 더 오래된 프로젝트 (currentIndex + 1)
    // nextProject: 더 최근 프로젝트 (currentIndex - 1)
    const prevProject =
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    const nextProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

    return {
      prevProject: prevProject
        ? {
            id: prevProject.id,
            title:
              prevProject.properties.name.title[0]?.plain_text || "Untitled",
          }
        : null,
      nextProject: nextProject
        ? {
            id: nextProject.id,
            title:
              nextProject.properties.name.title[0]?.plain_text || "Untitled",
          }
        : null,
    };
  } catch {
    return { prevProject: null, nextProject: null };
  }
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ blockId?: string }>;
}) {
  const { blockId } = await params;
  if (!blockId) {
    redirect("/projects");
  }

  const data = await getArticleData(blockId);

  if (!data) {
    notFound();
  }

  const { properties, blocks } = data;
  const { prevProject, nextProject } = await getAdjacentProjects(blockId);

  const title = properties.name.title[0]?.plain_text || "Untitled";
  const description = properties.description?.rich_text[0]?.plain_text || title;
  const fileUrl = properties.thumbnail?.files[0]?.file?.url;
  const externalUrl = properties.thumbnail?.files[0]?.external?.url;
  const thumbnail = fileUrl || externalUrl || null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: description,
    image: thumbnail ? [thumbnail] : [],
    dateCreated: data.properties.created_at.created_time,
    dateModified: data.properties.updated_at.last_edited_time,
    author: {
      "@type": "Person",
      name: "박재규",
      url: SITE_URL,
    },
    url: `${SITE_URL}/projects/${blockId}`,
  };

  return (
    <main className="min-h-screen pb-20">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleHeader project={properties} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <ArticleContent blocks={blocks} />
      </article>

      <ArticleNavigation
        prevProject={prevProject || undefined}
        nextProject={nextProject || undefined}
      />

      <TableOfContents blocks={blocks} />
    </main>
  );
}
