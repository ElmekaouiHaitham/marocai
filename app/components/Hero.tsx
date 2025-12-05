"use client";

import { useState } from "react";
import { content, Language } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { saveUser } from "@/lib/firebase";

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = content[language].hero;
  const isRTL = language === "ar";
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    type: "individual",
    phone: "",
    idea: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setStatus("loading");
    const result = await saveUser(formData);
    if (result.success) {
      setStatus("success");
      setFormData({
        email: "",
        name: "",
        type: "individual",
        phone: "",
        idea: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      className={cn(
        "relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-50 pt-24 lg:pt-0 pb-12 lg:pb-0",
        isRTL ? "font-arabic" : "font-sans"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="text-center lg:text-start pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-6 hover:shadow-md transition-shadow cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wide">
                {language === "fr"
                  ? "Nouvelle Génération d'IA"
                  : "الجيل الجديد ديال الذكاء الاصطناعي"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-slate-900 leading-[1.15]"
            >
              {t.title.split("—")[0]}
              <span className="block mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.title.split("—")[1] || "—"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t.subtitle}
            </motion.p>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full relative group max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-xl shadow-blue-900/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-700 ml-1 uppercase tracking-wider">
                      {language === "ar" ? "الاسم الكامل" : "Nom complet"}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={status === "loading" || status === "success"}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all disabled:opacity-50 hover:bg-white text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-700 ml-1 uppercase tracking-wider">
                      {t.typeLabel}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      disabled={status === "loading" || status === "success"}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all appearance-none disabled:opacity-50 hover:bg-white text-sm"
                    >
                      <option value="individual">{t.typeIndividual}</option>
                      <option value="sme">{t.typeSME}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-700 ml-1 uppercase tracking-wider">
                      {language === "ar" ? "رقم الهاتف" : "Téléphone"}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      disabled={status === "loading" || status === "success"}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all disabled:opacity-50 hover:bg-white text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-700 ml-1 uppercase tracking-wider">
                      {language === "ar" ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={status === "loading" || status === "success"}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all disabled:opacity-50 hover:bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-start">
                  <label className="text-xs font-semibold text-slate-700 ml-1 uppercase tracking-wider">
                    {t.ideaLabel}
                  </label>
                  <textarea
                    placeholder={t.ideaPlaceholder}
                    rows={2}
                    value={formData.idea}
                    onChange={(e) =>
                      setFormData({ ...formData, idea: e.target.value })
                    }
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all resize-none disabled:opacity-50 hover:bg-white text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full mt-2 group px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === "success" ? (
                    <>
                      <span>
                        {language === "fr" ? "Inscrit !" : "تم التسجيل !"}
                      </span>
                      <CheckCircle className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>{t.cta}</span>
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-transform group-hover:translate-x-1",
                          isRTL && "rotate-180 group-hover:-translate-x-1"
                        )}
                      />
                    </>
                  )}
                </button>
              </form>
              {status === "error" && (
                <p className="text-red-500 text-sm flex items-center gap-2 mt-4 justify-center bg-red-50 py-2 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  {language === "fr"
                    ? "Une erreur est survenue. Réessayez."
                    : "وقع شي خطأ. عاود جرب."}
                </p>
              )}
              <p className="text-xs text-slate-500 mt-3 font-medium text-center">
                {t.subCta}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
