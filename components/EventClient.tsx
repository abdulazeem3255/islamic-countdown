"use client";

import Link from "next/link";
import { useLang } from "./LangContext";
import { STR } from "../lib/i18n";
import { EVENTS, nextOccurrence, daysUntil, type IslamicEvent } from "../lib/events";
import CountdownTimer from "./CountdownTimer";

function fmtDate(iso: string, lang: "ur" | "en") {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(lang === "ur" ? "ur-PK" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventClient({ event }: { event: IslamicEvent }) {
  const { lang } = useLang();
  const t = STR[lang];
  const next = nextOccurrence(event);
  const faqs = lang === "ur" ? event.faqsUr : event.faqsEn;
  const others = EVENTS.filter((e) => e.slug !== event.slug)
    .map((e) => ({ e, n: nextOccurrence(e) }))
    .filter((x) => x.n)
    .sort((a, b) => (a.n! < b.n! ? -1 : 1))
    .slice(0, 6);

  return (
    <div>
      <nav className="text-sm text-emerald-100/60 mb-4">
        <Link href="/" className="text-amber-300/80 hover:text-amber-300">
          {t.home}
        </Link>{" "}
        / {lang === "ur" ? event.nameUr : event.nameEn}
      </nav>

      <section className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 border border-amber-400/30 p-6 sm:p-10 text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-amber-300 mb-2">
          {lang === "ur" ? event.nameUr : event.nameEn} {lang === "ur" ? "کاؤنٹ ڈاؤن" : "Countdown"}
        </h1>
        <p className="text-emerald-100/70 mb-1">
          {t.hijriDate}: {lang === "ur" ? event.hijriUr : event.hijriEn}
        </p>
        {next ? (
          <>
            <p className="text-emerald-100/70 mb-6">
              {t.expectedDate}: <span dir="ltr">{fmtDate(next, lang)}</span> ·{" "}
              <span className="text-amber-300 font-semibold" dir="ltr">
                {daysUntil(next)} {t.daysLeft}
              </span>
            </p>
            <div className="max-w-xl mx-auto">
              <CountdownTimer targetDate={next} lang={lang} />
            </div>
          </>
        ) : (
          <p className="text-emerald-100/70">{t.endedOn}</p>
        )}
      </section>

      <section className="rounded-xl bg-emerald-900/60 border border-emerald-700/60 p-6 mb-6">
        <h2 className="text-xl font-bold text-amber-300 mb-3">{t.aboutTitle}</h2>
        <p className="text-emerald-50/90 leading-relaxed">
          {lang === "ur" ? event.blurbUr : event.blurbEn}
        </p>
      </section>

      <section className="rounded-xl bg-emerald-900/60 border border-emerald-700/60 p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-300 mb-4">{t.faqTitle}</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-semibold text-emerald-50 mb-1">{f.q}</h3>
              <p className="text-emerald-100/75 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-xl font-bold text-amber-300 mb-4">{t.otherEvents}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {others.map(({ e, n }) => (
          <Link
            key={e.slug}
            href={`/${e.slug}`}
            className="rounded-xl bg-emerald-900/60 border border-emerald-700/60 p-4 hover:border-amber-400/50 transition flex items-center justify-between"
          >
            <span className="font-semibold">{lang === "ur" ? e.nameUr : e.nameEn}</span>
            <span className="text-sm text-amber-300 font-bold" dir="ltr">
              {daysUntil(n!)} {t.daysLeft}
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-emerald-100/50 max-w-2xl mx-auto">{t.disclaimer}</p>
    </div>
  );
}
