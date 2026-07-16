import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADU Service Areas — Temecula & Murrieta | Temecula ADU Services",
  description:
    "ADU construction, permitting, and legalization resources for Temecula and Murrieta. City-specific permit timelines, short-term rental rules, and neighborhood coverage.",
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        Service Areas
      </p>
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        Temecula &amp; Murrieta ADU Resources
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        Each city has its own permit process, plan check timelines, short-term rental rules, and
        neighborhood character. Select your city for local-specific information.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <Link
          href="/service-areas/temecula"
          className="group border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">
            City of Temecula
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Permit timelines, plan check process, short-term rental rules, and neighborhoods
            including Old Town, Harveston, Redhawk, Morgan Hill, and the Wine Country area.
          </p>
          <span className="text-sm font-semibold text-blue-600 group-hover:underline">
            Temecula ADU guide →
          </span>
        </Link>

        <Link
          href="/service-areas/murrieta"
          className="group border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">
            City of Murrieta
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Permit timelines, plan check process, short-term rental rules, and neighborhoods
            including Bear Creek, California Oaks, Murrieta Hot Springs, and Alta Murrieta.
          </p>
          <span className="text-sm font-semibold text-blue-600 group-hover:underline">
            Murrieta ADU guide →
          </span>
        </Link>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Other Southwest Riverside County areas</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          We also assist homeowners in unincorporated Riverside County areas near Temecula and
          Murrieta, including Wildomar and Lake Elsinore. Unincorporated areas are subject to
          Riverside County building and zoning rules rather than city ordinances — the process
          differs from both Temecula and Murrieta in some respects.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          For the most accurate information on your specific parcel, a pre-application inquiry
          with the relevant jurisdiction is always the right first step.{" "}
          <Link href="mailto:charlesprovido@gmail.com" className="text-blue-600 underline">
            Contact us
          </Link>{" "}
          if you&apos;re unsure which jurisdiction governs your property.
        </p>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500">
          Looking for general ADU information?{" "}
          <Link href="/services/adu-construction" className="text-blue-600 underline">
            See the ADU Construction guide
          </Link>{" "}
          for cost ranges, financing options, AB 2533 legalization, JADU kitchen rules, and
          contractor vetting — information that applies across both cities.
        </p>
      </div>
    </div>
  );
}
