import swamiPortraitCutout from "@/assets/swami-portrait-cutout.png";
import swamiPortraitCloud from "@/assets/swami-portrait-cloud.png";
import havanPooja from "@/assets/havan-pooja.jpg";
import templeCorridor from "@/assets/temple-corridor.jpg";
import priestsVedicChanting from "@/assets/priests-vedic-chanting.jpg";
import templeEntranceDoor from "@/assets/temple-entrance-door.jpg";
import sanctumDevotees from "@/assets/sanctum-devotees.jpg";
import prayerHallAarti from "@/assets/prayer-hall-aarti.jpg";
import palkhiCeremony from "@/assets/palkhi-ceremony.jpg";
import altarLotusHall from "@/assets/altar-lotus-hall.jpg";
import altarShrineClose from "@/assets/altar-shrine-close.jpg";
import plaqueFounder1898 from "@/assets/plaque-founder-1898.png";
import plaqueTrustees1907 from "@/assets/plaque-trustees-1907.png";
import templeExteriorFacade from "@/assets/temple-exterior-facade.jpg";
import { MemberGrid, members, trustees } from "@/components/Members";
import {
  CheckCircle,
  XCircle,
  Download,
  Heart,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  List,
  Grid,
  Play,
  Lock,
  User,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const annualFestivals = [
  { date: "2026-01-14", name: "Makar Sankranti", tithi: "Pausha Shukla", timing: "6:00 AM – 9:00 PM", type: "Major", desc: "Special Surya Arghya, Tilgul Mahaprasad distribution, and morning aarti." },
  { date: "2026-02-15", name: "Maha Shivratri", tithi: "Magha Krishna Chaturdashi", timing: "5:30 AM – 11:00 PM", type: "Major", desc: "Akhand Rudrabhishek throughout the day and night with sacred Bilvapatra archana." },
  { date: "2026-03-03", name: "Holi Pournima", tithi: "Phalguna Pournima", timing: "6:00 AM – 9:30 PM", type: "Pournima", desc: "Holika Dahan, sacred fire pujan and evening bhajan sandhya." },
  { date: "2026-03-20", name: "Gudi Padwa", tithi: "Chaitra Shuddha Pratipada", timing: "6:00 AM – 10:00 PM", desc: "Marathi New Year celebrations, Gudi Pujan and annual Panchang reading." },
  { date: "2026-04-14", name: "Shree Swami Samarth Prakat Din", tithi: "Chaitra Shuddha Dwitiya", timing: "5:30 AM – 10:30 PM", type: "Major", desc: "Prakat Din Utsav, Kakad Aarti, Maha Abhishek, Palkhi Sohala, and continuous Mahaprasad." },
  { date: "2026-04-22", name: "Akshaya Tritiya & Thursday Palkhi", tithi: "Vaishakha Shuddha Tritiya", timing: "6:00 AM – 10:00 PM", type: "Major", desc: "Golden Paduka darshan, special Abhishek, followed by grand evening Palkhi Sohala." },
  { date: "2026-04-30", name: "Punyatithi Utsav", tithi: "Chaitra Vadya Trayodashi", timing: "5:30 AM – 9:30 PM", type: "Major", desc: "Solemn remembrance day of Shree Swami Samarth Maharaj with continuous Annadan." },
  { date: "2026-05-03", name: "Guru Pushyamrut Yoga", tithi: "Pushya Nakshatra", timing: "6:00 AM – 9:30 PM", type: "Major", desc: "Auspicious day for Guru Paduka pujan, spiritual sankalpa, and special collective naam smaran." },
  { date: "2026-05-17", name: "Mohini Ekadashi", tithi: "Vaishakha Shukla Ekadashi", timing: "6:00 AM – 9:30 PM", type: "Ekadashi", desc: "Special fasting day with Vishnu Sahasranama recital and divine bhajan." },
  { date: "2026-05-31", name: "Vat Pournima", tithi: "Jyeshtha Pournima", timing: "6:00 AM – 9:30 PM", type: "Pournima", desc: "Vat Savitri pujan and special evening Maha Aarti." },
  { date: "2026-07-10", name: "Ashadhi Ekadashi (Devshayani)", tithi: "Ashadha Shukla Ekadashi", timing: "5:30 AM – 10:00 PM", type: "Ekadashi", desc: "Grand Vitthal-Swami devotional bhajan sandhya and holy fasting prasad." },
  { date: "2026-07-29", name: "Gurupournima Mahotsav", tithi: "Ashadha Pournima", timing: "5:30 AM – 11:00 PM", type: "Major", desc: "Guru Paduka pujan, floral pushpabhishek, Guru Gita recitations, and feast for thousands of devotees." },
  { date: "2026-08-27", name: "Raksha Bandhan / Narali Pournima", tithi: "Shravana Pournima", timing: "6:00 AM – 9:30 PM", type: "Pournima", desc: "Sacred thread change ritual, special coconut offering, and evening aarti." },
  { date: "2026-09-04", name: "Gokulashtami / Sri Krishna Janmotsav", tithi: "Shravana Krishna Ashtami", timing: "6:00 AM – 12:30 AM", type: "Major", desc: "Midnight Janmotsav aarti, cradle ceremony, and Dahi Handi festivities." },
  { date: "2026-09-15", name: "Ganesh Chaturthi (Ganeshotsav)", tithi: "Bhadrapada Shukla Chaturthi", timing: "6:00 AM – 10:00 PM", type: "Major", desc: "Consecration of Math Ganesha, 21 Modak naivedya, and Atharvashirsha avartans." },
  { date: "2026-09-25", name: "Anant Chaturdashi", tithi: "Bhadrapada Shukla Chaturdashi", timing: "6:00 AM – 9:30 PM", type: "Major", desc: "Anant Vrat pujan, concluding aartis, and prayer offerings." },
  { date: "2026-10-12", name: "Navratri Ghatsthapana", tithi: "Ashwina Shukla Pratipada", timing: "6:00 AM – 10:00 PM", type: "Major", desc: "Commencement of 9-day sacred Durga Navratri, Kumkumarchana and Akhand Jyot." },
  { date: "2026-10-20", name: "Vijayadashami (Dasara)", tithi: "Ashwina Shukla Dashami", timing: "6:00 AM – 10:30 PM", type: "Major", desc: "Simollanghan, Shami pujan, exchange of golden Apta leaves, and evening Palkhi procession." },
  { date: "2026-11-08", name: "Diwali Deepotsav & Lakshmi Pujan", tithi: "Kartika Amavasya", timing: "6:00 AM – 10:30 PM", type: "Major", desc: "Illumination of temple premises with 1,000 earthen diyas, flower decoration, and Lakshmi pujan." },
  { date: "2026-11-20", name: "Kartiki Ekadashi (Prabodhini)", tithi: "Kartika Shukla Ekadashi", timing: "6:00 AM – 9:30 PM", type: "Ekadashi", desc: "Awakening of the deities, start of Tulsi Vivah ceremonies, and sacred kirtan." },
  { date: "2026-12-23", name: "Datta Jayanti Mahotsav", tithi: "Margashirsha Pournima", timing: "5:30 AM – 11:00 PM", type: "Major", desc: "Grand celebration of Lord Dattatreya birth with 24-hour akhand naam jap, palanquin, and Mahaprasad." },
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function UtsavInteractiveCalendar() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(3); // Default to April (Month of Prakat Din)
  const [selectedDateKey, setSelectedDateKey] = useState("2026-04-14");
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [filterType, setFilterType] = useState<"all" | "major" | "palkhi" | "ekadashi">("all");

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const jumpToMonth = (m: number) => {
    setCurrentYear(2026);
    setCurrentMonth(m);
    if (m === 3) setSelectedDateKey("2026-04-14");
    if (m === 6) setSelectedDateKey("2026-07-29");
    if (m === 10) setSelectedDateKey("2026-11-08");
    if (m === 11) setSelectedDateKey("2026-12-23");
  };

  // Calendar cell builder
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const pad = (n: number) => String(n).padStart(2, "0");

  const getEventsForDay = (y: number, m: number, d: number) => {
    const key = `${y}-${pad(m + 1)}-${pad(d)}`;
    const dayOfWeek = new Date(y, m, d).getDay();
    const matches = annualFestivals.filter((f) => f.date === key);
    const list = [...matches];

    // Every Thursday has Palkhi Sohala
    if (dayOfWeek === 4 && !list.some((e) => e.name.includes("Palkhi"))) {
      list.push({
        date: key,
        name: "Thursday Palkhi Sohala",
        tithi: "Shukla/Krishna Paksha",
        timing: "7:30 PM onwards",
        type: "palkhi",
        desc: "Weekly sacred palanquin procession around the temple with devotional chanting.",
      });
    }

    if (filterType === "all") return list;
    if (filterType === "major") return list.filter((e) => e.type === "Major");
    if (filterType === "palkhi") return list.filter((e) => e.type === "palkhi" || e.name.includes("Palkhi"));
    if (filterType === "ekadashi") return list.filter((e) => e.type === "Ekadashi" || e.type === "Pournima");
    return list;
  };

  // Selected date info
  const selectedDateObj = new Date(selectedDateKey);
  const selectedEvents = (() => {
    const y = selectedDateObj.getFullYear();
    const m = selectedDateObj.getMonth();
    const d = selectedDateObj.getDate();
    return getEventsForDay(y, m, d);
  })();

  const filteredAnnualList = annualFestivals.filter((f) => {
    if (filterType === "all") return true;
    if (filterType === "major") return f.type === "Major";
    if (filterType === "palkhi") return f.name.includes("Palkhi");
    if (filterType === "ekadashi") return f.type === "Ekadashi" || f.type === "Pournima";
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      {/* Top Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        {/* Quick Month Jumps */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground mr-1">Key Utsavs:</span>
          <button
            onClick={() => jumpToMonth(3)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${currentMonth === 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-gold hover:text-maroon"}`}
          >
            Apr (Prakat Din)
          </button>
          <button
            onClick={() => jumpToMonth(6)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${currentMonth === 6 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-gold hover:text-maroon"}`}
          >
            Jul (Gurupournima)
          </button>
          <button
            onClick={() => jumpToMonth(10)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${currentMonth === 10 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-gold hover:text-maroon"}`}
          >
            Nov (Deepotsav)
          </button>
          <button
            onClick={() => jumpToMonth(11)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${currentMonth === 11 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-gold hover:text-maroon"}`}
          >
            Dec (Datta Jayanti)
          </button>
        </div>

        {/* View Switcher */}
        <div className="inline-flex rounded-md border border-border p-1 bg-card shadow-sm self-start sm:self-auto">
          <button
            onClick={() => setViewMode("calendar")}
            className={`inline-flex items-center gap-1.5 rounded px-3 py-1 text-xs font-semibold transition ${viewMode === "calendar" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Grid className="h-3.5 w-3.5" />
            <span>Calendar View</span>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`inline-flex items-center gap-1.5 rounded px-3 py-1 text-xs font-semibold transition ${viewMode === "list" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="h-3.5 w-3.5" />
            <span>List View</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => setFilterType("all")}
          className={`rounded-md px-3.5 py-1.5 font-semibold transition ${filterType === "all" ? "bg-maroon text-gold-foreground shadow" : "bg-card border text-foreground/80 hover:bg-secondary"}`}
        >
          All Celebrations
        </button>
        <button
          onClick={() => setFilterType("major")}
          className={`rounded-md px-3.5 py-1.5 font-semibold transition ${filterType === "major" ? "bg-maroon text-gold-foreground shadow" : "bg-card border text-foreground/80 hover:bg-secondary"}`}
        >
          ⭐ Major Utsavs
        </button>
        <button
          onClick={() => setFilterType("palkhi")}
          className={`rounded-md px-3.5 py-1.5 font-semibold transition ${filterType === "palkhi" ? "bg-maroon text-gold-foreground shadow" : "bg-card border text-foreground/80 hover:bg-secondary"}`}
        >
          🛕 Thursday Palkhi
        </button>
        <button
          onClick={() => setFilterType("ekadashi")}
          className={`rounded-md px-3.5 py-1.5 font-semibold transition ${filterType === "ekadashi" ? "bg-maroon text-gold-foreground shadow" : "bg-card border text-foreground/80 hover:bg-secondary"}`}
        >
          🌕 Pournima & Ekadashi
        </button>
      </div>

      {viewMode === "calendar" ? (
        /* Calendar View */
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
          {/* Calendar Grid Container */}
          <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple lg:col-span-8">
            {/* Month Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <button
                onClick={prevMonth}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-maroon hover:bg-secondary transition"
                aria-label="Previous Month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-maroon">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <span className="text-xs text-muted-foreground">Kandewadi Math Utsav Panchang</span>
              </div>

              <button
                onClick={nextMonth}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-maroon hover:bg-secondary transition"
                aria-label="Next Month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Weekdays */}
            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {dayNames.map((day, idx) => (
                <div key={day} className={`py-2 ${idx === 4 ? "text-primary font-extrabold" : ""}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Previous month filler cells */}
              {Array.from({ length: firstDay }).map((_, i) => {
                const prevDateNum = prevMonthDays - firstDay + i + 1;
                return (
                  <div
                    key={`prev-${i}`}
                    className="aspect-square rounded border border-transparent p-1.5 text-xs text-muted-foreground/40 bg-secondary/20"
                  >
                    <span>{prevDateNum}</span>
                  </div>
                );
              })}

              {/* Current month days */}
              {Array.from({ length: totalDays }).map((_, i) => {
                const dayNum = i + 1;
                const cellKey = `${currentYear}-${pad(currentMonth + 1)}-${pad(dayNum)}`;
                const isSelected = selectedDateKey === cellKey;
                const eventsOnDay = getEventsForDay(currentYear, currentMonth, dayNum);
                const hasMajor = eventsOnDay.some((e) => e.type === "Major");
                const hasPalkhi = eventsOnDay.some((e) => e.name.includes("Palkhi"));
                const hasEkadashi = eventsOnDay.some((e) => e.type === "Ekadashi" || e.type === "Pournima");
                const dayOfWeek = new Date(currentYear, currentMonth, dayNum).getDay();

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    onClick={() => setSelectedDateKey(cellKey)}
                    className={`group relative flex aspect-square flex-col justify-between rounded p-1.5 text-left transition border ${
                      isSelected
                        ? "border-primary bg-primary/10 ring-2 ring-primary shadow-sm"
                        : hasMajor
                        ? "border-gold bg-amber-50/50 hover:bg-amber-100/60"
                        : hasPalkhi
                        ? "border-orange-200 bg-orange-50/40 hover:bg-orange-100/50"
                        : "border-border/60 bg-card hover:bg-secondary/60"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-xs font-semibold ${
                          isSelected
                            ? "text-primary font-bold"
                            : hasMajor
                            ? "text-maroon font-bold"
                            : dayOfWeek === 4
                            ? "text-primary font-bold"
                            : "text-foreground/90"
                        }`}
                      >
                        {dayNum}
                      </span>
                      {hasMajor && (
                        <Sparkles className="h-3 w-3 text-amber-600 animate-pulse" />
                      )}
                    </div>

                    {/* Events Mini Tags */}
                    <div className="w-full space-y-0.5 overflow-hidden">
                      {eventsOnDay.slice(0, 1).map((ev, idx) => (
                        <div
                          key={idx}
                          className={`truncate rounded px-1 py-0.5 text-[9px] font-medium leading-tight ${
                            ev.type === "Major"
                              ? "bg-gradient-saffron text-primary-foreground font-bold"
                              : ev.name.includes("Palkhi")
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-secondary text-maroon"
                          }`}
                          title={ev.name}
                        >
                          {ev.name.replace("Shree Swami Samarth ", "").replace(" Mahotsav", "")}
                        </div>
                      ))}
                      {eventsOnDay.length > 1 && (
                        <span className="block text-[8px] font-bold text-primary leading-none">
                          +{eventsOnDay.length - 1} more
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-gradient-saffron" /> Major Swami Utsav
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-amber-100 border border-amber-300" /> Thursday Palkhi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-primary bg-primary/20" /> Selected Date
              </span>
            </div>
          </div>

          {/* Selected Date Details Panel */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <CalendarIcon className="h-4 w-4" />
                <span>Selected Date Schedule</span>
              </div>

              <h4 className="mt-2 font-display text-xl text-maroon font-bold">
                {selectedDateObj.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h4>

              {/* Events for this day */}
              <div className="mt-4 space-y-3">
                {selectedEvents.length > 0 ? (
                  selectedEvents.map((ev, idx) => (
                    <div key={idx} className="rounded-md border-l-4 border-gold bg-secondary/50 p-3.5">
                      <div className="flex items-center justify-between">
                        <h5 className="font-display text-sm font-bold text-maroon">{ev.name}</h5>
                        {ev.type === "Major" && (
                          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                            Special Utsav
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs font-semibold text-primary">Tithi: {ev.tithi}</p>
                      <p className="mt-1 text-xs text-foreground/80 leading-relaxed">{ev.desc}</p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{ev.timing}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-md bg-secondary/40 p-4 text-xs text-foreground/80 leading-relaxed">
                    <p className="font-semibold text-maroon">Daily Nitya Pooja & Darshan</p>
                    <p className="mt-1">Standard temple hours apply. Devotees are welcome for darshan and offering prayers.</p>
                  </div>
                )}
              </div>

              {/* Daily Temple Timings */}
              <div className="mt-6 border-t pt-4">
                <h5 className="font-display text-xs font-bold text-maroon uppercase tracking-wider">Daily Aarti Routine</h5>
                <ul className="mt-2 space-y-1 text-xs text-foreground/80">
                  <li className="flex justify-between"><span>Kakad Aarti:</span> <span className="font-semibold text-primary">6:00 AM</span></li>
                  <li className="flex justify-between"><span>Madhyanha Aarti:</span> <span className="font-semibold text-primary">12:00 PM</span></li>
                  <li className="flex justify-between"><span>Dhoop Aarti:</span> <span className="font-semibold text-primary">7:00 PM</span></li>
                  <li className="flex justify-between"><span>Shej Aarti:</span> <span className="font-semibold text-primary">9:30 PM</span></li>
                </ul>
              </div>

              {/* CTA to book seva */}
              <div className="mt-6 pt-4 border-t">
                <Link
                  to="/seva/abhishek"
                  className="btn-saffron w-full text-center text-xs py-2.5 block"
                >
                  Book Abhishek for this Date
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="mt-8 overflow-x-auto rounded-md border-t-4 border-gold shadow-temple">
          <table className="w-full overflow-hidden bg-card text-left text-sm">
            <thead className="bg-gradient-saffron text-primary-foreground">
              <tr>
                <th className="p-4 font-display">Date</th>
                <th className="p-4 font-display">Sacred Festival / Utsav</th>
                <th className="p-4 font-display">Tithi (Hindu Calendar)</th>
                <th className="p-4 font-display">Timings</th>
                <th className="p-4 font-display">Celebration Highlights</th>
                <th className="p-4 font-display text-right">Seva</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnnualList.map((e, idx) => {
                const dateObj = new Date(e.date);
                return (
                  <tr key={idx} className="border-t hover:bg-secondary/40 transition">
                    <td className="p-4 whitespace-nowrap font-semibold text-maroon">
                      {dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="p-4 font-semibold text-foreground">
                      <div className="flex items-center gap-1.5">
                        {e.type === "Major" && <span className="text-amber-500">⭐</span>}
                        <span>{e.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground/85 whitespace-nowrap">{e.tithi}</td>
                    <td className="p-4 text-xs text-primary whitespace-nowrap">{e.timing}</td>
                    <td className="p-4 text-xs text-muted-foreground max-w-xs">{e.desc}</td>
                    <td className="p-4 text-right">
                      <Link to="/seva/abhishek" className="rounded bg-secondary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-gold hover:text-maroon transition whitespace-nowrap">
                        Book Seva
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function SectionExtra({ section, slug }: { section: string; slug: string }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number | null>(1100);

  // History timeline
  if (slug === "history") {
    return (
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <h3 className="text-center font-display text-2xl text-maroon">Chronicles of Sacred Devotion</h3>
        <div className="divider mx-auto mt-3" />

        {/* Historic Foundation Plaques */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 items-center">
          <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded border shadow-sm max-h-80 overflow-hidden flex items-center justify-center">
              <img src={plaqueFounder1898} alt="Paduka Consecration Plaque 1898" className="max-h-72 object-contain" />
            </div>
            <span className="mt-4 font-display text-xl font-bold text-primary">8th October 1898</span>
            <h4 className="font-display text-base font-bold text-maroon">Paduka Consecration</h4>
            <p className="mt-2 text-xs text-foreground/85 leading-relaxed">
              Shri Rao Saheb Ganesh Ballal Mulekar with fellow devotees consecrated the sacred Padukas of Akkalkot Niwasi Shree Swami Samarth Maharaj in this holy vastu on Khadilkar Road, Girgaum.
            </p>
          </div>

          <div className="rounded-md border-t-4 border-gold bg-card p-6 shadow-temple flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded border shadow-sm max-h-80 overflow-hidden flex items-center justify-center">
              <img src={plaqueTrustees1907} alt="Trust Handover Plaque 1907" className="max-h-72 object-contain" />
            </div>
            <span className="mt-4 font-display text-xl font-bold text-primary">9th May 1907</span>
            <h4 className="font-display text-base font-bold text-maroon">Handover to Trustees</h4>
            <p className="mt-2 text-xs text-foreground/85 leading-relaxed">
              Shri Dattatraya Ganesh Mulekar formally entrusted the governance and administration of the Math property to the Board of Trustees for perpetuity.
            </p>
          </div>
        </div>

        {/* Temple Photos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple">
            <img src={templeExteriorFacade} alt="Khadilkar Road Temple Facade" className="aspect-video w-full object-cover" />
            <div className="p-4">
              <h5 className="font-display text-base text-maroon font-bold">Temple Entrance — Khadilkar Road, Girgaum</h5>
              <p className="mt-1 text-xs text-muted-foreground">The historic entrance welcoming devotees for over a century.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple">
            <img src={templeCorridor} alt="Inner Temple Corridor" className="aspect-video w-full object-cover" />
            <div className="p-4">
              <h5 className="font-display text-base text-maroon font-bold">Sanctum Corridor & Wall Shrines</h5>
              <p className="mt-1 text-xs text-muted-foreground">Serene marble passageways leading to the inner sanctum sanctorum.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Founder page
  if (slug === "founder") {
    return (
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-md border-8 border-card bg-white p-4 shadow-temple">
            <img src={plaqueFounder1898} alt="Shri Rao Saheb Ganesh Ballal Mulekar Foundation Plaque" className="max-h-[420px] w-auto object-contain" />
            <figcaption className="mt-3 font-display text-lg text-maroon font-bold">Shri Rao Saheb Ganesh Ballal Mulekar</figcaption>
            <p className="text-xs text-muted-foreground">Founder — Consecrated on 8th October 1898</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-md border-8 border-card shadow-temple overflow-hidden bg-white">
              <img src={swamiPortraitCloud} alt="Divine Shree Swami Samarth Maharaj" className="w-full aspect-[4/3] object-contain p-2" />
            </div>
            <blockquote className="rounded-md border-l-4 border-gold bg-card p-5 font-display text-lg italic text-maroon shadow-temple">
              "॥ भिऊ नकोस, मी तुझ्या पाठीशी आहे ॥ — Serve every devotee with unconditional love and humility as you would serve Shree Swami Samarth himself."
            </blockquote>
            <p className="leading-relaxed text-foreground/85 text-sm">
              Shri Rao Saheb Ganesh Ballal Mulekar was a towering devotee whose pure devotion brought the holy presence of Akkalkot Niwasi Shree Swami Samarth to Girgaum, Mumbai.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Trustees page
  if (slug === "trustees") return <MemberGrid title="Board of Trustees" list={trustees} />;

  // Social Activities
  if (slug === "social-activities") {
    const activities = [
      {
        img: prayerHallAarti,
        title: "Nitya Annadan Seva",
        subtitle: "Daily Food Distribution",
        desc: "Serving warm, sanctified vegetarian meals daily to devotees, sadhus, and the needy with boundless love and reverence. Over 500 meals are offered daily in the spirit of 'Manav Seva hi Madhav Seva'.",
        stats: "500+ Daily Meals",
      },
      {
        img: sanctumDevotees,
        title: "Spiritual & Satsang Seva",
        subtitle: "Collective Chanting & Guidance",
        desc: "Daily collective prayer, Tarak Mantra chanting, Vedic recitations, and philosophical discourses providing solace, mental peace, and spiritual upliftment to thousands of visiting families.",
        stats: "Daily Gatherings",
      },
      {
        img: palkhiCeremony,
        title: "Community Celebrations",
        subtitle: "Thursday Palkhi & Utsavs",
        desc: "Organizing grand weekly Thursday Palkhi Sohala and annual festival feasts that unite thousands of devotees from all walks of life in devotional brotherhood.",
        stats: "Weekly Tradition",
      },
      {
        img: templeCorridor,
        title: "Charity & Medical Aid",
        subtitle: "Free Clinics & Education",
        desc: "Providing financial aid, free diagnostic health check-up camps, distribution of school kits to underprivileged children, and immediate disaster relief supplies.",
        stats: "Community Care",
      },
    ];
    return (
      <div className="mx-auto max-w-6xl px-4 pb-16 space-y-12">
        {/* Impact Highlights */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-md border border-gold/40 bg-card p-5 text-center shadow-temple">
            <span className="block font-display text-3xl font-bold text-maroon">125+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Years of Unbroken Seva</span>
          </div>
          <div className="rounded-md border border-gold/40 bg-card p-5 text-center shadow-temple">
            <span className="block font-display text-3xl font-bold text-maroon">500+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Daily Free Meals</span>
          </div>
          <div className="rounded-md border border-gold/40 bg-card p-5 text-center shadow-temple">
            <span className="block font-display text-3xl font-bold text-maroon">1,000+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Patients Treated Annually</span>
          </div>
          <div className="rounded-md border border-gold/40 bg-card p-5 text-center shadow-temple">
            <span className="block font-display text-3xl font-bold text-maroon">100%</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Public Trust & Devotion</span>
          </div>
        </div>

        {/* Detailed Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple transition-transform duration-200 hover:-translate-y-1">
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img src={a.img} alt={a.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                <span className="absolute bottom-2 right-2 rounded bg-maroon/90 px-2 py-0.5 text-[11px] font-semibold text-gold">
                  {a.stats}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gold font-medium">{a.subtitle}</span>
                  <h4 className="mt-1 font-display text-lg font-bold text-maroon">{a.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seva Support Banner */}
        <div className="rounded-md border border-gold/40 bg-gradient-to-r from-maroon via-maroon-dark to-maroon p-8 text-cream shadow-temple text-center">
          <h3 className="font-display text-2xl font-bold text-gold">Be a Part of Swami's Mission</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-cream/90">
            Devotees can actively participate or sponsor any of our ongoing charitable and Annadan initiatives. Every small contribution directly touches a needy soul.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/seva/$slug"
              params={{ slug: "donation" }}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-maroon-dark transition-all hover:bg-gold-light"
            >
              Support Annadan & Charity
            </Link>
            <Link
              to="/appeal"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/60 px-6 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-cream transition-all hover:bg-gold/10"
            >
              View Ongoing Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Does & Donts
  if (slug === "dos-and-donts") {
    const dos = [
      "Wear traditional, clean, and modest attire suitable for a sacred temple.",
      "Deposit your shoes and footwear at the designated counter before entering.",
      "Maintain peaceful silence in the prayer hall to respect meditating devotees.",
      "Turn off your mobile phones or keep them strictly on silent mode.",
      "Stand in designated queues patiently during peak aarti hours.",
      "Offer coconuts, flowers, and holy prasad with pure devotion.",
      "Accept sacred Teerth and Angara with reverence using your right hand.",
    ];
    const donts = [
      "Do NOT take photos or video recordings inside the inner sanctum (Gabhara).",
      "Do NOT touch the sacred idols or holy padukas directly without priest permission.",
      "Do NOT consume tobacco, betel nut (paan), or alcohol on or near temple premises.",
      "Do NOT carry large bags, leather items, or sharp objects into the sanctum.",
      "Do NOT litter flowers, plastic bags, or paper anywhere inside the temple.",
      "Do NOT cause disturbance, loud speech, or phone conversations during live aartis.",
      "Do NOT rush or break queue decorum during Palkhi Sohala and festival darshan.",
    ];
    return (
      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-16 md:grid-cols-2">
        <div className="rounded-md border-t-4 border-emerald-600 bg-card p-6 shadow-temple">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle className="h-6 w-6" />
            <h3 className="font-display text-xl font-bold">DO'S for Devotees</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {dos.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border-t-4 border-rose-600 bg-card p-6 shadow-temple">
          <div className="flex items-center gap-2 text-rose-700">
            <XCircle className="h-6 w-6" />
            <h3 className="font-display text-xl font-bold">DON'TS for Devotees</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {donts.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Utsav Calendar
  if (slug === "calendar") {
    return <UtsavInteractiveCalendar />;
  }

  // Online Seva forms
  if (section === "seva") {
    if (slug === "sign-in") {
      return (
        <div className="mx-auto max-w-md px-4 pb-16">
          <form
            onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
            className="rounded-md border-t-4 border-gold bg-card p-6 sm:p-8 shadow-temple space-y-4"
          >
            <div className="text-center pb-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-maroon mb-2">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-maroon">Devotee Sign In</h3>
              <p className="text-xs text-muted-foreground mt-1">Access your seva history, receipts & sankalpa records</p>
            </div>

            <label className="block text-sm text-maroon font-medium">
              Registered Mobile Number / Devotee ID *
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input required placeholder="+91 98765 43210" className="w-full rounded border border-input bg-background pl-9 pr-3 py-2 text-foreground text-sm" />
              </div>
            </label>

            <label className="block text-sm text-maroon font-medium">
              Password or 6-digit OTP *
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input type="password" required placeholder="••••••••" className="w-full rounded border border-input bg-background pl-9 pr-3 py-2 text-foreground text-sm" />
              </div>
            </label>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" className="rounded border-input text-primary" />
                <span>Remember me</span>
              </label>
              <a href="#otp" className="text-primary hover:underline font-semibold">Request OTP</a>
            </div>

            <button type="submit" className="btn-saffron w-full py-2.5 mt-2">
              Sign In to Devotee Account
            </button>

            {formSubmitted && (
              <div className="mt-2 rounded bg-emerald-50 p-3 text-center text-xs font-semibold text-emerald-800 border border-emerald-200">
                ✓ Signed in successfully! Welcome back to Shree Swami Samarth Seva Portal.
              </div>
            )}

            <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
              New to the Math portal?{" "}
              <Link to="/seva/$slug" params={{ slug: "registration" }} className="text-primary font-bold hover:underline">
                Register as a Devotee
              </Link>
            </div>
          </form>
        </div>
      );
    }

    if (slug === "donation" || slug === "annadan" || slug === "goshala" || slug === "jeernodhar") {
      const tierMap: Record<string, { amount: number; label: string }[]> = {
        donation: [
          { amount: 501, label: "Daily Aarti & Flowers" },
          { amount: 1100, label: "One Day Annadan Seva" },
          { amount: 2500, label: "Special Mahapooja & Prasad" },
          { amount: 5000, label: "Temple Renovation Fund" },
          { amount: 11000, label: "Permanent Seva Patron" },
        ],
        annadan: [
          { amount: 501, label: "10 Pilgrims Mahaprasad" },
          { amount: 1100, label: "One Session Annadan Seva" },
          { amount: 2500, label: "Full Day Temple Mahaprasad" },
          { amount: 5000, label: "Festival Feast Sponsorship" },
          { amount: 11000, label: "Annual Memorial Annadan" },
        ],
        goshala: [
          { amount: 351, label: "One Day Green Grass (Chara)" },
          { amount: 1001, label: "Monthly Cow Fodder Seva" },
          { amount: 2500, label: "Gau Pooja & Medical Care" },
          { amount: 5000, label: "Goshala Shelter Maintenance" },
          { amount: 11000, label: "Annual Cow Adoption Seva" },
        ],
        jeernodhar: [
          { amount: 1001, label: "Marble Tile Renovation" },
          { amount: 2500, label: "Brass Sanctum Gate Polish" },
          { amount: 5000, label: "Sanctum Pillar Restoration" },
          { amount: 11000, label: "Gold Leafing & Carving" },
          { amount: 25000, label: "Heritage Vastu Patron" },
        ],
      };
      const tiers = tierMap[slug] || tierMap.donation;
      return (
        <div className="mx-auto max-w-4xl px-4 pb-12">
          {/* Tiers */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {tiers.map((t) => (
              <button
                key={t.amount}
                type="button"
                onClick={() => setSelectedTier(t.amount)}
                className={`rounded-md border p-3 text-center transition ${selectedTier === t.amount ? "border-gold bg-primary text-primary-foreground shadow-md" : "border-border bg-card text-card-foreground hover:bg-secondary"}`}
              >
                <div className="font-display text-lg font-bold">₹{t.amount.toLocaleString()}</div>
                <div className="mt-1 text-[11px] leading-tight opacity-90">{t.label}</div>
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
            className="mt-8 grid gap-4 rounded-md border-t-4 border-gold bg-card p-6 shadow-temple md:grid-cols-2"
          >
            <label className="text-sm text-maroon">
              Full Name *
              <input required defaultValue="Shree Devotee" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
            </label>
            <label className="text-sm text-maroon">
              Mobile Number *
              <input required defaultValue="+91 98765 43210" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
            </label>
            <label className="text-sm text-maroon">
              Email Address
              <input type="email" defaultValue="devotee@example.com" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
            </label>
            <label className="text-sm text-maroon">
              Contribution Amount (₹) *
              <input
                required
                type="number"
                value={selectedTier || ""}
                onChange={(e) => setSelectedTier(Number(e.target.value))}
                className="mt-1 w-full rounded border border-input bg-background px-3 py-2 font-bold text-primary"
              />
            </label>
            <label className="text-sm text-maroon md:col-span-2">
              PAN Number (for 80G Tax Exemption Receipt)
              <input placeholder="ABCDE1234F" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground uppercase" />
            </label>
            <div className="md:col-span-2 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>All donations are eligible for tax deduction under Section 80G of the Income Tax Act.</span>
            </div>
            <button type="submit" className="btn-saffron md:col-span-2 mt-2">
              Proceed to Offer Donation (₹{selectedTier || 0})
            </button>
          </form>

          {formSubmitted && (
            <div className="mt-4 rounded-md bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-800 border border-emerald-200">
              ✓ Thank you for offering your generous donation! May Shree Swami Samarth bless you and your family.
            </div>
          )}

          {/* Bank details */}
          <div className="mt-8 rounded-md bg-secondary/70 p-6 border border-border">
            <h4 className="font-display text-lg text-maroon flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Direct Bank Transfer / NEFT / RTGS Details
            </h4>
            <div className="mt-3 grid gap-3 text-xs sm:grid-cols-2 text-foreground/85">
              <p><strong>Account Name:</strong> Shree Swami Samarth Maharaj Math Trust</p>
              <p><strong>Bank:</strong> State Bank of India, Girgaum Branch</p>
              <p><strong>Account Number:</strong> 000000123456789</p>
              <p><strong>IFSC Code:</strong> SBIN0000123</p>
              <p><strong>UPI ID:</strong> swamibhakti@upi</p>
            </div>
          </div>
        </div>
      );
    }

    if (slug === "registration") {
      return (
        <form
          onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
          className="mx-auto max-w-2xl grid gap-4 rounded-md border-t-4 border-gold bg-card p-6 shadow-temple md:grid-cols-2"
        >
          <label className="text-sm text-maroon">Full Name *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon">Mobile Number *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon">Email Address<input type="email" className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon">Gotra<input placeholder="e.g. Kashyap, Bharadwaj" className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon">Date of Birth<input type="date" className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon">Nakshatra / Rashi<input placeholder="Optional" className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <label className="text-sm text-maroon md:col-span-2">Residential Address (for Prasad delivery)<textarea rows={2} className="mt-1 w-full rounded border border-input bg-background px-3 py-2" /></label>
          <button type="submit" className="btn-saffron md:col-span-2">Register as Devotee</button>
          {formSubmitted && (
            <div className="md:col-span-2 mt-2 rounded bg-emerald-50 p-3 text-center text-sm font-semibold text-emerald-800 border border-emerald-200">
              ✓ Registration Successful! Welcome to the Kandewadi Swami Parivar.
            </div>
          )}
        </form>
      );
    }

    if (slug === "abhishek") {
      return (
        <div className="mx-auto max-w-5xl px-4 pb-12 grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-5 rounded-md border-t-4 border-gold bg-card p-5 shadow-temple">
            <img src={priestsVedicChanting} alt="Temple Priests performing Vedic recitation" className="w-full aspect-[4/3] rounded object-cover" />
            <h4 className="mt-4 font-display text-base font-bold text-maroon">Vedic Abhishek by Math Priests</h4>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Performed at the lotus feet of Shree Swami Samarth with Panchamrut, holy water, and pure Bilvapatra while chanting the Sri Rudram and Purusha Suktam.
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
            className="md:col-span-7 grid gap-4 rounded-md border-t-4 border-gold bg-card p-6 shadow-temple md:grid-cols-2"
          >
            <label className="text-sm text-maroon md:col-span-2">
              Select Abhishek Type *
              <select className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground">
                <option>Panchamrut Abhishek Seva — ₹501</option>
                <option>Rudra Abhishek with Bilvapatra — ₹1,100</option>
                <option>Maha Abhishek on Thursday / Prakat Din — ₹2,100</option>
              </select>
            </label>
            <label className="text-sm text-maroon">Yajaman / Devotee Name *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Contact Number *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Family Gotra *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Preferred Date *<input type="date" required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon md:col-span-2">
              Sankalpa Purpose
              <input placeholder="e.g. Health, Peace, Birthday, Spiritual progress" className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" />
            </label>
            <button type="submit" className="btn-saffron md:col-span-2">Book Abhishek Seva</button>
            {formSubmitted && (
              <div className="md:col-span-2 mt-2 rounded bg-emerald-50 p-3 text-center text-sm font-semibold text-emerald-800 border border-emerald-200">
                ✓ Abhishek Seva Request Received! The temple priest will contact you with the confirmed slot.
              </div>
            )}
          </form>
        </div>
      );
    }

    if (slug === "laghurudra") {
      return (
        <div className="mx-auto max-w-5xl px-4 pb-12 grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-5 rounded-md border-t-4 border-gold bg-card p-5 shadow-temple">
            <img src={havanPooja} alt="Sacred Vedic Havan and Yajna ceremony" className="w-full aspect-[4/3] rounded object-cover" />
            <h4 className="mt-4 font-display text-base font-bold text-maroon">Laghurudra Anushthan & Havan</h4>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Eleven learned Vedic Brahmins chant the sacred Sri Rudram 121 times accompanied by continuous Abhishek and concluded with a sacred Havan fire ceremony.
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
            className="md:col-span-7 grid gap-4 rounded-md border-t-4 border-gold bg-card p-6 shadow-temple md:grid-cols-2"
          >
            <label className="text-sm text-maroon">Yajaman Name *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Mobile Number *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Gotra & Kuldaivat *<input required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon">Desired Date *<input type="date" required className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <label className="text-sm text-maroon md:col-span-2">Special Sankalpa Request<textarea rows={2} className="mt-1 w-full rounded border border-input bg-background px-3 py-2 text-foreground" /></label>
            <button type="submit" className="btn-saffron md:col-span-2">Submit Laghurudra Request</button>
            {formSubmitted && (
              <div className="md:col-span-2 mt-2 rounded bg-emerald-50 p-3 text-center text-sm font-semibold text-emerald-800 border border-emerald-200">
                ✓ Laghurudra Request Submitted. Our temple office will connect with you to finalize arrangements.
              </div>
            )}
          </form>
        </div>
      );
    }
  }

  // Gallery pages
  if (section === "gallery") {
    if (slug === "utsav-videos") {
      const videos = [
        {
          img: palkhiCeremony,
          title: "Thursday Palkhi Sohala & Devotional Chanting",
          duration: "12:45 mins",
          desc: "Grand palanquin procession of Shree Swami Samarth Maharaj around Khadilkar Road with hundreds of singing devotees.",
        },
        {
          img: prayerHallAarti,
          title: "Kakad Aarti & Morning Vedic Recitation",
          duration: "24:10 mins",
          desc: "Sacred dawn awakening prayers, Panchamrut Snan, and Stotra chanting inside the sanctum sanctorum.",
        },
        {
          img: havanPooja,
          title: "Swami Prakat Din Maha Yajna & Havan",
          duration: "18:30 mins",
          desc: "Vedic priests performing sacred Ahuti and Rudra Havan during the annual Prakat Din Mahotsav.",
        },
        {
          img: sanctumDevotees,
          title: "Gurupournima Evening Maha Aarti",
          duration: "15:20 mins",
          desc: "Thousands of lit lamps, dhoop deep archan, and collective Tarak Mantra recitation by devotees.",
        },
      ];
      return (
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((v, i) => (
              <div key={i} className="group overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple flex flex-col justify-between">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img src={v.img} alt={v.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                  <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-saffron text-xl text-primary-foreground shadow-temple transition group-hover:scale-110">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-gold">
                    {v.duration}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-display text-sm font-bold text-maroon line-clamp-1">{v.title}</h4>
                    <p className="mt-1.5 text-xs text-foreground/80 leading-relaxed line-clamp-2">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert(`Playing: ${v.title}\n\nLive video broadcasts and archive clips will stream here shortly!`)}
                    className="mt-3 inline-flex items-center justify-center gap-1.5 rounded bg-secondary px-3 py-1.5 text-xs font-semibold text-maroon hover:bg-gold transition"
                  >
                    <Play className="h-3 w-3 fill-current" /> Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slug === "swami-wallpapers") {
      const wallpapers = [
        { img: swamiPortraitCloud, title: "Shree Swami Samarth — Celestial Form", res: "3840 x 2160 (4K Ultra HD)" },
        { img: swamiPortraitCutout, title: "Shree Swami Samarth — Holy Paduka Portrait", res: "2560 x 1440 (2K QHD)" },
        { img: altarShrineClose, title: "Silver Paduka Altar with Samai & Naivedya", res: "1920 x 1080 (Full HD)" },
        { img: altarLotusHall, title: "Sanctum Lotus Base & Shree Swami Samarth", res: "1920 x 1080 (Full HD)" },
      ];
      return (
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wallpapers.map((w, i) => (
              <div key={i} className="group overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30 flex items-center justify-center p-2">
                  <img src={w.img} alt={w.title} className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 border-t">
                  <h4 className="font-display text-sm font-semibold text-maroon line-clamp-1">{w.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{w.res}</p>
                  <a
                    href={w.img}
                    download
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded bg-secondary px-3 py-2 text-xs font-semibold text-maroon hover:bg-gold hover:text-maroon transition"
                  >
                    <Download className="h-3.5 w-3.5" /> Download Wallpaper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slug === "other-deities") {
      const deities = [
        { img: glimpseSacredDarshan, title: "Lord Ganesha (Vighnaharta)", desc: "Consecrated Ganesha receiving first daily worship and naivedya before all temple aartis." },
        { img: altarLotusHall, title: "Lord Dattatreya & Shree Swami Samarth", desc: "The holy Guru lineage enshrined with the divine trifold avatar of Brahma, Vishnu, and Shiva." },
        { img: templeEntranceDoor, title: "Sanctum Entrance Doorway", desc: "Carved temple doorway adorned with marigold toran and glowing Om emblem." },
        { img: templeCorridor, title: "Marble Corridor Shrines", desc: "Passageways lined with historic photographs and niches for prayer and meditation." },
      ];
      return (
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deities.map((d, i) => (
              <div key={i} className="group overflow-hidden rounded-md border-t-4 border-gold bg-card shadow-temple">
                <img src={d.img} alt={d.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <h4 className="font-display text-lg text-maroon">{d.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default gallery / utsav photos
    const galleryItems = [
      { img: palkhiCeremony, title: "Thursday Palkhi Sohala" },
      { img: sanctumDevotees, title: "Sanctum Darshan & Aarti" },
      { img: prayerHallAarti, title: "Devotees in Prayer Hall" },
      { img: havanPooja, title: "Sacred Havan & Yajna Ceremony" },
      { img: altarShrineClose, title: "Silver Padukas & Samai" },
      { img: templeEntranceDoor, title: "Decorated Temple Doorway" },
      { img: templeCorridor, title: "Marble Corridor & Shrines" },
      { img: templeExteriorFacade, title: "Historic Khadilkar Road Facade" },
    ];
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 pb-12 md:grid-cols-4">
        {galleryItems.map((g, i) => (
          <div key={i} className="group relative overflow-hidden rounded-md border-4 border-card shadow-temple">
            <img src={g.img} alt={g.title} loading="lazy" width={600} height={400} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-hero-overlay opacity-0 group-hover:opacity-85 transition flex items-end p-3">
              <span className="font-display text-xs text-gold-foreground font-semibold">{g.title}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
