"use client";

import { useState } from "react";
import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Check, FileCheck, MapPin, Scan, Smartphone } from "lucide-react";

interface DemoProps {
  language: Language;
}

export function Demo({ language }: DemoProps) {
  const t = content[language].demo;
  const isRTL = language === "ar";
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const activeExample = t.examples[activeExampleIndex];

  return (
    <section
      className={cn(
        "py-12 md:py-24 bg-slate-50 relative",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Context */}
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mb-6">
                <Car className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Live Demo Preview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                {t.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.subtitle}</p>

              {/* Example Toggles */}
              <div className="flex flex-wrap gap-2 mb-8">
                {t.examples.map((example, index) => (
                  <button
                    key={example.id}
                    onClick={() => setActiveExampleIndex(index)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeExampleIndex === index
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {example.label}
                  </button>
                ))}
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {activeExample.title}
                </h3>
                <p className="text-slate-700">{activeExample.description}</p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-lg font-semibold text-slate-900">
                  {t.conclusion}
                </p>
              </div>
            </div>

            {/* Right Side: Visual Representation */}
            <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center border-l border-slate-100">
              <div className="relative w-full max-w-[300px] md:max-w-sm aspect-[9/19] bg-white rounded-[2.5rem] border-4 border-slate-200 shadow-2xl overflow-hidden mx-auto">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-xl z-20" />

                {/* Screen Content */}
                <div className="absolute inset-0 pt-12 px-4 pb-4 flex flex-col gap-4 bg-slate-50 overflow-y-auto no-scrollbar">
                  {/* Chat Bubbles Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExample.id}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.5,
                            delayChildren: 0.2,
                          },
                        },
                      }}
                      className="flex flex-col gap-4"
                    >
                      {activeExample.conversation.map((message, index) => (
                        <motion.div
                          key={`${activeExample.id}-${index}`}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className={cn(
                            "p-3 rounded-2xl max-w-[85%] shadow-sm text-sm whitespace-pre-line",
                            message.role === "user"
                              ? "bg-blue-600 text-white self-end rounded-tr-none"
                              : "bg-white text-slate-800 self-start rounded-tl-none"
                          )}
                        >
                          {/* Standard Text */}
                          {(!message.type || message.type === "text") &&
                            message.text}

                          {/* Questions (AI) - Blurred Lines */}
                          {message.type === "questions" && (
                            <div className="space-y-2">
                              <p className="mb-2 font-medium">{message.text}</p>
                              <div className="h-2 w-3/4 bg-slate-100 rounded animate-pulse" />
                              <div className="h-2 w-1/2 bg-slate-100 rounded animate-pulse" />
                              <div className="h-2 w-2/3 bg-slate-100 rounded animate-pulse" />
                            </div>
                          )}

                          {/* Answers (User) - Blurred Pills */}
                          {message.type === "answers" && (
                            <div className="flex flex-wrap gap-2 justify-end">
                              <div className="h-6 w-16 bg-white/20 rounded-full animate-pulse" />
                              <div className="h-6 w-24 bg-white/20 rounded-full animate-pulse" />
                            </div>
                          )}

                          {/* Checklist + Map (AI) */}
                          {message.type === "checklist_map" && (
                            <div className="space-y-3">
                              <p className="font-medium">{message.text}</p>
                              <div className="space-y-2 pl-1">
                                {[1, 2, 3, 4].map((i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-4 h-4 rounded border border-slate-200 flex-shrink-0" />
                                    <div className="h-2 w-full bg-slate-100 rounded animate-pulse" />
                                  </div>
                                ))}
                              </div>
                              <div className="mt-2 h-24 w-full bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 overflow-hidden relative">
                                <MapPin className="w-6 h-6 text-slate-400 z-10" />
                                <div className="absolute inset-0 bg-slate-50 opacity-50" />
                                {/* Abstract map lines */}
                                <div className="absolute top-2 left-0 w-full h-px bg-slate-200" />
                                <div className="absolute top-8 left-0 w-full h-px bg-slate-200" />
                                <div className="absolute top-16 left-0 w-full h-px bg-slate-200" />
                                <div className="absolute top-0 left-8 h-full w-px bg-slate-200" />
                                <div className="absolute top-0 left-20 h-full w-px bg-slate-200" />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
