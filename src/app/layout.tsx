import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Temecula ADU Services — Local ADU Resource for the Temecula Valley",
  description:
    "Independent local resource for ADU planning, construction, costs, permitting, and legalization in Temecula, Murrieta, and Southwest Riverside County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <Nav />
        {children}
        <footer className="border-t border-gray-200 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
            <p>Temecula ADU Services — an independent local resource for the Temecula Valley.</p>
            <p className="mt-1">
              Content is for informational purposes only and does not constitute legal, financial,
              or construction advice. Verify all requirements with your city and licensed
              professionals.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
