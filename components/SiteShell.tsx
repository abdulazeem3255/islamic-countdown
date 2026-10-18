"use client";

import Link from "next/link";
import { useLang } from "./LangContext";
import { STR } from "../lib/i18n";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLang();
  const t = STR[lang];

  return (
    <div dir={lang === "ur" ? "rtl" : "ltr"} className="min-h-screen bg-emerald-950 text-emerald-50">
      <header className="border-b border-amber-400/20 bg-emerald-950/90 sticky top-0 z-10 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden>
              🌙
            </span>
            <span className="font-bold text-amber-300 text-lg">{t.siteName}</span>
          </Link>
          <div className="flex items-center gap-1 bg-emerald-900 rounded-full p-1 border border-emerald-700">
            <button
              onClick={() => setLang("ur")}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                lang === "ur" ? "bg-amber-400 text-emerald-950" : "text-emerald-100"
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                lang === "en" ? "bg-amber-400 text-emerald-950" : "text-emerald-100"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-10">{children}</main>

      <footer className="border-t border-amber-400/20 mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-emerald-100/60">
          <p>{t.disclaimer}</p>
          <p className="mt-2">
            <Link href="/" className="text-amber-300/80 hover:text-amber-300">
              {t.siteName}
            </Link>{" "}
            — {t.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
