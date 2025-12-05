"use client";

import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = content[language].footer;
  const isRTL = language === "ar";

  return (
    <footer
      className={cn(
        "py-10 bg-white relative border-t border-slate-200",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mt-2 pt-8 border-t border-slate-100 flex items-center justify-center text-slate-500 text-sm">
        <p>© 2025 Maroc AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
