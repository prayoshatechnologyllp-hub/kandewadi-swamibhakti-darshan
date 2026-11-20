import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBanner, ContentBody } from "@/components/SiteLayout";
import altarShrine from "@/assets/altar-shrine-close.jpg";
import prayerHallAarti from "@/assets/prayer-hall-aarti.jpg";
import palkhiCeremony from "@/assets/palkhi-ceremony.jpg";
import { Clock, Radio, Bell } from "lucide-react";
import { useState } from "react";

const intro = "Experience live spiritual darshan, daily aartis, and sacred functions of Shree Swami Samarth Maharaj from Kandewadi Math.";
const body = [
  "Through eDarshan, devotees across the world can connect with the divine grace of Shree Swami Samarth Maharaj from the comfort of their homes. Watch live webcasts of the holy sanctum sanctorum, daily morning and evening aartis, and major utsav ceremonies.",
  "Participating in online darshan with pure heart and mindfulness brings the same peace and spiritual solace as standing before the sacred padukas at the Math."
];

const schedule = [
  { aarti: "Kakad Aarti", time: "6:00 AM – 6:45 AM", desc: "Awakening of the deity with sacred stotras and morning milk offering." },
  { aarti: "Madhyanha Aarti & Bhog", time: "12:00 PM – 12:30 PM", desc: "Afternoon Aarti and offering of Mahaprasad naivedya." },
  { aarti: "Dhoop Aarti & Palkhi", time: "7:00 PM – 8:00 PM", desc: "Evening dhoop deep aarti, followed by Palkhi Sohala on Thursdays." },
  { aarti: "Shej Aarti", time: "9:30 PM – 10:00 PM", desc: "Night lullaby aarti concluding the day's sacred rituals." },
];

export const Route = createFileRoute("/edarshan")({
  head: () => ({
    meta: [
      { title: "eDarshan - Darshan (Live Aarti / Functions) | Shree Swami Samarth Math" },
      { name: "description", content: intro },
      { property: "og:title", content: "eDarshan - Darshan (Live Aarti / Functions) | Shree Swami Samarth Math" },
      { property: "og:description", content: intro }
    ]
  }),
  component: EDarshanComponent,
});

function EDarshanComponent() {
  const [flowerCount, setFlowerCount] = useState(0);

  return (
    <SiteLayout>
      <PageBanner title="eDarshan - Live Darshan & Aarti" />
      
      <div className="mx-auto max-w-4xl px-4 pt-8">
        <div className="rounded-md border-2 border-gold bg-gradient-to-r from-maroon via-maroon-dark to-maroon p-6 text-cream shadow-temple text-center">
          <h2 className="font-display text-2xl font-bold text-gold">Sacred Live Streaming Facility in Progress</h2>
          <p className="mt-2 text-xs sm:text-sm text-cream/90 max-w-2xl mx-auto leading-relaxed">
            High-definition cameras and dedicated streaming lines are currently being installed in the inner sanctum (Gabhara). Devotees worldwide will soon be able to take live darshan and participate in daily aartis from anywhere.
          </p>
        </div>
      </div>

      <ContentBody intro={intro} body={body} />

      <div className="mx-auto max-w-4xl px-4 pb-16">
        {/* Video Player */}
        <div className="relative aspect-video overflow-hidden rounded-md border-4 border-gold shadow-temple bg-black">
          <img src={altarShrine} alt="Live Sanctum Darshan of Shree Swami Samarth Padukas" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />

          {/* Live Indicator */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-rose-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
            <Radio className="h-3.5 w-3.5 animate-pulse" />
            <span>LIVE SANCTUM FEED</span>
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs text-gold">॥ श्री स्वामी समर्थ ॥</p>
              <h3 className="font-display text-xl text-white">Gabhara Live Darshan — Kandewadi, Girgaum</h3>
            </div>
            <button
              onClick={() => setFlowerCount((c) => c + 1)}
              className="inline-flex items-center gap-2 rounded bg-gradient-saffron px-4 py-2 text-xs font-semibold text-primary-foreground shadow hover:brightness-110 transition"
            >
              <Bell className="h-4 w-4" />
              <span>Offer Virtual Flowers ({flowerCount})</span>
            </button>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="mt-12">
          <div className="text-center">
            <h3 className="font-display text-2xl text-maroon">Daily Live Aarti Timings</h3>
            <div className="divider mx-auto mt-3" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {schedule.map((s, idx) => (
              <div key={idx} className="rounded-md border-l-4 border-gold bg-card p-4 shadow-temple">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-maroon">{s.aarti}</h4>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    <Clock className="h-3.5 w-3.5" />
                    {s.time}
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
