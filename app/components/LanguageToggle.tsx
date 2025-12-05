"use client";

import { Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-1 md:gap-2 rounded-full bg-white/80 p-1 backdrop-blur-md border border-slate-200 shadow-lg">
      <button
        onClick={() => setLanguage("fr")}
        className={cn(
          "relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-colors duration-300",
          language === "fr"
            ? "text-blue-600"
            : "text-slate-500 hover:text-slate-700"
        )}
      >
        {language === "fr" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-blue-50 rounded-full shadow-sm border border-blue-100"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">Français</span>
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={cn(
          "relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-colors duration-300",
          language === "ar"
            ? "text-blue-600"
            : "text-slate-500 hover:text-slate-700"
        )}
      >
        {language === "ar" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-blue-50 rounded-full shadow-sm border border-blue-100"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 font-arabic">الدارجة</span>
      </button>
    </div>
  );
}
