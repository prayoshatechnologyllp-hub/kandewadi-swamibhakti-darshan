import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";
import { Heart, Landmark, Utensils, Stethoscope, BookOpen } from "lucide-react";

const intro = "An Appeal to devotees for contributing generously for projects undertaken by Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum.";
const body = [
  "Shree Swami Samarth Maharaj Math has been a spiritual refuge for devotees for generations. To cater to the growing number of devotees visiting the Math and to expand our social outreach, the Trust has undertaken several vital renovation and welfare projects.",
  "We humbly appeal to all devotees and benevolent patrons across the globe to contribute wholeheartedly towards these sacred endeavors. Your generous contributions directly support the preservation of our heritage and the service of humanity."
];

const projects = [
  {
    icon: Landmark,
    title: "Sanctum Restoration & Heritage Preservation",
    goal: "₹25,00,000",
    desc: "Renovating the ancient marble sanctum, structural reinforcement, and artistic gold leafing of the altar and paduka shrine.",
  },
  {
    icon: Utensils,
    title: "Annachhatra & Dining Hall Modernization",
    goal: "₹15,00,000",
    desc: "Expanding the community kitchen and dining facilities to serve hygienic, hot Mahaprasad to over 1,000 devotees daily.",
  },
  {
    icon: Stethoscope,
    title: "Charitable Medical Clinic & Ambulance Seva",
    goal: "₹10,00,000",
    desc: "Establishing a daily free diagnostic clinic with essential medicines, doctor consultations, and subsidized emergency patient transport.",
  },
  {
    icon: BookOpen,
    title: "Vedic Library & Devotional Audio-Visual Archive",
    goal: "₹8,00,000",
    desc: "Preserving ancient sacred scriptures, publishing Marathi devotional literature, and digitizing historic temple records.",
  },
];

export const Route = createFileRoute("/appeal")({
  head: () => ({
    meta: [
      { title: "An Appeal for Math Projects | Shree Swami Samarth Math" },
      { name: "description", content: intro },
      { property: "og:title", content: "An Appeal for Math Projects | Shree Swami Samarth Math" },
      { property: "og:description", content: intro }
    ]
  }),
  component: AppealComponent,
});

function AppealComponent() {
  return (
    <SiteLayout>
      <PageBanner title="An Appeal to Devotees" crumb="Projects" />
      <ContentBody intro={intro} body={body} />

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="text-center">
          <h3 className="font-display text-2xl text-maroon">Current Projects Undertaken by the Math</h3>
          <div className="divider mx-auto mt-3" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col justify-between rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg text-maroon">{p.title}</h4>
                      <p className="text-xs font-semibold text-primary">Target: {p.goal}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.desc}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <span className="text-xs text-muted-foreground">Every contribution counts</span>
                  <Link to="/seva/donation" className="btn-saffron text-xs py-2 px-4">
                    Contribute to Project
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-14 rounded-md bg-banner p-8 text-center text-gold-foreground shadow-temple">
          <Heart className="mx-auto h-10 w-10 text-gold" />
          <h3 className="mt-3 font-display text-2xl font-bold">Donate Generously for Swami's Seva</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gold-foreground/85">
            Your contributions earn the divine blessings of Shree Swami Samarth Maharaj. All donations receive valid trust receipts with 80G tax benefits.
          </p>
          <div className="mt-6">
            <Link to="/seva/donation" className="btn-outline-gold">
              Make an Online Donation
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
