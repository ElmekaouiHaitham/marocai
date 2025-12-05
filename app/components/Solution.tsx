"use client";

import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  FileText,
  Languages,
  ListChecks,
  ScanLine,
  Workflow,
} from "lucide-react";

interface SolutionProps {
  language: Language;
}

export function Solution({ language }: SolutionProps) {
  const t = content[language].solution;
  const isRTL = language === "ar";

  const icons = [
    ScanLine, // OCR
    Bot, // Understands
    Languages, // Explains in Darija
    ListChecks, // Checklist
    FileText, // Missing docs
    Workflow, // Workflow
    CheckCircle2, // Result
  ];

  return (
    <section
      className={cn(
        "py-12 md:py-24 bg-white relative overflow-hidden",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-50" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.features.map((feature, index) => {
            const Icon = icons[index] || CheckCircle2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-slate-700">
                  {feature}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <p className="text-xl md:text-2xl font-bold text-blue-700">
              {t.result}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
