import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Img from "./Img";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "../content";

export function InnerHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-brand isolate overflow-hidden">
      {image && (
        <Img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-brand/70" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center text-white">
        {eyebrow && (
          <p className="text-accent-light font-heading tracking-widest uppercase text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-title font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
          {title}
        </h1>
        <div className="w-24 h-1 bg-accent mx-auto my-6" />
        {subtitle && (
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
        {eyebrow}
      </p>
      <h2
        className={`font-title font-bold text-3xl md:text-4xl mt-2 ${
          light ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mt-4" />
    </div>
  );
}

export function Stats({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10">
      {items.map((it) => (
        <div key={it.label} className="text-center">
          <div className="font-heading font-extrabold text-3xl md:text-4xl text-accent-light">
            {it.value}
          </div>
          <div className="text-sm text-white/80 mt-1">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

export function References({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  const { t } = useTranslation();

  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <Reveal className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
            {t("inner.references_eyebrow")}
          </p>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-brand mt-2">
            {t("inner.references_title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center opacity-70">
          {logos.map((l) => (
            <Img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-10 w-auto mx-auto"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function CtaBand({
  title,
}: {
  title?: string;
  text?: string;
  children?: ReactNode;
}) {
  const { t } = useTranslation();
  const displayTitle = title ?? t("inner.cta_title");

  return (
    <div className="max-w-6xl mx-auto px-4 -mb-12 relative z-10">
      <div className="bg-[#5A9BD5] rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-white text-xl md:text-2xl font-medium text-left">
          {displayTitle}
        </h2>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
             href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D72B8] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-800 transition whitespace-nowrap"
          >
            {t("inner.cta_plan")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5CB85C] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-green-600 transition whitespace-nowrap"
          >
            {t("inner.cta_whatsapp")}
          </a>
        </div>
      </div>
    </div>
  );
}

type FeatureItem = { title: string; desc: string; icon?: string };

export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
          whileHover={{ y: -6 }}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-8 border-t-4 border-accent"
        >
          {item.icon && (
            <Img
              src={item.icon}
              alt=""
              className="w-14 h-14 mb-5 object-contain"
            />
          )}
          <h3 className="font-heading font-bold text-lg text-brand mb-2">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
        </motion.article>
      ))}
    </div>
  );
}
