import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";

const intro = "We humbly appeal to all devotees to contribute generously towards the projects undertaken by the Math.";
const body = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
export const Route = createFileRoute("/appeal")({
  head: () => ({ meta: [{ title: "An Appeal | Shree Swami Samarth Math" }, { name: "description", content: intro }, { property: "og:title", content: "An Appeal | Shree Swami Samarth Math" }, { property: "og:description", content: intro }] }),
  component: () => (
    <SiteLayout>
      <PageBanner title="An Appeal" />
      <ContentBody intro={intro} body={body} />
      <div className="text-center"><a href="/seva/donation" className="btn-saffron">Contribute Now</a></div>
    </SiteLayout>
  ),
});
