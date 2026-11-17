import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-temple.jpg";
import utsav from "@/assets/utsav.jpg";

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
          <p className="font-display text-gold tracking-[0.3em]">॥ श्री स्वामी समर्थ ॥</p>
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

      <section className="mt-20 bg-banner py-16 text-center">
        <h2 className="font-display text-3xl text-gold-foreground">An Appeal to Devotees</h2>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-gold-foreground/85">Contribute generously towards the projects undertaken by the Math. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <Link to="/appeal" className="btn-outline-gold mt-6">Know More</Link>
      </section>
    </SiteLayout>
  );
}
