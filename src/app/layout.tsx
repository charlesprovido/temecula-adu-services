import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
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
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        <Nav />
        {children}
        <footer className="border-t border-concrete/20 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-concrete">
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
