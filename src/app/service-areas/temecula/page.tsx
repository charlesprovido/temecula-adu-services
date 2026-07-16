import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Services in Temecula, CA — Permits, Timelines & Neighborhoods",
  description:
    "City-specific ADU permit timelines, short-term rental rules, and neighborhood coverage for the City of Temecula. Includes plan check process, contact information, and local FAQ.",
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

export default function TemeculaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/service-areas" className="hover:text-blue-600">Service Areas</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">Temecula</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
          City of Temecula
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          ADU Services in Temecula, CA
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          City-specific permit timelines, short-term rental rules, neighborhood coverage, and
          contact information for ADU projects in the City of Temecula. For general ADU costs,
          financing, AB 2533 legalization, and contractor vetting, see the{" "}
          <Link href="/services/adu-construction" className="text-blue-600 underline">
            ADU Construction guide
          </Link>
          .
        </p>
      </div>

      {/* ─── PERMIT TIMELINE ─── */}
      <H2 id="permits">
        Permit timeline — City of Temecula{" "}
        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-500 rounded px-2 py-0.5 ml-1">
          Last updated: {LAST_UPDATED}
        </span>
      </H2>

      <InfoBox color="amber">
        <strong>Verify before you plan around these numbers.</strong> Plan check queue times in
        Temecula fluctuate based on staffing, application volume, and seasonal patterns. The ranges
        below represent typical experience based on regional knowledge as of {LAST_UPDATED} — but
        current queue times can be shorter or longer. Always call the Building &amp; Safety Division
        directly before committing to a project schedule.
      </InfoBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California state law (Gov. Code §65852.2) requires cities to approve or deny a complete ADU
        permit application within 60 days. That&apos;s the statutory ceiling. Temecula&apos;s actual process
        typically plays out as follows:
      </p>

      <div className="space-y-3 my-6">
        {[
          ["Initial plan check (first review)", "Typically 6–10 weeks from a complete submittal. Queue times vary; call the Building & Safety Division to ask about current wait times before projecting your schedule."],
          ["Correction cycle", "Each round of corrections adds 3–6 weeks. The number of rounds depends heavily on how complete and accurate your initial drawings are — an experienced local designer reduces round count."],
          ["Pre-approved ADU plan sets", "Temecula has periodically offered pre-approved ADU plan sets that can reduce plan check time significantly. Availability changes. Ask the Building Department directly whether current pre-approved sets are available for your ADU type."],
          ["Total to permit issuance", "3–6 months is typical for a straightforward project with a complete submittal. 6–9 months if there are significant corrections or if you submit an incomplete package."],
          ["Construction inspections", "Inspections are scheduled directly with the city. Turnaround on inspection requests is typically 2–5 business days; confirm current scheduling lead times when your project is underway."],
        ].map(([stage, detail]) => (
          <div key={stage} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold text-gray-800 text-sm mb-0.5">{stage}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-bold text-gray-800 mb-3">City of Temecula — Building &amp; Planning contacts</p>
        <InfoBox color="amber">
          <strong>Phone numbers and department names below should be verified directly.</strong> City
          department contacts change; the numbers listed here were current as of {LAST_UPDATED} to the
          best of our knowledge but may have changed. Verify at the official City of Temecula website
          (temeculaca.gov) before calling.
        </InfoBox>
        <ul className="text-sm text-gray-600 space-y-2">
          <li><span className="font-medium text-gray-800">Building &amp; Safety:</span> Community Development Department — see temeculaca.gov for current contact</li>
          <li><span className="font-medium text-gray-800">Planning Division:</span> Community Development Department — see temeculaca.gov for current contact</li>
          <li><span className="font-medium text-gray-800">Pre-application inquiries:</span> Contact Planning Division to schedule a pre-application meeting before committing to design costs</li>
        </ul>
      </div>

      {/* ─── STR RULES ─── */}
      <H2 id="str">
        Short-term rental rules — Temecula{" "}
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
        The City of Temecula regulates short-term rentals (stays under 30 days). ADUs are subject
        to the same STR rules as the primary home — they are not exempt. Key points based on our
        current understanding:
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>A city permit is required to operate a short-term rental — operating without one carries fines</li>
        <li>Transient Occupancy Tax (TOT) applies and must be collected from guests and remitted to the city</li>
        <li>STR permits are generally tied to the property and owner — they typically do not transfer automatically on sale</li>
        <li>HOA CC&Rs may independently prohibit STRs regardless of city permitting — check your CC&Rs before assuming STR use is viable</li>
        <li>The Wine Country area (Rancho California Road corridor and surrounding area) generates significant STR demand due to wine tourism — but STR permit availability in any given area may be subject to caps or zone restrictions</li>
        <li>Operating an unpermitted STR can complicate future ADU permit applications</li>
      </ul>

      <p className="text-sm text-gray-600 leading-relaxed">
        For current requirements, contact the City of Temecula directly or visit temeculaca.gov.
        Always verify before designing a financial model around STR income from an ADU.
      </p>

      {/* ─── NEIGHBORHOODS ─── */}
      <H2 id="neighborhoods">Temecula neighborhoods we cover</H2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Temecula is a large city with distinct neighborhoods that vary significantly in lot size,
        HOA density, and ADU feasibility. Here&apos;s a brief overview of the major areas:
      </p>

      <div className="space-y-5">
        {[
          {
            name: "Old Town Temecula",
            desc: "The historic downtown core along Old Town Front Street. Lots tend to be smaller and older than newer planned communities. Fewer HOAs. ADU feasibility varies significantly by parcel — the older lot configurations require careful review of setbacks and utility access. High foot traffic and proximity to Old Town amenities make this a strong short-term rental market if STR rules permit.",
          },
          {
            name: "Harveston",
            desc: "A large master-planned community in North Temecula, centered around Harveston Lake. Well-established HOA. Many homes have standard suburban lots with attached garages — garage conversions are a common ADU path here, subject to HOA architectural review. AB 670 protects your right to build; the HOA can require design consistency but cannot prohibit construction outright.",
          },
          {
            name: "Redhawk",
            desc: "A master-planned community in South Temecula near the Wolf Creek area. HOA-governed with architectural review requirements. Mix of lot sizes. Some properties back to open space or golf course, which can affect ADU placement options. Detached ADUs in the rear yard are the most common path where lot size permits.",
          },
          {
            name: "Morgan Hill",
            desc: "A planned community in South/Southeast Temecula, one of the newer master-planned developments. HOA community with active architectural review. Larger lots in some sections make detached ADUs feasible; smaller lots may be better suited for JADU or garage conversion. HOA approval process should be anticipated as part of your project timeline.",
          },
          {
            name: "Wine Country (Rancho California Road area)",
            desc: "The southwest portion of Temecula, encompassing the wine country corridor along Rancho California Road and surrounding areas. Larger lot sizes are common, making this one of the better areas for detached new-build ADUs. Higher short-term rental demand due to wine tourism proximity — but verify current STR permit availability with the city before designing around STR income.",
          },
        ].map((item) => (
          <div key={item.name} className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <InfoBox color="amber">
        <strong>De Luz — not within Temecula city limits.</strong> De Luz is a rural community often
        associated with the Temecula area in real estate listings, but it is located in unincorporated
        Riverside County, not within the City of Temecula. ADU projects there are subject to Riverside
        County rules, not City of Temecula ordinances. Confirm your parcel&apos;s jurisdiction before
        beginning any permit process.
      </InfoBox>

      {/* ─── FAQ ─── */}
      <H2 id="faq">Temecula ADU FAQ</H2>

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
          href="/service-areas/murrieta"
          className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <p className="font-semibold text-gray-800 mb-1">Murrieta ADU Guide</p>
          <p className="text-sm text-gray-600">City-specific permit timelines, STR rules, and neighborhoods for the City of Murrieta.</p>
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Questions about your Temecula property?</h2>
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
    q: "How long does ADU permitting actually take in Temecula?",
    a: (
      <>
        <p>
          Based on regional experience as of {LAST_UPDATED}: first plan review typically takes 6–10
          weeks from a complete submittal. Each correction round adds 3–6 weeks. Total to permit
          issuance is typically 3–6 months for a straightforward project, 6–9 months if corrections
          are significant.
        </p>
        <p>
          These are estimates, not guarantees — plan check queue times fluctuate. Always call the
          Building &amp; Safety Division to ask about current wait times before committing to a
          project schedule. State law caps the review at 60 days from a complete application, but
          an incomplete submittal restarts the clock.
        </p>
      </>
    ),
  },
  {
    q: "Does Temecula offer pre-approved ADU plan sets?",
    a: (
      <p>
        Temecula has periodically offered pre-approved ADU plan sets that can reduce plan check
        time significantly by skipping some standard review steps. Availability changes over time —
        ask the Building Department directly whether current pre-approved sets exist for your ADU
        type and size. If they&apos;re available and your project fits the parameters, using them can
        meaningfully compress the permitting timeline.
      </p>
    ),
  },
  {
    q: "Can I use my Temecula ADU as an Airbnb?",
    a: (
      <>
        <p>
          Possibly — but verify first. The City of Temecula requires a permit to operate a
          short-term rental (stays under 30 days), and Transient Occupancy Tax (TOT) must be
          collected and remitted. ADUs are subject to the same STR rules as the primary home.
        </p>
        <p>
          Two layers to check independently: (1) the city&apos;s current STR permit requirements and
          any zone restrictions — contact the city directly; (2) your HOA CC&Rs, which may
          prohibit STRs regardless of what the city allows. Don&apos;t rely on this page for current
          ordinance details — STR rules change, and operating without a permit carries fines.
        </p>
      </>
    ),
  },
  {
    q: "Are most Temecula neighborhoods HOA communities?",
    a: (
      <p>
        Many of Temecula&apos;s planned communities are HOA-governed — Harveston, Redhawk, Morgan Hill,
        and Bear Creek (just over the Murrieta border) are examples. Old Town and some older
        residential areas have fewer HOAs. If you&apos;re in an HOA, you&apos;ll need HOA architectural
        review approval in addition to city permits. California AB 670 prohibits HOAs from banning
        ADUs outright, but they can impose reasonable design standards and require ARC approval —
        factor this into your timeline.
      </p>
    ),
  },
  {
    q: "Does the Wine Country area have different rules for ADUs?",
    a: (
      <p>
        The Wine Country area is within Temecula city limits and subject to the same basic ADU
        rules as the rest of the city. What differs is the lot character — the wine country
        corridor has larger lots than typical suburban Temecula, which gives more flexibility for
        detached new-build ADUs. The area also has higher STR demand due to wine tourism, which
        makes rental income projections for short-term use more favorable — but you still need a
        city STR permit and must comply with any HOA restrictions if applicable. Verify current
        STR availability with the city before designing around that income.
      </p>
    ),
  },
  {
    q: "Where do I go to start the ADU permit process in Temecula?",
    a: (
      <p>
        The City of Temecula Community Development Department handles both planning and building
        permits. The best first step is a pre-application meeting with the Planning Division —
        it&apos;s typically free or low-cost and lets staff review your concept before you commit to
        design costs. Visit temeculaca.gov for current contact information and department hours.
        Note that phone numbers and department names can change — always verify at the official
        city website rather than relying on contact info from third-party sources.
      </p>
    ),
  },
];
