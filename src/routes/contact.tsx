import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const intro = "Get in touch with Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum, Mumbai.";
const body = [
  "Whether you wish to enquire about seva bookings, festival dates, Annadan sponsorship, or how to reach the Math, our temple administration is here to assist you with warmth and devotion.",
  "You are always welcome to visit the Math for darshan during open temple hours."
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageBanner title="Contact Us" />
      <ContentBody intro={intro} body={body} />

      <div className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Temple Details */}
          <div className="space-y-6 md:col-span-5">
            <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <h3 className="font-display text-xl text-maroon font-bold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Temple Location
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                <strong>Shree Swami Samarth Maharaj Math</strong><br />
                Kandewadi, Girgaum,<br />
                Mumbai – 400004, Maharashtra, India.
              </p>
              <div className="mt-4 border-t pt-3 text-xs text-muted-foreground">
                <strong>Nearest Transit:</strong><br />
                • Charni Road Station (Western Railway) — 10 mins walk<br />
                • Grant Road Station — 12 mins walk
              </div>
            </div>

            <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <h3 className="font-display text-xl text-maroon font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Darshan & Office Hours
              </h3>
              <div className="mt-3 space-y-2 text-sm text-foreground/85">
                <p><strong>Morning Darshan:</strong> 6:00 AM – 12:30 PM</p>
                <p><strong>Evening Darshan:</strong> 4:00 PM – 9:30 PM</p>
                <p><strong>Temple Office:</strong> 9:00 AM – 6:00 PM Daily</p>
              </div>
            </div>

            <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <h3 className="font-display text-xl text-maroon font-bold">Contact Info</h3>
              <div className="mt-3 space-y-2 text-sm text-foreground/85">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 (022) 2380 0000 / +91 98200 00000</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contact@kandewadimath.org</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-md border-t-4 border-gold bg-card p-8 shadow-temple"
            >
              <h3 className="font-display text-2xl text-maroon font-bold">Send an Inquiry or Prayer Request</h3>
              <p className="mt-1 text-xs text-muted-foreground">Fill out the form below and our temple coordinators will get back to you promptly.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-maroon">Your Full Name *</label>
                  <input required placeholder="Enter your name" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-maroon">Mobile Number *</label>
                    <input required placeholder="+91 00000 00000" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-maroon">Email Address</label>
                    <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-maroon">Subject / Inquiry Type *</label>
                  <select className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground">
                    <option>General Temple Inquiry</option>
                    <option>Online Seva & Abhishek Booking</option>
                    <option>Donation & 80G Receipt</option>
                    <option>Utsav & Palkhi Sohala Information</option>
                    <option>Prayer Sankalpa Request</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-maroon">Your Message / Prayer *</label>
                  <textarea required rows={4} placeholder="Write your message here..." className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
                </div>
                <button type="submit" className="btn-saffron w-full inline-flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
                {submitted && (
                  <div className="mt-3 rounded bg-emerald-50 p-3 text-center text-sm font-semibold text-emerald-800 border border-emerald-200">
                    ✓ Your message has been sent successfully. Shree Swami Samarth bless you!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
