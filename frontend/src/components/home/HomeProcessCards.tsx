import { Reveal } from "../motion";

const steps = [
  {
    num: "01",
    title: "Seçin & Kurun",
    desc: "Doğru hukuki yetki alanını (ülkeyi/bölgeyi) seçin ve işinizi 10'dan fazla ülkede faaliyete geçirin.",
  },
  {
    num: "02",
    title: "Yönetin",
    desc: "Entegre vergi, muhasebe ve kurumsal destek, hizmetleriyle işletmenizin sorunsuz bir şekilde çalışmasını sağlayın.",
  },
  {
    num: "03",
    title: "Güvenceye Alın",
    desc: "Proaktif hukuki destek ve risk yönetimi ile işletmenizi koruyun.",
  },
  {
    num: "04",
    title: "Büyüyün",
    desc: "Stratejik genişleme ve yatırım çözümleriyle uluslararası ölçekte büyüyün.",
  },
  {
    num: "05",
    title: "Uyum Sağlayın",
    desc: "Yerel düzenlemelerden uluslararası standartlara işletmelerin uyum risklerini yönetmelerine yardımcı oluyoruz.",
  },
];

export default function HomeProcessCards() {
  return (
    <section id="process" className="scroll-mt-28 py-16 md:py-20 bg-[#f4f7fa]">
      <Reveal className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.num}
              className="bg-[#2B78C4] text-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-white/70 text-sm font-semibold mb-2">{step.num}</div>
              <h3 className="font-title text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">{step.desc}</p>
              <button
                type="button"
                className="bg-white text-brand font-semibold px-6 py-2.5 rounded text-sm hover:bg-slate-100 transition inline-flex items-center gap-1"
              >
                Dahil Olan Hizmetler <span className="text-xs">▼</span>
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.slice(2).map((step) => (
            <div
              key={step.num}
              className="bg-[#2B78C4] text-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-white/70 text-sm font-semibold mb-2">{step.num}</div>
              <h3 className="font-title text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">{step.desc}</p>
              <button
                type="button"
                className="bg-white text-brand font-semibold px-6 py-2.5 rounded text-sm hover:bg-slate-100 transition inline-flex items-center gap-1"
              >
                Dahil Olan Hizmetler <span className="text-xs">▼</span>
              </button>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
