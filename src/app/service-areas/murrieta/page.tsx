import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Services in Murrieta, CA — Permits, Timelines & Neighborhoods",
  description:
    "City-specific ADU permit timelines, short-term rental rules, and neighborhood coverage for the City of Murrieta. Includes plan check process, contact information, and local FAQ.",
};

const LAST_UPDATED = "July 2026";

function InfoBox({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "amber" | "red" | "green";
}) {
  const styles = {
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    red: "bg-red-50 border-red-300 text-red-900",
    green: "bg-green-50 border-green-300 text-green-900",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="scroll-mt-20" />;
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <>
      {id && <SectionAnchor id={id} />}
      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">{children}</h2>
    </>
  );
}

export default function MurrietaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/service-areas" className="hover:text-blue-600">Service Areas</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">Murrieta</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
          City of Murrieta
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          ADU Services in Murrieta, CA
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          City-specific permit timelines, short-term rental rules, neighborhood coverage, and
          contact information for ADU projects in the City of Murrieta. For general ADU costs,
          financing, AB 2533 legalization, and contractor vetting, see the{" "}
          <Link href="/services/adu-construction" className="text-blue-600 underline">
            ADU Construction guide
          </Link>
          .
        </p>
      </div>

      {/* ─── PERMIT TIMELINE ─── */}
      <H2 id="permits">
        Permit timeline — City of Murrieta{" "}
        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-500 rounded px-2 py-0.5 ml-1">
          Last updated: {LAST_UPDATED}
        </span>
      </H2>

      <InfoBox color="amber">
        <strong>Verify before you plan around these numbers.</strong> Plan check queue times in
        Murrieta fluctuate based on staffing, application volume, and seasonal patterns. The ranges
        below represent typical experience based on regional knowledge as of {LAST_UPDATED} — but
        current queue times can be shorter or longer. Always contact Development Services directly
        before committing to a project schedule.
      </InfoBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California state law (Gov. Code §65852.2) requires cities to approve or deny a complete ADU
        permit application within 60 days. That&apos;s the statutory ceiling. Murrieta&apos;s actual process
        typically plays out as follows:
      </p>

      <div className="space-y-3 my-6">
        {[
          ["Initial plan check (first review)", "Typically 6–10 weeks from a complete submittal. Call Development Services to ask about current queue times before projecting your schedule — these vary significantly by season and application volume."],
          ["Correction cycle", "Each round of corrections adds weeks to the timeline. How many rounds your project goes through depends heavily on the completeness and accuracy of your initial drawings. An experienced local designer can significantly reduce round count."],
          ["Over-the-counter review", "Some simpler projects — such as a basic JADU with minimal structural changes — may qualify for a faster over-the-counter review rather than standard plan check. Confirm with the Building Department whether your project qualifies before assuming this option is available."],
          ["Total to permit issuance", "3–5 months is typical for a straightforward project with a complete submittal. Projects with significant corrections, or submitted with incomplete drawings, can run 6 months or longer."],
          ["Construction inspections", "Inspections are scheduled with the city. Ask about current inspection scheduling lead times when your project is underway — this can affect your construction sequencing."],
        ].map(([stage, detail]) => (
          <div key={stage} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold text-gray-800 text-sm mb-0.5">{stage}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-bold text-gray-800 mb-3">City of Murrieta — Development Services contact</p>
        <InfoBox color="amber">
          <strong>Contact information below should be verified directly.</strong> Department names
          and contact details change; verify at the official City of Murrieta website (murrietaca.gov)
          before calling.
        </InfoBox>
        <ul className="text-sm text-gray-600 space-y-2">
          <li><span className="font-medium text-gray-800">Development Services Department:</span> Handles both building permits and planning — see murrietaca.gov for current contact</li>
          <li><span className="font-medium text-gray-800">Pre-application inquiries:</span> Contact Development Services to discuss your project concept before committing to design costs — this is the most efficient first step for any ADU project</li>
        </ul>
      </div>

      {/* ─── STR RULES ─── */}
      <H2 id="str">
        Short-term rental rules — Murrieta{" "}
        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-500 rounded px-2 py-0.5 ml-1">
          Last updated: {LAST_UPDATED}
        </span>
      </H2>

      <InfoBox color="red">
        <strong>Verify STR rules directly with the City before making any business decisions around
        short-term rental income.</strong> Short-term rental ordinances change frequently. The
        information below represents our general understanding as of {LAST_UPDATED} but may not
        reflect current permit requirements, zone restrictions, or fee structures. Do not rely on
        this page as a substitute for reading the current ordinance or calling the city.
      </InfoBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The City of Murrieta regulates short-term rentals (stays under 30 days). ADUs are subject
        to the same STR rules as the primary home. Key points based on our current understanding:
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>A city permit is required to operate a short-term rental — operating without one carries fines</li>
        <li>Transient Occupancy Tax (TOT) applies and must be collected from guests and remitted to the city</li>
        <li>STR permits are generally tied to the property and owner — they typically do not transfer automatically on sale</li>
        <li>HOA CC&Rs may independently prohibit STRs regardless of city permitting — check your CC&Rs before assuming STR use is viable</li>
        <li>Murrieta is primarily a long-term rental market compared to Temecula&apos;s Wine Country area — STR demand is generally lower and the long-term rental strategy is often more reliable</li>
        <li>Operating an unpermitted STR can complicate future ADU permit applications</li>
      </ul>

      <p className="text-sm text-gray-600 leading-relaxed">
        For current requirements, contact the City of Murrieta directly or visit murrietaca.gov.
        Always verify before designing a financial model around STR income from an ADU.
      </p>

      {/* ─── NEIGHBORHOODS ─── */}
      <H2 id="neighborhoods">Murrieta neighborhoods we cover</H2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Murrieta has a significant number of master-planned, HOA-governed communities — more
        densely so than Temecula in many parts of the city. Lot sizes, setbacks, and HOA
        architectural requirements vary significantly by community. Here&apos;s an overview of the
        major areas:
      </p>

      <div className="space-y-5">
        {[
          {
            name: "Bear Creek",
            desc: "A large gated community in Southwest Murrieta, centered around a golf course. Strong HOA with architectural review requirements. Lot sizes are generally suitable for detached ADUs in the rear yard where setbacks allow. AB 670 protects your right to build despite HOA governance, but the ARC process should be built into your timeline. The gated community character tends to make long-term rentals a better fit than STRs here.",
          },
          {
            name: "California Oaks",
            desc: "A planned community in South Murrieta. Mix of lot sizes. HOA community with architectural standards. Many homes have attached garages, making garage conversion a practical first path. Detached ADUs are feasible on larger lots. Check your specific CC&Rs for any STR restrictions before projecting rental strategy.",
          },
          {
            name: "Murrieta Hot Springs area",
            desc: "The Murrieta Hot Springs Road corridor in North Murrieta — an established residential area named for the historic hot springs that are no longer active. Mix of older and newer construction, with varied lot sizes. HOA presence varies by subdivision within the area. Some of Murrieta's larger single-family lots are in this area, which can support detached ADUs without the lot size constraints common in newer dense subdivisions.",
          },
          {
            name: "Alta Murrieta",
            desc: "A neighborhood area in Murrieta, generally in the central/north portion of the city. Mix of HOA and non-HOA properties. Standard suburban lot sizes. Garage conversion is a common ADU path here given the typical attached garage configuration. Confirm HOA status for your specific parcel before beginning design.",
          },
        ].map((item) => (
          <div key={item.name} className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <InfoBox color="amber">
        <strong>French Valley — jurisdiction note.</strong> French Valley is an area between Murrieta
        and Temecula that is largely unincorporated Riverside County rather than within either city&apos;s
        limits. ADU projects there are subject to Riverside County rules. Confirm your parcel&apos;s
        jurisdiction at the Riverside County Assessor&apos;s website before beginning any permit process.
      </InfoBox>

      {/* ─── FAQ ─── */}
      <H2 id="faq">Murrieta ADU FAQ</H2>

      <div className="space-y-0 divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
        {faqItems.map((item, i) => (
          <details key={i} className="group">
            <summary className="flex justify-between items-start gap-4 px-5 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-gray-800 text-sm leading-snug">{item.q}</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 mt-0.5">▾</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed space-y-2 bg-gray-50">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      {/* Cross-links */}
      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link
          href="/services/adu-construction"
          className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <p className="font-semibold text-gray-800 mb-1">ADU Construction Guide</p>
          <p className="text-sm text-gray-600">Cost ranges, financing, AB 2533, JADU rules, contractor vetting — applies to all cities.</p>
        </Link>
        <Link
          href="/service-areas/temecula"
          className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <p className="font-semibold text-gray-800 mb-1">Temecula ADU Guide</p>
          <p className="text-sm text-gray-600">City-specific permit timelines, STR rules, and neighborhoods for the City of Temecula.</p>
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Questions about your Murrieta property?</h2>
        <p className="text-gray-600 mb-5 text-sm max-w-md mx-auto">
          A free consultation can clarify what&apos;s feasible on your specific lot, what the permit
          process looks like for your ADU type, and what a realistic budget looks like.
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

const faqItems: { q: string; a: React.ReactNode }[] = [
  {
    q: "How long does ADU permitting actually take in Murrieta?",
    a: (
      <>
        <p>
          Based on regional experience as of {LAST_UPDATED}: first plan review typically takes 6–10
          weeks from a complete submittal. Each correction round adds additional weeks. Total to
          permit issuance is typically 3–5 months for a straightforward project, longer if
          corrections are significant or the submittal is incomplete.
        </p>
        <p>
          These are estimates, not guarantees — queue times fluctuate. Always contact Development
          Services to ask about current wait times before committing to a project schedule. State
          law caps review at 60 days from a complete application, but an incomplete submittal
          restarts the clock.
        </p>
      </>
    ),
  },
  {
    q: "Does Murrieta offer over-the-counter review for ADU permits?",
    a: (
      <p>
        Some simpler projects — like a basic JADU with minimal structural changes — may qualify for
        over-the-counter review rather than the standard plan check queue, which can significantly
        reduce wait time. Whether your project qualifies depends on its scope and complexity.
        Confirm with Murrieta&apos;s Development Services Department whether your specific project
        qualifies before assuming this option is available.
      </p>
    ),
  },
  {
    q: "Can I use my Murrieta ADU as an Airbnb?",
    a: (
      <>
        <p>
          Possibly — but verify first. The City of Murrieta requires a permit to operate a
          short-term rental (stays under 30 days), and Transient Occupancy Tax (TOT) must be
          collected and remitted. ADUs are subject to the same STR rules as the primary home.
        </p>
        <p>
          Two layers to check independently: (1) the city&apos;s current STR permit requirements
          and any zone restrictions — contact the city directly; (2) your HOA CC&Rs, which may
          prohibit STRs regardless of city permission. Note that Murrieta is primarily a long-term
          rental market — STR demand is generally lower here than in Temecula&apos;s Wine Country
          area, which may affect your income projections. Don&apos;t rely on this page for current
          ordinance details — STR rules change.
        </p>
      </>
    ),
  },
  {
    q: "Is Bear Creek HOA a problem for ADU projects?",
    a: (
      <p>
        Not a prohibition — California AB 670 prohibits any HOA from banning ADU construction
        outright or imposing conditions that make construction effectively infeasible. Bear Creek&apos;s
        HOA can require architectural review committee (ARC) approval and enforce reasonable design
        standards (materials, colors, placement), but they cannot simply deny an ADU permit request.
        If you receive a denial or unreasonably burdensome conditions, respond in writing citing AB
        670. Build the ARC approval process into your project timeline — it typically adds 4–8 weeks
        before you can submit to the city.
      </p>
    ),
  },
  {
    q: "My property is near the Temecula/Murrieta border — which city rules apply?",
    a: (
      <p>
        Your parcel&apos;s jurisdiction is determined by the city limits, not by proximity to the border
        or by your mailing address. A Murrieta mailing address doesn&apos;t mean you&apos;re in Murrieta city
        limits, and vice versa. Verify your parcel&apos;s jurisdiction at the Riverside County
        Assessor&apos;s website (assessor.rivco.org) using your parcel number. Note also that some
        properties near the border may be in unincorporated Riverside County, subject to County
        rules rather than either city&apos;s ordinances.
      </p>
    ),
  },
  {
    q: "Where do I go to start the ADU permit process in Murrieta?",
    a: (
      <p>
        The City of Murrieta Development Services Department handles both planning and building
        permits. The best first step is a pre-application discussion with Development Services staff
        — contact the department to schedule one before committing design costs. Visit murrietaca.gov
        for current contact information and department hours. Always verify contact details at the
        official city website rather than relying on third-party sources.
      </p>
    ),
  },
];
