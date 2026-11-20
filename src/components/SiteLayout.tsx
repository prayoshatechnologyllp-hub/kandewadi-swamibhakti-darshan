import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { sections, type SectionKey } from "@/lib/site";
import swamiLogo from "@/assets/swami-portrait-cutout.png";

const prefix: Record<SectionKey, string> = { about: "/about", seva: "/seva", utsav: "/utsav", gallery: "/gallery", legal: "/legal" };

function Dropdown({ k }: { k: Exclude<SectionKey, "legal"> }) {
  const s = sections[k];
  return (
    <li className="group relative">
      <span className="nav-link cursor-default">{s.label} ▾</span>
      <ul className="invisible absolute left-0 top-full z-50 min-w-60 rounded-b-md border-t-2 border-gold bg-card py-2 opacity-0 shadow-temple transition group-hover:visible group-hover:opacity-100">
        {Object.entries(s.pages).map(([slug, pg]) => (
          <li key={slug}>
            <a href={`${prefix[k]}/${slug}`} className="block px-4 py-2 text-sm text-card-foreground hover:bg-secondary hover:text-primary">{pg.title}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-maroon py-1.5 text-center text-xs tracking-widest text-gold-foreground">॥ श्री स्वामी समर्थ ॥ &nbsp; Bhiu Nakos, Mi Tujhya Pathishi Aahe</div>
      <header className="border-b-4 border-gold bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 p-1 shadow-temple transition duration-300 group-hover:scale-105 group-hover:border-gold-light">
              <img
                src={swamiLogo}
                alt="Shree Swami Samarth Maharaj"
                className="h-full w-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div>
              <span className="block font-display text-lg font-bold text-maroon sm:text-2xl leading-tight transition duration-200 group-hover:text-primary">
                Shree Swami Samarth Maharaj Math
              </span>
              <span className="block text-xs sm:text-sm text-muted-foreground">
                Kandewadi, Girgaum, Mumbai • <span className="text-gold font-medium">Estd. 1898</span>
              </span>
            </div>
          </Link>
          <a href="/seva/donation" className="btn-saffron hidden md:inline-flex">Donate Now</a>
          <button className="md:hidden text-2xl text-maroon" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
        <nav className={`bg-gradient-saffron ${open ? "block" : "hidden"} md:block`}>
          <ul className="mx-auto flex max-w-7xl flex-col px-4 md:flex-row md:flex-wrap md:items-center">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <Dropdown k="about" />
            <li>
              <span className="nav-link opacity-60 cursor-not-allowed select-none inline-block" title="Disabled">
                eDarshan
              </span>
            </li>
            <Dropdown k="seva" />
            <Dropdown k="utsav" />
            <li>
              <span className="nav-link opacity-60 cursor-not-allowed select-none inline-block" title="Disabled">
                An Appeal
              </span>
            </li>
            <Dropdown k="gallery" />
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main className="pb-16">{children}</main>
      <footer className="border-t-4 border-gold bg-maroon text-gold-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 bg-cream/10 p-1">
                <img src={swamiLogo} alt="Shree Swami Samarth Math" className="h-full w-full object-contain" />
              </div>
              <h3 className="font-display text-xl text-gold">Shree Swami Samarth Math</h3>
            </div>
            <p className="mt-3 text-sm opacity-80">
              22, First Akkalkot Lane, Khadilkar Marg, Kandewadi,<br />
              Girgaon, Mumbai – 400004, Maharashtra, India.<br />
              Phone: +91 8655654886 / 8655654887<br />
              Email: info@swamimathgirgaon.com
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-gold">Quick Links</h3>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              <li><Link to="/about/history">History of Math</Link></li>
              <li><span className="opacity-50 cursor-not-allowed">eDarshan</span></li>
              <li><Link to="/seva/donation">Online Seva & Donation</Link></li>
              <li><Link to="/utsav/calendar">Utsav Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-gold">Darshan Timings</h3>
            <p className="mt-3 text-sm opacity-80">Morning: 6:00 AM – 12:30 PM<br />Evening: 4:00 PM – 9:30 PM<br />Aarti: 7:00 AM & 7:30 PM</p>
          </div>
        </div>
        <div className="border-t border-gold/30 py-4 text-center text-xs opacity-80">
          {Object.entries(sections.legal.pages).map(([slug, pg], i) => (
            <span key={slug}>{i > 0 && " | "}<a href={`/legal/${slug}`} className="hover:text-gold">{pg.title}</a></span>
          ))}
          <div className="mt-2">© {new Date().getFullYear()} Shree Swami Samarth Maharaj Math, Kandewadi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export function PageBanner({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <section className="bg-banner py-14 text-center">
      <h1 className="font-display text-3xl font-bold text-gold-foreground md:text-5xl">{title}</h1>
      <p className="mt-2 text-sm text-gold">Home {crumb ? `› ${crumb} ` : ""}› {title}</p>
      <div className="divider mx-auto mt-4" />
    </section>
  );
}

export function ContentBody({ intro, body }: { intro: string; body: readonly string[] }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="font-display text-xl text-maroon">{intro}</p>
      {body.map((b, i) => <p key={i} className="mt-5 leading-relaxed text-foreground/85">{b}</p>)}
    </div>
  );
}
