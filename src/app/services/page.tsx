import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Services — Temecula Valley | Temecula ADU Services",
  description:
    "ADU construction, garage conversion, design and permitting, and AB 2533 legalization resources for homeowners in Temecula, Murrieta, and Southwest Riverside County.",
};

const serviceCards = [
  {
    title: "ADU Construction",
    href: "/services/adu-construction",
    description:
      "The full picture on building a new ADU from scratch — honest cost ranges for all four ADU types, hidden costs that catch people off guard, financing options, HOA rights under AB 670, and how to vet a contractor using the CSLB database. Includes a 29-question FAQ covering the most common homeowner questions.",
  },
  {
    title: "Garage Conversion ADU",
    href: "/services/garage-conversion-adu",
    description:
      "Converting an attached or detached garage is the fastest, lowest-cost path to an ADU — typically $35,000–$120,000 versus $80,000–$250,000 for a new-build detached unit. This page covers the full process, what the permit looks like, the honest resale tradeoffs, and what JADU rules mean for your kitchen requirements.",
  },
  {
    title: "ADU Design & Permitting",
    href: "/services/adu-design-permitting",
    description:
      "A clear walkthrough of what happens between your first idea and the day you receive a permit — pre-application meetings, what makes a submittal complete, how correction cycles work, and how to choose between a licensed architect, building designer, or design-build firm. Links to city-specific timelines for Temecula and Murrieta.",
  },
  {
    title: "ADU Legalization (AB 2533)",
    href: "/services/adu-legalization",
    description:
      "If you have an unpermitted garage conversion, backyard structure, or rental unit built before 2020, California AB 2533 (effective January 1, 2025) created a specific pathway to legalize it — without facing full modern code compliance or impact fees. This page covers the exact evaluation standard, the confidential pre-inspection option, typical costs ($10,000–$70,000), and what the city can and cannot require.",
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="eyebrow text-xs font-semibold text-navy uppercase tracking-widest mb-2">
        Services
      </p>
      <h1 className="font-display text-4xl font-bold text-ink leading-tight mb-4">
        ADU Services for the Temecula Valley
      </h1>
      <p className="text-xl text-concrete leading-relaxed mb-12">
        This site covers the four main things Temecula and Murrieta homeowners need to navigate an
        ADU project: understanding what it costs and how it&apos;s financed, getting through the design
        and permitting process, converting an existing garage, and legalizing a unit that was never
        properly permitted. Each page is written to give specific, usable information — not the vague
        non-answers most local contractor websites publish.
      </p>

      <div className="space-y-5">
        {serviceCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group block border border-concrete/30 rounded-lg p-7 hover:border-navy/40 hover:bg-navy/5 transition-colors"
          >
            <h2 className="font-display text-xl font-bold text-ink group-hover:text-navy mb-2">
              {card.title}
            </h2>
            <p className="text-sm text-concrete leading-relaxed mb-3">{card.description}</p>
            <span className="text-sm font-semibold text-navy group-hover:underline">
              Read the full guide →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 border-t border-concrete/20 pt-8">
        <h2 className="font-display text-lg font-bold text-ink mb-3">Looking for city-specific information?</h2>
        <p className="text-sm text-concrete leading-relaxed mb-4">
          Permit timelines, short-term rental rules, and neighborhood coverage are different for each
          city. The service pages above cover California statewide rules and general cost ranges. For
          Temecula and Murrieta specifics, see the service area pages.
        </p>
        <div className="flex gap-3">
          <Link href="/service-areas/temecula" className="text-sm font-semibold text-navy hover:underline">
            Temecula →
          </Link>
          <Link href="/service-areas/murrieta" className="text-sm font-semibold text-navy hover:underline">
            Murrieta →
          </Link>
        </div>
      </div>

      <div className="mt-10 bg-navy/5 border border-navy/20 rounded-lg p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink mb-2">Not sure where to start?</h2>
        <p className="text-concrete mb-5 text-sm max-w-md mx-auto">
          A free consultation can identify which path makes sense for your property — new build,
          garage conversion, or legalization — and give you a realistic picture of cost and timeline
          before you spend money on design.
        </p>
        <Link
          href="mailto:charlesprovido@gmail.com"
          className="inline-block bg-navy text-paper px-6 py-3 rounded font-semibold hover:bg-navy/90 transition-colors text-sm"
        >
          Request a Free Consultation
        </Link>
      </div>
    </div>
  );
}
