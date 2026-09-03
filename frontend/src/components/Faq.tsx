import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "./icons";
import { faqs } from "../content";
import { Reveal } from "./motion";

export default function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
            {t("faq.eyebrow")}
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand mt-2">
            {t("faq.title")}
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="p-5">
                <button
                  type="button"
                  className="flex items-center justify-between w-full cursor-pointer font-heading font-semibold text-brand text-left gap-4"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.q}
                  <ChevronDownIcon
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
