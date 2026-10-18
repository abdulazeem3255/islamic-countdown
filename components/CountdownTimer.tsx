"use client";

import { useEffect, useState } from "react";
import type { Lang } from "../lib/i18n";
import { STR } from "../lib/i18n";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/** Live ticking countdown to a YYYY-MM-DD date. */
export default function CountdownTimer({
  targetDate,
  lang,
  compact = false,
}: {
  targetDate: string;
  lang: Lang;
  compact?: boolean;
}) {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetDate + "T00:00:00").getTime();
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);
  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);
  const s = Math.floor((diff - m * 60000) / 1000);

  const t = STR[lang];
  const units = [
    { v: d, label: t.days },
    { v: h, label: t.hours },
    { v: m, label: t.minutes },
    { v: s, label: t.seconds },
  ];

  return (
    <div
      className={`flex gap-2 sm:gap-3 ${lang === "ur" ? "flex-row-reverse" : ""}`}
      dir={lang === "ur" ? "rtl" : "ltr"}
      aria-live="off"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className={`flex-1 rounded-xl bg-emerald-950/80 border border-amber-400/30 text-center ${
            compact ? "py-2 px-1" : "py-3 px-2 sm:py-4"
          }`}
        >
          <div
            className={`font-bold text-amber-300 tabular-nums ${
              compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-4xl"
            }`}
            dir="ltr"
          >
            {u.label === t.days ? d : pad(u.v)}
          </div>
          <div className={`text-emerald-100/80 ${compact ? "text-[10px]" : "text-xs sm:text-sm"}`}>
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
