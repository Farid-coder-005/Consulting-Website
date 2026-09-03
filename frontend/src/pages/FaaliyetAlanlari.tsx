import { useState } from "react";
import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import { memberships, WHATSAPP_URL } from "../content";

const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

const practiceAreas = [
  {
    title: "BT & Blockchain Hukuku",
    desc: "Blockchain Law Lab, Keystone Partners'ın ana şirketidir. Bir blok zinciri şirketi için yasal hizmet sağlayıcılarının öncüsüyüz. Çok uluslu ekibimiz, dünya çapında blockchain ve diğer BT Şirketlerine danışmanlık yapmaktadır.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="14" y="14" width="20" height="20" rx="2" />
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="30" y="6" width="12" height="12" rx="1" />
        <rect x="6" y="30" width="12" height="12" rx="1" />
        <rect x="30" y="30" width="12" height="12" rx="1" />
        <line x1="18" y1="12" x2="30" y2="12" />
        <line x1="18" y1="36" x2="30" y2="36" />
        <line x1="12" y1="18" x2="12" y2="30" />
        <line x1="36" y1="18" x2="36" y2="30" />
      </svg>
    ),
  },
  {
    title: "Uluslararası Ticaret Hukuku ve Sözleşmeler",
    desc: "Keystone Partners dünya çapında 400'den fazla uluslararası şirketi temsil etmektedir. Çok uluslu ekibimiz, uluslararası ticarette yasal uyum ve risk yönetimi konularında kayda değer bir deneyime sahiptir.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 28c0 0 4-8 16-8s16 8 16 8" />
        <path d="M14 20l4 4-4 4" />
        <path d="M34 20l-4 4 4 4" />
        <line x1="18" y1="24" x2="30" y2="24" />
      </svg>
    ),
  },
  {
    title: "Şirket Birleşmeleri ve Satın Almalar",
    desc: "Keystone Partners, 10 ülkede birleşme ve satın alma süreçlerinde önemli bir deneyime sahiptir.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="12" width="14" height="24" rx="1" />
        <rect x="22" y="6" width="10" height="30" rx="1" />
        <rect x="34" y="16" width="10" height="20" rx="1" />
        <path d="M18 24h4" />
        <path d="M32 24h2" />
      </svg>
    ),
  },
  {
    title: "Uluslararası Şirketleşme & Kuruluş",
    desc: "Keystone Partners, 10'dan fazla ülkede şirket kuruluşu, vergi danışmanlığı ve hukuki hizmetler sunarak müşterilerinin uluslararası büyümesini destekler.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="8" ry="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="24" y1="8" x2="24" y2="40" />
      </svg>
    ),
  },
  {
    title: "Gayrimenkul Hukuku ve Yatırım",
    desc: "Gayrimenkul yatırımlarında hukuki danışmanlık, tapu işlemleri, kira sözleşmeleri ve yatırım süreçlerinde uçtan uca destek sağlıyoruz.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 22l18-14 18 14" />
        <rect x="10" y="22" width="28" height="18" rx="1" />
        <rect x="18" y="30" width="12" height="10" rx="1" />
      </svg>
    ),
  },
  {
    title: "Kurumsal Hizmetler",
    desc: "Keystone Partners'ın ana şirketi olan Keystone Danışmanlık ile muhasebe, defter tutma, raporlama ve vergi uyumu hizmetleri sunuyoruz.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="20" r="4" />
        <circle cx="38" cy="20" r="4" />
        <circle cx="16" cy="34" r="4" />
        <circle cx="32" cy="34" r="4" />
        <line x1="24" y1="17" x2="14" y2="20" />
        <line x1="24" y1="17" x2="34" y2="20" />
        <line x1="14" y1="24" x2="16" y2="30" />
        <line x1="34" y1="24" x2="32" y2="30" />
      </svg>
    ),
  },
];

const faaliyetReferanslari = [
  { src: "/Partner.jpg", alt: "Doğuş Group" },
  { src: "/Partner.jpg", alt: "Gedik" },
  { src: "/Partner.jpg", alt: "Türk Telekom" },
  { src: "/Partner.jpg", alt: "SATTELO" },
  { src: "/Partner.jpg", alt: "Thomson Reuters Foundation" },
  { src: "/Partner.jpg", alt: "Kibar" },
  { src: "/Partner.jpg", alt: "UND" },
  { src: "/Partner.jpg", alt: "Leaf Logistic" },
  { src: "/Partner.jpg", alt: "LIV Hospital" },
];

