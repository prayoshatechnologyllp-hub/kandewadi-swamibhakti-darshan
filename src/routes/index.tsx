import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroAltar from "@/assets/altar-lotus-hall.jpg";
import templeExterior from "@/assets/temple-exterior-facade.jpg";
import aartiHall from "@/assets/prayer-hall-aarti.jpg";
import palkhiCeremony from "@/assets/palkhi-ceremony.jpg";
import sanctumDevotees from "@/assets/sanctum-devotees.jpg";
import glimpseSacredDarshan from "@/assets/glimpse-sacred-darshan.jpg";
import glimpseFestivalDecorations from "@/assets/glimpse-festival-decorations.jpg";
import glimpseDevotionLight from "@/assets/glimpse-devotion-light.jpg";
import { Calendar, Clock, ArrowRight, Play, X, ExternalLink, Flame } from "lucide-react";
import { useState } from "react";

const upcomingUtsavs = [
  {
    date: "14",
    month: "APR",
    title: "Swami Prakat Din",
    subtitle: "Kakad Aarti, Abhishek & Mahaprasad",
    time: "5:30 AM onwards",
    link: "/utsav/calendar",
  },
  {
    date: "22",
    month: "APR",
    title: "Thursday Palkhi",
    subtitle: "Evening Aarti followed by Palkhi Sohala",
    time: "7:30 PM",
    link: "/utsav/calendar",
  },
  {
    date: "03",
    month: "MAY",
    title: "Guru Pushyamrut",
    subtitle: "Special puja and collective naam smaran",
    time: "6:00 AM onwards",
    link: "/utsav/calendar",
  },
];

const dailyAartis = [
  {
    marathi: "काकड आरती",
    english: "Kakad Aarti",
    time: "6:00 AM",
    type: "Morning Dawn",
    desc: "Sacred dawn awakening of Shree Swami Samarth, Panchamrut Snan & Stotra chanting.",
  },
  {
    marathi: "दुपारची आरती",
    english: "Madhyana Aarti / Bhog",
    time: "12:00 PM",
    type: "Midday Offering",
    desc: "Consecrated afternoon Mahaprasad naivedya arpan, shankha naad & puja.",
  },
  {
    marathi: "धूप आरती",
    english: "Dhoop Aarti",
    time: "7:00 PM",
    type: "Sunset Sandhya",
    desc: "Sunset illumination of holy lamps, dhoop deep archan & collective bhajan.",
  },
  {
    marathi: "शेज आरती",
    english: "Shej Aarti",
    time: "9:30 PM",
    type: "Night Rest",
    desc: "Lullaby and night prayer putting the Guru to rest with sacred silence.",
  },
];

const videos = [
  {
    img: aartiHall,
    t: "Kakad Aarti – Live Darshan",
    d: "Daily 6:00 AM",
    youtubeId: "rR34e8rZ2cM",
  },
  {
    img: palkhiCeremony,
    t: "Thursday Palkhi Sohala & Chanting",
    d: "Weekly 7:30 PM",
    youtubeId: "W4i2B6QvO8g",
  },
  {
    img: sanctumDevotees,
    t: "Sanctum Utsav & Bhajan Sandhya",
    d: "Devotional Seva",
    youtubeId: "vB0jP8h7WlA",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Swami Samarth Maharaj Math – Kandewadi, Girgaum" },
      { name: "description", content: "Official website of Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum – eDarshan, online seva, utsav and donations." },
      { property: "og:title", content: "Shree Swami Samarth Maharaj Math – Kandewadi" },
      { property: "og:description", content: "eDarshan, online seva, utsav calendar and donations." },
    ],
  }),
  component: Index,
});

const cards = [
  { t: "eDarshan", d: "Live Aarti & functions (Coming Soon)", h: "/edarshan" },
  { t: "Online Seva", d: "Abhishek, Laghurudra & more", h: "/seva/registration" },
  { t: "Donation", d: "Support the Math's projects", h: "/seva/donation" },
  { t: "Utsav Calendar", d: "Upcoming festivals", h: "/utsav/calendar" },
];

