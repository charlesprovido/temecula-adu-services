import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Design & Permitting in Southwest Riverside County | Temecula ADU Services",
  description:
    "A clear walkthrough of the ADU design and permitting process — from pre-application meeting through permit issuance. What makes a complete submittal, how correction cycles work, and how to choose a designer.",
};

function InfoBox({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "amber";
}) {
  const styles = {
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

export default function DesignPermittingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">ADU Design & Permitting</span>
      </nav>

      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Services</p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          ADU Design &amp; Permitting
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The gap between deciding to build an ADU and breaking ground is almost entirely consumed
          by design and permitting. Understanding what happens at each stage — and what can cause
          delays — is the single most useful thing you can know before starting.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The process, stage by stage</h2>

      <div className="space-y-4 my-6">
        {[
          {
            stage: "1. Pre-application meeting (optional but highly recommended)",
            detail: "Most cities — including Temecula and Murrieta — allow homeowners or their designers to bring a concept (a rough site plan, photos, basic description) to a planning or building counter review before spending money on full drawings. Staff can flag obvious problems: a setback your design violates, a utility easement that restricts placement, a requirement you didn't know about. Catching these before design work begins can save thousands in redesign fees.",
          },
          {
            stage: "2. Choosing who prepares your plans",
            detail: "California does not require a licensed architect for most residential ADU projects below certain thresholds. Options: (a) Licensed architect — most expensive, most thorough, valuable on complex sites or when structural engineering is required; (b) Licensed building designer — can stamp most ADU plan sets, lower cost than an architect; (c) Design-build firm — bundles design, permitting, and construction under one contract, which simplifies coordination but reduces your ability to compare bids. Whoever you choose, verify they have experience submitting ADU plans in your specific city. Local permit experience reduces correction rounds.",
          },
          {
            stage: "3. Design and plan preparation",
            detail: "For a detached ADU, a permit-ready plan set typically takes 4–8 weeks to prepare depending on complexity. The set includes a site plan showing the ADU location relative to property lines and existing structures, floor plans, elevations, foundation details, framing details, electrical plan, plumbing layout, and Title 24 energy compliance documentation. Rushing this stage is the primary cause of correction letters — incomplete or inaccurate plans trigger review rounds that can add months.",
          },
          {
            stage: "4. Application submittal",
            detail: "You or your contractor submits the complete permit package to the city's Building Department. California law (Gov. Code §65852.2) requires cities to deem an application complete or incomplete within 5 business days. If deemed incomplete, they must identify what's missing — but the 60-day review clock doesn't start until the application is deemed complete. A well-prepared submittal avoids this delay entirely.",
          },
          {
            stage: "5. Plan check (first review)",
            detail: "City plan checkers review your drawings against zoning, building code, structural, plumbing, electrical, and energy requirements. This is where queue times vary most. For city-specific first-review timelines, see the Temecula and Murrieta service area pages. The 60-day statutory deadline applies to the full review period, but incomplete applications and correction rounds complicate how that clock actually runs in practice.",
          },
          {
            stage: "6. Correction cycles",
            detail: "Almost every project receives at least one correction letter. The city identifies items that don't comply or need clarification; your designer responds with revised drawings or written responses. Each round adds time — typically 3–6 weeks per cycle depending on city queue and how quickly your designer responds. Two or three rounds is normal. Six or more rounds usually indicates a design problem that should have been caught earlier.",
          },
          {
            stage: "7. Permit issuance",
            detail: "Once all corrections are resolved and any outstanding fees are paid, the permit is issued. Construction can begin once you have the permit in hand — not before. Starting work before permit issuance is a code violation that can require demolition of completed work.",
          },
          {
            stage: "8. Construction inspections",
            detail: "Your permit lists required inspections. Common inspection points: foundation (before concrete pour), framing (before drywall), rough plumbing, rough electrical, insulation, and final. Each inspection must be scheduled with the city and requires the work to be visible — don't cover framing or rough-in work before it passes. Build inspection scheduling lead times into your construction sequencing.",
          },
          {
            stage: "9. Final inspection and certificate of occupancy",
            detail: "After all inspections pass and any final items are addressed, the city issues a Certificate of Occupancy (or equivalent sign-off). The ADU is now legally habitable. You can then notify your insurer and, if applicable, begin the address assignment process for utility billing and mail delivery.",
          },
        ].map((item) => (
          <div key={item.stage} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold text-gray-800 text-sm mb-1">{item.stage}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">What makes a complete submittal</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An incomplete submittal is the most preventable cause of delay. A complete ADU permit
        submittal typically includes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>Completed permit application form with accurate project valuation</li>
        <li>Site plan to scale showing property lines, existing structures, ADU footprint, setbacks, and utility locations</li>
        <li>Floor plans with dimensions, window and door locations, and room labels</li>
        <li>Exterior elevations (all four sides)</li>
        <li>Foundation and structural details (more extensive for new builds; less for garage conversions)</li>
        <li>Electrical plan and panel schedule</li>
        <li>Plumbing diagram</li>
        <li>Title 24 energy compliance documentation</li>
        <li>Any required soils report (if site conditions require it)</li>
        <li>Application fee payment</li>
      </ul>

      <InfoBox color="amber">
        <strong>Hire a designer with local permit experience.</strong> A designer who has submitted
        dozens of ADU plans in Temecula or Murrieta knows what those specific plan checkers flag,
        how to format the submittal to minimize correction requests, and which details to include
        preemptively. That experience is worth more than a lower design fee from someone who hasn&apos;t
        worked in your city.
      </InfoBox>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">Title 24 energy compliance</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Title 24 energy code applies to all new ADU construction. The current energy
        code (2022 edition) requires new residential construction to include solar photovoltaic panels
        in most configurations. Whether this applies to your ADU depends on its size, configuration,
        and attachment to the main house — your designer will prepare the Title 24 compliance
        documentation as part of the plan set.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar systems for ADUs typically run $8,000–$20,000 depending on system size. This is a cost
        that frequently surprises homeowners who see the base construction estimate without it. Have
        your designer confirm Title 24 requirements early so it&apos;s part of your budget from the start.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">City-specific timelines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plan check queue times and specific local requirements differ between Temecula and Murrieta.
        See the dedicated service area pages for city-specific information — including current
        (verified) plan check timelines and city contact information.
      </p>
      <div className="flex gap-4">
        <Link href="/service-areas/temecula" className="text-sm font-semibold text-blue-600 hover:underline">
          Temecula permit timeline →
        </Link>
        <Link href="/service-areas/murrieta" className="text-sm font-semibold text-blue-600 hover:underline">
          Murrieta permit timeline →
        </Link>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link href="/services/adu-construction" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">ADU Construction Guide</p>
          <p className="text-sm text-gray-600">Cost ranges, financing, HOA rights, contractor vetting, and 29-question FAQ.</p>
        </Link>
        <Link href="/services/garage-conversion-adu" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">Garage Conversion Guide</p>
          <p className="text-sm text-gray-600">Cost, process, JADU kitchen rules, and resale tradeoffs for garage conversions.</p>
        </Link>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to start the design process?</h2>
        <p className="text-gray-600 mb-5 text-sm max-w-md mx-auto">
          A free consultation can identify the right designer profile for your project, flag
          any site-specific issues before you spend on drawings, and give you a realistic
          permitting timeline for your city.
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
