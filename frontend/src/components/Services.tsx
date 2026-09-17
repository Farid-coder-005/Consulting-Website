import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { serviceDetails } from "../content/services";
import { Reveal } from "./motion";

const serviceIcons: Record<string, React.ReactNode> = {
  "company-formation": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="16" />
      <ellipse cx="24" cy="24" rx="8" ry="16" />
      <line x1="8" y1="24" x2="40" y2="24" />
      <line x1="24" y1="8" x2="24" y2="40" />
    </svg>
  ),
  "tax-consulting": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="12" width="32" height="28" rx="2" />
      <path d="M16 12V8h16v4" />
      <line x1="8" y1="20" x2="40" y2="20" />
      <line x1="16" y1="28" x2="32" y2="28" />
      <line x1="16" y1="34" x2="26" y2="34" />
    </svg>
  ),
  accounting: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <line x1="16" y1="14" x2="32" y2="14" />
      <line x1="16" y1="20" x2="32" y2="20" />
      <line x1="16" y1="26" x2="28" y2="26" />
      <line x1="16" y1="32" x2="24" y2="32" />
    </svg>
  ),
  legal: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 6L6 18h36L24 6z" />
      <rect x="8" y="18" width="32" height="4" />
      <line x1="14" y1="22" x2="14" y2="38" />
      <line x1="24" y1="22" x2="24" y2="38" />
      <line x1="34" y1="22" x2="34" y2="38" />
      <rect x="6" y="38" width="36" height="4" />
    </svg>
  ),
  immigration: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <circle cx="24" cy="22" r="6" />
      <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" />
    </svg>
  ),
  "real-estate": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 24l18-14 18 14" />
      <rect x="10" y="24" width="28" height="18" rx="1" />
      <rect x="18" y="30" width="12" height="12" rx="1" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useTranslation();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section id="services" className="scroll-mt-28 py-16 md:py-24 bg-slate-50">
      <Reveal className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
            {t("services.eyebrow")}
          </p>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-brand mt-2">
            {t("services.title")}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => {
            const isExpanded = expandedSlug === service.slug;
            return (
              <motion.article
                key={service.slug}
                layout
                whileHover={{ y: isExpanded ? 0 : -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-accent ${
                  isExpanded ? "sm:col-span-2 lg:col-span-3 shadow-lg" : ""
                }`}
              >
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="text-accent shrink-0">
                      {serviceIcons[service.slug] || serviceIcons["company-formation"]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl text-brand mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {service.shortDesc}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedSlug(isExpanded ? null : service.slug)
                        }
                        className="mt-4 text-accent text-sm font-semibold hover:underline"
                      >
                        {isExpanded
                          ? t("common.close")
                          : t("common.read_more")}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 space-y-6">
                              <p className="text-sm leading-relaxed text-slate-600">
                                {service.fullDesc}
                              </p>

                              <div>
                                <h4 className="font-heading font-semibold text-brand mb-3">
                                  Key Benefits
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                  {service.benefits.map((b) => (
                                    <li
                                      key={b}
                                      className="flex items-start gap-2 text-sm text-slate-600"
                                    >
                                      <span className="text-accent mt-1">✓</span>
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-heading font-semibold text-brand mb-2">
                                  Available In
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.countries.map((c) => (
                                    <span
                                      key={c}
                                      className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                                    >
                                      {c}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
