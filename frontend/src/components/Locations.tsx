import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { offices } from "../content";
import { Reveal } from "./motion";
import Img from "./Img";

export default function Locations() {
  return (
    <section id="offices" className="scroll-mt-28 py-16 md:py-24 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
            Global Ağ
          </p>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-brand mt-2">
            Uluslararası Hukuk ve Danışmanlık Hizmet Noktalarımız
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
            On ülkede yer alan ofislerimizle uluslararası müvekkillerimize
            yerel uzmanlıkla hizmet veriyoruz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <motion.article
              key={`${office.country}-${office.city}`}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100"
            >
              <div className="relative h-44 overflow-hidden">
                <Img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <span className="absolute top-3 left-3 bg-white/90 rounded px-2 py-1 text-xs font-semibold flex items-center gap-1">
                  <Img
                    src={office.flag}
                    alt=""
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  {office.country}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-brand">
                  {office.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{office.city}</p>
                <Link
                  to="/#footer"
                  className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded hover:bg-brand transition"
                >
                  İletişim
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
