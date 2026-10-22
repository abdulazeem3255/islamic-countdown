"use client";

import Link from "next/link";
import { useLang } from "./LangContext";
import { STR } from "../lib/i18n";
import { EVENTS, nextOccurrence, daysUntil } from "../lib/events";
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

export default function HomeClient() {
  const { lang } = useLang();
  const t = STR[lang];

  const upcoming = EVENTS.map((ev) => ({ ev, next: nextOccurrence(ev) }))
    .filter((x) => x.next)
    .sort((a, b) => (a.next! < b.next! ? -1 : 1));

  const hero = upcoming[0];
  const rest = upcoming.slice(1);

  return (
    <div>
      {/* Hero: nearest event */}
      {hero && (
        <section className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 border border-amber-400/30 p-6 sm:p-10 text-center mb-8">
          <p className="text-amber-300/90 text-sm mb-2">{t.tagline}</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-amber-300 mb-1">
            {lang === "ur" ? hero.ev.nameUr : hero.ev.nameEn}
          </h1>
          <p className="text-emerald-100/70 mb-1">
            {t.hijriDate}: {lang === "ur" ? hero.ev.hijriUr : hero.ev.hijriEn}
          </p>
          <p className="text-emerald-100/70 mb-6">
            {t.expectedDate}: <span dir="ltr">{fmtDate(hero.next!, lang)}</span> ·{" "}
            <span className="text-amber-300 font-semibold" dir="ltr">
              {daysUntil(hero.next!)} {t.daysLeft}
            </span>
          </p>
          <div className="max-w-xl mx-auto">
            <CountdownTimer targetDate={hero.next!} lang={lang} />
          </div>
          <Link
            href={`/${hero.ev.slug}`}
            className="inline-block mt-6 px-6 py-2 rounded-full bg-amber-400 text-emerald-950 font-bold hover:bg-amber-300"
          >
            {t.viewAll}
          </Link>
        </section>
      )}

      {/* All upcoming events */}
      <h2 className="text-xl sm:text-2xl font-bold text-amber-300 mb-4">{t.upcomingEvents}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map(({ ev, next }) => (
          <Link
            key={ev.slug}
            href={`/${ev.slug}`}
            className="rounded-xl bg-emerald-900/60 border border-emerald-700/60 p-5 hover:border-amber-400/50 transition"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="font-bold text-lg text-emerald-50">
                  {lang === "ur" ? ev.nameUr : ev.nameEn}
                </h3>
                <p className="text-sm text-emerald-100/60">
                  {lang === "ur" ? ev.hijriUr : ev.hijriEn} ·{" "}
                  <span dir="ltr">{fmtDate(next!, lang)}</span>
                </p>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-sm font-bold" dir="ltr">
                {daysUntil(next!)} {t.daysLeft}
              </span>
            </div>
            <CountdownTimer targetDate={next!} lang={lang} compact />
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-emerald-100/50 max-w-2xl mx-auto">{t.disclaimer}</p>
    </div>
  );
}
