import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { companyFormationFeatures } from "../content";
import { Reveal } from "./motion";
import Img from "./Img";
import { SectionHeading } from "./inner";

export default function CompanyFormationFeature() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        <SectionHeading eyebrow="Şirket Kuruluşu" title="Şirket Kuruluşu" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyFormationFeatures.map((f) => (
            <motion.article
              key={f.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100"
            >
              <Link to={f.to} className="block">
                <div className="h-44 overflow-hidden">
                  <Img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-brand group-hover:text-accent transition">
                    {f.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
