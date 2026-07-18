import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { IMAGES } from "@/app/lib/image-paths";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temecula ADU Services — Local ADU Resource for the Temecula Valley",
  description:
    "Honest, independent ADU information for Temecula and Murrieta homeowners. Real cost ranges, permitting timelines, AB 2533 legalization, financing options, and contractor vetting.",
};

export default function Home() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className={`bg-navy border-b border-paper/10 ${fraunces.variable}`}>

        {/* Two columns: headline left (solid navy), photo right (framed) */}
        <div className="grid lg:grid-cols-2">

          {/* Left — solid navy background, no photo */}
          <div className="px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-20 xl:py-24 flex flex-col justify-center">
            <p className="eyebrow text-xs font-semibold text-paper/50 uppercase tracking-widest mb-5">
              Temecula Valley ADU Resource
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-paper leading-tight mb-5">
              Know What Your ADU Will{" "}
              <span className="font-accent italic font-normal">Actually</span>{" "}
              Cost
            </h1>
            <p className="text-lg text-paper/70 leading-relaxed max-w-sm">
              Real cost ranges, honest permitting timelines, financing options, and the legal details
              you need before you sign anything.
            </p>
          </div>

          {/* Right — photo in a rounded frame, fully unobstructed */}
          <div className="px-6 lg:px-8 xl:px-10 py-8 lg:py-10 flex items-center">
            <div className="relative w-full">
              {/* Rounded photo frame — badge sits outside overflow:hidden so it overlaps the corner */}
              <div className="rounded-[20px] overflow-hidden aspect-[3/2] relative">
                <Image
                  src={IMAGES.home.hero}
                  alt="ADU project in the Temecula Valley"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge overlapping bottom-right corner of the photo frame */}
              <div className="absolute bottom-4 right-4 bg-paper border border-concrete/20 px-3 py-1.5 rounded flex items-center gap-1.5">
                <span className="font-mono text-xs text-sage">✓</span>
                <span className="font-mono text-xs text-ink font-medium">Current on 2026 ADU law</span>
              </div>
            </div>
          </div>

        </div>

        {/* Address capture bar — full width, spans both columns */}
        <div className="px-6 sm:px-8 lg:px-10 pb-10 lg:pb-12">
          {/* GHL PLACEHOLDER: Replace form action with GoHighLevel webhook/embed when GHL integration is ready */}
          <form action="mailto:charlesprovido@gmail.com" method="get">
            <div className="flex items-center bg-paper rounded-xl overflow-hidden border border-paper/20">
              <input
                type="text"
                name="address"
                placeholder="Enter your property address"
                className="flex-1 px-5 py-4 text-sm text-ink bg-transparent outline-none placeholder:text-concrete"
              />
              <div className="shrink-0 px-3">
                <button
                  type="submit"
                  className="bg-navy text-paper px-5 py-2.5 rounded text-sm font-semibold hover:bg-navy/90 transition-colors"
                >
                  Check My Address
                </button>
              </div>
            </div>
          </form>
        </div>

      </section>

      {/* ─── KNOW BEFORE YOU SIGN ─── */}
      <section className="px-6 py-16 border-b border-concrete/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-4">
            Know before you sign
          </h2>
          <p className="text-concrete leading-relaxed mb-4">
            What does an ADU actually cost in Temecula or Murrieta? Is an unpermitted garage
            conversion a legal liability? How long does the permit process really take? Can the
            contractor you&apos;re about to call actually be trusted?
          </p>
          <p className="text-concrete leading-relaxed mb-6">
            These pages give you specific numbers, the actual legal details, and the questions
            worth asking before you spend a dollar. Where a figure might be outdated or a rule
            has changed, we say so and point you to where you can verify it yourself.
          </p>
          <Link
            href="/services/adu-construction"
            className="text-sm font-semibold text-navy hover:underline"
          >
            Start with the full ADU cost guide →
          </Link>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-6 py-16 bg-navy/5 border-b border-concrete/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-10">How most ADU projects come together</h2>
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
                desc: "We match you with a CSLB-licensed, bonded, and insured contractor we've already vetted, so you're not the one doing background checks and comparing strangers' bids.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="w-10 h-10 rounded bg-navy text-paper font-mono font-semibold text-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  {item.step}
                </div>
                <h3 className="font-semibold text-ink mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-concrete leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="px-6 py-14 border-b border-concrete/20">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: "Serving Temecula & Murrieta",
                detail: "City-specific permit timelines, STR rules, and neighborhood coverage for both cities.",
              },
              {
                label: "Honest cost ranges — no hidden pricing",
                detail: "Real construction ranges for all four ADU types, plus a full breakdown of hidden costs that catch people off guard.",
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
                <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded bg-sage/15 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5L4 7L8 3" stroke="#3F6357" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-0.5">{item.label}</p>
                  <p className="text-sm text-concrete leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="px-6 py-16 bg-navy/5 border-b border-concrete/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">Common questions, answered honestly</h2>
          <div className="space-y-5">

            <div className="bg-paper border border-concrete/30 rounded-lg p-6">
              <h3 className="font-semibold text-ink mb-2">
                Is the CalHFA <span className="font-mono">$40,000</span> ADU grant still available?
              </h3>
              <p className="text-sm text-concrete leading-relaxed">
                <strong>No.</strong> The CalHFA ADU Grant Program has been paused since{" "}
                <span className="font-mono">December 28, 2023</span>. The program was fully allocated
                and no new round has been announced as of July 2026. CalHFA&apos;s own website warns that
                anyone still claiming they can get you this grant may be running a scam.{" "}
                <a
                  href="https://www.calhfa.ca.gov/adu"
                  className="text-navy underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify at calhfa.ca.gov/adu
                </a>
                .
              </p>
            </div>

            <div className="bg-paper border border-concrete/30 rounded-lg p-6">
              <h3 className="font-semibold text-ink mb-2">
                How much does an ADU actually cost in Temecula or Murrieta?
              </h3>
              <p className="text-sm text-concrete leading-relaxed">
                Detached new-build ADUs run{" "}
                <span className="font-mono">$80,000–$250,000</span>;
                attached additions{" "}
                <span className="font-mono">$100,000–$200,000</span>;
                garage conversions{" "}
                <span className="font-mono">$35,000–$120,000</span>;
                JADUs{" "}
                <span className="font-mono">$20,000–$60,000</span>.
                These are construction costs only — add{" "}
                <span className="font-mono">$15,000–$50,000</span> for design,
                permitting, utility connections, and contingency. The single biggest driver of cost
                overruns is what&apos;s found during site prep: soil conditions, sewer distance, utility
                access. Any estimate without a site visit should be treated as a placeholder.
              </p>
            </div>

            <div className="bg-paper border border-concrete/30 rounded-lg p-6">
              <h3 className="font-semibold text-ink mb-2">
                Can I legalize an existing unpermitted ADU or garage conversion?
              </h3>
              <p className="text-sm text-concrete leading-relaxed">
                Yes — California AB 2533 (effective{" "}
                <span className="font-mono">January 1, 2025</span>) created a specific pathway
                for ADUs and JADUs built before{" "}
                <span className="font-mono">January 1, 2020</span>. Cities cannot deny the permit
                or charge impact fees solely because the unit lacks permits. Evaluation is against a
                basic habitability standard (Health &amp; Safety Code §17920.3), not full modern
                building code. Typical legalization cost is{" "}
                <span className="font-mono">$10,000–$70,000</span>; typical timeline is{" "}
                <span className="font-mono">2–6 months</span>. A confidential third-party
                pre-inspection is available before you formally apply.
              </p>
            </div>

          </div>
          <div className="mt-6">
            <Link
              href="/services/adu-construction#faq"
              className="text-sm font-semibold text-navy hover:underline"
            >
              See all ADU questions answered →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="px-6 py-16 border-b border-concrete/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-3">Serving Temecula &amp; Murrieta</h2>
          <p className="text-concrete leading-relaxed mb-8">
            Permit timelines, short-term rental rules, and neighborhood coverage are different in
            each city. See the city-specific pages for the details that matter for your address.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/service-areas/temecula"
              className="group border border-concrete/30 rounded-lg p-6 hover:border-navy/40 hover:bg-navy/5 transition-colors"
            >
              <h3 className="font-semibold text-ink group-hover:text-navy mb-2">
                City of Temecula
              </h3>
              <p className="text-sm text-concrete leading-relaxed mb-3">
                Permit timeline, STR/TOT rules, and neighborhood coverage for Old Town, Harveston,
                Redhawk, Morgan Hill, and the Wine Country area.
              </p>
              <span className="text-sm font-semibold text-navy group-hover:underline">
                Temecula ADU guide →
              </span>
            </Link>
            <Link
              href="/service-areas/murrieta"
              className="group border border-concrete/30 rounded-lg p-6 hover:border-navy/40 hover:bg-navy/5 transition-colors"
            >
              <h3 className="font-semibold text-ink group-hover:text-navy mb-2">
                City of Murrieta
              </h3>
              <p className="text-sm text-concrete leading-relaxed mb-3">
                Permit timeline, STR/TOT rules, and neighborhood coverage for Bear Creek, California
                Oaks, Murrieta Hot Springs, and Alta Murrieta.
              </p>
              <span className="text-sm font-semibold text-navy group-hover:underline">
                Murrieta ADU guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            Free ADU Reality Check for Your Property
          </h2>
          <p className="text-concrete leading-relaxed mb-8">
            Find out if an ADU works on your lot, get a real budget range, and get matched with a
            licensed, already-vetted local contractor — so you skip weeks of getting bids and
            checking licenses yourself. Free, no obligation. If your lot isn&apos;t a good fit yet,
            we&apos;ll tell you honestly why.
          </p>
          <Link
            href="mailto:charlesprovido@gmail.com"
            className="inline-block bg-navy text-paper px-8 py-3.5 rounded text-lg font-semibold hover:bg-navy/90 transition-colors"
          >
            Get My Free ADU Reality Check
          </Link>
        </div>
      </section>

    </main>
  );
}
