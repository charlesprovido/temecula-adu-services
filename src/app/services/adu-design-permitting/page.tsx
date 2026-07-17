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
    blue:  "bg-navy/5 border-navy/30 text-navy",
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

      <nav className="text-sm text-concrete mb-6">
        <Link href="/services" className="hover:text-navy">Services</Link>
        <span className="mx-2">›</span>
        <span className="text-ink">ADU Design & Permitting</span>
      </nav>

      <div className="mb-10">
        <p className="eyebrow text-xs font-semibold text-navy uppercase tracking-widest mb-2">Services</p>
        <h1 className="font-display text-4xl font-bold text-ink leading-tight mb-4">
          ADU Design &amp; Permitting
        </h1>
        <p className="text-xl text-concrete leading-relaxed">
          The gap between deciding to build an ADU and breaking ground is almost entirely consumed
          by design and permitting. Understanding what happens at each stage — and what can cause
          delays — is the single most useful thing you can know before starting.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">The process, stage by stage</h2>

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
          <div key={item.stage} className="border-l-2 border-navy/25 pl-4">
            <p className="font-semibold text-ink text-sm mb-1">{item.stage}</p>
            <p className="text-sm text-concrete leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl font-bold text-ink mt-14 mb-4">What makes a complete submittal</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        An incomplete submittal is the most preventable cause of delay. A complete ADU permit
        submittal typically includes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-concrete leading-relaxed mb-6">
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

      <h2 className="font-display text-2xl font-bold text-ink mt-14 mb-4">Title 24 energy compliance</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        California&apos;s Title 24 energy code applies to all new ADU construction. The current energy
        code (2022 edition) requires new residential construction to include solar photovoltaic panels
        in most configurations. Whether this applies to your ADU depends on its size, configuration,
        and attachment to the main house — your designer will prepare the Title 24 compliance
        documentation as part of the plan set.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        Solar systems for ADUs typically run{" "}
        <span className="font-mono">$8,000–$20,000</span> depending on system size. This is a cost
        that frequently surprises homeowners who see the base construction estimate without it. Have
        your designer confirm Title 24 requirements early so it&apos;s part of your budget from the start.
      </p>

      <h2 className="font-display text-2xl font-bold text-ink mt-14 mb-4">City-specific timelines</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Plan check queue times and specific local requirements differ between Temecula and Murrieta.
        See the dedicated service area pages for city-specific information — including current
        (verified) plan check timelines and city contact information.
      </p>
      <div className="flex gap-4">
        <Link href="/service-areas/temecula" className="text-sm font-semibold text-navy hover:underline">
          Temecula permit timeline →
        </Link>
        <Link href="/service-areas/murrieta" className="text-sm font-semibold text-navy hover:underline">
          Murrieta permit timeline →
        </Link>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link href="/services/adu-construction" className="border border-concrete/30 rounded-lg p-5 hover:border-navy/40 hover:bg-navy/5 transition-colors">
          <p className="font-semibold text-ink mb-1">ADU Construction Guide</p>
          <p className="text-sm text-concrete">Cost ranges, financing, HOA rights, contractor vetting, and 29-question FAQ.</p>
        </Link>
        <Link href="/services/garage-conversion-adu" className="border border-concrete/30 rounded-lg p-5 hover:border-navy/40 hover:bg-navy/5 transition-colors">
          <p className="font-semibold text-ink mb-1">Garage Conversion Guide</p>
          <p className="text-sm text-concrete">Cost, process, JADU kitchen rules, and resale tradeoffs for garage conversions.</p>
        </Link>
      </div>

      <div className="mt-8 bg-navy/5 border border-navy/20 rounded-lg p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink mb-2">Free ADU Reality Check for Your Property</h2>
        <p className="text-concrete mb-5 text-sm max-w-md mx-auto">
          Find out if an ADU works on your lot, get a real budget range, and get matched with a
          licensed, already-vetted local contractor — so you skip weeks of getting bids and checking
          licenses yourself. Free, no obligation. If your lot isn&apos;t a good fit yet, we&apos;ll tell
          you honestly why.
        </p>
        <Link
          href="mailto:charlesprovido@gmail.com"
          className="inline-block bg-navy text-paper px-6 py-3 rounded font-semibold hover:bg-navy/90 transition-colors text-sm"
        >
          Get My Free ADU Reality Check
        </Link>
      </div>
    </div>
  );
}
