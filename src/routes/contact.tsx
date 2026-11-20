import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const intro = "Official contact details and location of Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum, Mumbai.";
const body = [
  "Devotees and pilgrims are welcome to visit the Math for darshan, pooja sankalpa, and spiritual participation. You may reach our temple administrative office via phone or email for any queries regarding daily rituals and utsavs."
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shree Swami Samarth Math, Kandewadi, Girgaum" },
      { name: "description", content: intro },
      { property: "og:title", content: "Contact Us | Shree Swami Samarth Math, Kandewadi, Girgaum" },
      { property: "og:description", content: intro }
    ]
  }),
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <SiteLayout>
      <PageBanner title="Contact Us" />
      <ContentBody intro={intro} body={body} />

      <div className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Temple Location Card */}
          <div className="rounded-md border-t-4 border-gold bg-card p-6 sm:p-8 shadow-temple flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-maroon">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-maroon font-bold">Temple Location</h3>
                  <span className="text-xs text-muted-foreground">Kandewadi, Girgaum</span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                <p className="font-bold text-base text-maroon">
                  Shree Swami Samarth Maharaj Math
                </p>
                <p>
                  22, First Akkalkot Lane, Khadilkar Marg, Kandewadi,<br />
                  Girgaon, Mumbai – 400004.<br />
                  Maharashtra, INDIA.
                </p>
              </div>

              <div className="mt-6 rounded-md bg-secondary/50 p-4 border border-gold/30 text-xs text-foreground/80 space-y-1.5">
                <p className="font-semibold text-maroon">Directions & Transit:</p>
                <p>• <strong>Charni Road Railway Station (Western Line):</strong> ~10 minutes walking distance</p>
                <p>• <strong>Grant Road Railway Station:</strong> ~12 minutes distance</p>
                <p>• Landmark: Off Khadilkar Marg near First Akkalkot Lane</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <a
                href="https://maps.google.com/?q=22+First+Akkalkot+Lane+Khadilkar+Marg+Kandewadi+Girgaon+Mumbai+400004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-saffron w-full text-center text-xs py-2.5 inline-flex items-center justify-center gap-2"
              >
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Contact Numbers, Emails & Timings */}
          <div className="space-y-6">
            <div className="rounded-md border-t-4 border-gold bg-card p-6 sm:p-8 shadow-temple">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-maroon">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-maroon font-bold">Telephone & Mobile</h3>
                  <span className="text-xs text-muted-foreground">Direct helpline for devotees</span>
                </div>
              </div>

              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Mobile Numbers:</span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a href="tel:+918655654886" className="font-bold text-maroon hover:text-primary transition">+91 8655654886</a>
                      <span className="text-muted-foreground">/</span>
                      <a href="tel:+918655654887" className="font-bold text-maroon hover:text-primary transition">+91 8655654887</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/60">
                  <Mail className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Official Email Addresses:</span>
                    <p className="mt-0.5">
                      <a href="mailto:info@swamimathgirgaon.com" className="font-semibold text-maroon hover:text-primary transition">
                        info@swamimathgirgaon.com
                      </a>
                    </p>
                    <p className="mt-1">
                      <a href="mailto:swamimathgirgaon@gmail.com" className="font-semibold text-maroon hover:text-primary transition">
                        swamimathgirgaon@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Darshan & Office Hours Card */}
            <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-maroon">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-maroon font-bold">Darshan & Office Hours</h3>
                  <span className="text-xs text-muted-foreground">Temple visiting schedule</span>
                </div>
              </div>

              <div className="mt-4 rounded bg-secondary/40 p-4 border border-dashed border-gold/40 text-center">
                <p className="text-xs font-semibold text-maroon uppercase tracking-wider">Schedule Notice</p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  The Board of Trustees will announce the revised darshan and office timings here shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
