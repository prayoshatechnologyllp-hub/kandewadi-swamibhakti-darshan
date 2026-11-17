import hero from "@/assets/hero-temple.jpg";
import utsav from "@/assets/utsav.jpg";
import founder from "@/assets/founder.jpg";

const events = [
  ["Shree Swami Samarth Prakat Din", "Chaitra Shuddha Dwitiya"],
  ["Gurupournima Utsav", "Ashadh Pournima"],
  ["Punyatithi Utsav", "Chaitra Vadya Trayodashi"],
  ["Datta Jayanti", "Margashirsha Pournima"],
  ["Navratri Utsav", "Ashwin Shuddha Pratipada"],
];

export function SectionExtra({ section, slug }: { section: string; slug: string }) {
  if (slug === "founder") {
    return (
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-[320px_1fr]">
        <figure className="text-center">
          <img src={founder} alt="Founder of the Math" loading="lazy" width={800} height={1008} className="w-full rounded-md border-8 border-card shadow-temple" />
          <figcaption className="mt-3 font-display text-lg text-maroon">Founder (name placeholder)</figcaption>
          <p className="text-sm text-muted-foreground">1900 – 1975</p>
        </figure>
        <blockquote className="rounded-md border-l-4 border-gold bg-card p-6 font-display text-xl italic text-maroon shadow-temple">"Lorem ipsum dolor sit amet — serve every devotee as you would serve Shree Swami Samarth himself."</blockquote>
      </div>
    );
  }
  if (section === "gallery" || slug === "photos") {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <img key={i} src={i % 2 ? utsav : hero} alt="Gallery" loading="lazy" width={600} height={400} className="aspect-[4/3] w-full rounded-md border-4 border-card object-cover shadow-temple" />
        ))}
      </div>
    );
  }
  if (slug === "calendar") {
    return (
      <div className="mx-auto max-w-4xl px-4">
        <table className="w-full overflow-hidden rounded-md bg-card shadow-temple">
          <thead className="bg-gradient-saffron text-left text-primary-foreground"><tr><th className="p-3">Utsav</th><th className="p-3">Tithi</th></tr></thead>
          <tbody>{events.map(([a, b]) => <tr key={a} className="border-t"><td className="p-3">{a}</td><td className="p-3 text-muted-foreground">{b}</td></tr>)}</tbody>
        </table>
      </div>
    );
  }
  if (section === "seva") {
    return (
      <form className="mx-auto grid max-w-2xl gap-4 rounded-md bg-card p-6 shadow-temple md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); alert("Thank you! (Demo form)"); }}>
        {["Full Name", "Mobile Number", "Email", "Gotra", "Seva Date", "Amount (₹)"].map((f) => (
          <label key={f} className="text-sm text-maroon">{f}<input required={f === "Full Name"} className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
        ))}
        <button className="btn-saffron md:col-span-2">Proceed</button>
      </form>
    );
  }
  return null;
}
