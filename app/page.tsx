"use client";

import { useState } from "react";
import { Language } from "@/lib/content";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Demo } from "./components/Demo";
import { Differentiation } from "./components/Differentiation";
// import { Roadmap } from "./components/Roadmap";
import { Footer } from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <LanguageToggle language={language} setLanguage={setLanguage} />

      <Hero language={language} />
      <Problem language={language} />
      <Solution language={language} />
      <Demo language={language} />
      <Differentiation language={language} />
      {/* <Roadmap language={language} /> */}
      <Footer language={language} />
    </main>
  );
}
