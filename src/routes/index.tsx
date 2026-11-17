import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroAltar from "@/assets/altar-lotus-hall.jpg";
import templeExterior from "@/assets/temple-exterior-facade.jpg";
import aartiHall from "@/assets/prayer-hall-aarti.jpg";
import palkhiCeremony from "@/assets/palkhi-ceremony.jpg";
import sanctumDevotees from "@/assets/sanctum-devotees.jpg";
import plaqueFounder from "@/assets/plaque-founder-1898.png";
import glimpseSacredDarshan from "@/assets/glimpse-sacred-darshan.jpg";
import glimpseFestivalDecorations from "@/assets/glimpse-festival-decorations.jpg";
import glimpseDevotionLight from "@/assets/glimpse-devotion-light.jpg";
import swamiPortrait from "@/assets/swami-portrait-cutout.png";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
const videos = [
  { img: aartiHall, t: "Kakad Aarti – Live", d: "Daily 6:00 AM" },
  { img: palkhiCeremony, t: "Thursday Palkhi Sohala", d: "Weekly 7:30 PM" },
  { img: sanctumDevotees, t: "Sanctum Darshan & Bhajan", d: "Devotional Seva" },
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
  { t: "eDarshan", d: "Live Aarti & functions", h: "/edarshan" },
  { t: "Online Seva", d: "Abhishek, Laghurudra & more", h: "/seva/abhishek" },
  { t: "Donation", d: "Support the Math's projects", h: "/seva/donation" },
  { t: "Utsav Calendar", d: "Upcoming festivals", h: "/utsav/calendar" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative">
        <img src={heroAltar} alt="Shree Swami Samarth Maharaj sanctum shrine" width={1600} height={912} className="h-[75vh] w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center">
          <p className="text-lg text-gold">॥ श्री स्वामी समर्थ ॥ &nbsp; भिऊ नकोस, मी तुझ्या पाठीशी आहे</p>
          <h1 className="mt-2 max-w-4xl px-4 font-display text-4xl font-bold text-gold-foreground md:text-6xl">
            Shree Akkalkot Swami Samarth Math
          </h1>
          <p className="mt-3 text-base text-gold-foreground/90 font-medium">
            Khadilkar Road / Kandewadi, Girgaum, Mumbai – 400004
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/edarshan" className="btn-saffron">Live Darshan</Link>
            <Link to="/seva/donation" className="btn-outline-gold">Donate Seva</Link>
            <Link to="/utsav/calendar" className="btn-outline-gold">Utsav Calendar</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {cards.map((c) => (
          <a key={c.t} href={c.h} className="rounded-md border-t-4 border-gold bg-card p-6 text-center shadow-temple transition hover:-translate-y-1">
            <h3 className="font-display text-xl text-maroon">{c.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">SACRED HERITAGE</span>
          </div>
          <h2 className="mt-2 font-display text-3xl text-maroon md:text-4xl">About the Math</h2>
          <div className="divider mt-3" />
          <p className="mt-5 leading-relaxed text-foreground/85">
            Consecrated on <strong>8th October 1898</strong> on Khadilkar Road, Girgaum, the Math has served as a beacon of solace, peace, and divine blessings for over 125 years. The holy Padukas of Shree Swami Samarth Maharaj are worshipped daily with sacred Vedic rituals, akhand naam jap, and regular Thursday Palkhi Sohala.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80 text-sm">
            On 9th May 1907, the sacred vastu was formally entrusted to the Board of Trustees, sustaining a legacy of selfless Annadan, community seva, and spiritual upliftment.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/about/history" className="btn-saffron">Read History</Link>
            <Link to="/about/founder" className="btn-outline-gold">Our Founder</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border-8 border-card shadow-temple">
          <img src={templeExterior} alt="Math entrance on Khadilkar Road, Girgaum" loading="lazy" width={1200} height={800} className="w-full object-cover transition duration-700 hover:scale-105" />
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-4 text-center sm:grid-cols-4">
        {[["75+","Years of Seva"],["20+","Utsavs a Year"],["1 Lakh+","Devotees"],["365","Days Annadan"]].map(([n,l]) => (
          <div key={l} className="rounded-md bg-secondary p-6"><div className="font-display text-4xl font-bold text-primary">{n}</div><div className="mt-1 text-sm text-maroon">{l}</div></div>
        ))}
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

      <section className="mt-20 bg-banner py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center"><h2 className="font-display text-3xl text-gold-foreground md:text-4xl">Darshan Videos</h2><div className="divider mx-auto mt-3" /></div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((v) => (
              <a key={v.t} href="/edarshan" className="group overflow-hidden rounded-md bg-card shadow-temple">
                <div className="relative aspect-video">
                  <img src={v.img} alt={v.t} loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-saffron text-2xl text-primary-foreground shadow-temple transition group-hover:scale-110">▶</span>
                </div>
                <div className="p-4"><h3 className="font-display text-lg text-maroon">{v.t}</h3><p className="text-sm text-muted-foreground">{v.d}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-5xl items-center gap-10 px-4 md:grid-cols-[280px_1fr]">
        <div className="overflow-hidden rounded-md border-8 border-card shadow-temple bg-white flex items-center justify-center p-2">
          <img src={plaqueFounder} alt="Foundation Plaque - Shri Rao Saheb Ganesh Ballal Mulekar (1898)" loading="lazy" width={800} height={1008} className="max-h-[380px] w-auto object-contain" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">FOUNDER OF THE MATH</span>
          </div>
          <h2 className="mt-2 font-display text-3xl text-maroon">Shri Rao Saheb Ganesh Ballal Mulekar</h2>
          <div className="divider mt-3" />
          <p className="mt-5 leading-relaxed text-foreground/85">
            On <strong>8th October 1898</strong> (दिनांक ८ आक्टोबर १८९८), revered devotee Shri Rao Saheb Ganesh Ballal Mulekar, together with ardent Swami devotees, consecrated the holy Padukas of Shree Swami Samarth Maharaj at this sacred premises on Khadilkar Road, Girgaum.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80 text-sm">
            On 9th May 1907, his successor Shri Dattatraya Ganesh Mulekar formally entrusted the sacred property and operations to the Board of Trustees, creating an enduring legacy of devotion and service.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/about/founder" className="btn-saffron">Read Founder History</Link>
            <Link to="/about/trustees" className="btn-outline-gold">Board of Trustees</Link>
          </div>
        </div>
      </section>

      {/* Sacred Appeal Card */}
      <section className="mx-auto my-20 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-xl border-2 border-gold/60 bg-gradient-to-br from-maroon via-maroon to-maroon p-8 md:p-12 text-cream shadow-2xl">
          {/* Subtle background glow elements */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-12">
            {/* Swami Visual & Sacred Quote */}
            <div className="flex flex-col items-center text-center md:col-span-4 md:border-r md:border-gold/30 md:pr-8">
              <div className="relative mb-4 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border-2 border-gold/70 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 p-2 shadow-temple">
                <img
                  src={swamiPortrait}
                  alt="Shree Swami Samarth Maharaj"
                  className="h-full w-full object-contain filter drop-shadow-md"
                />
              </div>
              <p className="font-display text-lg font-bold text-gold">॥ भिऊ नकोस, मी तुझ्या पाठीशी आहे ॥</p>
              <p className="mt-1 text-xs text-cream/80 italic">"Fear not, I am always behind you."</p>
            </div>

            {/* Content & Action */}
            <div className="space-y-5 md:col-span-8 md:pl-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-6 bg-gold" />
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase">SUPPORT THE SACRED WORK</span>
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-foreground">
                  An Appeal to Devotees
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/90">
                  We humbly appeal to all devotees across the globe to contribute generously towards the ongoing sacred causes and seva of Kandewadi Math. Your selfless contribution helps sustain centuries of unbroken Vedic rituals, daily Annadan for pilgrims, and charitable welfare for the needy.
                </p>
              </div>

              {/* Cause Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="rounded-md border border-gold/30 bg-black/20 p-3 text-center sm:text-left">
                  <span className="text-base">🍲</span>
                  <p className="mt-1 font-display text-xs font-bold text-gold">Nitya Annadan Seva</p>
                  <p className="text-[11px] text-cream/70">Feeding 500+ pilgrims daily</p>
                </div>
                <div className="rounded-md border border-gold/30 bg-black/20 p-3 text-center sm:text-left">
                  <span className="text-base">🏛️</span>
                  <p className="mt-1 font-display text-xs font-bold text-gold">Sanctum Restoration</p>
                  <p className="text-[11px] text-cream/70">Preserving our 1898 sacred vastu</p>
                </div>
                <div className="rounded-md border border-gold/30 bg-black/20 p-3 text-center sm:text-left">
                  <span className="text-base">🩺</span>
                  <p className="mt-1 font-display text-xs font-bold text-gold">Charity & Health Camps</p>
                  <p className="text-[11px] text-cream/70">Free clinics & educational aid</p>
                </div>
              </div>

              {/* Buttons & Trust guarantee */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/seva/$slug"
                  params={{ slug: "donation" }}
                  className="inline-flex items-center gap-2 rounded-sm bg-gradient-saffron px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-temple transition duration-200 hover:brightness-110"
                >
                  Donate Online Now
                </Link>
                <Link
                  to="/appeal"
                  className="inline-flex items-center gap-2 rounded-sm border-2 border-gold px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-gold transition duration-200 hover:bg-gold hover:text-maroon"
                >
                  View Ongoing Projects
                </Link>
                <span className="text-[11px] text-cream/75 flex items-center gap-1.5 w-full sm:w-auto">
                  <span className="text-gold font-bold">✓</span> Official Trust Receipts Issued
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
