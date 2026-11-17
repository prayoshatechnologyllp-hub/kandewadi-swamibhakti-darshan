export type Page = { title: string; intro: string; body: string[] };
const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];
const p = (title: string, intro: string): Page => ({ title, intro, body: lorem });

export const sections = {
  about: {
    label: "About Math",
    pages: {
      history: p("History of Math", "The sacred journey of Shree Swami Samarth Maharaj Math, Kandewadi."),
      founder: p("About Math Founder", "The visionary devotee who established the Math."),
      trustees: p("Trustees", "The trust board serving the Math and its devotees."),
      "social-activities": p("Social Activities", "Seva beyond the temple — for society and the needy."),
      "dos-and-donts": p("Do's & Don'ts for Devotees and Visitors", "Guidelines to preserve the sanctity of the Math."),
    },
  },
  seva: {
    label: "Online Seva",
    pages: {
      registration: p("Registration", "Register as a devotee to book seva online."),
      donation: p("Donation", "Offer your contribution towards the Math's activities."),
      abhishek: p("Abhishek", "Book an Abhishek seva for Shree Swami Samarth."),
      laghurudra: p("Laghurudra", "Book a Laghurudra pooja performed by learned priests."),
    },
  },
  utsav: {
    label: "Math Utsav",
    pages: {
      calendar: p("Utsav Calendar", "Annual festivals and celebrations at the Math."),
      photos: p("Utsav Photo", "Glimpses from our utsav celebrations."),
    },
  },
  gallery: {
    label: "Gallery",
    pages: {
      "swami-wallpapers": p("Swami Wallpapers", "Divine wallpapers of Shree Swami Samarth Maharaj."),
      "other-deities": p("Other Deities", "Photos of other deities at the Math."),
      "utsav-photos": p("Utsav Photos", "Memories from festivals at the Math."),
    },
  },
  legal: {
    label: "Policies",
    pages: {
      terms: p("Terms of Use", "Terms governing the use of this website."),
      disclaimer: p("Disclaimer", "Important information about website content."),
      privacy: p("Privacy Policy", "How we collect and protect your information."),
      refund: p("Refund & Cancellation Policy", "Our policy on seva and donation refunds."),
    },
  },
} as const;
export type SectionKey = keyof typeof sections;
export function getPage(section: SectionKey, slug: string): Page | undefined {
  return (sections[section].pages as Record<string, Page>)[slug];
}
