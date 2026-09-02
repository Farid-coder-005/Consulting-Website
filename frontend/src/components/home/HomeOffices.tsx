import { Reveal } from "../motion";

export default function HomeOffices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-[40px] text-brand leading-snug max-w-4xl mx-auto">
            Yerel Varlık. Uluslararası Erişim.{" "}
            <span className="text-accent">Keystone Partners</span> Ofisleri
          </h2>
          <p className="text-slate-600 mt-5 max-w-4xl mx-auto text-base leading-relaxed">
            Çok uluslu ve çok dilli bir ekibe sahip olan Keystone Partners; entegre hukuk, vergi, uyum ve kurumsal danışmanlık çözümleri aracılığıyla farklı hukuki yetki alanlarındaki girişimcileri, yatırımcıları ve şirketleri desteklemektedir.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/contact"
            className="group relative max-w-md w-full h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop"
              alt="Malta Valletta"
              className="absolute inset-0 w-full h-full object-cover bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
              <span className="text-5xl mb-3">🇲🇹</span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl">Malta</h3>
              <p className="text-white/70 text-base mb-5">Valletta</p>
              <span className="bg-[#0f2042] text-white text-sm font-semibold uppercase tracking-wide px-8 py-3 rounded-full group-hover:bg-[#1a3260] transition-colors duration-300">
                İLETİŞİM
              </span>
            </div>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
