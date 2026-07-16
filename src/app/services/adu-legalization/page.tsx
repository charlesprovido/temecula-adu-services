import type { Metadata } from "next";
import Link from "next/link";

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
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    green: "bg-green-50 border-green-300 text-green-900",
    red: "bg-red-50 border-red-300 text-red-900",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 text-sm leading-relaxed ${styles[color]}`}>
      {children}
    </div>
  );
}

export default function ADULegalizationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">ADU Legalization (AB 2533)</span>
      </nav>

      <div className="mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Services</p>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          ADU Legalization — AB 2533
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          If you have an unpermitted garage conversion, a backyard structure someone converted to
          living space, or a rental unit that was never properly permitted, California AB 2533 created
          a specific pathway to bring it into legal status — without facing full modern code compliance
          or impact fees.
        </p>
      </div>

      <InfoBox color="green">
        <strong>AB 2533 key facts:</strong> Signed September 2024, effective January 1, 2025. Covers
        ADUs and JADUs built before January 1, 2020. Cities may not deny the permit or impose impact
        fees solely because the unit lacks permits. Evaluation is against Health &amp; Safety Code
        §17920.3 — a basic habitability standard, not full current building code. (Gov. Code §66332)
      </InfoBox>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who this applies to</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 2533 applies to unpermitted ADUs and JADUs that were built before January 1, 2020. If
        your unit was built after that date without permits, this program does not apply — those
        units are subject to standard enforcement and would need to go through the normal permit
        process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common situations this covers:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>A garage the previous owner converted to living space but never permitted</li>
        <li>A backyard structure (shed, bonus room, casita) someone converted to a rental unit</li>
        <li>A bonus room or bedroom separated from the main house and rented independently</li>
        <li>A unit that was permitted for another use (storage, workshop) but has been used as a dwelling</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        What &quot;evaluated against Health &amp; Safety Code §17920.3&quot; actually means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important thing to understand about AB 2533: the city evaluates your unit
        against California&apos;s <em>minimum habitability standard</em>, not against everything in the
        current building code.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Health &amp; Safety Code §17920.3 defines substandard housing — the minimum conditions a unit
        must meet to be considered safe for human habitation. The checklist includes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6">
        <li>Adequate natural light and ventilation</li>
        <li>Functioning plumbing — hot and cold water, working fixtures</li>
        <li>Electrical that is not a fire hazard</li>
        <li>No structural collapse risk</li>
        <li>No significant pest infestation</li>
        <li>Functional heating</li>
        <li>No dampness or water intrusion that creates a health hazard</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        What this does NOT require: compliance with every current residential building code update
        since the unit was built. The city cannot retroactively apply seismic standards, updated
        electrical panel requirements, or current energy code provisions that didn&apos;t exist when
        the unit was constructed. A unit that was reasonably well-built but never permitted often
        needs only minor corrections to clear this standard.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        The confidential pre-inspection option
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before formally submitting a legalization application, homeowners may request a confidential
        third-party pre-inspection. This lets you get an independent assessment of what the unit
        is likely to need before the city ever sees it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
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

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical costs to clear the standard</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Retrofit costs to bring a unit up to §17920.3 standards vary significantly based on how the
        unit was originally built and what has deteriorated since.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Unit condition</th>
              <th className="px-4 py-3 font-semibold text-gray-700 border border-gray-200">Typical cost range</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Well-built but never permitted — needs smoke/CO detectors, minor electrical fixes, ventilation", "$10,000 – $20,000"],
              ["Adequate structure but needs HVAC, window upgrades for egress, bathroom fixture repairs", "$20,000 – $40,000"],
              ["Significant plumbing issues, inadequate ventilation, structural concerns, panel upgrade needed", "$40,000 – $70,000"],
            ].map(([condition, cost]) => (
              <tr key={condition} className="border border-gray-200 even:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{condition}</td>
                <td className="px-4 py-3 font-semibold text-gray-700">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        The $10,000–$70,000 range reflects the full realistic spread. Most projects land somewhere
        in the $20,000–$40,000 range for a reasonably constructed but unpermitted conversion.
        A contractor or inspector who specializes in legalization work can give you a much tighter
        estimate after a site walk.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Impact fees</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Gov. Code §66332, cities cannot charge impact fees for the legalization of a qualifying
        ADU or JADU under this program. Impact fees — which can run $10,000–$30,000+ on new
        construction — are explicitly prohibited as a condition of legalization.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        School fees and utility connection fees may still apply in certain circumstances. Confirm
        the specific fee schedule with your city at the time of application.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timeline</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Budget 2–6 months from initial application to final sign-off. Projects with minimal
        corrections and straightforward retrofit work can move faster. Those requiring significant
        plumbing or structural work take longer, depending on contractor availability and inspection
        scheduling.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        If you&apos;re buying a home with an unpermitted unit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 2533 changes how buyers should think about unpermitted units. An unpermitted ADU or
        JADU built before 2020 is not automatically a deal-breaker — it may be a legalization
        candidate with a known cost envelope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before closing: have an independent contractor walk the unit and estimate legalization cost.
        If legalization runs $25,000, that&apos;s a negotiating point on purchase price. If it runs
        $70,000 and the structure has serious issues, the math changes. Either way, knowing the
        number before you close is far better than discovering it afterward.
      </p>

      <InfoBox color="amber">
        <strong>Disclosure requirement:</strong> Unpermitted dwellings on a property are generally
        required to be disclosed to buyers under California real estate law. If you&apos;re selling a
        property with an unpermitted unit, consult with a real estate attorney about your disclosure
        obligations before listing. Legalizing before sale removes the disclosure issue and typically
        supports a higher appraised value.
      </InfoBox>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        <Link href="/services/adu-construction" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">ADU Construction Guide</p>
          <p className="text-sm text-gray-600">Building a new ADU from scratch — costs, financing, contractor vetting.</p>
        </Link>
        <Link href="/services/garage-conversion-adu" className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <p className="font-semibold text-gray-800 mb-1">Garage Conversion Guide</p>
          <p className="text-sm text-gray-600">Converting a garage to a legal ADU — new construction, not legalization of an existing conversion.</p>
        </Link>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Not sure if your unit qualifies?
        </h2>
        <p className="text-gray-600 mb-5 text-sm max-w-md mx-auto">
          A free consultation can help you assess whether AB 2533 applies to your unit, give
          you a rough sense of likely retrofit costs, and explain how the process works in
          Temecula or Murrieta specifically.
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
