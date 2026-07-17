import type { Metadata } from "next";
import Link from "next/link";
import Num from "@/app/components/Num";

export const metadata: Metadata = {
  title: "ADU Construction — Costs, Financing, Legalization & Contractor Vetting",
  description:
    "Honest cost ranges, hidden costs, financing options, CalHFA grant status, AB 2533 legalization, JADU kitchen rules, and contractor vetting for ADU construction in Southwest Riverside County.",
};

const LAST_UPDATED_GRANTS = "July 2026";

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="scroll-mt-20" />;
}

function InfoBox({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "amber" | "red" | "green";
}) {
  const styles = {
    blue:  "bg-navy/5 border-navy/30 text-navy",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    red:   "bg-rust/10 border-rust/40 text-rust",
    green: "bg-sage/10 border-sage/40 text-sage",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

function LastUpdated({ date }: { date: string }) {
  return (
    <span className="inline-block text-xs font-mono font-medium bg-concrete/15 text-concrete rounded px-2 py-0.5 ml-2">
      Last updated: {date}
    </span>
  );
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <>
      {id && <SectionAnchor id={id} />}
      <h2 className="font-display text-2xl font-bold text-ink mt-14 mb-4">{children}</h2>
    </>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-ink mt-8 mb-3">{children}</h3>;
}

export default function ADUConstructionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Hero */}
      <div className="mb-8">
        <p className="eyebrow text-xs font-semibold text-navy uppercase tracking-widest mb-2">
          Temecula Valley ADU Resource
        </p>
        <h1 className="font-display text-4xl font-bold text-ink leading-tight mb-4">
          ADU Construction: Real Costs, Honest Timelines
        </h1>
        <p className="text-xl text-concrete leading-relaxed">
          Most local contractor websites leave pricing blank or give ranges so wide they&apos;re useless.
          This page covers what homeowners in Southwest Riverside County actually need: real cost ranges,
          financing options, the CalHFA grant status, AB 2533 legalization, JADU kitchen rules, and
          how to vet a contractor before you sign anything.
        </p>
      </div>

      {/* Service Areas callout */}
      <div className="bg-navy/5 border border-navy/20 rounded-lg p-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-navy text-sm mb-1">Serving Temecula &amp; Murrieta</p>
          <p className="text-sm text-concrete">
            For city-specific permit timelines, short-term rental rules, and neighborhood coverage,
            see our dedicated service area pages.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/service-areas/temecula"
            className="bg-navy text-paper text-sm font-medium px-4 py-2 rounded hover:bg-navy/90 transition-colors whitespace-nowrap"
          >
            Temecula →
          </Link>
          <Link
            href="/service-areas/murrieta"
            className="bg-paper text-navy border border-navy/30 text-sm font-medium px-4 py-2 rounded hover:bg-navy/5 transition-colors whitespace-nowrap"
          >
            Murrieta →
          </Link>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-navy/5 border border-concrete/30 rounded-lg p-6 mb-12">
        <p className="text-sm font-semibold text-ink mb-3 uppercase tracking-widest">On this page</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-navy">
          {[
            ["#adu-types", "What types of ADU can I build?"],
            ["#costs", "Real cost ranges"],
            ["#hidden-costs", "Hidden costs that catch people off guard"],
            ["#financing", "Financing options"],
            ["#calhfa", "CalHFA ADU Grant — current status"],
            ["#permitting", "How permitting works"],
            ["#ab2533", "Legalizing an existing unpermitted ADU (AB 2533)"],
            ["#jadu", "JADU vs. full ADU — kitchen requirements"],
            ["#garage-tradeoffs", "Garage conversion pros, cons & resale impact"],
            ["#hoa", "Can my HOA block an ADU?"],
            ["#roi", "Rental income & ROI estimates"],
            ["#contractor-vetting", "How to vet a contractor (CSLB guide)"],
            ["#faq", "FAQ — 29 questions answered"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:underline">{label}</a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ─── ADU TYPES ─── */}
      <H2 id="adu-types">What types of ADU can I build?</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        California law defines four categories. Each has different cost profiles, site requirements,
        and long-term implications for your property.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            title: "Detached ADU",
            desc: "A fully separate structure in your backyard or elsewhere on the lot. Maximum size is generally 1,200 sq ft under state law, though local ordinances may differ. Highest cost but most privacy for both occupants and the strongest rental appeal.",
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
          <div key={item.title} className="border border-concrete/30 rounded-lg p-5">
            <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
            <p className="text-sm text-concrete leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <InfoBox color="blue">
        <strong>Statewide baseline, local adjustments:</strong> California law sets minimum allowances
        that all cities must honor (Gov. Code §65852.2). Local cities may add design standards
        (setbacks, height, aesthetics) on top of state minimums but cannot be more restrictive than
        the state floor allows. When in doubt, state law wins.
      </InfoBox>

      {/* ─── COSTS ─── */}
      <H2 id="costs">Real cost ranges</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        The numbers below are compiled from regional projects in Southwest Riverside County. They cover
        construction only — design, permit fees, and utility connections are addressed separately under
        Hidden Costs. Final cost depends heavily on site conditions, finish level, and whether you run
        into soil or utility surprises.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-left">
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">ADU Type</th>
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Typical Range</th>
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Key Variables</th>
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
              <tr key={type} className="border border-concrete/30 even:bg-navy/5">
                <td className="px-4 py-3 font-medium text-ink">{type}</td>
                <td className="px-4 py-3 font-semibold text-ink"><Num>{range}</Num></td>
                <td className="px-4 py-3 text-concrete">{vars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox color="amber">
        <strong>Why the ranges are this wide:</strong> A basic 400 sq ft detached ADU with standard
        finishes on a flat lot with existing utility access might come in near the low end. A 1,000
        sq ft unit with premium finishes, a sloped lot, a failing sewer lateral, and expansive clay
        soil can push well past the high end. The single biggest driver of cost overruns is what&apos;s
        discovered during site prep and rough-in — covered in the next section.
      </InfoBox>

      {/* ─── HIDDEN COSTS ─── */}
      <H2 id="hidden-costs">Hidden costs that catch people off guard</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        No local competitor publishes this list in any detail. These are the line items that routinely
        appear after a contract is signed and a shovel hits the ground.
      </p>

      <div className="space-y-5 my-6">
        {[
          {
            title: "Utility trenching",
            detail: "Running new electrical, water, and sewer lines from the main house to a detached ADU adds $5,000–$30,000 depending on distance and what's buried between the two structures. Longer runs, mature tree roots, and existing hardscape (concrete driveway, pavers) all push this number up.",
          },
          {
            title: "Sewer lateral upgrade or separate connection",
            detail: "If your sewer lateral is old, undersized, or already running near capacity, the city may require an upgrade or a separate tie-in to the municipal main. This typically runs $3,000–$15,000 and occasionally more if the main isn't near your property line.",
          },
          {
            title: "Soil and foundation surprises",
            detail: "Parts of Southwest Riverside County have expansive clay soils. A geotechnical report may be required, and engineered foundation solutions (deepened footings, post-tension slabs) can add $10,000–$40,000 to a new-build ADU. This is non-negotiable when the soil requires it.",
          },
          {
            title: "Plan check and permit fees",
            detail: "Permit fees vary by project valuation and scope. Budget $5,000–$15,000 for a typical detached ADU. Impact fees on new ADUs are significantly restricted under state law, but school fees and certain utility connection fees still apply.",
          },
          {
            title: "Design and engineering fees",
            detail: "Architect or designer fees for ADU plans typically run $5,000–$20,000. Structural engineering (required when modifying load-bearing elements or working on a slope) is on top of that. Some design-build firms bundle this; others bill it separately — confirm before signing.",
          },
          {
            title: "Title 24 energy compliance",
            detail: "California's energy code requires compliance with current standards. On new-build ADUs, this may require solar photovoltaic panels depending on size and configuration. Solar system costs range from $8,000–$20,000. Your designer should flag this early so it isn't a surprise at permit submittal.",
          },
          {
            title: "Temporary power and construction utilities",
            detail: "Running power to a remote construction site on your property, portable toilet rental, and debris hauling are minor but real costs — usually $2,000–$5,000 for a standard project.",
          },
        ].map((item) => (
          <div key={item.title} className="border-l-2 border-navy/25 pl-4">
            <p className="font-semibold text-ink mb-1">{item.title}</p>
            <p className="text-sm text-concrete leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <InfoBox color="amber">
        <strong>Ask every contractor for a site-specific itemized estimate, not a per-square-foot
        ballpark.</strong> Per-sq-ft numbers ignore the utility distance, soil conditions, and permit
        complexity that actually determine your total cost. If a contractor gives you a firm price
        without a site visit and soil assessment, treat it as a placeholder, not a commitment.
      </InfoBox>

      {/* ─── FINANCING ─── */}
      <H2 id="financing">Financing options</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        This is territory almost no local ADU contractor covers in any depth. Here are the main paths,
        with honest tradeoffs.
      </p>

      <H3>Home Equity Line of Credit (HELOC)</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        If your home has appreciated significantly, a HELOC lets you borrow against that equity at a
        variable rate. You draw funds as construction progresses rather than receiving a lump sum.
        The risk: rates are variable, so if construction runs long and rates rise, your carrying cost
        increases. Best suited for homeowners with substantial equity who want flexibility and can
        tolerate rate movement.
      </p>

      <H3>Cash-out refinance</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        You refinance your existing mortgage for more than you owe and receive the difference in cash.
        This resets your mortgage rate. If your existing rate is lower than current market rates, a
        cash-out refi is likely a poor choice — you&apos;d be trading a low rate on your entire balance to
        fund the ADU. Consult a mortgage lender to run the actual numbers before dismissing or pursuing
        this option.
      </p>

      <H3>Construction loan</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        A short-term loan specifically designed to fund construction, with funds released in draws tied
        to project milestones. After construction completes, it typically converts to a standard mortgage
        (construction-to-permanent loan). More complex to qualify for than a HELOC, but useful when
        you&apos;re starting with limited equity. Fewer lenders offer these products — shop specifically for
        ADU construction loan programs.
      </p>

      <H3>ADU-specific lending programs</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        Several banks and credit unions have developed ADU-specific loan products in California following
        the state&apos;s ADU reform legislation. These vary significantly in terms and availability. Ask your
        lender specifically about ADU construction loan products rather than trying to fit an ADU project
        into a standard home improvement loan.
      </p>

      <H3>Personal savings / cash</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        Simplest from a paperwork standpoint. If you&apos;re funding a garage conversion or JADU in the
        <span className="font-mono"> $40,000–$80,000</span> range and have accessible savings, this
        avoids interest entirely and gives you the most contractor negotiating leverage.
      </p>

      {/* ─── CALHFA ─── */}
      <H2 id="calhfa">
        CalHFA ADU Grant — current status
        <LastUpdated date={LAST_UPDATED_GRANTS} />
      </H2>

      <InfoBox color="red">
        <strong>The <span className="font-mono">$40,000</span> CalHFA ADU Grant Program is paused
        and has been since <span className="font-mono">December 28, 2023</span>.</strong>{" "}
        The program exhausted its funding allocation and no new round has been announced as of{" "}
        {LAST_UPDATED_GRANTS}. CalHFA&apos;s own website (
        <a
          href="https://www.calhfa.ca.gov/adu"
          className="underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          calhfa.ca.gov/adu
        </a>
        ) warns that anyone claiming they can still help you obtain this grant may be running a scam.
        At least one local competitor website still shows this grant as available — that information
        is incorrect.
      </InfoBox>

      <p className="text-ink/80 leading-relaxed mb-4">
        When the program was active, it offered up to <span className="font-mono">$40,000</span> in
        grant funds (not a loan — no repayment required) to income-qualifying homeowners to cover
        pre-development and non-recurring closing costs on an ADU construction loan. It was
        administered through CalHFA-approved lenders, not through cities or contractors.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        If a future funding round is announced, it will appear on{" "}
        <a
          href="https://www.calhfa.ca.gov/adu"
          className="text-navy underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          calhfa.ca.gov/adu
        </a>{" "}
        — that is the only authoritative source. We will update this page when and if that changes.
      </p>

      <InfoBox color="amber">
        <strong>If someone contacts you claiming they can get you the CalHFA ADU grant right
        now,</strong>{" "}
        CalHFA itself calls that a red flag for fraud. Do not provide personal or financial information
        to anyone making that claim. Report suspected scams to CalHFA directly via their official
        contact at calhfa.ca.gov.
      </InfoBox>

      {/* ─── PERMITTING ─── */}
      <H2 id="permitting">How permitting works</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        California state law (Gov. Code §65852.2) requires cities to approve or deny a complete ADU
        permit application within <span className="font-mono">60 days</span>. That&apos;s the statutory
        ceiling — in practice, actual timelines depend on the city&apos;s current plan check queue, how
        complete your application is at submittal, and how many correction rounds your plans require.
      </p>

      <div className="space-y-3 my-6">
        {[
          ["Pre-application (optional but recommended)", "Many cities offer an informal pre-application meeting where staff reviews your concept before you spend money on full drawings. This is the fastest way to catch site-specific issues early."],
          ["Design and plan preparation", "A designer or architect prepares permit-ready drawings. For a detached ADU, this typically takes 4–8 weeks depending on complexity."],
          ["Application submittal", "You or your contractor submits the complete permit package to the city's building department. Incomplete applications restart the 60-day clock."],
          ["Plan check (first review)", "City staff reviews drawings for zoning, structural, and code compliance. This is where queue times vary most by city and season."],
          ["Correction cycles", "If the city issues a correction letter, your designer responds. Each cycle adds time. Well-prepared applications with experienced designers go through fewer rounds."],
          ["Permit issuance", "Once all corrections are resolved, the permit is issued and construction can begin."],
          ["Construction inspections", "The city inspects work at key stages: foundation, framing, rough plumbing/electrical, insulation, and final."],
          ["Certificate of occupancy", "Final inspection passes; the unit is legally habitable."],
        ].map(([stage, detail]) => (
          <div key={stage} className="border-l-2 border-navy/25 pl-4">
            <p className="font-semibold text-ink text-sm mb-0.5">{stage}</p>
            <p className="text-sm text-concrete leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <InfoBox color="blue">
        <strong>City-specific permit timelines</strong> — including current plan check queue estimates
        for Temecula and Murrieta, pre-approved plan set availability, and city contact information —
        are on the dedicated service area pages:{" "}
        <Link href="/service-areas/temecula" className="underline font-medium">
          Temecula permit timeline
        </Link>{" "}
        ·{" "}
        <Link href="/service-areas/murrieta" className="underline font-medium">
          Murrieta permit timeline
        </Link>
      </InfoBox>

      {/* ─── AB 2533 ─── */}
      <H2 id="ab2533">Legalizing an existing unpermitted ADU (AB 2533)</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        If you have a converted garage, a backyard structure, or a space someone previously used as a
        rental unit that was never permitted, California AB 2533 created a specific pathway to bring it
        into legal status. Only two of the twenty local competitors we reviewed cover this topic at all.
        Here&apos;s what you actually need to know.
      </p>

      <InfoBox color="green">
        <strong>AB 2533 key facts:</strong> Signed September 2024, effective{" "}
        <span className="font-mono">January 1, 2025</span>. Covers ADUs and JADUs built before{" "}
        <span className="font-mono">January 1, 2020</span>. Cities may not deny the permit or impose
        impact fees solely because the unit lacks permits. Evaluation is against Health &amp; Safety
        Code §17920.3 — a basic habitability standard, not full current building code. (Gov. Code §66332)
      </InfoBox>

      <H3>What the law actually requires</H3>
      <p className="text-sm text-concrete leading-relaxed mb-4">
        When you apply to legalize an unpermitted ADU or JADU under this program, the city must
        evaluate the unit against Health &amp; Safety Code §17920.3 — California&apos;s substandard housing
        definition. This is a basic habitability checklist: adequate light and ventilation, functioning
        plumbing and electrical, no structural hazards, no pest infestations, no fire hazards. It is
        significantly less demanding than requiring the unit to meet every current residential building
        code requirement. The city cannot retroactively apply standards that postdate the unit&apos;s
        construction.
      </p>

      <H3>The confidential pre-inspection option</H3>
      <p className="text-sm text-concrete leading-relaxed mb-4">
        Before formally applying, homeowners may request a confidential third-party pre-inspection.
        This lets you get an independent assessment of what&apos;s likely to need correction before the
        city ever sees the unit. If the pre-inspection reveals significant issues, you can address
        them before submitting the application — without triggering any enforcement action in the
        interim. This is a meaningful protection worth using if you&apos;re uncertain about the unit&apos;s
        condition.
      </p>

      <H3>Typical costs to clear the checklist</H3>
      <p className="text-sm text-concrete leading-relaxed mb-4">
        Retrofit costs to bring a unit up to §17920.3 standards vary widely. A unit that was converted
        reasonably well but just never permitted may need only electrical panel work and smoke/CO
        detector installation — potentially{" "}
        <span className="font-mono">$10,000–$20,000</span>. A unit with failing plumbing, inadequate
        ventilation, and unpermitted structural modifications could run{" "}
        <span className="font-mono">$50,000–$70,000</span>. Most projects fall in the{" "}
        <span className="font-mono">$10,000–$70,000</span> range, with the median somewhere in the{" "}
        <span className="font-mono">$20,000–$40,000</span> range for a reasonably constructed but
        unpermitted conversion.
      </p>

      <H3>Timeline</H3>
      <p className="text-sm text-concrete leading-relaxed mb-4">
        Budget <span className="font-mono">2–6 months</span> from initial application to final
        sign-off. Projects with minimal corrections move faster; those requiring significant work can
        take longer depending on contractor availability and inspection scheduling.
      </p>

      <H3>Impact fees</H3>
      <p className="text-sm text-concrete leading-relaxed mb-4">
        Under Gov. Code §66332, cities cannot charge impact fees for the legalization of an ADU or
        JADU that qualifies under this program. School fees and utility connection fees may still apply
        in certain circumstances — confirm with your city at the time of application.
      </p>

      <InfoBox color="blue">
        <strong>If you&apos;re buying a home with an unpermitted unit:</strong> AB 2533 changes the
        calculus. An unpermitted ADU built before 2020 is not necessarily a liability to avoid — it
        may be a legalization candidate with a defined pathway and known cost envelope. Have an
        independent contractor assess it before closing, and factor the legalization cost into your
        offer.
      </InfoBox>

      {/* ─── JADU ─── */}
      <H2 id="jadu">JADU vs. full ADU — kitchen requirements</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        This is a technical detail almost entirely absent from local competitor sites despite being
        one of the most common questions homeowners have during design.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-navy/25 rounded-lg p-5">
          <h3 className="font-semibold text-ink mb-3">Full ADU — kitchen requirements</h3>
          <ul className="text-sm text-concrete space-y-2 leading-relaxed">
            <li>A full, functional kitchen is required</li>
            <li>Must include a cooking appliance (range or cooktop)</li>
            <li>Full-size kitchen sink</li>
            <li>Refrigerator (size not restricted)</li>
            <li>Ventilation (range hood or exhaust fan) per building code</li>
            <li>Standard kitchen cabinetry and countertop area</li>
          </ul>
          <p className="text-xs text-concrete mt-4">
            Full kitchen install typically adds{" "}
            <span className="font-mono">$8,000–$25,000</span> to project cost depending on finishes
            and whether gas or electric is run.
          </p>
        </div>
        <div className="border-2 border-sage/40 rounded-lg p-5">
          <h3 className="font-semibold text-ink mb-3">JADU — efficiency kitchen (wet bar)</h3>
          <ul className="text-sm text-concrete space-y-2 leading-relaxed">
            <li>An &quot;efficiency kitchen&quot; is allowed — not a full kitchen</li>
            <li>
              <strong>No cooking appliance required</strong> (no range or cooktop mandated by state
              law)
            </li>
            <li>A small wet-bar style sink is sufficient — no minimum sink size under state law</li>
            <li>Under-counter or compact refrigerator</li>
            <li>Countertop food prep space</li>
            <li>Microwave oven is permitted</li>
          </ul>
          <p className="text-xs text-concrete mt-4">
            Efficiency kitchen typically adds{" "}
            <span className="font-mono">$3,000–$8,000</span> to project cost. No range/cooktop also
            removes the requirement for a gas line and range hood in many configurations.
          </p>
        </div>
      </div>

      <p className="text-sm text-concrete leading-relaxed">
        The practical impact: if the space you&apos;re converting qualifies as a JADU (within the existing
        home footprint, under 500 sq ft, with a separate exterior entrance), you can save{" "}
        <span className="font-mono">$5,000–$15,000</span> by designing to efficiency kitchen standards
        rather than full kitchen requirements. The occupant can use a microwave or countertop induction
        burner without those being code-required elements — they just aren&apos;t built-in. Some tenants
        prefer this; others don&apos;t. Factor it into your rental strategy.
      </p>

      {/* ─── GARAGE TRADEOFFS ─── */}
      <H2 id="garage-tradeoffs">Garage conversion pros, cons &amp; resale impact</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Nobody local publishes an honest version of this analysis. Here it is.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-concrete/30 rounded-lg p-5">
          <h3 className="font-semibold text-sage mb-3">Pros of garage conversion</h3>
          <ul className="text-sm text-concrete space-y-2 leading-relaxed list-disc list-inside">
            <li>Lowest cost path — <span className="font-mono">$35,000–$120,000</span> vs. <span className="font-mono">$80,000–$250,000</span> for a new build</li>
            <li>Faster build — <span className="font-mono">1–3 months</span> vs. <span className="font-mono">4–6 months</span> for a detached new build</li>
            <li>No new foundation or framing required</li>
            <li>Usually the simplest permit process</li>
            <li>Rental income can begin sooner</li>
            <li>ADU value typically adds more to appraised value than it costs</li>
          </ul>
        </div>
        <div className="border border-concrete/30 rounded-lg p-5">
          <h3 className="font-semibold text-rust mb-3">Cons &amp; resale considerations</h3>
          <ul className="text-sm text-concrete space-y-2 leading-relaxed list-disc list-inside">
            <li>Loss of garage — buyers in this market expect covered parking</li>
            <li>Some buyers discount homes without a garage, especially in HOA communities</li>
            <li>Reduces storage that many homeowners rely on</li>
            <li>Driveway exists but provides no covered parking — can feel awkward</li>
            <li>HOA may impose restrictions on appearance of the converted structure</li>
            <li>Home financing is sometimes harder when garage count doesn&apos;t match listing</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-concrete leading-relaxed">
        The honest bottom line: in most Southwest Riverside County neighborhoods, converting a two-car
        attached garage to an ADU will produce positive ROI through rental income faster than a
        new-build detached unit — but it does affect resale appeal for buyers who prioritize garage
        space. If you plan to sell within 5 years, weigh that carefully. If you&apos;re keeping the
        property long-term, the rental income math typically favors conversion.
      </p>

      {/* ─── HOA ─── */}
      <H2 id="hoa">Can my HOA block an ADU?</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Short answer: no, not entirely — California law prohibits it. Longer answer: HOAs can still
        make your life complicated.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        AB 670 (effective <span className="font-mono">January 1, 2020</span>) prohibits HOAs from
        banning ADU construction or imposing conditions that effectively make construction infeasible.
        Specifically, an HOA rule that prevents construction entirely, or that imposes requirements so
        burdensome that a reasonable person couldn&apos;t comply, is unenforceable against state ADU law.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">What HOAs <em>can</em> still do:</p>
      <ul className="list-disc list-inside space-y-2 text-sm text-concrete leading-relaxed mb-6">
        <li>Impose reasonable design standards — exterior materials, paint colors, roof pitch matching the neighborhood aesthetic</li>
        <li>Require architectural review committee (ARC) approval before construction begins</li>
        <li>Set location standards within the lot (e.g., placement in the rear yard only)</li>
        <li>Prohibit short-term rentals through CC&Rs independently of city STR rules</li>
      </ul>
      <p className="text-sm text-concrete leading-relaxed">
        If your HOA denies an ADU application or imposes conditions you believe are unreasonable, the
        first step is a written response citing AB 670. If that doesn&apos;t resolve it, consult a real
        estate attorney with HOA experience — most HOA boards back down when the law is cited clearly.
      </p>

      {/* ─── ROI ─── */}
      <H2 id="roi">Rental income &amp; ROI estimates</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Rent ranges below are based on regional market data for ADU-sized units in Southwest Riverside
        County. Spot-check these against current Zillow and Apartments.com listings for your specific
        area before projecting income — rental markets move.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-left">
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Unit Type</th>
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Monthly Rent Range</th>
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Studio / 1BR ADU (400–600 sq ft)", "$1,400 – $2,000/mo", "Converted garage or JADU; furnished commands higher end"],
              ["1BR / 2BR ADU (600–900 sq ft)", "$1,800 – $2,600/mo", "Detached or attached; private entrance commands a premium"],
              ["2BR ADU (900–1,200 sq ft)", "$2,200 – $3,000/mo", "Larger detached units; comparable to a small apartment"],
            ].map(([type, rent, notes]) => (
              <tr key={type} className="border border-concrete/30 even:bg-navy/5">
                <td className="px-4 py-3 font-medium text-ink">{type}</td>
                <td className="px-4 py-3 font-semibold text-ink"><Num>{rent}</Num></td>
                <td className="px-4 py-3 text-concrete">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Simple ROI illustration</H3>
      <p className="text-sm text-concrete leading-relaxed mb-3">
        A <span className="font-mono">$100,000</span> garage conversion renting at{" "}
        <span className="font-mono">$1,600/month</span> generates{" "}
        <span className="font-mono">$19,200/year</span> in gross rent. After typical expenses
        (insurance increase, maintenance reserves, vacancy, property tax step-up), assume{" "}
        <span className="font-mono">75–80%</span> of gross reaches your pocket — roughly{" "}
        <span className="font-mono">$14,400–$15,360/year</span> net. At that rate, you recover
        your construction cost in <span className="font-mono">6–7 years</span>, then the income
        is essentially profit against a fixed investment you&apos;ve already made.
      </p>
      <p className="text-sm text-concrete leading-relaxed">
        A <span className="font-mono">$200,000</span> new-build detached ADU renting at{" "}
        <span className="font-mono">$2,200/month</span> at the same assumptions nets roughly{" "}
        <span className="font-mono">$19,800/year</span> — a <span className="font-mono">10–11 year</span>{" "}
        payback, plus the property value increase from adding a permitted second unit (typically{" "}
        <span className="font-mono">70–100%</span> of construction cost in appraised value, depending
        on the appraiser&apos;s methodology). These are illustrations, not guarantees. Run your own numbers
        with a CPA who understands rental property before committing.
      </p>

      {/* ─── CONTRACTOR VETTING ─── */}
      <H2 id="contractor-vetting">How to vet a contractor (CSLB guide)</H2>
      <p className="text-ink/80 leading-relaxed mb-4">
        California requires contractors to be licensed through the Contractors State License Board
        (CSLB). Verifying licensure takes two minutes and should be the first thing you do before
        accepting any bid.
      </p>

      <div className="bg-navy/5 border border-concrete/30 rounded-lg p-6 my-6">
        <p className="font-semibold text-ink mb-2">CSLB License Lookup</p>
        <p className="text-sm text-concrete mb-3">
          Go to{" "}
          <a
            href="https://www.cslb.ca.gov/onlineservices/CheckLicense/ContractorsLicenseCheck.aspx"
            className="text-navy underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            contractors.cslb.ca.gov
          </a>{" "}
          and enter the contractor&apos;s name or license number.
        </p>
        <p className="font-semibold text-ink text-sm mb-2">Confirm all of the following:</p>
        <ul className="text-sm text-concrete space-y-1.5 list-disc list-inside">
          <li><strong>License status: Active</strong> — not expired, suspended, or canceled</li>
          <li><strong>Bond: Current</strong> — protects you if the contractor causes damage and can&apos;t pay</li>
          <li><strong>Workers&apos; compensation: On file</strong> — if a worker is injured on your property without this, you may be liable</li>
          <li><strong>License classification matches the work:</strong> Class B (General Building Contractor) for most ADU projects. Plumbing (C-36), electrical (C-10), and HVAC (C-20) subcontractors should hold their own licenses</li>
          <li><strong>No disciplinary actions on record</strong> — the CSLB database shows complaints, arbitration awards, and discipline history</li>
        </ul>
      </div>

      <H3>Additional vetting steps</H3>
      <ul className="list-disc list-inside space-y-2 text-sm text-concrete leading-relaxed mb-6">
        <li>Ask for references from completed ADU projects locally — and actually call them</li>
        <li>Get a minimum of three written, itemized bids. Be suspicious of the lowest bid if it&apos;s dramatically below the others without a clear explanation</li>
        <li>Never pay more than <span className="font-mono">10%</span> or <span className="font-mono">$1,000</span> (whichever is less) as a down payment — California law caps contractor deposits at this amount</li>
        <li>Tie all payments to specific completed milestones in your contract, not to calendar dates</li>
        <li>Confirm the contractor pulls the permits themselves — a contractor who asks you to pull permits as an &quot;owner-builder&quot; is a red flag that shifts liability to you</li>
        <li>Verify the contractor has pulled permits in your specific city before — local permit experience reduces costly surprises during plan check</li>
      </ul>

      {/* ─── FAQ ─── */}
      <H2 id="faq">Frequently Asked Questions</H2>
      <p className="text-ink/80 leading-relaxed mb-8">
        29 questions covering costs, financing, permitting, legalization, JADU rules, garage
        conversions, HOA, and contractor selection. For city-specific questions on permit timelines
        and short-term rental rules, see the{" "}
        <Link href="/service-areas/temecula" className="text-navy underline">Temecula</Link> and{" "}
        <Link href="/service-areas/murrieta" className="text-navy underline">Murrieta</Link>{" "}
        service area pages.
      </p>

      <div className="space-y-0 divide-y divide-concrete/20 border border-concrete/30 rounded-lg overflow-hidden">
        {faqItems.map((item, i) => (
          <details key={i} className="group">
            <summary className="flex justify-between items-start gap-4 px-5 py-4 cursor-pointer list-none hover:bg-navy/5 transition-colors">
              <span className="font-semibold text-ink text-sm leading-snug">{item.q}</span>
              <span className="text-concrete group-open:rotate-180 transition-transform flex-shrink-0 mt-0.5">▾</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-concrete leading-relaxed space-y-2 bg-navy/5">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-navy/5 border border-navy/20 rounded-lg p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink mb-3">Free ADU Reality Check for Your Property</h2>
        <p className="text-concrete mb-6 max-w-lg mx-auto">
          Find out if an ADU works on your lot, get a real budget range, and get matched with a
          licensed, already-vetted local contractor — so you skip weeks of getting bids and checking
          licenses yourself. Free, no obligation. If your lot isn&apos;t a good fit yet, we&apos;ll tell
          you honestly why.
        </p>
        <Link
          href="mailto:charlesprovido@gmail.com"
          className="inline-block bg-navy text-paper px-8 py-3 rounded font-semibold hover:bg-navy/90 transition-colors"
        >
          Get My Free ADU Reality Check
        </Link>
      </div>
    </div>
  );
}

const faqItems: { q: string; a: React.ReactNode }[] = [
  {
    q: "What exactly is the difference between an ADU and a JADU?",
    a: <p>An ADU (Accessory Dwelling Unit) is a fully independent dwelling unit with its own kitchen, bathroom, and living space. It can be detached, attached, or a converted structure. A JADU (Junior ADU) is a smaller unit — up to <span className="font-mono">500 sq ft</span> — created entirely within the existing footprint of the primary home or its attached garage. JADUs require an owner-occupancy agreement and allow an efficiency kitchen rather than a full kitchen. Full ADUs have none of those restrictions.</p>,
  },
  {
    q: "Can I build an ADU on my property? How do I find out if I'm eligible?",
    a: <><p>Most single-family residential lots in Southwest Riverside County are eligible under California state law. The state significantly expanded ADU rights in 2020 and subsequent years, stripping cities of many tools they previously used to deny projects.</p><p>Key eligibility questions: Is your lot zoned residential? Are there physical constraints (setbacks, slope, utility access) that would limit placement? The best first step is a pre-application meeting with your city&apos;s planning or building department — typically free or low-cost, and the fastest way to catch site-specific issues early.</p></>,
  },
  {
    q: "How much does an ADU actually cost in Southwest Riverside County?",
    a: <><p>Honest ranges based on regional project data: detached new-build ADUs run <span className="font-mono">$80,000–$250,000</span>; attached additions run <span className="font-mono">$100,000–$200,000</span>; garage conversions run <span className="font-mono">$35,000–$120,000</span>; JADUs run <span className="font-mono">$20,000–$60,000</span>.</p><p>These are construction costs only — add <span className="font-mono">$15,000–$50,000</span> for design, permitting, utility connections, and contingency. The single biggest source of cost overrun is site-specific surprises (soil conditions, sewer distance, utility access), so treat any estimate without a site visit and soil assessment as preliminary.</p></>,
  },
  {
    q: "Is a garage conversion cheaper than building a detached ADU? By how much?",
    a: <p>Yes — typically by <span className="font-mono">$40,000–$150,000</span> or more. A garage conversion avoids the cost of a new foundation, new framing, and new roof. The structure already exists; you&apos;re upgrading it to living space. A straightforward attached garage conversion might run <span className="font-mono">$50,000–$80,000</span> all-in. A new detached ADU of similar square footage would run <span className="font-mono">$120,000–$200,000</span>. The tradeoff is losing the garage and any resale impact that carries.</p>,
  },
  {
    q: "What hidden costs catch people off guard on ADU projects?",
    a: <ul className="list-disc list-inside space-y-1"><li>Utility trenching to a detached ADU: <span className="font-mono">$5,000–$30,000</span></li><li>Sewer lateral upgrade or separate connection: <span className="font-mono">$3,000–$15,000</span></li><li>Soil and foundation surprises: <span className="font-mono">$10,000–$40,000</span></li><li>Permit and plan check fees: <span className="font-mono">$5,000–$15,000</span></li><li>Design and engineering fees: <span className="font-mono">$5,000–$20,000</span></li><li>Solar panels if required by Title 24 energy code: <span className="font-mono">$8,000–$20,000</span></li><li>Always budget <span className="font-mono">10–15%</span> contingency on top of your contractor&apos;s estimate</li></ul>,
  },
  {
    q: "What financing options exist for building an ADU?",
    a: <><p>The main options: (1) HELOC — a revolving line of credit against your home equity, variable rate, draw as you go; (2) Cash-out refinance — resets your mortgage rate, only makes sense if current rates are lower than what you hold; (3) Construction loan — short-term, draw-based, converts to permanent mortgage at completion; (4) ADU-specific loan products from California lenders; (5) Cash.</p><p>Each has different rate exposure and qualification requirements. Talk to at least two lenders before deciding — ADU financing is specialized enough that general mortgage experience doesn&apos;t always translate.</p></>,
  },
  {
    q: "Is the CalHFA $40,000 ADU grant still available?",
    a: <><p><strong>No.</strong> The CalHFA ADU Grant Program has been paused since <span className="font-mono">December 28, 2023</span>. The program was fully allocated and no new round has been announced as of July 2026.</p><p>The authoritative source is <a href="https://www.calhfa.ca.gov/adu" className="text-navy underline" target="_blank" rel="noopener noreferrer">calhfa.ca.gov/adu</a>. CalHFA&apos;s own website warns that anyone claiming they can still get you this grant may be running a scam.</p></>,
  },
  {
    q: "Can I use a HELOC if I don't have a lot of equity yet?",
    a: <p>HELOC availability depends on your loan-to-value ratio. Most lenders require you to maintain at least <span className="font-mono">15–20%</span> equity after the HELOC is factored in. If you&apos;ve owned your home for fewer than 5 years or purchased at a high LTV, you may not qualify for enough HELOC capacity to fund a full ADU project. In that case, a construction loan or ADU-specific product may be the better path. Get a home equity estimate from your lender before designing to a budget you can&apos;t access.</p>,
  },
  {
    q: "What's the realistic total timeline from start to move-in?",
    a: <ul className="list-disc list-inside space-y-1"><li><strong>Detached new-build ADU:</strong> <span className="font-mono">12–18 months</span> (<span className="font-mono">3–6 months</span> design + permit, <span className="font-mono">4–6 months</span> construction, <span className="font-mono">1–2 months</span> inspections and final)</li><li><strong>Attached ADU:</strong> <span className="font-mono">10–16 months</span></li><li><strong>Garage conversion:</strong> <span className="font-mono">5–9 months</span></li><li><strong>JADU:</strong> <span className="font-mono">4–7 months</span></li><li>Contractor lead times can add <span className="font-mono">1–3 months</span>. See the service area pages for city-specific plan check queue estimates.</li></ul>,
  },
  {
    q: "Do I need an architect?",
    a: <p>Not necessarily — California doesn&apos;t require a licensed architect for residential projects below certain thresholds. A licensed building designer or design-build firm can produce permitted ADU plans in most cases. On complex sites (slopes, structural modifications), an architect adds real value. Whoever stamps your plans must be licensed for residential work in California.</p>,
  },
  {
    q: "What inspections are required during ADU construction?",
    a: <p>Inspections typically include: foundation (before concrete pour), framing (before drywall), rough plumbing, rough electrical, insulation, and final. Each requires scheduling with the city and being on-site or having your contractor present. Budget for re-inspection fees if work doesn&apos;t pass on first inspection.</p>,
  },
  {
    q: "Can I legalize an existing unpermitted ADU or garage conversion?",
    a: <><p>Yes — AB 2533, effective <span className="font-mono">January 1, 2025</span>, created a specific pathway for legalizing ADUs and JADUs built before <span className="font-mono">January 1, 2020</span>. Cities cannot deny the permit or charge impact fees solely because the unit lacks permits. The evaluation standard is Health &amp; Safety Code §17920.3 (basic habitability), not full current building code.</p><p>Typical legalization cost is <span className="font-mono">$10,000–$70,000</span>. Typical timeline is <span className="font-mono">2–6 months</span>. A confidential pre-inspection by a third party is available before you formally apply, letting you assess the scope without triggering enforcement. (Gov. Code §66332)</p></>,
  },
  {
    q: "What does 'evaluated against Health & Safety Code §17920.3' actually mean?",
    a: <p>§17920.3 is California&apos;s definition of substandard housing — the minimum conditions a unit must meet to be considered safe for habitation. It covers adequate light and ventilation, functioning plumbing and electrical, no structural hazards, no pest infestations, no fire hazards. It does not require the unit to comply with every current building code update since construction. A unit that was reasonably built but never permitted often needs only minor corrections to clear this standard.</p>,
  },
  {
    q: "If I'm buying a home with an unpermitted unit, is AB 2533 relevant to my purchase decision?",
    a: <p>Yes — significantly. An unpermitted unit that qualifies for AB 2533 (built before 2020, ADU or JADU) may be a legalization candidate with a defined cost envelope rather than a liability to avoid. Have an independent contractor assess it during your inspection contingency period. If legalization costs <span className="font-mono">$20,000</span>, that&apos;s a negotiating point on purchase price, not necessarily a deal killer.</p>,
  },
  {
    q: "Can the city charge impact fees when I legalize an unpermitted ADU under AB 2533?",
    a: <p>No. Under Gov. Code §66332, cities cannot charge impact fees for the legalization of a qualifying ADU or JADU. School fees and some utility connection fees may still apply — confirm the specific fee schedule with your city at the time of application.</p>,
  },
  {
    q: "Does a JADU need a full kitchen?",
    a: <p>No — a JADU is specifically allowed to have an &quot;efficiency kitchen&quot; instead of a full kitchen. State law does not require a cooking appliance (no range or cooktop required), and the sink can be a wet-bar style sink. An under-counter refrigerator and microwave are permitted. This saves <span className="font-mono">$5,000–$15,000</span> in kitchen costs and avoids the need for a gas line and range hood in many configurations.</p>,
  },
  {
    q: "Does a JADU require the owner to live on-site?",
    a: <p>Yes — JADUs require an owner-occupancy agreement recorded on the property. The property owner must live in either the JADU or the primary home. (Full ADUs under current state law generally do not have owner-occupancy requirements — confirm current law with your planning department at the time of application.)</p>,
  },
  {
    q: "Can a JADU be rented out?",
    a: <p>Yes, to a non-family tenant, subject to the owner-occupancy requirement above. The owner must live somewhere on the property; the JADU can be rented separately. Short-term rental rules apply to JADUs the same as to full ADUs — see your city&apos;s service area page for local STR rules.</p>,
  },
  {
    q: "Will converting my garage hurt my home's resale value?",
    a: <><p>Possibly — depends on your neighborhood and buyer pool. Many buyers put significant weight on covered parking, especially in HOA communities. Converting a two-car garage to an ADU means zero covered parking — some buyers discount for this.</p><p>The counterweight: a permitted ADU adds appraised value, typically <span className="font-mono">70–100%</span> of construction cost. And rental income may attract investment-minded buyers. The resale impact is not cleanly negative or positive — it depends on who&apos;s buying.</p></>,
  },
  {
    q: "Can I add a carport or covered parking after converting my garage?",
    a: <p>Often yes — a detached carport or covered parking addition may be permittable depending on setbacks and lot coverage limits. Check with your city&apos;s planning department and, if applicable, your HOA. Some HOA CC&Rs restrict standalone carport structures on aesthetic grounds.</p>,
  },
  {
    q: "Can my HOA stop me from building an ADU?",
    a: <p>No — California AB 670 (effective <span className="font-mono">January 1, 2020</span>) prohibits HOAs from banning ADU construction outright or imposing conditions that make it effectively infeasible. HOAs can still enforce reasonable aesthetic standards and require architectural review approval. If your HOA denies your ADU application or imposes unreasonable conditions, respond in writing citing AB 670. Most HOA boards comply when the legal position is stated clearly.</p>,
  },
  {
    q: "Can my HOA ban short-term rentals in the ADU even if the city allows them?",
    a: <p>Yes. HOA CC&Rs are a private contractual matter, and courts have generally upheld HOA short-term rental prohibitions as separate from city permitting. If your CC&Rs prohibit rentals under 30 days, the city STR permit doesn&apos;t override that restriction. Review your CC&Rs before building around STR income assumptions.</p>,
  },
  {
    q: "How much rent can I realistically charge for an ADU?",
    a: <><p>Regional ranges: studio/1BR ADU (<span className="font-mono">400–600 sq ft</span>): <span className="font-mono">$1,400–$2,000/month</span>; 1–2BR ADU (<span className="font-mono">600–900 sq ft</span>): <span className="font-mono">$1,800–$2,600/month</span>; 2BR ADU (<span className="font-mono">900–1,200 sq ft</span>): <span className="font-mono">$2,200–$3,000/month</span>.</p><p>Confirm current market rents on Zillow and Apartments.com for comparable units before projecting income — these ranges move with the market.</p></>,
  },
  {
    q: "What's the ROI on an ADU?",
    a: <p>A <span className="font-mono">$100,000</span> garage conversion generating <span className="font-mono">$1,600/month</span> gross rent nets roughly <span className="font-mono">$14,000–$15,000/year</span> after typical expenses — a <span className="font-mono">6–7 year</span> payback, then ongoing income against a fixed investment. A <span className="font-mono">$200,000</span> detached ADU at <span className="font-mono">$2,200/month</span> nets roughly <span className="font-mono">$19,000–$20,000/year</span> — a <span className="font-mono">10–11 year</span> payback, plus property value increase. These are illustrations using typical expense ratios, not guarantees. Run your own numbers with a CPA before committing.</p>,
  },
  {
    q: "How do I find a legitimate ADU contractor?",
    a: <><p>Start with CSLB license verification at contractors.cslb.ca.gov — confirm the license is active, bonded, and carries workers&apos; compensation. Look for a Class B (General Building) license.</p><p>Then: get three written itemized bids, ask for local references and call them. Confirm the contractor pulls permits themselves — if they ask you to pull as owner-builder, walk away. Never pay more than <span className="font-mono">10%</span> or <span className="font-mono">$1,000</span> upfront.</p></>,
  },
  {
    q: "What's the CSLB and how do I use it?",
    a: <p>The Contractors State License Board is California&apos;s licensing authority for contractors. Their public database at contractors.cslb.ca.gov lets you look up any contractor by name or license number and see their license class, status, bond, workers&apos; comp coverage, and disciplinary history. It takes about two minutes and should be the first step before evaluating any bid.</p>,
  },
  {
    q: "What is the legal deposit limit for a contractor in California?",
    a: <p>California Business and Professions Code §7159.5 caps the initial deposit at <span className="font-mono">10%</span> of the contract price or <span className="font-mono">$1,000</span>, whichever is less. Any contractor asking for more upfront is violating state law. This cap exists specifically to protect homeowners; enforce it.</p>,
  },
  {
    q: "Should my ADU contractor pull the permits, or should I?",
    a: <p>Your contractor should pull the permits. A contractor who asks you to pull as an &quot;owner-builder&quot; is either unlicensed for the work or attempting to shift liability to you. As owner-builder, you assume legal responsibility for injuries, code violations, and subcontractor issues. Unless you are a licensed contractor yourself, this is not a role you want.</p>,
  },
  {
    q: "Does building an ADU increase my property taxes?",
    a: <p>Adding a permitted ADU triggers a reassessment of the new construction only — not your entire property. Under Proposition 13, only the value of the newly added structure is assessed. If your ADU is assessed at <span className="font-mono">$120,000</span>, your property tax increases by roughly <span className="font-mono">$1,320–$1,500/year</span> depending on your local rate — usually a small fraction of the rental income the ADU generates.</p>,
  },
];