const faaliyetFaqItems = [
  "Türk vatandaşı Avrupa'da şirket kurabilir mi?",
  "Avrupa'da en kolay hangi ülkede şirket kurulur?",
  "Avrupa'da şirket kurmanın avantajları nelerdir?",
  "Yurtdışında şirket kurmak için ne gereklidir?",
  "Almanya'da şirket kurmak kaç gün sürer?",
  "Almanya'da GmbH ile ana şirket açılır mı?",
  "Macaristan'da şirket kurmak ne kadara mal olur?",
  "Şahıs şirketi yurtdışında da açılabilir mi?",
  "Hangi ülkede şirket kurmak kolay?",
  "En az vergi hangi ülkede?",
  "Yurt dışında şirket açmanın avantajları nelerdir?",
  "Yurt dışında şirket açmak yasal mı?",
  "Yabancı vatandaşlar şirket kurabilir mi?",
  "Almanya'da şirket açmak için ne gerekir?",
  "Hangi ülkede diğer şirketler kurulabiliyor?",
  "Memurlar yurtdışında şirket kurabilir mi?",
  "Almanya'da Türk vatandaşı şirket kurabilir mi?",
  "Yurtdışında yaşayan Türkler şirket kurabilir mi?",
  "Şirket kurmak zor mu?",
  "Yabancı şahıs şirketi kurabilir mi?",
  "Yurtdışında şirket açmak mantıklı mı?",
  "Estonya'da şirket nasıl kurulur?",
  "Türkiye'de şirket kurmak için ne gereklidir?",
];

const ulkeler = [
  "Macaristan", "Almanya", "Türkiye", "Çek Cumhuriyeti", "Polonya",
  "Estonya", "Singapur", "BAE", "Sırbistan", "ABD",
];

function FaqItem({ question }: { question: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 py-4 text-left text-slate-700 hover:text-[#0c2044] transition"
      >
        <svg
          className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">{question}</span>
      </button>
      {open && (
        <div className="pb-4 pl-7 text-sm text-slate-500 leading-relaxed">
          Bu konuda detaylı bilgi için lütfen bizimle iletişime geçin. Uzman ekibimiz tüm sorularınızı yanıtlamaktan memnuniyet duyacaktır.
        </div>
      )}
    </div>
  );
}

export default function FaaliyetAlanlari() {
  return (
    <PageTransition>
      {/* Hero banner */}
      <section className="relative h-[420px] md:h-[520px] flex items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0c2044]/70" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="font-title text-3xl md:text-5xl font-bold text-white mb-4">
            Faaliyet Alanlarımız
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Şirket Kurulumu & Hukuk Hizmetleri Keystone Ortakları Çalışma Alanları
          </p>
        </div>
      </section>

      {/* Uygulama Alanlarımız */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-7xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-12">
            Uygulama Alanlarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {practiceAreas.map((area, i) => (
              <div
                key={area.title}
                className={`text-center px-8 py-10 ${
                  i % 3 !== 2 ? "md:border-r border-slate-300" : ""
                } ${i < 3 ? "border-b border-slate-300 md:border-b-0" : ""}`}
              >
                <div className="flex justify-center text-[#0c2044] mb-5">{area.icon}</div>
                <h3 className="font-title text-xl font-bold text-[#0c2044] mb-4">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ofislerimiz */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Ofislerimiz
          </h2>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="group relative max-w-3xl w-full h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src="/Malta.jpg"
                alt="Malta Valletta"
                className="absolute inset-0 w-full h-full object-cover bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <img src="/MaltaFlag.jpg" alt="Malta Flag" className="h-8 w-auto object-contain mb-3" />
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

      {/* Üyeliklerimiz */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Üyeliklerimiz
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {memberships.map((m) => (
                <div
                  key={m.alt}
                  className="flex items-center justify-center h-20"
                >
                  <img
                    src={m.src}
                    alt={m.alt}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Şirket Kuruluşu Hakkında SSS */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-4xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-4">
            Şirket Kuruluşu Hakkında SSS
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-3xl mx-auto">
            Keystone Partners, müşterilerine 10 ülkede ve 13 dilde kapsamlı Şirket Kurma
            hizmetleri sunmaktadır ve aşağıda uygulama alanlarımızın tüm yönleriyle ilgili
            SSS&apos;leri bulacaksınız.
          </p>
          <div className="divide-y divide-slate-200">
            {faaliyetFaqItems.map((q) => (
              <FaqItem key={q} question={q} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0B1E3D] text-white px-10 py-3 rounded-full hover:bg-blue-900 transition"
            >
              Hemen Bize Ulaşın
            </a>
          </div>
        </Reveal>
      </section>

      {/* Bottom: Referanslarımız + İletişime Geçin */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Referanslarımız */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] mb-4">
              Referanslarımız
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Müvekkillerimizin %51'i startup ve teknoloji firmalarıdır, hukuk
              teknolojisine yakından uyum sağlamış uluslararası deneyimli bir ekibe
              sahibiz ve aşağıdaki gibi çeşitli şirketlerle ortaklık kurduk.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {faaliyetReferanslari.map((r) => (
                <div
                  key={r.alt}
                  className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-20"
                >
                  <img
                    src={r.src}
                    alt={r.alt}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* İletişime Geçin */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] mb-6">
              İletişime Geçin
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">İsim</label>
                  <input type="text" className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Telefon</label>
                  <input type="tel" className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Ülke:</label>
                  <select className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                    {ulkeler.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">e-Mail</label>
                  <input type="email" className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Mesaj</label>
                <textarea rows={4} className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
                  Ben robot değilim
                </label>
                <span className="text-xs text-slate-400">reCAPTCHA</span>
              </div>
              <button
                type="submit"
                className="bg-[#0B1E3D] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-900 transition"
              >
                GÖNDER
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </PageTransition>
  );
}
