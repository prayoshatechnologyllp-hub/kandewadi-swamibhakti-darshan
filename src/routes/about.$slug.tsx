import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPage, sections } from "@/lib/site";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";
import { SectionExtra } from "@/components/SectionExtra";

export const Route = createFileRoute("/about/$slug")({
  loader: ({ params }) => {
    const page = getPage("about", params.slug);
    if (!page) throw notFound();
    return { page, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.page.title} | Shree Swami Samarth Math` : "Unavailable";
    const d = loaderData?.page.intro ?? "";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] };
  },
  component: () => {
    const { page, slug } = Route.useLoaderData();
    return (
      <SiteLayout>
        <PageBanner title={page.title} crumb={sections.about.label} />
        <ContentBody intro={page.intro} body={page.body} />
        <SectionExtra section="about" slug={slug} />
      </SiteLayout>
    );
  },
});
