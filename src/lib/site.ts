export type Page = { title: string; intro: string; body: string[] };

export const sections = {
  about: {
    label: "About Math",
    pages: {
      history: {
        title: "History of Math",
        intro: "The sacred journey and divine heritage of Shree Akkalkot Swami Samarth Math, Khadilkar Road / Kandewadi, Girgaum, Mumbai.",
        body: [
          "The sacred history of the Math began on 8th October 1898 (दिनांक ८ आक्टोबर १८९८), when devout disciple Shri Rao Saheb Ganesh Ballal Mulekar (श्री. रावसाहेब गणेश बल्लाळ मुळेकर), together with fellow Swami devotees, consecrated the holy Padukas of Shree Swami Samarth Maharaj in this premises on Khadilkar Road, Girgaum, Mumbai.",
          "For over 125 years, this sacred sanctum has stood as an unbroken sanctuary of divine vibration, where millions of devotees have found peace, solace, and spiritual fulfillment.",
          "On 9th May 1907 (दिनांक ९ मे १९०७), Shri Dattatraya Ganesh Mulekar (श्री. दत्तात्रय गणेश मुळेकर) formally entrusted the management and governance of this sacred vastu to the dedicated Board of Trustees, establishing an enduring tradition of transparent stewardship and continuous public service.",
          "Over the decades, the Math has flourished with daily Vedic rituals, grand Thursday Palkhi Sohala, nitya Annadan, and social welfare programs, remaining one of Mumbai's most revered shrines dedicated to Akkalkot Niwasi Shree Swami Samarth Maharaj."
        ],
      },
      founder: {
        title: "Founder Trustee",
        intro: "Shri Rao Saheb Ganesh Ballal Mulekar — the revered Founder Trustee who consecrated the holy Padukas on 8th October 1898.",
        body: [
          "Shri Rao Saheb Ganesh Ballal Mulekar was a prominent and deeply devout follower of Akkalkot Niwasi Shree Swami Samarth Maharaj. Driven by profound bhakti and the Guru's grace, he envisioned a holy sanctuary in Mumbai where devotees could gather for collective prayer and darshan.",
          "On 8th October 1898, he enshrined Swami's holy Padukas, initiating the timeless tradition of morning Kakad Aarti, evening Dhoop Aarti, and festival celebrations that have continued uninterrupted for more than a century.",
          "His noble lineage carried forward this spiritual legacy when Shri Dattatraya Ganesh Mulekar instituted the public Trust on 9th May 1907, ensuring that the Math remains a beacon of devotion for all generations to come."
        ],
      },
      trustees: {
        title: "Present Trustees",
        intro: "The dedicated Board of Trustees carrying forward the spiritual traditions and administrative governance of the Math.",
        body: [
          "The administration of Shree Swami Samarth Maharaj Math, Kandewadi, is managed by an experienced Board of Trustees comprising respected elders, spiritual leaders, and professionals devoted to the service of the Math.",
          "The Trust oversees the daily operations, priest services, maintenance of the sanctum sanctorum, preservation of holy relics, and transparent management of seva donations.",
          "Under the guidance of the Trustees, ongoing social welfare initiatives, festive utsavs, renovation projects, and online seva platforms are carried out with utmost accountability and devotion."
        ],
      },
      "social-activities": {
        title: "Social Activities",
        intro: "Selfless service (Seva) beyond the temple walls — serving society and uplifting the underprivileged.",
        body: [
          "True devotion to Shree Swami Samarth Maharaj manifests in selfless service to humanity ('Manav Seva hi Madhav Seva'). The Math regularly organizes and participates in diverse humanitarian and community upliftment initiatives.",
          "From continuous Annachhatra (free nutritious meals for devotees and needy people) to periodic free medical check-up camps, blood donation drives, and distribution of educational supplies to underprivileged students, the Math actively supports the community.",
          "During natural calamities and local emergencies, the Math trust provides immediate relief, ration kits, and financial aid to affected families in and around Mumbai."
        ],
      },
      "dos-and-donts": {
        title: "Does & Donts",
        intro: "Guidelines, temple decorum, and code of conduct for visiting devotees and pilgrims.",
        body: [
          "To maintain the sanctity, spiritual vibration, and serene atmosphere of Shree Swami Samarth Maharaj Math, all visiting devotees are requested to observe these guidelines with reverence.",
          "Please follow queue discipline, silence during live aartis, and respect the ancient traditions established over 125 years ago."
        ],
      },
    },
  },
  seva: {
    label: "Online Seva",
    pages: {
      registration: {
        title: "Registration",
        intro: "Register as a verified devotee to book online sevas, receive prasad, and get utsav notifications.",
        body: [
          "Devotees can register their details with the Math to easily sponsor daily aartis, book special abhishekams, and receive sanctified prasad directly by post or during their temple visits.",
          "Registration enables you to create sankalpa in your family's name and gotra, ensuring your prayers are performed according to authentic Vedic rituals.",
          "You will also receive timely updates regarding upcoming Math Utsavs, Palkhi Sohala, and auspicious tithis throughout the year."
        ],
      },
      "sign-in": {
        title: "Sign In",
        intro: "Devotee sign-in portal to manage seva bookings, access donation receipts, and update profile details.",
        body: [
          "Registered devotees can sign in to view their booked sevas, check scheduled pooja dates, download official 80G tax receipts, and track prasad dispatches.",
          "If you do not have an account yet, please register on the Registration page to create your devotee profile."
        ],
      },
      donation: {
        title: "Donation",
        intro: "Support the spiritual, cultural, and charitable initiatives undertaken by the Math.",
        body: [
          "Your generous contributions help sustain the daily temple rituals, Annadan seva, renovation of ancient shrine structures, and charitable welfare activities for the needy.",
          "Donations can be offered towards specific causes such as Daily Mahaprasad, Temple Maintenance, Goshala, or the General Trust Fund.",
          "All donations made to the Math Trust are accounted for with official receipts and are eligible for tax exemption as per statutory trust regulations."
        ],
      },
      abhishek: {
        title: "Abhishek",
        intro: "Book sacred Vedic Abhishek Seva for the divine blessings of Shree Swami Samarth Maharaj.",
        body: [
          "Abhishek is a sacred ritual of bathing the deity's holy Padukas and idol with milk, honey, curds, ghee, sugar (Panchamrut), holy water, and fragrant herbs amidst the chanting of Vedic hymns.",
          "Devotees can sponsor Abhishek on their birthdays, anniversaries, or auspicious tithis like Thursday, Guru Pushyamrut, or Prakat Din for peace, prosperity, and spiritual elevation.",
          "The pooja is performed by trained Math priests taking your personal Sankalpa with your family Gotra and Nakshatra."
        ],
      },
      laghurudra: {
        title: "Laghurudra",
        intro: "Sacred and powerful Vedic Rudrabhishek pooja performed by eleven learned priests.",
        body: [
          "Laghurudra is one of the most powerful and auspicious rituals in Vedic tradition, dedicated to Lord Shiva and the Guru lineage for overcoming obstacles and bestowing peace and good health.",
          "In a Laghurudra, eleven learned Vedic Brahmins chant the sacred Sri Rudram 121 times accompanied by continuous sacred libations (Abhishek) and followed by a solemn Havan.",
          "Devotees wishing to sponsor or participate in Laghurudra Seva can reserve dates in advance through this portal."
        ],
      },
      annadan: {
        title: "Nitya Annadan Seva",
        intro: "Feed pilgrims, devotees, and the needy through the eternal tradition of temple Annachhatra.",
        body: [
          "In the tradition of 'Annadanam Param Daanam', the Math serves hot, sanctified vegetarian Mahaprasad daily to all pilgrims and visitors without distinction.",
          "Devotees can sponsor full-day or half-day meals on birthdays, memorial days, or sacred tithis in the name of their family members.",
          "Your contribution ensures that every seeker who visits the sacred sanctum receives nourishing food as Swami's prasad."
        ],
      },
      goshala: {
        title: "Gau Seva (Goshala)",
        intro: "Support sacred cow protection, daily fodder, and medical upkeep in accordance with Guru traditions.",
        body: [
          "Gau Seva holds supreme importance in Datta and Swami tradition. The Math actively supports cow protection, fresh green fodder, clean shelters, and compassionate veterinary care.",
          "Devotees can offer Grass (Chara) Seva, medical sponsorships, or general goshala maintenance donations.",
          "Offerings made towards cow protection bring peace, positive energy, and divine blessings to your household."
        ],
      },
      jeernodhar: {
        title: "Math Jeernodhar",
        intro: "Preserve the 125+ year-old sacred vastu, sanctum marble, and historic temple infrastructure.",
        body: [
          "Our sacred temple, consecrated in 1898, requires periodic structural preservation, marble maintenance, and roof waterproofing to endure for future generations.",
          "Contributions directly fund traditional stone craft, brass polishing of sanctum gates, and devotee convenience amenities.",
          "All contributions are officially acknowledged by the Board of Trustees with authorized trust receipts."
        ],
      },
    },
  },
  utsav: {
    label: "Math Utsav",
    pages: {
      calendar: {
        title: "Utsav Calendar",
        intro: "Annual festival calendar of sacred celebrations and holy tithis at Kandewadi Math.",
        body: [
          "Throughout the year, the Math reverberates with joy and spiritual energy during numerous traditional festivals celebrated with great devotion and pomp.",
          "Key celebrations include Shree Swami Samarth Prakat Din (Chaitra Shuddha Dwitiya), Gurupournima, Punyatithi Utsav, Datta Jayanti, Navratri, and weekly Thursday Palkhi Sohala.",
          "Devotees from Mumbai, Maharashtra, and across India gather to participate in the divine aartis, bhajan sandhyas, and grand palanquin processions."
        ],
      },
    },
  },
  gallery: {
    label: "Gallery",
    pages: {
      "utsav-photos": {
        title: "Utsav Photos",
        intro: "Memorable moments from grand festival celebrations, Palkhi processions, and Mahaprasad.",
        body: [
          "A curated collection of photos capturing the vibrancy, colorful pandals, lighting, and devotional gatherings during major annual Math celebrations.",
          "Witness the grandeur of Swami's Palkhi traversing the historic streets of Girgaum accompanied by thousands of devotees chanting the Tarak Mantra.",
          "Experience the joyous spirit of community seva and the divine grace that illuminates every event."
        ],
      },
      "utsav-videos": {
        title: "Utsav Videos",
        intro: "Sacred video archives of festive processions, Thursday Palkhi Sohala, and devotional aartis.",
        body: [
          "Watch video highlights of major festival celebrations, palkhi circumambulations, and Vedic chanting recorded at the Math.",
          "Feel the vibrant atmosphere of thousands of devotees immersed in the chanting of 'Swami Samarth' on Khadilkar Road, Girgaum."
        ],
      },
      "swami-wallpapers": {
        title: "Swami Wallpapers",
        intro: "High-resolution spiritual wallpapers and divine portraits of Shree Swami Samarth Maharaj.",
        body: [
          "Download divine, high-definition wallpapers of Shree Swami Samarth Maharaj for your desktop, tablet, and mobile devices.",
          "Keeping the Guru's image near fosters constant mindfulness, peace of mind, and inner strength throughout your daily life.",
          "All wallpapers are provided free for personal devotional use by the devotees."
        ],
      },
      "other-deities": {
        title: "Other Deities",
        intro: "Darshan of revered deities consecrated and worshipped within the Kandewadi Math premises.",
        body: [
          "In addition to the primary sanctum of Shree Swami Samarth Maharaj, the Kandewadi Math premises house sacred shrines and idols of Lord Ganesha, Lord Dattatreya, Lord Shiva (Rudra), and Shri Hanuman.",
          "Each deity is worshipped with daily nitya pooja, garlands, and naivedya by the temple priests.",
          "Devotees can take darshan of all shrines during their visit and experience the unified divine energy of the Math."
        ],
      },
    },
  },
  legal: {
    label: "Footer Menus",
    pages: {
      terms: {
        title: "Terms of Use",
        intro: "Terms and conditions governing the access and use of this official website.",
        body: [
          "This website is the official online portal of Shree Swami Samarth Maharaj Math, Kandewadi, Girgaum. By accessing this website, you agree to comply with these terms.",
          "The content, images, devotional text, and multimedia are the spiritual and intellectual property of the Math Trust and may not be used for commercial reproduction without written permission.",
          "The Trust reserves the right to update or modify these terms and portal features without prior notice in accordance with organizational requirements."
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        intro: "Important notice regarding website information, seva bookings, and external links.",
        body: [
          "While every effort is made to maintain accurate timings, tithis, and festival schedules, dates and timings may vary in accordance with traditional Hindu panchang and temple administrative decisions.",
          "Online seva bookings and donations are handled securely, and the Math is not liable for technical delays caused by third-party payment gateways or network disruptions.",
          "The Math does not authorize any unofficial agents or middlemen to collect funds or solicit money on its behalf."
        ],
      },
      privacy: {
        title: "Privacy Policy",
        intro: "Our commitment to protecting your personal information and online transactions.",
        body: [
          "Shree Swami Samarth Maharaj Math respects the privacy of every devotee. Personal details collected during seva booking or devotee registration (name, phone, address, gotra) are used solely for pooja sankalpa, prasad dispatch, and communication.",
          "We do not sell, rent, trade, or share your contact information with any third-party marketing companies.",
          "All online transactions are processed through encrypted, secure payment channels complying with industry standards."
        ],
      },
      refund: {
        title: "Refund & Cancellation Policy",
        intro: "Information regarding donations, seva contributions, and cancellation guidelines.",
        body: [
          "Contributions made towards Seva, Annadan, and Trust donations are considered voluntary spiritual offerings and are non-refundable once the sankalpa or receipt has been generated.",
          "If an accidental double payment occurs due to technical gateway issues, devotees may contact the Math administration with transaction proof for verification and reversal.",
          "Seva booking dates may be rescheduled in advance subject to priest availability and temple schedules upon timely written request."
        ],
      },
    },
  },
} as const;

export type SectionKey = keyof typeof sections;
export function getPage(section: SectionKey, slug: string): Page | undefined {
  return (sections[section].pages as Record<string, Page>)[slug];
}
