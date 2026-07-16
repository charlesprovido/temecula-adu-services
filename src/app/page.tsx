import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Temecula ADU Services — Local ADU Resource for the Temecula Valley",
  description:
    "Honest, independent ADU information for Temecula and Murrieta homeowners. Real cost ranges, permitting timelines, AB 2533 legalization, financing options, and contractor vetting.",
};

export default function Home() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="bg-white px-6 py-20 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Temecula Valley ADU Resource
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Build a smarter ADU in Temecula or Murrieta
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Real cost ranges, honest permitting timelines, financing options, and the legal details
            most local contractor websites leave out — so you can make good decisions before you
            sign anything.
          </p>
          <Link
            href="mailto:charlesprovido@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* ─── WHAT THIS SITE COVERS ─── */}
      <section className="px-6 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            You have real questions. Most contractor websites don&apos;t answer them.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;re trying to figure out what an ADU actually costs in Temecula or Murrieta,
            whether your unpermitted garage conversion is a legal liability, how long the permit
            process is really going to take, or whether you can trust the contractor you&apos;re
            about to call — you&apos;re not going to find straight answers on most local sites.
            You&apos;ll find forms, vague ranges, and a lot of &ldquo;contact us for a quote.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            This site exists to give you the specific numbers, the actual legal details, and the
            questions you should be asking before you spend a dollar. If a figure might be
            outdated or a rule has changed, we say so and point you to where you can verify it.
          </p>
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            See everything this site covers →
          </Link>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-6 py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">How most ADU projects come together</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Research your options",
                desc: "Understand what type of ADU fits your property, what it realistically costs, and what the permitting process looks like in your city.",
              },
              {
                step: "2",
                title: "Free consultation",
                desc: "Talk through your specific lot, budget, and goals. A good consultation identifies what's feasible before you spend money on design.",
              },
              {
                step: "3",
                title: "Design & permitting",
                desc: "Work with a licensed designer to produce permit-ready drawings. Submit to your city and navigate the plan check process.",
              },
              {
                step: "4",
                title: "Build with a vetted contractor",
                desc: "Construction with a CSLB-licensed, bonded, and insured contractor. Payments tied to completed milestones, not calendar dates.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="px-6 py-14 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: "Serving Temecula & Murrieta",
                detail: "City-specific permit timelines, STR rules, and neighborhood coverage for both cities.",
              },
              {
                label: "Honest cost ranges — no hidden pricing",
                detail: "Real construction ranges for all four ADU types, plus a full list of hidden costs competitors don't publish.",
              },
              {
                label: "Current on 2026 ADU law including AB 2533",
                detail: "AB 2533 legalization (effective Jan 1, 2025), CalHFA grant status corrected with source, HOA rights under AB 670.",
              },
              {
                label: "CSLB-verified contractor guidance",
                detail: "Step-by-step guide to verifying any contractor's license, bond, and disciplinary record before you commit.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5L4 7L8 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="px-6 py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common questions, answered honestly</h2>
          <div className="space-y-5">

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Is the CalHFA $40,000 ADU grant still available?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>No.</strong> The CalHFA ADU Grant Program has been paused since December
                28, 2023. The program was fully allocated and no new round has been announced as
                of July 2026. CalHFA&apos;s own website warns that anyone still claiming they can get
                you this grant may be running a scam. At least one local competitor still shows
                this grant as available — that information is wrong.{" "}
                <a
                  href="https://www.calhfa.ca.gov/adu"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify at calhfa.ca.gov/adu
                </a>
                .
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                How much does an ADU actually cost in Temecula or Murrieta?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Detached new-build ADUs run $80,000–$250,000; attached additions $100,000–$200,000;
                garage conversions $35,000–$120,000; JADUs $20,000–$60,000. These are construction
                costs only — add $15,000–$50,000 for design, permitting, utility connections, and
                contingency. The single biggest driver of cost overruns is what&apos;s found during site
                prep: soil conditions, sewer distance, utility access. Any estimate without a site
                visit should be treated as a placeholder.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Can I legalize an existing unpermitted ADU or garage conversion?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes — California AB 2533 (effective January 1, 2025) created a specific pathway
                for ADUs and JADUs built before January 1, 2020. Cities cannot deny the permit or
                charge impact fees solely because the unit lacks permits. Evaluation is against a
                basic habitability standard (Health &amp; Safety Code §17920.3), not full modern
                building code. Typical legalization cost is $10,000–$70,000; typical timeline is
                2–6 months. A confidential third-party pre-inspection is available before you
                formally apply.
              </p>
            </div>

          </div>
          <div className="mt-6">
            <Link
              href="/services/adu-construction#faq"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              See all 29 FAQ answers →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="px-6 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Serving Temecula &amp; Murrieta</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Permit timelines, short-term rental rules, and neighborhood coverage are different in
            each city. See the city-specific pages for the details that matter for your address.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/service-areas/temecula"
              className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                City of Temecula
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Permit timeline, STR/TOT rules, and neighborhood coverage for Old Town, Harveston,
                Redhawk, Morgan Hill, and the Wine Country area.
              </p>
              <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                Temecula ADU guide →
              </span>
            </Link>
            <Link
              href="/service-areas/murrieta"
              className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                City of Murrieta
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Permit timeline, STR/TOT rules, and neighborhood coverage for Bear Creek, California
                Oaks, Murrieta Hot Springs, and Alta Murrieta.
              </p>
              <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                Murrieta ADU guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to find out what&apos;s possible on your property?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A free consultation covers what type of ADU fits your lot, a realistic budget range,
            what the permitting path looks like in your city, and what questions to ask a
            contractor before signing. No pressure, no pitch.
          </p>
          <Link
            href="mailto:charlesprovido@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
