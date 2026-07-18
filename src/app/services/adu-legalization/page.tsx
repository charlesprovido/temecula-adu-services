import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Num from "@/app/components/Num";
import { IMAGES } from "@/app/lib/image-paths";

export const metadata: Metadata = {
  title: "ADU Legalization in California — AB 2533 Guide | Temecula ADU Services",
  description:
    "How to legalize an unpermitted ADU or garage conversion under California AB 2533 (effective January 1, 2025). Covers the evaluation standard, confidential pre-inspection, typical costs, and what cities can and cannot require.",
};

function InfoBox({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "amber" | "green" | "red";
}) {
  const styles = {
    blue:  "bg-navy/5 border-navy/30 text-navy",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    green: "bg-sage/10 border-sage/40 text-sage",
    red:   "bg-rust/10 border-rust/40 text-rust",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

export default function ADULegalizationPage() {
  return (
    <>
      {/* ── Blueprint hero — object-contain preserves full floor plan on navy bg ── */}
      <div className="relative w-full bg-navy overflow-hidden h-64 sm:h-72 border-b border-concrete/20">
        <Image
          src={IMAGES.legalization.hero}
          alt="ADU floor plan blueprint — 1-bedroom unit with kitchen, bath, and living area"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

    <div className="max-w-3xl mx-auto px-6 py-12">

      <nav className="text-sm text-concrete mb-6">
        <Link href="/services" className="hover:text-navy">Services</Link>
        <span className="mx-2">›</span>
        <span className="text-ink">ADU Legalization (AB 2533)</span>
      </nav>

      <div className="mb-10">
        <p className="eyebrow text-xs font-semibold text-navy uppercase tracking-widest mb-2">Services</p>
        <h1 className="font-display text-4xl font-bold text-ink leading-tight mb-4">
          ADU Legalization — AB 2533
        </h1>
        <p className="text-xl text-concrete leading-relaxed">
          If you have an unpermitted garage conversion, a backyard structure someone converted to
          living space, or a rental unit that was never properly permitted, California AB 2533 created
          a specific pathway to bring it into legal status — without facing full modern code compliance
          or impact fees.
        </p>
      </div>

      <InfoBox color="green">
        <strong>AB 2533 key facts:</strong> Signed September 2024, effective{" "}
        <span className="font-mono">January 1, 2025</span>. Covers ADUs and JADUs built before{" "}
        <span className="font-mono">January 1, 2020</span>. Cities may not deny the permit or impose
        impact fees solely because the unit lacks permits. Evaluation is against Health &amp; Safety
        Code §17920.3 — a basic habitability standard, not full current building code. (Gov. Code §66332)
      </InfoBox>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Who this applies to</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        AB 2533 applies to unpermitted ADUs and JADUs that were built before{" "}
        <span className="font-mono">January 1, 2020</span>. If your unit was built after that date
        without permits, this program does not apply — those units are subject to standard enforcement
        and would need to go through the normal permit process.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        Common situations this covers:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-concrete leading-relaxed mb-6">
        <li>A garage the previous owner converted to living space but never permitted</li>
        <li>A backyard structure (shed, bonus room, casita) someone converted to a rental unit</li>
        <li>A bonus room or bedroom separated from the main house and rented independently</li>
        <li>A unit that was permitted for another use (storage, workshop) but has been used as a dwelling</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
        What &quot;evaluated against Health &amp; Safety Code §17920.3&quot; actually means
      </h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        This is the most important thing to understand about AB 2533: the city evaluates your unit
        against California&apos;s <em>minimum habitability standard</em>, not against everything in the
        current building code.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        Health &amp; Safety Code §17920.3 defines substandard housing — the minimum conditions a unit
        must meet to be considered safe for human habitation. The checklist includes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-concrete leading-relaxed mb-6">
        <li>Adequate natural light and ventilation</li>
        <li>Functioning plumbing — hot and cold water, working fixtures</li>
        <li>Electrical that is not a fire hazard</li>
        <li>No structural collapse risk</li>
        <li>No significant pest infestation</li>
        <li>Functional heating</li>
        <li>No dampness or water intrusion that creates a health hazard</li>
      </ul>
      <p className="text-ink/80 leading-relaxed mb-4">
        What this does NOT require: compliance with every current residential building code update
        since the unit was built. The city cannot retroactively apply seismic standards, updated
        electrical panel requirements, or current energy code provisions that didn&apos;t exist when
        the unit was constructed. A unit that was reasonably well-built but never permitted often
        needs only minor corrections to clear this standard.
      </p>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
        The confidential pre-inspection option
      </h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Before formally submitting a legalization application, homeowners may request a confidential
        third-party pre-inspection. This lets you get an independent assessment of what the unit
        is likely to need before the city ever sees it.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        The value of this step: if the pre-inspection reveals significant issues, you can address
        them before submitting the application — without triggering city enforcement action in the
        interim. This is especially useful if you&apos;re uncertain whether the unit has serious
        structural or electrical problems that would be expensive to correct.
      </p>

      <InfoBox color="blue">
        <strong>Use the pre-inspection before submitting if you&apos;re uncertain.</strong> Once you
        submit a legalization application, the city is aware of the unit&apos;s existence. If you
        discover after submittal that the unit has serious problems you can&apos;t afford to fix, your
        options narrow. The pre-inspection lets you make an informed decision first.
      </InfoBox>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Typical costs to clear the standard</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Retrofit costs to bring a unit up to §17920.3 standards vary significantly based on how the
        unit was originally built and what has deteriorated since.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-left">
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Unit condition</th>
              <th className="px-4 py-3 font-medium text-paper border border-navy/80">Typical cost range</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Well-built but never permitted — needs smoke/CO detectors, minor electrical fixes, ventilation", "$10,000 – $20,000"],
              ["Adequate structure but needs HVAC, window upgrades for egress, bathroom fixture repairs", "$20,000 – $40,000"],
              ["Significant plumbing issues, inadequate ventilation, structural concerns, panel upgrade needed", "$40,000 – $70,000"],
            ].map(([condition, cost]) => (
              <tr key={condition} className="border border-concrete/30 even:bg-navy/5">
                <td className="px-4 py-3 text-ink/80">{condition}</td>
                <td className="px-4 py-3 font-semibold text-ink"><Num>{cost}</Num></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-concrete leading-relaxed">
        The <span className="font-mono">$10,000–$70,000</span> range reflects the full realistic
        spread. Most projects land somewhere in the{" "}
        <span className="font-mono">$20,000–$40,000</span> range for a reasonably constructed but
        unpermitted conversion. A contractor or inspector who specializes in legalization work can give
        you a much tighter estimate after a site walk.
      </p>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Impact fees</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Under Gov. Code §66332, cities cannot charge impact fees for the legalization of a qualifying
        ADU or JADU under this program. Impact fees — which can run{" "}
        <span className="font-mono">$10,000–$30,000+</span> on new construction — are explicitly
        prohibited as a condition of legalization.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        School fees and utility connection fees may still apply in certain circumstances. Confirm
        the specific fee schedule with your city at the time of application.
      </p>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Timeline</h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        Budget <span className="font-mono">2–6 months</span> from initial application to final
        sign-off. Projects with minimal corrections and straightforward retrofit work can move
        faster. Those requiring significant plumbing or structural work take longer, depending on
        contractor availability and inspection scheduling.
      </p>

      <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
        If you&apos;re buying a home with an unpermitted unit
      </h2>
      <p className="text-ink/80 leading-relaxed mb-4">
        AB 2533 changes how buyers should think about unpermitted units. An unpermitted ADU or
        JADU built before 2020 is not automatically a deal-breaker — it may be a legalization
        candidate with a known cost envelope.
      </p>
      <p className="text-ink/80 leading-relaxed mb-4">
        Before closing: have an independent contractor walk the unit and estimate legalization cost.
        If legalization runs <span className="font-mono">$25,000</span>, that&apos;s a negotiating
        point on purchase price. If it runs <span className="font-mono">$70,000</span> and the
        structure has serious issues, the math changes. Either way, knowing the number before you
        close is far better than discovering it afterward.
      </p>

      <InfoBox color="amber">
        <strong>Disclosure requirement:</strong> Unpermitted dwellings on a property are generally
        required to be disclosed to buyers under California real estate law. If you&apos;re selling a
        property with an unpermitted unit, consult with a real estate attorney about your disclosure
        obligations before listing. Legalizing before sale removes the disclosure issue and typically
        supports a higher appraised value.
      </InfoBox>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link href="/services/adu-construction" className="border border-concrete/30 rounded-lg p-5 hover:border-navy/40 hover:bg-navy/5 transition-colors">
          <p className="font-semibold text-ink mb-1">ADU Construction Guide</p>
          <p className="text-sm text-concrete">Building a new ADU from scratch — costs, financing, contractor vetting.</p>
        </Link>
        <Link href="/services/garage-conversion-adu" className="border border-concrete/30 rounded-lg p-5 hover:border-navy/40 hover:bg-navy/5 transition-colors">
          <p className="font-semibold text-ink mb-1">Garage Conversion Guide</p>
          <p className="text-sm text-concrete">Converting a garage to a legal ADU — new construction, not legalization of an existing conversion.</p>
        </Link>
      </div>

      <div className="mt-8 bg-navy/5 border border-navy/20 rounded-lg p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink mb-2">
          Free ADU Reality Check for Your Property
        </h2>
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
    </>
  );
}
