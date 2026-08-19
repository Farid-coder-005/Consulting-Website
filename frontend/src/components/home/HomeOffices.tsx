import { Link } from "react-router-dom";
import { offices } from "../../content";
import { Reveal } from "../motion";

export default function HomeOffices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-[40px] text-brand leading-snug max-w-4xl mx-auto">
            Yerel Varlık. Uluslararası Erişim.{" "}
            <span className="text-accent">Gurcan Partners</span> Ofisleri
          </h2>
          <p className="text-slate-600 mt-5 max-w-4xl mx-auto text-base leading-relaxed">
            Çok uluslu ve çok dilli bir ekibe sahip olan Gurcan Partners; entegre hukuk, vergi, uyum ve kurumsal danışmanlık çözümleri aracılığıyla farklı hukuki yetki alanlarındaki girişimcileri, yatırımcıları ve şirketleri desteklemektedir.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {offices.map((office) => (
            <Link
              key={`${office.country}-${office.city}`}
              to="/iletisim"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={office.image}
                alt={office.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                <img
                  src={office.flag}
                  alt=""
                  className="w-8 h-6 object-cover rounded-sm mb-2"
                />
                <h3 className="font-heading font-bold text-white text-sm">{office.country}</h3>
                <p className="text-white/70 text-xs mb-3">{office.city}</p>
                <span className="border border-white text-white text-xs px-5 py-2 rounded-full hover:bg-white hover:text-brand transition">
                  İletişim
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
