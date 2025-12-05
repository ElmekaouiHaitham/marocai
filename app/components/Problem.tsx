"use client";

import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileWarning, HelpCircle } from "lucide-react";

interface ProblemProps {
  language: Language;
}

export function Problem({ language }: ProblemProps) {
  const t = content[language].problem;
  const isRTL = language === "ar";

  const icons = [HelpCircle, FileWarning, Clock, AlertTriangle];

  return (
    <section
      className={cn(
        "py-12 md:py-24 bg-slate-50 relative overflow-hidden",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            {t.title}
          </motion.h2>
          <p className="text-xl text-slate-600">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-16">
          {t.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {point}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
            {t.examplesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-slate-700">{example}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-xl md:text-2xl font-medium text-red-500">
              {t.shockPhrase}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
