import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Conversion ADU — Costs, Process & Resale Tradeoffs | Temecula ADU Services",
  description:
    "Complete guide to converting an attached or detached garage into an ADU or JADU in Southwest Riverside County. Real cost ranges, permit process, resale impact, and JADU kitchen rules.",
};

function InfoBox({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "amber" | "green";
}) {
  const styles = {
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    green: "bg-green-50 border-green-300 text-green-900",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

export default function GarageConversionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">Garage Conversion ADU</span>
      </nav>

      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Services</p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Garage Conversion ADU
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Converting an existing garage is the fastest, lowest-cost path to a legal ADU. The
          structure already exists — you&apos;re upgrading it to livable space rather than building from
          scratch. Here&apos;s what the process actually looks like, what it costs, and what the honest
          tradeoffs are.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost ranges</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Garage conversion costs depend primarily on the existing structure&apos;s condition, whether
        it&apos;s attached or detached, and how much new plumbing and electrical needs to be run.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Type</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Typical Range</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Key Variables</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Attached garage conversion", "$40,000 – $120,000", "HVAC, insulation, plumbing rough-in, window/door cuts, finishes"],
              ["Detached garage conversion", "$35,000 – $100,000", "Similar scope; often simpler egress; utility run from main house"],
              ["Attached garage → JADU", "$20,000 – $60,000", "Efficiency kitchen allowed; no range/cooktop required; smaller scope"],
            ].map(([type, range, vars]) => (
              <tr key={type} className="border border-gray-200 even:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{type}</td>
                <td className="px-4 py-3 font-semibold text-gray-700">{range}</td>
                <td className="px-4 py-3 text-gray-600">{vars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        Compare this to $80,000–$250,000 for a detached new-build ADU. The cost savings come from
        not needing a new foundation, new framing, or a new roof — those are the expensive parts of
        any new build. The tradeoff for that savings is losing your garage.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">ADU vs. JADU — which applies to your garage?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether your converted garage becomes a full ADU or a Junior ADU (JADU) depends on where
        the garage is and how you configure it.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-2">Full ADU</h3>
          <ul className="text-sm text-gray-600 space-y-1.5 leading-relaxed">
            <li>Attached or detached garage</li>
            <li>Full kitchen required (cooking appliance, sink, fridge)</li>
            <li>No owner-occupancy requirement under current state law</li>
            <li>Can be rented separately without restriction</li>
            <li>Higher construction cost due to full kitchen</li>
          </ul>
        </div>
        <div className="border-2 border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-2">JADU (Junior ADU)</h3>
          <ul className="text-sm text-gray-600 space-y-1.5 leading-relaxed">
            <li>Attached garage only, within home footprint</li>
            <li>Max 500 sq ft</li>
            <li>Efficiency kitchen allowed — no cooking appliance required</li>
            <li>Owner must live on-site (in JADU or main home)</li>
            <li>Lower cost — no range, hood, or gas line in many configs</li>
          </ul>
        </div>
      </div>

      <InfoBox color="blue">
        <strong>JADU kitchen savings:</strong> A JADU efficiency kitchen (wet-bar sink,
        under-counter fridge, microwave, countertop) typically costs $3,000–$8,000 to outfit.
        A full ADU kitchen with cooking appliance, range hood, and cabinetry runs $8,000–$25,000.
        If your garage qualifies as a JADU, the kitchen scope alone can save $5,000–$15,000.
      </InfoBox>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">What the permit process looks like</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Garage conversions are typically the simplest ADU permit to obtain because there&apos;s no new
        foundation review and less structural engineering required. That said, the process still
        goes through full plan check.
      </p>
      <div className="space-y-3 my-6">
        {[
          ["Design drawings", "A licensed designer produces plans showing the new layout, insulation, electrical panel upgrade, plumbing (if adding a bathroom), window placement for egress and light, and kitchen configuration. For a basic conversion, this is simpler than a new-build set."],
          ["Plan check", "Submitted to your city's Building Department. For city-specific timelines in Temecula and Murrieta, see the service area pages. Garage conversions often move through plan check faster than new-build ADUs due to lower structural complexity."],
          ["Key inspection points", "Framing inspection (after any new walls), rough electrical, rough plumbing, insulation (garage walls typically need significant insulation upgrade), and final."],
          ["Garage door", "The existing garage door opening is typically infilled with framing, insulation, and exterior finish to match the house. This is required for weatherproofing and is part of the permit scope."],
        ].map(([stage, detail]) => (
          <div key={stage} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold text-gray-800 text-sm mb-0.5">{stage}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">Honest resale tradeoffs</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-3">Pros</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside leading-relaxed">
            <li>Fastest build timeline — 1–3 months vs. 4–6 for new build</li>
            <li>Lowest cost ADU path</li>
            <li>Permitted ADU adds appraised value (typically 70–100% of construction cost)</li>
            <li>Rental income starts sooner, improving payback period</li>
            <li>Simpler permit process than new build</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-red-700 mb-3">Cons</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside leading-relaxed">
            <li>Loss of covered parking — a real issue in this market</li>
            <li>Buyers who prioritize garage space will discount the home</li>
            <li>Less storage for the household</li>
            <li>HOA may impose design restrictions on the converted structure</li>
            <li>Appraisers handle converted garages inconsistently</li>
          </ul>
        </div>
      </div>

      <InfoBox color="amber">
        <strong>If you plan to sell within 5 years,</strong> weigh the resale discount carefully
        against rental income. In most Southwest Riverside County neighborhoods, buyers do notice
        the absence of a garage. If you&apos;re holding the property long-term, the rental income math
        typically favors conversion. A detached carport may be an option to partially offset the
        parking loss — check with your city and HOA.
      </InfoBox>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">Have an existing unpermitted garage conversion?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the garage was already converted by a previous owner and was never permitted, California
        AB 2533 (effective January 1, 2025) created a specific legalization pathway for conversions
        built before January 1, 2020. See the full legalization guide for details.
      </p>
      <Link
        href="/services/adu-legalization"
        className="inline-block text-sm font-semibold text-blue-600 hover:underline"
      >
        ADU Legalization (AB 2533) guide →
      </Link>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link href="/services/adu-construction" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">ADU Construction Guide</p>
          <p className="text-sm text-gray-600">Full cost comparison, financing, contractor vetting, and 29-question FAQ.</p>
        </Link>
        <Link href="/services/adu-design-permitting" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">Design & Permitting Guide</p>
          <p className="text-sm text-gray-600">What happens between your first idea and the day you receive a permit.</p>
        </Link>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Is your garage a good candidate?</h2>
        <p className="text-gray-600 mb-5 text-sm max-w-md mx-auto">
          Not every garage is equally straightforward to convert — ceiling height, existing
          electrical panel capacity, and HOA restrictions all affect scope and cost. A free
          consultation can give you a realistic picture before you commit to design fees.
        </p>
        <Link
          href="mailto:charlesprovido@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
        >
          Request a Free Consultation
        </Link>
      </div>
    </div>
  );
}
