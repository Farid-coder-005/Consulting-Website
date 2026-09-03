import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { services } from "../content";
import { Reveal } from "./motion";
import Img from "./Img";

export default function Services() {
  const { t } = useTranslation();

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
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-8 text-center border-t-4 border-accent"
            >
              <Img
                src={service.icon}
                alt=""
                className="w-16 h-16 mx-auto mb-5"
              />
              <h3 className="font-heading font-bold text-xl text-brand mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
