import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Construction in Temecula & Murrieta — Costs, Timelines & Process",
  description:
    "Honest cost ranges, permit timelines, financing options, AB 2533 legalization, and contractor vetting for ADU construction in Temecula, Murrieta, and Southwest Riverside County.",
};

const LAST_UPDATED_GRANTS = "July 2026";
const LAST_UPDATED_PERMITS = "July 2026";

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="scroll-mt-20" />;
}

function InfoBox({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "amber" | "red" | "green" }) {
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

function LastUpdated({ date }: { date: string }) {
  return (
    <span className="inline-block text-xs font-medium bg-gray-100 text-gray-500 rounded px-2 py-0.5 ml-2">
      Last updated: {date}
    </span>
  );
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <>
      {id && <SectionAnchor id={id} />}
      <h2 className="text-2xl font-bold text-gray-900 mt-14 mb-4">{children}</h2>
    </>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">{children}</h3>;
}

export default function ADUConstructionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Hero */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Temecula Valley ADU Resource</p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          ADU Construction in Temecula &amp; Murrieta:<br />Real Costs, Honest Timelines
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Most local contractor websites either leave pricing blank or give you a range so wide it&apos;s useless.
          This page covers what Temecula and Murrieta homeowners actually need to know: real cost ranges,
          permit timelines, financing options, how to legalize an existing unpermitted unit under AB 2533,
          and how to vet a contractor before you sign anything.
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
        <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">On this page</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-blue-700">
          {[
            ["#adu-types", "What types of ADU can I build?"],
            ["#costs", "Real cost ranges for Temecula/Murrieta"],
            ["#hidden-costs", "Hidden costs that catch people off guard"],
            ["#financing", "Financing options"],
            ["#calhfa", "CalHFA ADU Grant — current status"],
            ["#permitting", "Permit timeline: Temecula & Murrieta"],
            ["#ab2533", "Legalizing an existing unpermitted ADU (AB 2533)"],
            ["#jadu", "JADU vs. full ADU — kitchen requirements"],
            ["#garage-tradeoffs", "Garage conversion pros, cons & resale impact"],
            ["#str", "Short-term rental rules for ADUs"],
            ["#hoa", "Can my HOA block an ADU?"],
            ["#roi", "Rental income & ROI estimates"],
            ["#contractor-vetting", "How to vet a contractor (CSLB guide)"],
            ["#faq", "FAQ — 35 questions answered"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:underline">{label}</a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ─── ADU TYPES ─── */}
      <H2 id="adu-types">What types of ADU can I build?</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law defines four categories. Each has different cost profiles, site requirements, and
        long-term implications for your property.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            title: "Detached ADU",
            desc: "A fully separate structure in your backyard or elsewhere on the lot. Maximum size is generally 1,200 sq ft under state law, though local ordinances may differ. Highest cost but most privacy for both occupants and offers the strongest rental appeal.",
          },
          {
            title: "Attached ADU",
            desc: "An addition built onto the side or rear of your existing home, sharing at least one wall. Typically less expensive than a detached unit because some structural elements are shared, but layout options can be constrained by your existing footprint.",
          },
          {
            title: "Garage Conversion",
            desc: "An existing attached or detached garage converted into living space. The most affordable ADU path because the structure already exists. The tradeoff is losing garage space — an honest analysis of that tradeoff is further down this page.",
          },
          {
            title: "Junior ADU (JADU)",
            desc: "Up to 500 sq ft, created entirely within the existing walls of the primary residence (or an attached garage). Requires an owner-occupancy agreement and must have an exterior entrance. Kitchen requirements differ significantly from a full ADU — covered in detail below.",
          },
        ].map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <InfoBox color="blue">
        <strong>Statewide baseline, local adjustments:</strong> California law sets minimum allowances
        that all cities must honor (Gov. Code §65852.2). Temecula and Murrieta may add design standards
        (setbacks, height, aesthetics) on top of state minimums but cannot be more restrictive than what
        the state floor allows. When in doubt, the state law wins.
      </InfoBox>

      {/* ─── COSTS ─── */}
      <H2 id="costs">Real cost ranges for Temecula &amp; Murrieta</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The numbers below are compiled from regional projects in Temecula, Murrieta, and the broader Southwest
        Riverside County market. They cover construction only — design, permit fees, and utility connections
        are addressed separately under Hidden Costs. Final cost depends heavily on site conditions, finish
        level, and whether you run into soil or utility surprises.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">ADU Type</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Typical Range</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Key Variables</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Detached new build", "$80,000 – $250,000", "Size, finish level, foundation type, utility distance"],
              ["Attached addition", "$100,000 – $200,000", "Structural tie-in complexity, existing foundation condition"],
              ["Garage conversion (attached)", "$40,000 – $120,000", "Insulation, HVAC, plumbing rough-in, window/door cuts"],
              ["Garage conversion (detached)", "$35,000 – $100,000", "Similar to attached; often simpler egress requirements"],
              ["Junior ADU (JADU)", "$20,000 – $60,000", "Interior reconfiguration, separate entrance, efficiency kitchen"],
            ].map(([type, range, vars]) => (
              <tr key={type} className="border border-gray-200 even:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{type}</td>
                <td className="px-4 py-3 text-gray-700 font-semibold">{range}</td>
                <td className="px-4 py-3 text-gray-600">{vars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox color="amber">
        <strong>Why the ranges are this wide:</strong> A basic 400 sq ft detached ADU with standard finishes
        on a flat lot with existing utility access might come in near the low end. A 1,000 sq ft unit with
        premium finishes, a sloped lot, a failing sewer lateral, and expansive clay soil can push well past
        the high end. The single biggest driver of cost overruns is what&apos;s discovered during site prep and
        rough-in — covered in the next section.
      </InfoBox>

      {/* ─── HIDDEN COSTS ─── */}
      <H2 id="hidden-costs">Hidden costs that catch people off guard</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No local competitor publishes this list in any detail. These are the line items that routinely appear
        after a contract is signed and a shovel hits the ground.
      </p>

      <div className="space-y-5 my-6">
        {[
          {
            title: "Utility trenching",
            detail: "Running new electrical, water, and sewer lines from the main house to a detached ADU adds $5,000–$30,000 depending on distance and what&apos;s buried between the two structures. Longer runs, mature tree roots, and existing hardscape (concrete driveway, pavers) all push this number up.",
          },
          {
            title: "Sewer lateral upgrade or separate connection",
            detail: "If your sewer lateral is old, undersized, or already running near capacity, the city may require an upgrade or a separate tie-in to the municipal main. This typically runs $3,000–$15,000 and occasionally more if the main isn&apos;t near your property line.",
          },
          {
            title: "Soil and foundation surprises",
            detail: "Parts of the Temecula Valley have expansive clay soils. A geotechnical report may be required, and engineered foundation solutions (deepened footings, post-tension slabs) can add $10,000–$40,000 to a new-build ADU. This is non-negotiable when the soil requires it — there&apos;s no workaround.",
          },
          {
            title: "Plan check and permit fees",
            detail: "Temecula and Murrieta charge plan check and permit fees that vary by project valuation and scope. Budget $5,000–$15,000 for a typical detached ADU. Impact fees on new ADUs are significantly restricted under state law, but school fees and certain utility connection fees still apply.",
          },
          {
            title: "Design and engineering fees",
            detail: "Architect or designer fees for ADU plans typically run $5,000–$20,000. Structural engineering (required when you&apos;re modifying load-bearing elements or working on a slope) is on top of that. Some design-build firms bundle this; others bill it separately — confirm before signing.",
          },
          {
            title: "Title 24 energy compliance",
            detail: "California&apos;s energy code requires compliance with current standards. On new-build ADUs, this may require solar photovoltaic panels depending on size and configuration. Solar system cost ranges from $8,000–$20,000 depending on system size. Your designer should flag this early so it isn&apos;t a surprise at permit submittal.",
          },
          {
            title: "Temporary power and construction utilities",
            detail: "Running power to a remote construction site on your property, portable toilet rental, and debris hauling are minor but real costs — usually $2,000–$5,000 for a standard project.",
          },
        ].map((item) => (
          <div key={item.title} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
          </div>
        ))}
      </div>

      <InfoBox color="amber">
        <strong>Ask every contractor for a site-specific itemized estimate, not a per-square-foot ballpark.</strong>{" "}
        Per-sq-ft numbers ignore the utility distance, soil conditions, and permit complexity that actually
        determine your total cost. If a contractor gives you a firm price without a site visit and soil
        assessment, treat it as a placeholder, not a commitment.
      </InfoBox>

      {/* ─── FINANCING ─── */}
      <H2 id="financing">Financing options</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is territory almost no local ADU contractor covers in any depth — probably because they&apos;d
        rather you just sign a contract than think hard about how you&apos;re paying for it. Here are the main
        paths, with honest tradeoffs.
      </p>

      <H3>Home Equity Line of Credit (HELOC)</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        If your home has appreciated significantly (common in the Temecula/Murrieta market over the past
        decade), a HELOC lets you borrow against that equity at a variable rate. You draw funds as
        construction progresses rather than receiving a lump sum. The risk: rates are variable, so if
        construction runs long and rates rise, your carrying cost increases. Best suited for homeowners
        with substantial equity who want flexibility and can tolerate rate movement.
      </p>

      <H3>Cash-out refinance</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        You refinance your existing mortgage for more than you owe and receive the difference in cash.
        This resets your mortgage rate, which matters a lot depending on what you currently hold.
        If your existing mortgage rate is lower than current market rates, a cash-out refi is likely
        a poor choice — you&apos;d be trading a low rate on your entire balance to fund the ADU. Consult a
        mortgage lender to run the actual numbers before dismissing or pursuing this option.
      </p>

      <H3>Construction loan</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        A short-term loan specifically designed to fund construction, with funds released in draws tied
        to project milestones. After construction completes, it typically converts to a standard mortgage
        (called a construction-to-permanent loan). More complex to qualify for and administer than a HELOC,
        but useful when you&apos;re starting with limited equity. Fewer lenders offer these products, so shop
        specifically for ADU construction loan programs.
      </p>

      <H3>ADU-specific lending programs</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        Several banks and credit unions have developed ADU-specific loan products in California following the
        state&apos;s ADU reform legislation. These vary significantly in terms and availability. Ask your lender
        specifically about ADU construction loan products rather than trying to fit an ADU project into a
        standard home improvement loan.
      </p>

      <H3>Personal savings / cash</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        Simplest from a paperwork standpoint. If you&apos;re funding a garage conversion or JADU in the
        $40,000–$80,000 range and have accessible savings, this avoids interest entirely and gives
        you the most contractor negotiating leverage (cash buyers can sometimes negotiate faster starts).
      </p>

      {/* ─── CALHFA ─── */}
      <H2 id="calhfa">
        CalHFA ADU Grant — current status
        <LastUpdated date={LAST_UPDATED_GRANTS} />
      </H2>

      <InfoBox color="red">
        <strong>The $40,000 CalHFA ADU Grant Program is paused and has been since December 28, 2023.</strong>{" "}
        The program exhausted its funding allocation and no new round has been announced as of{" "}
        {LAST_UPDATED_GRANTS}. CalHFA&apos;s own website (
        <a href="https://www.calhfa.ca.gov/adu" className="underline font-medium" target="_blank" rel="noopener noreferrer">
          calhfa.ca.gov/adu
        </a>
        ) warns that anyone claiming they can still help you obtain this grant may be running a scam.
        At least one local competitor website still shows this grant as available — that information
        is incorrect.
      </InfoBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the program was active, it offered up to $40,000 in grant funds (not a loan — no repayment
        required) to income-qualifying homeowners to cover pre-development and non-recurring closing costs
        on an ADU construction loan. It was administered through CalHFA-approved lenders, not through
        cities or contractors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a future funding round is announced, it will appear on{" "}
        <a href="https://www.calhfa.ca.gov/adu" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          calhfa.ca.gov/adu
        </a>{" "}
        — that is the only authoritative source. We will update this page when and if that changes.
      </p>

      <InfoBox color="amber">
        <strong>If someone calls you claiming they can get you the CalHFA ADU grant right now,</strong>{" "}
        CalHFA itself calls that a red flag for fraud. Do not provide personal or financial information
        to anyone making that claim. Report suspected scams to CalHFA directly at their official contact
        listed on calhfa.ca.gov.
      </InfoBox>

      {/* ─── PERMITTING ─── */}
      <H2 id="permitting">
        Permit timeline: Temecula &amp; Murrieta
        <LastUpdated date={LAST_UPDATED_PERMITS} />
      </H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California state law (Gov. Code §65852.2) requires cities to approve or deny a complete ADU permit
        application within 60 days. That&apos;s the statutory ceiling. In practice, here&apos;s what homeowners
        in these two cities typically experience:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-2">City of Temecula</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li><span className="font-medium text-gray-800">Initial plan check:</span> 6–10 weeks for a standard first review</li>
            <li><span className="font-medium text-gray-800">Corrections cycle:</span> Each correction round adds 3–6 weeks</li>
            <li><span className="font-medium text-gray-800">Pre-approved plans:</span> Temecula periodically offers pre-approved ADU plan sets that can reduce plan check time significantly — ask the Planning Department if current sets are available</li>
            <li><span className="font-medium text-gray-800">Total to permit issuance:</span> 3–6 months is realistic for a straightforward project; 6–9 months if corrections are significant</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-2">City of Murrieta</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li><span className="font-medium text-gray-800">Initial plan check:</span> 6–10 weeks typical</li>
            <li><span className="font-medium text-gray-800">Corrections cycle:</span> Similar to Temecula — each round adds weeks</li>
            <li><span className="font-medium text-gray-800">Over-the-counter review:</span> Simple projects (like a basic JADU with minimal structural changes) may qualify for faster review — confirm with the Building Department</li>
            <li><span className="font-medium text-gray-800">Total to permit issuance:</span> 3–5 months for a straightforward project</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        These timelines apply to the permit process only. Construction itself adds 3–6 months for a
        detached ADU and 1–3 months for a garage conversion, depending on contractor availability and
        scope. Total start-to-finish from initial design through final inspection: plan for 9–18 months
        for a new-build detached ADU, 4–8 months for a garage conversion. Timelines change — always
        confirm current plan check queues directly with the city before projecting a move-in date.
      </p>

      {/* ─── AB 2533 ─── */}
      <H2 id="ab2533">Legalizing an existing unpermitted ADU (AB 2533)</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a converted garage, a backyard structure, or a space someone previously used as a
        rental unit that was never permitted, California AB 2533 created a specific pathway to bring it
        into legal status. Only two of the twenty local competitors we reviewed cover this topic at all.
        Here&apos;s what you actually need to know.
      </p>

      <InfoBox color="green">
        <strong>AB 2533 key facts:</strong> Signed September 2024, effective January 1, 2025.
        Covers ADUs and JADUs built before January 1, 2020.
        Cities may not deny the permit or impose impact fees solely because the unit lacks permits.
        Evaluation is against Health &amp; Safety Code §17920.3 — a basic habitability standard,
        not full current building code. (Gov. Code §66332)
      </InfoBox>

      <H3>What the law actually requires</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        When you apply to legalize an unpermitted ADU or JADU under this program, the city must evaluate
        the unit against Health &amp; Safety Code §17920.3 — California&apos;s substandard housing definition.
        This is a basic habitability checklist: adequate light and ventilation, functioning plumbing and
        electrical, no structural hazards, no pest infestations, no fire hazards. It is significantly
        less demanding than asking the unit to meet every current residential building code requirement.
        The city cannot retroactively apply standards that postdate the unit&apos;s construction.
      </p>

      <H3>The confidential pre-inspection option</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Before formally applying, homeowners may request a confidential third-party pre-inspection.
        This lets you get an independent assessment of what&apos;s likely to need correction before
        the city ever sees the unit. If the pre-inspection reveals significant issues, you can address
        them before submitting the application — without triggering any enforcement action in the interim.
        This is a meaningful protection worth using if you&apos;re uncertain about the unit&apos;s condition.
      </p>

      <H3>Typical costs to clear the checklist</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Retrofit costs to bring a unit up to §17920.3 standards vary widely. A unit that was converted
        reasonably well but just never permitted may need only electrical panel work and smoke/CO detector
        installation — potentially $10,000–$20,000. A unit with failing plumbing, inadequate ventilation,
        and unpermitted structural modifications could run $50,000–$70,000. Most projects fall in the
        $10,000–$70,000 range, with the median somewhere in the $20,000–$40,000 range for a reasonably
        constructed but unpermitted conversion.
      </p>

      <H3>Timeline</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Budget 2–6 months from initial application to final sign-off. Projects with minimal corrections
        move faster; those requiring significant work can take longer depending on contractor availability
        and inspection scheduling.
      </p>

      <H3>Impact fees</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Under Gov. Code §66332, cities cannot charge impact fees for the legalization of an ADU or JADU
        that qualifies under this program. School fees and utility connection fees may still apply in
        certain circumstances — confirm with your city at the time of application.
      </p>

      <InfoBox color="blue">
        <strong>If you&apos;re buying a home with an unpermitted unit:</strong> AB 2533 changes the calculus.
        An unpermitted ADU built before 2020 is not necessarily a liability to avoid — it may be a
        legalization candidate with a defined pathway and known cost envelope. Have an independent
        contractor assess it before closing, and factor the legalization cost into your offer.
      </InfoBox>

      {/* ─── JADU ─── */}
      <H2 id="jadu">JADU vs. full ADU — kitchen requirements</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a technical detail that&apos;s almost entirely absent from local competitor sites despite
        being one of the most common questions homeowners have during design.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-3">Full ADU — kitchen requirements</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li>A full, functional kitchen is required</li>
            <li>Must include a cooking appliance (range or cooktop)</li>
            <li>Full-size kitchen sink</li>
            <li>Refrigerator (size not restricted)</li>
            <li>Ventilation (range hood or exhaust fan) per building code</li>
            <li>Standard kitchen cabinetry and countertop area</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">Full kitchen install typically adds $8,000–$25,000 to project cost depending on finishes and whether gas or electric is run.</p>
        </div>
        <div className="border-2 border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 mb-3">JADU — efficiency kitchen (wet bar)</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li>An &quot;efficiency kitchen&quot; is allowed — not a full kitchen</li>
            <li><strong>No cooking appliance required</strong> (no range or cooktop mandated by state law)</li>
            <li>A small wet-bar style sink is sufficient — state law does not mandate a minimum sink size</li>
            <li>Under-counter or compact refrigerator</li>
            <li>Countertop food prep space</li>
            <li>Microwave oven is permitted</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">Efficiency kitchen typically adds $3,000–$8,000 to project cost. The absence of a range/cooktop also removes the requirement for a gas line and range hood in many configurations.</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        The practical impact: if the space you&apos;re converting qualifies as a JADU (within the existing
        home footprint, under 500 sq ft, with a separate exterior entrance), you can save $5,000–$15,000
        by designing to efficiency kitchen standards rather than full kitchen requirements. The occupant
        can use a microwave, countertop induction burner, or similar appliances without those being
        code-required elements — they just aren&apos;t built-in. Some tenants prefer this; others don&apos;t.
        Factor it into your rental strategy.
      </p>

      {/* ─── GARAGE TRADEOFFS ─── */}
      <H2 id="garage-tradeoffs">Garage conversion pros, cons &amp; resale impact</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nobody local publishes an honest version of this analysis. Here it is.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-3">Pros of garage conversion</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed list-disc list-inside">
            <li>Lowest cost path to an ADU — typically $35,000–$120,000 vs. $80,000–$250,000 for new build</li>
            <li>Faster build — 1–3 months vs. 4–6 months for a detached new build</li>
            <li>No new foundation or framing required</li>
            <li>Usually the simplest permit process</li>
            <li>Rental income can begin sooner</li>
            <li>ADU value typically adds more to appraised value than it costs</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-red-700 mb-3">Cons &amp; resale considerations</h3>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed list-disc list-inside">
            <li>Loss of garage — a real issue in Temecula/Murrieta where buyers expect covered parking</li>
            <li>Some buyers discount homes without a garage, especially in HOA communities</li>
            <li>Reduces storage that many homeowners rely on</li>
            <li>Driveway still exists but provides no covered parking — can feel awkward</li>
            <li>HOA may impose restrictions on appearance of the converted structure</li>
            <li>Financing a home sale is sometimes harder when garage count doesn&apos;t match listing</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        The honest bottom line: in most Temecula and Murrieta neighborhoods, converting a two-car attached
        garage to an ADU will produce positive ROI through rental income faster than a new-build detached
        unit — but it does affect resale appeal for buyers who prioritize garage space. If you plan to
        sell within 5 years, weigh that carefully. If you&apos;re keeping the property long-term, the rental
        income math typically favors conversion.
      </p>

      {/* ─── STR ─── */}
      <H2 id="str">Short-term rental rules for ADUs</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This topic is almost entirely absent from local competitor websites despite being a top question
        from homeowners considering Airbnb or VRBO use.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both Temecula and Murrieta regulate short-term rentals (generally defined as stays under 30 days)
        and require a permit. ADUs are subject to the same short-term rental ordinances as the primary
        home — they are not exempt.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key considerations specific to the Temecula/Murrieta market:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>Short-term rental permits are typically tied to the property address and the owner — they do not transfer automatically if you sell</li>
        <li>Transient Occupancy Tax (TOT) applies to short-term rentals in both cities and must be collected from guests and remitted to the city</li>
        <li>HOA rules may independently prohibit short-term rentals regardless of city permits — check your CC&Rs before assuming STR use is viable</li>
        <li>Some neighborhoods near Wine Country (Temecula) see high STR demand; others are primarily long-term rental markets</li>
        <li>Operating an unpermitted STR carries fines and can complicate future ADU permit applications</li>
      </ul>

      <InfoBox color="amber">
        <strong>Always verify current STR permit requirements directly with the city before purchasing or
        designing around STR income.</strong> Ordinances change, and the revenue assumptions that made
        sense two years ago may not reflect current permit caps or zone restrictions.
        City of Temecula Planning: (951) 694-6400. City of Murrieta Development Services: (951) 461-6082.
      </InfoBox>

      {/* ─── HOA ─── */}
      <H2 id="hoa">Can my HOA block an ADU?</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Short answer: no, not entirely — California law prohibits it. Longer answer: HOAs can still
        make your life complicated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 670 (effective January 1, 2020) prohibits HOAs from banning ADU construction or imposing
        conditions that effectively make construction infeasible. Specifically, an HOA rule that prevents
        construction entirely, or that imposes requirements so burdensome that a reasonable person couldn&apos;t
        comply, is unenforceable against state ADU law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What HOAs <em>can</em> still do:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>Impose reasonable design standards — exterior materials, paint colors, roof pitch that match the neighborhood aesthetic</li>
        <li>Require architectural review committee (ARC) approval before construction begins</li>
        <li>Set location standards within the lot (e.g., placement in the rear yard only)</li>
        <li>Prohibit short-term rentals through CC&Rs independently of city STR rules</li>
      </ul>
      <p className="text-sm text-gray-600 leading-relaxed">
        If your HOA denies an ADU application or imposes conditions you believe are unreasonable, the
        first step is a written response citing AB 670. If that doesn&apos;t resolve it, consult a real estate
        attorney with HOA experience before escalating — most HOA boards will back down when the law is
        cited clearly.
      </p>

      {/* ─── ROI ─── */}
      <H2 id="roi">Rental income &amp; ROI estimates</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Temecula/Murrieta rental market has historically been tight, driven by the area&apos;s desirability,
        school district quality, and relative affordability compared to coastal San Diego County.
        Rent ranges below are based on regional market data for ADU-sized units.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Unit Type</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Monthly Rent Range</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Studio / 1BR ADU (400–600 sq ft)", "$1,400 – $2,000/mo", "JADU or converted garage, furnished commands higher end"],
              ["1BR / 2BR ADU (600–900 sq ft)", "$1,800 – $2,600/mo", "Detached or attached, private entrance premium"],
              ["2BR ADU (900–1,200 sq ft)", "$2,200 – $3,000/mo", "Larger detached units, comparable to small apartment"],
            ].map(([type, rent, notes]) => (
              <tr key={type} className="border border-gray-200 even:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{type}</td>
                <td className="px-4 py-3 text-gray-700 font-semibold">{rent}</td>
                <td className="px-4 py-3 text-gray-600">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Simple ROI illustration</H3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        A $100,000 garage conversion renting at $1,600/month generates $19,200/year in gross rent.
        After typical expenses (insurance increase, maintenance reserves, vacancy, property tax step-up),
        assume 75–80% of gross reaches your pocket — roughly $14,400–$15,360/year net.
        At that rate, you recover your construction cost in 6–7 years, then the income is essentially
        profit against the fixed investment you&apos;ve already made.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">
        A $200,000 new-build detached ADU renting at $2,200/month at the same assumptions nets
        roughly $19,800/year — a 10–11 year payback, plus the property value increase from adding
        a permitted second unit (typically 70–100% of construction cost in appraised value, depending
        on the appraiser&apos;s methodology). These are illustrations, not guarantees. Run your own numbers
        with a CPA who understands rental property before committing.
      </p>

      {/* ─── CONTRACTOR VETTING ─── */}
      <H2 id="contractor-vetting">How to vet a contractor (CSLB guide)</H2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California requires contractors to be licensed through the Contractors State License Board (CSLB).
        Verifying licensure takes two minutes and should be the first thing you do before accepting any bid.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
        <p className="font-bold text-gray-800 mb-2">CSLB License Lookup</p>
        <p className="text-sm text-gray-600 mb-3">
          Go to{" "}
          <a href="https://www.cslb.ca.gov/onlineservices/CheckLicense/ContractorsLicenseCheck.aspx"
            className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            contractors.cslb.ca.gov
          </a>{" "}
          and enter the contractor&apos;s name or license number.
        </p>
        <p className="font-semibold text-gray-700 text-sm mb-2">Confirm all of the following:</p>
        <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
          <li><strong>License status: Active</strong> — not expired, suspended, or canceled</li>
          <li><strong>Bond: Current</strong> — protects you if the contractor causes damage and can&apos;t pay</li>
          <li><strong>Workers&apos; compensation: On file</strong> — if a worker is injured on your property without this, you may be liable</li>
          <li><strong>License classification matches the work:</strong> Class B (General Building Contractor) for most ADU projects. Plumbing (C-36), electrical (C-10), and HVAC (C-20) subcontractors should hold their own licenses</li>
          <li><strong>No disciplinary actions on record</strong> — the CSLB database shows complaints, arbitration awards, and discipline history</li>
        </ul>
      </div>

      <H3>Additional vetting steps</H3>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>Ask for references from completed ADU projects in Temecula or Murrieta specifically — and actually call them</li>
        <li>Get a minimum of three written, itemized bids. Be suspicious of the lowest bid if it&apos;s dramatically below the others without a clear explanation</li>
        <li>Never pay more than 10% or $1,000 (whichever is less) as a down payment — California law caps contractor deposits at this amount</li>
        <li>Tie all payments to specific completed milestones in your contract, not to calendar dates</li>
        <li>Confirm the contractor pulls the permits themselves. A contractor who asks you to pull your own permits as an &quot;owner-builder&quot; is waving a red flag — it shifts liability to you and means they may not be licensed for the work</li>
        <li>Verify the contractor has pulled permits in Temecula or Murrieta before — local permit experience reduces costly surprises during plan check</li>
      </ul>

      {/* ─── FAQ ─── */}
      <H2 id="faq">Frequently Asked Questions</H2>
      <p className="text-gray-700 leading-relaxed mb-8">
        35 questions covering the full range of what Temecula and Murrieta homeowners ask before
        starting an ADU project.
      </p>

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

      {/* CTA */}
      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to explore your options?</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Every property is different. A free consultation can tell you quickly what&apos;s feasible
          on your lot, what a realistic budget looks like, and what the permitting path looks like
          in your specific city.
        </p>
        <Link
          href="mailto:charlesprovido@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Request a Free Consultation
        </Link>
      </div>

    </div>
  );
}

const faqItems: { q: string; a: React.ReactNode }[] = [
  // ── Basics
  {
    q: "What exactly is the difference between an ADU and a JADU?",
    a: <p>An ADU (Accessory Dwelling Unit) is a fully independent dwelling unit with its own kitchen, bathroom, and living space. It can be detached, attached, or a converted structure. A JADU (Junior ADU) is a smaller unit — up to 500 sq ft — created entirely within the existing footprint of the primary home or its attached garage. JADUs require an owner-occupancy agreement (the property owner must live in either the JADU or the main home), and they allow an efficiency kitchen rather than a full kitchen. Full ADUs have none of those restrictions.</p>
  },
  {
    q: "Can I build an ADU on my property? How do I find out if I'm eligible?",
    a: <><p>Most single-family residential lots in Temecula and Murrieta are eligible under California state law. The state significantly expanded ADU rights in 2020 and subsequent years, stripping cities of many tools they previously used to deny projects.</p><p>Key eligibility questions to answer: Is your lot zoned residential? Do you have a minimum lot size that satisfies local standards? Are there physical constraints (setbacks, slope, utility access) that would limit where the ADU can be placed? The best first step is a pre-application meeting with your city&apos;s planning or building department — both Temecula and Murrieta offer these and they&apos;re typically free or low-cost.</p></>,
  },
  {
    q: "How much does an ADU actually cost in Temecula or Murrieta?",
    a: <><p>Honest ranges based on regional project data: detached new-build ADUs run $80,000–$250,000; attached additions run $100,000–$200,000; garage conversions run $35,000–$120,000; JADUs run $20,000–$60,000.</p><p>These are construction costs only — add $15,000–$50,000 for design, permitting, utility connections, and contingency. The single biggest source of cost overrun is site-specific surprises (soil conditions, sewer distance, utility access), so treat any estimate that doesn&apos;t include a site visit and soil assessment as preliminary.</p></>,
  },
  {
    q: "Is a garage conversion cheaper than building a detached ADU? By how much?",
    a: <p>Yes — typically by $40,000–$150,000 or more. A garage conversion avoids the cost of a new foundation, new framing, and new roof. The structure already exists; you&apos;re upgrading it to living space. A straightforward attached garage conversion might run $50,000–$80,000 all-in. A new detached ADU of similar square footage would run $120,000–$200,000. The tradeoff is losing the garage and any resale impact that carries — covered in the garage conversion section above.</p>,
  },
  {
    q: "What hidden costs catch people off guard on ADU projects?",
    a: <ul className="list-disc list-inside space-y-1"><li>Utility trenching to a detached ADU: $5,000–$30,000</li><li>Sewer lateral upgrade or separate connection: $3,000–$15,000</li><li>Soil and foundation surprises (expansive clay is common in parts of Temecula): $10,000–$40,000</li><li>Permit and plan check fees: $5,000–$15,000</li><li>Design and engineering fees: $5,000–$20,000</li><li>Solar panels if required by Title 24 energy code: $8,000–$20,000</li><li>Always budget 10–15% contingency on top of your contractor&apos;s estimate.</li></ul>,
  },
  // ── Financing
  {
    q: "What financing options exist for building an ADU?",
    a: <><p>The main options: (1) HELOC — a revolving line of credit against your home equity, variable rate, draw as you go; (2) Cash-out refinance — resets your mortgage rate, only makes sense if current rates are lower than what you hold; (3) Construction loan — short-term, draw-based, converts to permanent mortgage at completion; (4) ADU-specific loan products from California lenders; (5) Cash, for those who have it.</p><p>Each has different rate exposure and qualification requirements. Talk to at least two lenders before deciding — ADU financing is specialized enough that general mortgage experience doesn&apos;t always translate.</p></>,
  },
  {
    q: "Is the CalHFA $40,000 ADU grant still available?",
    a: <><p><strong>No.</strong> The CalHFA ADU Grant Program has been paused since December 28, 2023. The program was fully allocated and no new funding round has been announced as of July 2026.</p><p>The authoritative source is <a href="https://www.calhfa.ca.gov/adu" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">calhfa.ca.gov/adu</a>. CalHFA&apos;s own website warns that anyone claiming they can still get you this grant may be running a scam. Do not provide personal or financial information to anyone making that claim.</p></>,
  },
  {
    q: "Can I use a HELOC if I don't have a lot of equity yet?",
    a: <p>HELOC availability and credit limit depend on your loan-to-value ratio. Most lenders require you to maintain at least 15–20% equity after the HELOC is factored in. If you&apos;ve owned your home for fewer than 5 years or purchased at a high loan-to-value ratio, you may not qualify for enough HELOC capacity to fund a full ADU project. In that case, a construction loan or ADU-specific product may be the better path. Get a home equity estimate from your lender before designing to a budget you can&apos;t access.</p>,
  },
  // ── Permitting & Process
  {
    q: "How long does ADU permitting actually take in Temecula?",
    a: <><p>Realistically, 3–6 months from application submittal to permit issuance for a straightforward project. First plan review typically takes 6–10 weeks; each correction cycle adds 3–6 weeks. Temecula periodically offers pre-approved ADU plan sets that can reduce review time significantly — ask the Planning Department if current sets are available when you&apos;re ready to apply.</p><p>State law caps the review period at 60 days, but incomplete applications restart the clock.</p></>,
  },
  {
    q: "How long does ADU permitting take in Murrieta?",
    a: <p>Similar to Temecula — typically 3–5 months for a straightforward project. Initial plan review runs 6–10 weeks. Simple projects (like a basic JADU with minimal structural changes) may qualify for over-the-counter review, which is faster — confirm with the Building Department at the time of application. Always call the city directly to ask about current queue times before projecting a timeline.</p>,
  },
  {
    q: "What's the realistic total timeline from start to move-in?",
    a: <ul className="list-disc list-inside space-y-1"><li><strong>Detached new-build ADU:</strong> 12–18 months (3–6 months design + permit, 4–6 months construction, 1–2 months inspections and final)</li><li><strong>Attached ADU:</strong> 10–16 months</li><li><strong>Garage conversion:</strong> 5–9 months (faster permit, faster construction)</li><li><strong>JADU:</strong> 4–7 months</li><li>These assume a contractor is available to start promptly after permit issuance. Contractor lead times in Southwest Riverside County can add 1–3 months depending on market conditions.</li></ul>,
  },
  {
    q: "Do I need an architect?",
    a: <p>Not necessarily — California doesn&apos;t require a licensed architect for residential projects below certain thresholds. A licensed building designer or design-build firm can produce permitted ADU plans in most cases. That said, on complex sites (slopes, structural modifications, historic structures), an architect adds real value. The key credential to verify is that whoever stamps your plans is licensed for residential work in California.</p>,
  },
  {
    q: "What inspections are required during ADU construction?",
    a: <p>Inspections vary by project type but typically include: foundation (before concrete pour), framing (before drywall), rough plumbing, rough electrical, insulation, drywall (before paint in some jurisdictions), and final. Each inspection requires scheduling with the city and being on-site or having your contractor present. Your permit will list all required inspections. Budget for the possibility of re-inspection fees if work doesn&apos;t pass on first inspection.</p>,
  },
  // ── Legalization
  {
    q: "Can I legalize an existing unpermitted ADU or garage conversion?",
    a: <><p>Yes — AB 2533, effective January 1, 2025, created a specific pathway for legalizing ADUs and JADUs built before January 1, 2020. Cities cannot deny the permit or charge impact fees solely because the unit lacks permits. The evaluation standard is Health &amp; Safety Code §17920.3 (basic habitability), not full current building code.</p><p>Typical legalization cost is $10,000–$70,000 depending on what corrections are needed. Typical timeline is 2–6 months. A confidential pre-inspection by a third party is available before you formally apply, letting you assess the scope without triggering enforcement. (Gov. Code §66332)</p></>,
  },
  {
    q: "What does 'evaluated against Health & Safety Code §17920.3' actually mean?",
    a: <p>§17920.3 is California&apos;s definition of substandard housing — the minimum conditions a unit must meet to be considered safe for human habitation. It includes things like adequate natural light and ventilation, plumbing that works, electrical that&apos;s not a fire hazard, no structural collapse risk, no significant pest infestation. It does not require the unit to comply with every current building code update since it was constructed. A unit that was reasonably built but never permitted often needs only minor corrections to clear this standard.</p>,
  },
  {
    q: "If I'm buying a home with an unpermitted unit, is AB 2533 relevant to my purchase decision?",
    a: <p>Yes — significantly. An unpermitted unit that qualifies for AB 2533 (built before 2020, ADU or JADU) is not necessarily a liability to avoid; it may be a legalization candidate with a defined cost envelope. Have an independent contractor assess it during your inspection contingency period. If legalization will cost $20,000, that&apos;s a negotiating point on purchase price, not necessarily a deal killer. If it will cost $70,000 and the structure has serious issues, the math changes.</p>,
  },
  {
    q: "Can the city charge me impact fees when I legalize an unpermitted ADU under AB 2533?",
    a: <p>No. Under Gov. Code §66332, cities cannot charge impact fees for the legalization of a qualifying ADU or JADU under the AB 2533 program. School fees and some utility connection fees may still apply in certain circumstances — confirm the specific fee schedule with your city at the time of application.</p>,
  },
  // ── JADU
  {
    q: "Does a JADU need a full kitchen?",
    a: <p>No — a JADU is specifically allowed to have an &quot;efficiency kitchen&quot; instead of a full kitchen. State law does not require a cooking appliance (no range or cooktop required), and the sink can be a wet-bar style sink rather than a full kitchen sink. An under-counter refrigerator and microwave are permitted. This saves $5,000–$15,000 in kitchen costs and avoids the need for a gas line and commercial-grade range hood in many configurations.</p>,
  },
  {
    q: "Does a JADU require the owner to live on-site?",
    a: <p>Yes — JADUs require an owner-occupancy agreement recorded on the property. The property owner must live in either the JADU or the primary home. (This requirement is separate from full ADUs, which under current state law generally do not have owner-occupancy requirements — though this has changed multiple times legislatively, so confirm current law with your planning department at the time of application.)</p>,
  },
  {
    q: "Can a JADU be rented out?",
    a: <p>Yes, to a non-family tenant, subject to the owner-occupancy requirement above. The owner must live somewhere on the property; the JADU can be rented separately. Short-term rental rules (see above) apply to JADUs the same as to full ADUs.</p>,
  },
  // ── Garage
  {
    q: "Will converting my garage hurt my home's resale value?",
    a: <><p>Possibly — depends on your neighborhood, buyer pool, and what remains. In Temecula and Murrieta, many buyers put significant weight on covered parking, especially in HOA communities. Converting a two-car garage to an ADU means your listing will show a two-car driveway and zero covered parking — some buyers discount for this.</p><p>The counterweight: a permitted, legal ADU adds appraised value, typically 70–100% of construction cost in most residential appraisal methodologies. And if you&apos;re generating $18,000–$24,000/year in rental income, a future buyer may value that income stream. The resale impact is not cleanly negative or positive — it depends on who&apos;s buying.</p></>,
  },
  {
    q: "Can I add a carport or covered parking after converting my garage?",
    a: <p>Often yes — a detached carport structure or a covered parking addition may be permittable on your lot depending on setbacks and lot coverage limits. This partially addresses the covered parking loss. Check with your city&apos;s planning department and, if applicable, your HOA before assuming this is viable. Some HOA CC&Rs specifically restrict standalone carport structures on aesthetic grounds.</p>,
  },
  // ── STR & HOA
  {
    q: "Can I use my ADU as an Airbnb in Temecula?",
    a: <><p>Yes, but you need a permit. Temecula regulates short-term rentals (stays under 30 days) and requires a Short-Term Rental Permit. Transient Occupancy Tax (TOT) must be collected from guests and remitted to the city. Operating without a permit carries fines.</p><p>Beyond the city permit, check your HOA CC&Rs — your HOA may independently prohibit STRs regardless of city permission. Always verify current permit requirements directly with the City of Temecula Planning Department before designing your rental strategy around STR income.</p></>,
  },
  {
    q: "Can I use my ADU as an Airbnb in Murrieta?",
    a: <p>Murrieta has its own short-term rental ordinance and permit requirement. The same logic applies: get a city STR permit, collect and remit TOT, check HOA CC&Rs. Contact Murrieta Development Services at (951) 461-6082 for current requirements. Ordinances in this space change frequently — don&apos;t rely on secondhand information for something that carries fine risk.</p>,
  },
  {
    q: "Can my HOA stop me from building an ADU?",
    a: <p>No — California AB 670 (effective January 1, 2020) prohibits HOAs from banning ADU construction outright or imposing conditions that make it effectively infeasible. HOAs can still enforce reasonable aesthetic standards (materials, colors, placement on the lot) and require architectural review approval. If your HOA denies your ADU application or imposes unreasonable conditions, respond in writing citing AB 670. Most HOA boards will comply when the legal position is stated clearly.</p>,
  },
  {
    q: "Can my HOA ban short-term rentals in the ADU even if the city allows them?",
    a: <p>Yes. HOA CC&Rs are a private contractual matter, and courts have generally upheld HOA short-term rental prohibitions as separate from city permitting. If your CC&Rs prohibit rentals under 30 days (or rentals entirely), the city STR permit doesn&apos;t override that restriction. Review your CC&Rs before building around STR income assumptions.</p>,
  },
  // ── ROI & Rental
  {
    q: "How much rent can I realistically charge for an ADU in Temecula or Murrieta?",
    a: <><p>Current market ranges: studio/1BR ADU (400–600 sq ft): $1,400–$2,000/month; 1–2BR ADU (600–900 sq ft): $1,800–$2,600/month; 2BR ADU (900–1,200 sq ft): $2,200–$3,000/month.</p><p>Furnished units and those near Temecula Wine Country tend to command the higher end for short-term rental. Long-term unfurnished rentals run mid-range. Confirm current market rents on Zillow and Apartments.com for comparable units before projecting income.</p></>,
  },
  {
    q: "What's the ROI on an ADU in this market?",
    a: <p>A $100,000 garage conversion generating $1,600/month gross rent nets roughly $14,000–$15,000/year after typical expenses (vacancy, maintenance, insurance increase) — a 6–7 year payback on construction cost, then essentially ongoing income against a fixed investment. A $200,000 detached ADU at $2,200/month nets roughly $19,000–$20,000/year — a 10–11 year payback, plus property value increase. Run your own numbers with a CPA; these are illustrations using typical expense ratios, not guarantees.</p>,
  },
  // ── Contractor
  {
    q: "How do I find a legitimate ADU contractor in Temecula or Murrieta?",
    a: <><p>Start with CSLB license verification at contractors.cslb.ca.gov — confirm the license is active, bonded, and carries workers&apos; compensation. Look for a Class B (General Building) license for ADU work.</p><p>Then: get three written itemized bids (not per-sq-ft estimates), ask for references from completed ADU projects in these specific cities, and call those references. Confirm the contractor pulls permits themselves — if they ask you to pull as owner-builder, walk away. Never pay more than 10% or $1,000 upfront (California law caps this).</p></>,
  },
  {
    q: "What's the CSLB and how do I use it?",
    a: <p>The Contractors State License Board is California&apos;s licensing authority for contractors. Their public database at contractors.cslb.ca.gov lets you look up any contractor by name or license number and see their license class, status, bond, workers&apos; comp coverage, and any disciplinary history. It takes about two minutes and should be the first thing you do when evaluating any contractor bid.</p>,
  },
  {
    q: "What is the legal deposit limit for a contractor in California?",
    a: <p>California Business and Professions Code §7159.5 caps the initial deposit a contractor can legally request at 10% of the contract price or $1,000, whichever is less. Any contractor asking for more upfront — regardless of reason — is violating state law. This cap exists specifically to protect homeowners; enforce it.</p>,
  },
  {
    q: "Should my ADU contractor pull the permits, or should I?",
    a: <p>Your contractor should pull the permits. A contractor who asks you to pull permits as an &quot;owner-builder&quot; is either unlicensed for the work or attempting to shift liability to you. When you pull permits as owner-builder, you assume the legal position of the general contractor — including liability for injuries, code violations, and subcontractor issues. Unless you are a licensed contractor yourself, this is not a role you want.</p>,
  },
  {
    q: "How do I structure payments with a contractor to protect myself?",
    a: <p>Tie all payments to specific completed milestones: foundation complete, framing complete, rough plumbing complete, drywall complete, and so on. Never pay ahead of work completed. Your final payment (typically 10% of the contract) should be held until final inspection passes and you have the certificate of occupancy in hand. Get this payment structure in writing in the contract before work begins.</p>,
  },
  // ── Misc
  {
    q: "Does building an ADU increase my property taxes?",
    a: <p>Adding a permitted ADU triggers a reassessment of the new construction only — not your entire property. Under Proposition 13, only the value of the newly added structure is assessed; your existing home&apos;s assessed value doesn&apos;t change. So if your ADU is assessed at $120,000, your property tax increases by roughly $120,000 × 1.1–1.25% = $1,320–$1,500/year depending on your local tax rate. That&apos;s usually a small fraction of the rental income the ADU generates.</p>,
  },
  {
    q: "Do I need to notify my insurance company if I build an ADU?",
    a: <p>Yes — failure to disclose a permitted dwelling unit to your homeowner&apos;s insurance carrier can void coverage. Contact your insurer before construction begins to update your policy. Most carriers will add a landlord or secondary dwelling endorsement. Premium increases vary but typically run $200–$600/year for a standard ADU. This is not optional — an uncovered claim on an undisclosed unit can result in denied claims and policy cancellation.</p>,
  },
  {
    q: "Does my ADU need its own address?",
    a: <p>Yes — permitted ADUs receive a separate address assigned by the city during the permitting process. This is required for mail delivery, emergency services, and utility billing if the unit is separately metered. The city assigns this automatically as part of the permit issuance process; you don&apos;t need to request it separately.</p>,
  },
  {
    q: "Can I have both an ADU and a JADU on the same property?",
    a: <p>Yes — California state law allows one ADU and one JADU per single-family lot. You could, for example, build a detached ADU in your backyard while converting an attached bedroom with a separate entrance into a JADU. Both require separate permits and must meet their respective requirements. Total rental income from two units on a single lot can significantly improve the ROI calculation for larger projects.</p>,
  },
  {
    q: "What happens if I build an ADU without a permit?",
    a: <p>An unpermitted ADU exposes you to city code enforcement action including stop-work orders, fines, and mandatory demolition in extreme cases. It also creates title issues when you sell, may void your homeowner&apos;s insurance, and can&apos;t be legally rented (operating an unpermitted rental unit carries its own liability). The AB 2533 legalization pathway is specifically designed for people in this situation with units built before 2020 — but for new construction, there is no good reason to build without permits.</p>,
  },
  {
    q: "Where can I find official ADU information for the City of Temecula?",
    a: <p>The City of Temecula Community Development Department handles ADU permits. Planning Division: (951) 694-6400. Building & Safety: (951) 694-6411. Temecula&apos;s ADU-specific information is available on the city website under Community Development / Building & Safety. For pre-approved ADU plan sets, ask the Building Department directly — these are updated periodically and not always easy to find online.</p>,
  },
  {
    q: "Where can I find official ADU information for the City of Murrieta?",
    a: <p>City of Murrieta Development Services Department: (951) 461-6082. Murrieta&apos;s ADU guidelines are available through the Development Services counter and the city website. For a pre-application meeting to assess your specific project, contact the department directly — this is the fastest way to identify site-specific issues before committing to a design.</p>,
  },
];
