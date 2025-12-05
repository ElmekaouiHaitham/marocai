"use client";

import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BrainCircuit, Globe2, Layout, ShieldCheck } from "lucide-react";

interface DifferentiationProps {
  language: Language;
}

export function Differentiation({ language }: DifferentiationProps) {
  const t = content[language].differentiation;
  const isRTL = language === "ar";

  const icons = [
    Globe2, // 100% Moroccan
    BrainCircuit, // Darija Understanding
    ShieldCheck, // Multi-agents
    Layout, // Simple UX
  ];

  return (
    <section
      className={cn(
        "py-12 md:py-24 bg-white relative overflow-hidden",
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {point}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-xl text-blue-700 font-medium">{t.conclusion}</p>
        </motion.div>
      </div>
    </section>
  );
}
