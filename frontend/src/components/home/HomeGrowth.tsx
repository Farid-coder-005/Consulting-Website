import { Reveal } from "../motion";

const growthCards = [
  {
    title: "Uluslararası Şirket Kuruluşu ve İş Genişletme / Büyütme",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
    desc: "Entegre hukuk, vergi, muhasebe ve kurumsal danışmanlık hizmetleriyle işinizi güvenle büyütün. Keystone Partners; Avrupa Birliği, CEE Bölgesi (Merkez ve Doğu Avrupa), Balkanlar, Orta Doğu, Asya ve Amerika Birleşik Devletleri genelinde uluslararası şirket kuruluşu, şirket tescili, pazara giriş desteği sunuyoruz.",
  },
  {
    title: "Avrupa'da Şirket Kuruluşu",
    image: "https://gurcanpartners.com/wp-content/uploads/almanya-1.webp",
    desc: "Avrupa'da bir şirket kurmak mı istiyorsunuz? Macaristan, Polonya, Çek Cumhuriyeti, Almanya, Sırbistan, Estonya ve Türkiye genelinde şirket kuruluşu, şirket tescili, hukuki danışmanlık, vergi yapısılandırması, muhasebe ve pazar girişi desteği sunuyoruz.",
  },
  {
    title: "Dubai ve BAE'de Şirket Kuruluşu",
    image: "https://gurcanpartners.com/wp-content/uploads/dubai.webp",
    desc: "Uzman hukuki ve kurumsal destekle Dubai ve Birleşik Arap Emirlikleri'nde bir iş başlatın. Dubai, Abu Dabi, Resü'l-Hayme ve diğer emirlikler genelinde şirket kuruluşu, iş kurulumu, serbest bölge (free zone) ve anakara (mainland) tescilleri, ikamet çözümleri, bankacılık desteği, vergi danışmanlığı ve sürekli mevzuat uyumu sağlıyoruz.",
  },
  {
    title: "Macaristan'da Şirket Kuruluşu",
    image: "https://gurcanpartners.com/wp-content/uploads/macaristan.webp",
    desc: "Macaristan, %9'luk kurumlar vergisi oranı ve Avrupa pazarının merkezindeki stratejik konumuyla Avrupa'da uluslararası şirket kuruluşu için en cazip merkezlerden biridir. Yabancı yatırımcılar ve uluslararası işletmeler için şirket kuruluşu, KDV kaydı, hukuki hizmetler ve iş desteği sunuyoruz.",
  },
];

export default function HomeGrowth() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f7fa]">
      <Reveal className="max-w-7xl mx-auto px-4">
        <h2 className="font-title text-3xl md:text-4xl text-brand text-center mb-12">
          Nerede <span className="text-accent">Büyümek İstersiniz?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-title font-bold text-white text-lg leading-snug drop-shadow">
                  {card.title}
                </h3>
              </div>
              <div className="p-5 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
