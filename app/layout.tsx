import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "../components/LangContext";
import SiteShell from "../components/SiteShell";

const SITE_URL = "https://abdulazeem3255.github.io/islamic-countdown";

export const metadata: Metadata = {
  title: "Islamic Countdown — اسلامی کاؤنٹ ڈاؤن | Ramadan, Eid, Hajj Countdown 2027",
  description:
    "Live Islamic countdowns in Urdu & English: how many days until Ramadan 2027, Eid al-Fitr, Eid al-Adha, Hajj, Ashura, Laylat al-Qadr? رمضان، عیدین، حج کا کاؤنٹ ڈاؤن۔",
  keywords: [
    "ramadan countdown",
    "how many days until ramadan",
    "eid countdown",
    "hajj countdown",
    "islamic countdown",
    "ramadan 2027",
    "رمضان کاؤنٹ ڈاؤن",
    "عید کاؤنٹ ڈاؤن",
    "ramzan kitne din baaki",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Islamic Countdown — اسلامی کاؤنٹ ڈاؤن",
    description:
      "Live countdowns to Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, Ashura and more — in Urdu & English.",
    url: SITE_URL,
    siteName: "Islamic Countdown",
    type: "website",
    locale: "ur_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Countdown — اسلامی کاؤنٹ ڈاؤن",
    description: "How many days until Ramadan, Eid, Hajj? Live countdowns in Urdu & English.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <LangProvider>
          <SiteShell>{children}</SiteShell>
        </LangProvider>
      </body>
    </html>
  );
}
