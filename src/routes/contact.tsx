import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";

const intro = "Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum, Mumbai – 400004.";
const body = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us | Shree Swami Samarth Math" }, { name: "description", content: intro }, { property: "og:title", content: "Contact Us | Shree Swami Samarth Math" }, { property: "og:description", content: intro }] }),
  component: () => (
    <SiteLayout>
      <PageBanner title="Contact Us" />
      <ContentBody intro={intro} body={body} />
      <div className="mx-auto grid max-w-4xl gap-6 px-4 md:grid-cols-2"><div className="rounded-md bg-card p-6 shadow-temple"><h3 className="font-display text-xl text-maroon">Address</h3><p className="mt-2 text-sm">Kandewadi, Girgaum, Mumbai – 400004<br/>Phone: +91 00000 00000<br/>Email: info@yourdomain.com</p></div><form className="grid gap-3 rounded-md bg-card p-6 shadow-temple"><input placeholder="Name" className="rounded border border-input bg-background px-3 py-2"/><input placeholder="Email" className="rounded border border-input bg-background px-3 py-2"/><textarea placeholder="Message" rows={4} className="rounded border border-input bg-background px-3 py-2"/><button type="button" className="btn-saffron">Send Message</button></form></div>
    </SiteLayout>
  ),
});
