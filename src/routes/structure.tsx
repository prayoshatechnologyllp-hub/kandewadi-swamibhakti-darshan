import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageBanner } from "@/components/SiteLayout";
import { ExternalLink, CheckCircle2, ChevronRight, Folder, FileText, Globe } from "lucide-react";

export const Route = createFileRoute("/structure")({
  head: () => ({
    meta: [
      { title: "Website Link Structure | Shree Swami Samarth Maharaj Math" },
      { name: "description", content: "Proposed Link Structure for Designing & Developing the official Website of Shree Swami Samarth Maharaj Math – Kandewadi, Girgaum." },
    ],
  }),
  component: StructurePage,
});

const structureData = [
  {
    category: "Home",
    url: "/",
    description: "Main landing portal with temple hero, daily aarti timings, sacred celebrations, divine moments, videos, founder tribute, and appeal.",
    children: [],
  },
  {
    category: "About Math",
    description: "History, founding lineage, trustees, community seva, and temple guidelines.",
    children: [
      { title: "History of Math", url: "/about/history", desc: "Chronicles of the Math since 1920s and the consecration of holy padukas." },
      { title: "About Math Founder", url: "/about/founder", desc: "Spiritual life, austerities, and visionary leadership of the founder." },
      { title: "Trustees", url: "/about/trustees", desc: "Board of Trustees governing religious and administrative operations." },
      { title: "Social Activities", url: "/about/social-activities", desc: "Nitya Annadan, free medical clinics, education aid, and gau seva." },
    ],
  },
  {
    category: "eDarshan - Darshan (Live Aarti / Functions)",
    url: "/edarshan",
    description: "Live webcast stream from the sanctum sanctorum (Gabhara) and live aarti broadcasts.",
    children: [],
  },
  {
    category: "Online Seva",
    description: "Devotee registration and sacred pooja booking facilities.",
    children: [
      { title: "Registration", url: "/seva/registration", desc: "Register family gotra and details for official seva and prasad delivery." },
      { title: "Donation", url: "/seva/donation", desc: "Sponsor daily aarti, Annadan, or temple renovation with 80G tax benefit." },
      { title: "Abhishek", url: "/seva/abhishek", desc: "Book Panchamrut or Rudra Abhishek pooja on auspicious dates." },
      { title: "Laghurudra", url: "/seva/laghurudra", desc: "Powerful Vedic Rudrabhishek ritual performed by 11 learned priests." },
    ],
  },
  {
    category: "Math Utsav",
    description: "Annual festivals, celebrations, and holy tithis calendar.",
    children: [
      { title: "Utsav Calendar", url: "/utsav/calendar", desc: "Complete yearly schedule of festivals, tithis, and celebration highlights." },
    ],
  },
  {
    category: "An Appeal",
    url: "/appeal",
    description: "Appeal to devotees for contributing generously for projects undertaken by the Math (Restoration, Annachhatra, Medical Clinic, Vedic Library).",
    children: [],
  },
  {
    category: "Gallery",
    description: "Spiritual wallpapers, photo archives of shrines, and utsav memories.",
    children: [
      { title: "Swami Wallpapers", url: "/gallery/swami-wallpapers", desc: "Download high-definition digital wallpapers of Shree Swami Samarth." },
      { title: "Other Deities", url: "/gallery/other-deities", desc: "Shrines of Lord Ganesha, Lord Dattatreya, Lord Shiva, and Hanuman." },
      { title: "Utsav Photos", url: "/gallery/utsav-photos", desc: "Moments of devotion and celebration captured throughout the years." },
    ],
  },
  {
    category: "Contact Us",
    url: "/contact",
    description: "Temple address in Kandewadi Girgaum, directions, phone, email, and inquiry form.",
    children: [],
  },
  {
    category: "Legal & Policies",
    description: "Official policies and terms governing the website and donations.",
    children: [
      { title: "Terms of Use", url: "/legal/terms", desc: "Website usage terms and intellectual property rights." },
      { title: "Disclaimer", url: "/legal/disclaimer", desc: "Notice regarding timings, seva schedules, and voluntary contributions." },
      { title: "Privacy Policy", url: "/legal/privacy", desc: "Devotee data security, confidential records, and transaction safety." },
      { title: "Refund & Cancellation Policy", url: "/legal/refund", desc: "Guidelines on seva bookings and voluntary donation offerings." },
    ],
  },
];

function StructurePage() {
  return (
    <SiteLayout>
      <PageBanner title="Website Link Structure" crumb="Site Map" />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header Notice */}
        <div className="rounded-md border-l-4 border-gold bg-card p-6 shadow-temple">
          <div className="flex items-start gap-3">
            <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-xl text-maroon font-bold">
                Official Website Link Structure & Sitemap
              </h2>
              <p className="mt-1 text-sm text-foreground/85 leading-relaxed">
                Proposed structure for Designing & Developing the official Website of <strong>Shree Swami Samarth Maharaj Math – Kandewadi, Girgaum</strong>. Every section and page listed below is fully implemented, active, and accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Structure Tree Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {structureData.map((sec, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2.5">
                    <Folder className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-maroon">
                      {sec.url ? (
                        <Link to={sec.url} className="hover:text-primary transition">
                          {sec.category}
                        </Link>
                      ) : (
                        sec.category
                      )}
                    </h3>
                  </div>
                  {sec.url && (
                    <Link
                      to={sec.url}
                      className="inline-flex items-center gap-1 rounded bg-secondary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-gold hover:text-maroon transition"
                    >
                      Visit <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                </div>

                <p className="mt-3 text-xs text-foreground/80 leading-relaxed">
                  {sec.description}
                </p>

                {sec.children.length > 0 && (
                  <div className="mt-4 space-y-2.5">
                    {sec.children.map((ch, cidx) => (
                      <Link
                        key={cidx}
                        to={ch.url}
                        className="group flex items-start gap-2.5 rounded-sm p-2 transition hover:bg-secondary/60"
                      >
                        <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="flex items-center gap-1 text-sm font-semibold text-maroon group-hover:text-primary transition">
                            <span>{ch.title}</span>
                            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                          </div>
                          <p className="text-[11px] text-muted-foreground">{ch.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Active Page
                </span>
                <span className="font-mono text-xs">{sec.url || `${sec.children.length} Sub-pages`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
