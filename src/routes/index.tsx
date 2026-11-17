import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-temple.jpg";
import utsav from "@/assets/utsav.jpg";
import aarti from "@/assets/aarti.jpg";
import bhajan from "@/assets/bhajan.jpg";
import annadan from "@/assets/annadan.jpg";
import founder from "@/assets/founder.jpg";

const eventsGallery = [
  { img: utsav, t: "Palkhi Sohala", d: "Prakat Din Utsav" },
  { img: aarti, t: "Maha Aarti", d: "Gurupournima" },
  { img: bhajan, t: "Bhajan Sandhya", d: "Every Thursday" },
  { img: annadan, t: "Annadan Seva", d: "Punyatithi Utsav" },
  { img: hero, t: "Gabhara Darshan", d: "Daily" },
  { img: aarti, t: "Deepotsav", d: "Diwali" },
];
const videos = [
  { img: aarti, t: "Kakad Aarti – Live", d: "Daily 6:00 AM" },
  { img: utsav, t: "Prakat Din Palkhi 2026", d: "Utsav highlights" },
  { img: bhajan, t: "Tarak Mantra Bhajan", d: "Devotional" },
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
        <img src={hero} alt="Shree Swami Samarth Maharaj shrine" width={1600} height={912} className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center">
          <p className="text-lg text-gold">॥ श्री स्वामी समर्थ ॥</p>
          <h1 className="mt-2 max-w-3xl px-4 font-display text-4xl font-bold text-gold-foreground md:text-6xl">Shree Swami Samarth Maharaj Math</h1>
          <p className="mt-3 text-gold-foreground/90">Kandewadi, Girgaum, Mumbai</p>
          <div className="mt-6 flex gap-3"><Link to="/edarshan" className="btn-saffron">Live Darshan</Link><a href="/seva/donation" className="btn-outline-gold">Donate</a></div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 relative">
        {cards.map((c) => (
          <a key={c.t} href={c.h} className="rounded-md border-t-4 border-gold bg-card p-6 text-center shadow-temple transition hover:-translate-y-1">
            <h3 className="font-display text-xl text-maroon">{c.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-maroon">About the Math</h2>
          <div className="divider mt-3" />
          <p className="mt-5 leading-relaxed text-foreground/85">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="/about/history" className="btn-saffron mt-6">Read History</a>
        </div>
        <img src={utsav} alt="Utsav procession" loading="lazy" width={1200} height={800} className="rounded-md border-8 border-card shadow-temple" />
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-4 text-center sm:grid-cols-4">
        {[["75+","Years of Seva"],["20+","Utsavs a Year"],["1 Lakh+","Devotees"],["365","Days Annadan"]].map(([n,l]) => (
          <div key={l} className="rounded-md bg-secondary p-6"><div className="font-display text-4xl font-bold text-primary">{n}</div><div className="mt-1 text-sm text-maroon">{l}</div></div>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="text-center"><p className="text-primary">॥ उत्सव ॥</p><h2 className="font-display text-3xl text-maroon md:text-4xl">Event Gallery</h2><div className="divider mx-auto mt-3" /></div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {eventsGallery.map((e, i) => (
            <a key={i} href="/gallery/utsav-photos" className={`group relative overflow-hidden rounded-md shadow-temple ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={e.img} alt={e.t} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-hero-overlay opacity-80" />
              <div className="absolute bottom-0 p-4 text-left"><h3 className="font-display text-lg text-gold-foreground">{e.t}</h3><p className="text-xs text-gold">{e.d}</p></div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center"><a href="/gallery/utsav-photos" className="btn-saffron">View Full Gallery</a></div>
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
        <img src={founder} alt="Founder of the Math" loading="lazy" width={800} height={1008} className="rounded-md border-8 border-card shadow-temple" />
        <div>
          <p className="text-primary">Our Founder</p>
          <h2 className="font-display text-3xl text-maroon">A Life of Devotion</h2>
          <div className="divider mt-3" />
          <p className="mt-5 leading-relaxed text-foreground/85">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a href="/about/founder" className="btn-saffron mt-6">Know More</a>
        </div>
      </section>

      <section className="mt-20 bg-banner py-16 text-center">
        <h2 className="font-display text-3xl text-gold-foreground">An Appeal to Devotees</h2>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-gold-foreground/85">Contribute generously towards the projects undertaken by the Math. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <Link to="/appeal" className="btn-outline-gold mt-6">Know More</Link>
      </section>
    </SiteLayout>
  );
}
