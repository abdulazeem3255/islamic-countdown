import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventClient from "../../components/EventClient";
import { EVENTS, getEvent, nextOccurrence } from "../../lib/events";

const SITE_URL = "https://abdulazeem3255.github.io/islamic-countdown";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ev = getEvent(params.slug);
  if (!ev) return {};
  const next = nextOccurrence(ev);
  const year = next ? next.slice(0, 4) : "";
  return {
    title: `${ev.nameEn} ${year} Countdown — ${ev.nameUr} کاؤنٹ ڈاؤن | How Many Days Until ${ev.nameEn}?`,
    description: `Live ${ev.nameEn} countdown: how many days until ${ev.nameEn} ${year}? ${ev.blurbEn} (${ev.nameUr} کاؤنٹ ڈاؤن — اردو میں بھی)۔`,
    keywords: [
      `${ev.nameEn.toLowerCase()} countdown`,
      `how many days until ${ev.nameEn.toLowerCase()}`,
      `${ev.nameEn.toLowerCase()} ${year}`,
      ev.nameUr,
      `${ev.nameUr} کاؤنٹ ڈاؤن`,
    ],
    alternates: { canonical: `${SITE_URL}/${ev.slug}` },
    openGraph: {
      title: `${ev.nameEn} Countdown — ${ev.nameUr}`,
      description: ev.blurbEn,
      url: `${SITE_URL}/${ev.slug}`,
      type: "website",
      locale: "ur_PK",
    },
    robots: { index: true, follow: true },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const ev = getEvent(params.slug);
  if (!ev) notFound();

  const faqsEn = ev.faqsEn;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsEn.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <EventClient event={ev} />
    </>
  );
}
