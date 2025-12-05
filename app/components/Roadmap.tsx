"use client";

import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Construction, Rocket } from "lucide-react";

interface RoadmapProps {
  language: Language;
}

export function Roadmap({ language }: RoadmapProps) {
  const t = content[language].roadmap;
  const isRTL = language === "ar";

  return (
    <section
      className={cn(
        "py-24 bg-slate-50 relative",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900"
          >
            {t.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-slate-900">
                <Construction className="w-6 h-6 text-amber-500" />
                <span>Core Tech</span>
              </h3>
              <ul className="space-y-4">
                {t.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-slate-900">
                <Rocket className="w-6 h-6 text-blue-600" />
                <span>Pilot Procedures</span>
              </h3>
              <ul className="space-y-4">
                {t.pilots.map((pilot, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-blue-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <span>{pilot}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center p-6 bg-blue-50 rounded-2xl border border-blue-100"
          >
            <p className="text-blue-700 font-medium">{t.access}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
