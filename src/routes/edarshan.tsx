import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";

const intro = "Take live darshan of Shree Swami Samarth Maharaj from anywhere.";
const body = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
export const Route = createFileRoute("/edarshan")({
  head: () => ({ meta: [{ title: "eDarshan – Live Aarti | Shree Swami Samarth Math" }, { name: "description", content: intro }, { property: "og:title", content: "eDarshan – Live Aarti | Shree Swami Samarth Math" }, { property: "og:description", content: intro }] }),
  component: () => (
    <SiteLayout>
      <PageBanner title="eDarshan – Live Aarti" />
      <ContentBody intro={intro} body={body} />
      <div className="mx-auto max-w-4xl px-4"><div className="flex aspect-video items-center justify-center rounded-md bg-maroon font-display text-2xl text-gold shadow-temple">Live Aarti stream will appear here</div></div>
    </SiteLayout>
  ),
});
