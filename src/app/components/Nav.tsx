"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  { label: "ADU Construction", href: "/services/adu-construction" },
  { label: "Garage Conversion ADU", href: "/services/garage-conversion-adu" },
  { label: "Design & Permitting", href: "/services/adu-design-permitting" },
  { label: "Legalization (AB 2533)", href: "/services/adu-legalization" },
];

const areas = [
  { label: "Temecula", href: "/service-areas/temecula" },
  { label: "Murrieta", href: "/service-areas/murrieta" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    }
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setAreasOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="text-lg font-bold text-blue-700 hover:text-blue-800 flex-shrink-0"
        >
          Temecula ADU Services
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">

          {/* Services dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setAreasOpen(false);
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Services
              <Chevron open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="block px-4 py-2.5 text-xs font-semibold text-gray-400 uppercase tracking-wide hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100"
                >
                  All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeAll}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas dropdown */}
          <div ref={areasRef} className="relative">
            <button
              onClick={() => {
                setAreasOpen(!areasOpen);
                setServicesOpen(false);
              }}
              aria-expanded={areasOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Service Areas
              <Chevron open={areasOpen} />
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <Link
                  href="/service-areas"
                  onClick={closeAll}
                  className="block px-4 py-2.5 text-xs font-semibold text-gray-400 uppercase tracking-wide hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100"
                >
                  All Areas
                </Link>
                {areas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={closeAll}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="mailto:charlesprovido@gmail.com"
            className="ml-3 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Free Consultation
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-blue-700"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M5 5L17 17M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M3 6H19M3 11H19M3 16H19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile expanded menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-5 space-y-6">

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Services
              </p>
              <div className="space-y-0.5">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeAll}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-700"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Service Areas
              </p>
              <div className="space-y-0.5">
                {areas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={closeAll}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-700"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="mailto:charlesprovido@gmail.com"
              onClick={closeAll}
              className="block w-full text-center bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