function Index() {
  const [activeYoutubeVideo, setActiveYoutubeVideo] = useState<{
    t: string;
    d: string;
    youtubeId: string;
  } | null>(null);

  return (
    <SiteLayout>
      {/* Mobile-Friendly Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroAltar}
          alt="Shree Swami Samarth Maharaj sanctum shrine"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-16 text-center max-w-4xl">
          <p className="text-xs sm:text-base md:text-lg text-gold font-medium tracking-wide">
            ॥ श्री स्वामी समर्थ ॥ &nbsp; भिऊ नकोस, मी तुझ्या पाठीशी आहे
          </p>
          <h1 className="mt-2 font-display text-2xl sm:text-4xl md:text-6xl font-bold text-gold-foreground leading-tight sm:leading-snug">
            Shree Akkalkot Swami Samarth Math
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gold-foreground/90 font-medium max-w-xl mx-auto">
            Khadilkar Road / Kandewadi, Girgaum, Mumbai – 400004
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <Link to="/utsav/calendar" className="btn-saffron text-xs sm:text-sm px-4 sm:px-6 py-2.5">
              Math Utsav
            </Link>
            <Link to="/seva/donation" className="btn-outline-gold text-xs sm:text-sm px-4 sm:px-6 py-2.5">
              Donate Seva
            </Link>
            <Link to="/gallery/utsav-videos" className="btn-outline-gold text-xs sm:text-sm px-4 sm:px-6 py-2.5">
              Utsav Videos
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {cards.map((c) => (
          <a key={c.t} href={c.h} className="rounded-md border-t-4 border-gold bg-card p-6 text-center shadow-temple transition hover:-translate-y-1">
            <h3 className="font-display text-xl text-maroon">{c.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </a>
        ))}
      </section>

      {/* About The Math */}
      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">SACRED HERITAGE</span>
          </div>
          <h2 className="mt-2 font-display text-3xl text-maroon md:text-4xl">About the Math</h2>
          <div className="divider mt-3" />
          <p className="mt-5 leading-relaxed text-foreground/85 text-sm sm:text-base">
            Consecrated on <strong>8th October 1898</strong> on Khadilkar Road, Girgaum, the Math has served as a beacon of solace, peace, and divine blessings for over 125 years. The holy Padukas of Shree Swami Samarth Maharaj are worshipped daily with sacred Vedic rituals, akhand naam jap, and regular Thursday Palkhi Sohala.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80 text-sm">
            On 9th May 1907, the sacred vastu was formally entrusted to the Board of Trustees, sustaining a timeless legacy of selfless Annadan, community seva, and spiritual upliftment.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/about/history" className="btn-saffron">Read History</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border-8 border-card shadow-temple">
          <img src={templeExterior} alt="Math entrance on Khadilkar Road, Girgaum" loading="lazy" width={1200} height={800} className="w-full object-cover transition duration-700 hover:scale-105" />
        </div>
      </section>

      {/* Daily Live Aarti Timings (4 Boxes in place of statistics) */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-6 bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">SACRED DAILY SCHEDULE</span>
            <span className="h-[1.5px] w-6 bg-primary" />
          </div>
          <h2 className="mt-2 font-display text-3xl text-maroon md:text-4xl">Daily Live Aarti Timings</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Traditional Vedic aartis conducted daily by learned temple priests</p>
          <div className="divider mx-auto mt-3" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dailyAartis.map((a, i) => (
            <div
              key={i}
              className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="rounded bg-gold/15 px-2.5 py-1 text-xs font-bold text-maroon">
                    {a.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{a.time}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-xl font-bold text-maroon">{a.marathi}</h3>
                  <h4 className="text-sm font-semibold text-primary">{a.english}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">{a.desc}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-gold">
                <span className="flex items-center gap-1.5 text-maroon">
                  <Flame className="h-3.5 w-3.5 text-primary" /> Live in Temple
                </span>
                <span className="font-bold text-primary">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Math Utsav - Upcoming sacred celebrations */}
      <section className="relative mt-20 overflow-hidden bg-[#631B17] py-16 text-[#F7F2EB] lg:py-20">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #E6B15C 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#E6B15C]" />
              <span className="text-xs font-semibold tracking-widest text-[#E6B15C] uppercase">
                MATH UTSAV
              </span>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[#FAF5ED] md:text-5xl">
              Upcoming <br />
              sacred <br />
              <span className="italic font-normal text-[#E8C59A]">celebrations.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#DEC2AE] sm:text-base">
              Come together in devotion and celebrate the traditions that connect our community.
            </p>
            <div className="mt-8">
              <Link
                to="/utsav/calendar"
                className="inline-flex items-center gap-2.5 rounded bg-[#F5E9D5] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#631B17] transition hover:bg-white hover:shadow-lg"
              >
                <Calendar className="h-4 w-4 text-[#631B17]" />
                <span>VIEW FULL CALENDAR</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Events List */}
          <div className="border-t border-[#872D28] lg:col-span-7">
            {upcomingUtsavs.map((event, idx) => (
              <Link
                key={idx}
                to={event.link}
                className="group flex items-center justify-between gap-4 border-b border-[#872D28] py-6 px-2 sm:px-3 transition hover:bg-[#70211D]/40 rounded-sm"
              >
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Date badge */}
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded border border-[#8E322D] bg-[#581714]/60 text-center sm:h-20 sm:w-20">
                    <span className="font-display text-2xl font-light text-[#FAF5ED] leading-none sm:text-3xl">
                      {event.date}
                    </span>
                    <span className="mt-1 text-[10px] font-bold tracking-widest text-[#E6B15C] sm:text-xs">
                      {event.month}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-display text-lg font-medium text-[#FAF5ED] transition group-hover:text-[#E8C59A] sm:text-xl">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#DEC2AE] sm:text-sm">
                      {event.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-[#E6B15C]">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8E322D] text-[#FAF5ED] transition group-hover:border-[#E8C59A] group-hover:bg-[#E8C59A] group-hover:text-[#631B17]">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Moments - Glimpses from the Math */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#C97A44]" />
              <span className="text-xs font-semibold tracking-widest text-[#C97A44] uppercase">
                DIVINE MOMENTS
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl text-maroon md:text-5xl">
              Glimpses from the <span className="italic font-normal text-primary">Math.</span>
            </h2>
          </div>
          <Link
            to="/gallery/utsav-photos"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-maroon transition hover:text-primary uppercase"
          >
            <span>VIEW COMPLETE GALLERY</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Main Ganesha / Sacred Darshan Card */}
          <Link
            to="/gallery/other-deities"
            className="group relative overflow-hidden rounded-md shadow-temple md:col-span-7 aspect-[16/11] md:aspect-auto md:h-full min-h-[340px]"
          >
            <img
              src={glimpseSacredDarshan}
              alt="Sacred Darshan"
              loading="lazy"
              width={1000}
              height={700}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>

          {/* Right 2 Cards */}
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link
              to="/gallery/utsav-photos"
              className="group relative overflow-hidden rounded-md shadow-temple aspect-[16/9] min-h-[165px]"
            >
              <img
                src={glimpseFestivalDecorations}
                alt="Festival Decorations"
                loading="lazy"
                width={700}
                height={400}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>

            <Link
              to="/gallery/utsav-photos"
              className="group relative overflow-hidden rounded-md shadow-temple aspect-[16/9] min-h-[165px]"
            >
              <img
                src={glimpseDevotionLight}
                alt="Devotion in Light"
                loading="lazy"
                width={700}
                height={400}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Utsav Videos Section with YouTube Pop up */}
      <section className="mt-20 bg-banner py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl text-gold-foreground md:text-4xl">Utsav Videos</h2>
            <p className="mt-1 text-xs text-gold/80">Click any video to watch through YouTube in a separate popup</p>
            <div className="divider mx-auto mt-3" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((v) => (
              <div
                key={v.t}
                onClick={() => setActiveYoutubeVideo(v)}
                className="group overflow-hidden rounded-md bg-card shadow-temple cursor-pointer transition hover:-translate-y-1"
              >
                <div className="relative aspect-video">
                  <img src={v.img} alt={v.t} loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-saffron text-2xl text-primary-foreground shadow-temple transition group-hover:scale-110">
                    <Play className="h-7 w-7 fill-current ml-1" />
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-maroon">{v.t}</h3>
                    <p className="text-xs text-muted-foreground">{v.d}</p>
                  </div>
                  <span className="rounded bg-secondary p-2 text-maroon group-hover:bg-gold transition">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gallery/utsav-videos"
              className="inline-flex items-center gap-2 rounded border border-gold bg-gold/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-foreground transition hover:bg-gold hover:text-maroon"
            >
              <span>View All Utsav Videos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Pop up Player Modal */}
      {activeYoutubeVideo && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveYoutubeVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg bg-card border-2 border-gold shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-maroon px-4 py-3 text-gold-foreground">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-gold fill-current" />
                <h3 className="font-display text-sm sm:text-base font-bold text-gold">
                  {activeYoutubeVideo.t}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveYoutubeVideo(null)}
                className="rounded-full bg-white/10 p-1.5 text-gold hover:bg-white/20 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeYoutubeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeYoutubeVideo.t}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>

            <div className="p-4 bg-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t">
              <span className="text-muted-foreground">{activeYoutubeVideo.d} • Shree Swami Samarth Math, Kandewadi</span>
              <a
                href={`https://www.youtube.com/watch?v=${activeYoutubeVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-maroon hover:text-primary transition"
              >
                <span>Watch directly on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
