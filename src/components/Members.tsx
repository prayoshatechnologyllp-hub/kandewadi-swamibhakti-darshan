import founder from "@/assets/founder.jpg";
import m1 from "@/assets/member1.jpg";
import m2 from "@/assets/member2.jpg";
import m3 from "@/assets/member3.jpg";

export const members = [
  { img: founder, name: "Shri Founder Name", role: "Founder" },
  { img: m3, name: "Shri Member Name", role: "Founding Member" },
  { img: m2, name: "Smt. Member Name", role: "Founding Member" },
  { img: m1, name: "Shri Member Name", role: "Founding Member" },
];
export const trustees = [
  { img: m3, name: "Shri Trustee Name", role: "Chairman" },
  { img: m1, name: "Shri Trustee Name", role: "Secretary" },
  { img: m2, name: "Smt. Trustee Name", role: "Treasurer" },
  { img: founder, name: "Shri Trustee Name", role: "Trustee" },
  { img: m1, name: "Shri Trustee Name", role: "Trustee" },
  { img: m3, name: "Shri Trustee Name", role: "Trustee" },
];

export function MemberGrid({ title, list }: { title: string; list: typeof members }) {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="text-center"><h2 className="font-display text-3xl text-maroon">{title}</h2><div className="divider mx-auto mt-3" /></div>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {list.map((m, i) => (
          <div key={i} className="group overflow-hidden rounded-md border-t-4 border-gold bg-card text-center shadow-temple">
            <div className="overflow-hidden"><img src={m.img} alt={m.name} loading="lazy" width={800} height={1008} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-4"><h3 className="font-display text-lg text-maroon">{m.name}</h3><p className="text-sm text-primary">{m.role}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
