import { Reveal } from "../motion";

export default function HomeInitiatives() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-title text-3xl md:text-[38px] text-brand leading-snug max-w-4xl mx-auto">
            İş Birliği Temelli.{" "}
            <span className="text-accent">Yenilikçilikle Güçlenen.</span>{" "}
            Geleceğe Odaklı.
          </h2>
          <p className="text-slate-600 mt-5 text-lg">
            işletmeleri hukuki uzmanlık, stratejik danışmanlık ve gelişen teknolojilerle destekliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KEYSTONE AI */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <div className="text-center py-6 px-6">
              <h3 className="font-title text-3xl font-bold text-brand tracking-wider">KEYSTONE AI</h3>
            </div>
            <div className="relative h-64 overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="Keystone AI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-title text-2xl font-bold text-white drop-shadow-lg">Keystone AI</span>
              </div>
            </div>
            <div className="p-6">
              <a
                href="#"
                className="block bg-[#0B1E3D] text-white text-center py-3.5 rounded-full font-semibold text-xs tracking-wider hover:bg-brand transition mb-5"
              >
                YAPAY ZEKA HUKUK MASASI HİZMETLERİMİZİ KEŞFEDİN
              </a>
              <p className="text-slate-600 text-sm leading-relaxed text-center mb-3">
                Keystone Partners'ın yeni bir markası olan Keystone AI, müşterilerimizin gelişen ihtiyaçlarını karşılamak için yenilikçi Yapay Zeka Hukuk Masası hizmetleri sunmaktadır.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                Uzman Hukuk ve teknoloji ekiplerimiz; karmaşık davalar, mevzuata uyum ve stratejik iş kararları için yenilikçi çözümler sunmak üzere birlikte çalışır. Hızla gelişen bir dünyada rekabet gücü ve uyum sağlayan yapay zeka destekli araçlarımızla hukuk stratejinizi güçlendirin.
              </p>
            </div>
          </div>

          {/* BLOCKCHAIN LAW LAB */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <div className="text-center py-6 px-6">
              <h3 className="font-title text-3xl font-bold text-accent tracking-wider">BLOCKCHAIN LAW LAB</h3>
            </div>
            <div className="relative h-64 overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
                alt="Blockchain Law Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-title text-xl font-bold text-white drop-shadow-lg">Blockchain Law Lab</span>
              </div>
            </div>
            <div className="p-6">
              <a
                href="#"
                className="block bg-[#0B1E3D] text-white text-center py-3.5 rounded-full font-semibold text-xs tracking-wider hover:bg-brand transition mb-5"
              >
                BLOCKCHAIN LAW LAB HİZMETLERİMİZİ KEŞFEDİN
              </a>
              <p className="text-slate-600 text-sm leading-relaxed text-center mb-3">
                Keystone Partners'ın bir alt markası olan Blockchain Law Lab, karmaşık hukuki ihtiyaçları karşılamak için en ileri blockchain teknolojisinden yararlanarak işletmeleri güçlendirir.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                Uzman hukuk ve teknoloji ekiplerimiz; blockchain uyumu, mevzuat danışmanlığı ve stratejik büyüme alanlarında yenilikçi çözümler sunmak için iş birliği yapar. Gelişen dijital dünyada güvenlik, uyum ve rekabet avantajı sağlayan blockchain odaklı öngörülerimizle iş stratejinizi güçlendirin.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
