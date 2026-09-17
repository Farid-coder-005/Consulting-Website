import { PageTransition, Reveal } from "../components/motion";
import Img from "../components/Img";
import { CheckIcon } from "../components/icons";
import { yatirimReferences, countries } from "../content";

const features = [
  {
    title: "Secure Investment",
    desc: "Property acquisition in EU countries is significantly safer and more regulated than in many other jurisdictions.",
    icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&q=80",
  },
  {
    title: "Expert Team",
    desc: "Backed by the experienced team at Keystone Partners for end-to-end support.",
    icon: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&q=80",
  },
  {
    title: "Open to All Nationalities",
    desc: "Select from our curated property listings available to both EU and non-EU buyers.",
    icon: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=200&q=80",
  },
  {
    title: "Full Legal Processing",
    desc: "We handle all legal procedures on your behalf — no need to travel.",
    icon: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80",
  },
  {
    title: "Commission-Free",
    desc: "Receive your title deed without paying real estate commission.",
    icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80",
  },
  {
    title: "Property Ownership Simplifies Visas",
    desc: "Owning property within the EU facilitates travel and residency applications.",
    icon: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=200&q=80",
  },
];

const checklist = [
  "Schedule your consultation today — take the first step toward the right legal solution!",
  "Trade & Corporate Law",
  "Tax & Accounting Advisory",
  "Company Formation & Liquidation",
];

export default function Yatirim() {
  return (
    <PageTransition>
      {/* 1. Hero Banner */}
      <section className="relative h-[420px] md:h-[520px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0c2044]/75 to-[#0c2044]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="font-title text-4xl md:text-6xl font-bold text-white mb-4">
            Keystone Invest
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto">
            Avrupa'da Gayrimenkul Yatırımını Kolaylaştırıyoruz
          </p>
        </div>
      </section>

      {/* Sub-hero Box */}
      <section className="py-12 md:py-16 bg-white">
        <Reveal className="max-w-6xl mx-auto text-center px-6 py-8">
          <p className="text-xl md:text-2xl font-semibold text-center text-[#B5A056] max-w-5xl mx-auto leading-relaxed mb-6">
            Keystone Invest olarak Avrupa'da uygun fiyata mülk sahibi olmak isteyenlerin hayallerini gerçekleştirmek için profesyonel partnerlerimizle çalışıyoruz.
          </p>
          <p className="text-base md:text-lg text-center text-gray-700 max-w-5xl mx-auto leading-relaxed mt-4 mb-6">
            Avrupa'nın kalbinde, yasal olarak sorunsuz ve yabancılar için uygun olan en uygun gayrimenkulü seçmenize yardımcı oluyoruz. Tüm hukuki işlemleri (Keystone Partners Uluslararası Hukuk Bürosu ile işbirliği yaparak) sizin adınıza gerçekleştiriyoruz.
          </p>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit px-10 py-3.5 bg-[#0B1E3D] hover:bg-[#162d54] text-white font-heading font-semibold rounded-full mx-auto mt-6 shadow-md transition text-sm tracking-wider text-center"
          >
            CONTACT US
          </a>
        </Reveal>
      </section>

      {/* 2. 6-Feature Cards Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-blue-50/60 rounded-3xl p-8 text-center"
              >
                <Img
                  src={f.icon}
                  alt={f.title}
                  className="w-14 h-14 mx-auto mb-5 object-contain"
                />
                <h3 className="font-heading font-bold text-lg text-[#8B7D3C] mb-3">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. Promotional & Consultation Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Promo Banner */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Img
              src="/Invest.jpg"
              alt="Keystone Invest Process"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="text-center lg:text-left">
              <h2 className="font-title font-bold text-2xl md:text-3xl text-[#0c2044] leading-snug mb-8">
                GAYRİMENKUL HAYALİNİZİ KEYSTONE INVEST İLE GERÇEĞE DÖNÜŞTÜRÜN
              </h2>
              <div className="flex justify-center lg:justify-start">
                <Img
                  src="/logo2.png"
                  alt="Keystone Invest Logo"
                  className="w-40 h-auto"
                />
              </div>
            </div>
          </div>

          {/* 15-Minute Consultation */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Card - Dark Blue */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0c2044] text-white p-8 md:p-10">
              <Img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c2044]/90 via-[#0c2044]/75 to-[#0B1E3D]/85" />
              <div className="relative">
                <h3 className="font-title font-bold text-2xl md:text-3xl mb-4">
                  Ücretsiz 15 Dakikalık Danışmanlık Randevunuzu Alın!
                </h3>
                <p className="text-white/80 leading-relaxed mb-2">
                  Nereden başlayacağınızı bilmiyor musunuz?
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Deneyimli ekibimizle yapacağınız ücretsiz 15 dakikalık danışmanlıkla uzman hukuki rehberlik alın.
                </p>
                <ul className="space-y-3 mb-8">
                  {checklist.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-white/90 text-sm">
                      <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                   href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#0c2044] font-heading font-semibold px-7 py-3 rounded-full transition hover:bg-slate-100 text-sm"
                >
                  HEMEN RANDEVU ALIN
                </a>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Keystone Invest, <strong>uluslararası yatırımcılara ve gayrimenkul arayanlara</strong> Macaristan ve Dubai'de yasalara uygun ve yabancılara dost gayrimenkul alımlarında uzman rehberlik sunmaktadır.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Keystone Partners Uluslararası Hukuk Bürosu</strong> ile iş birliği içinde tüm yasal süreçleri yöneterek, sorunsuz ve hızlı bir işlem deneyimi sağlamaktayız.
              </p>
              <p className="text-slate-700 leading-relaxed">
                İster <strong>Dubai'de stratejik bir yatırım</strong>, ister <strong>Macaristan'da konut</strong> arıyor olun, ekibimiz güvenli ve başarılı bir gayrimenkul alımı için kapsamlı destek sunmaktadır.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. References Grid */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block border border-[#0B1E3D] text-[#0B1E3D] px-6 py-2 rounded-full font-medium text-sm mx-auto block w-fit mb-8">
            Our Track Record
          </span>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {yatirimReferences.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center h-24 border border-slate-100 rounded-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-14 w-auto object-contain px-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Headline */}
          <h3 className="text-center font-serif text-2xl md:text-3xl text-[#0B1E3D] mt-12 mb-3">
            Partnership-Driven. <span className="text-[#3B82F6]">Powered by Innovation.</span> Focused on the Future.
          </h3>
          <p className="text-center text-gray-800 font-semibold text-base max-w-3xl mx-auto">
            İşletmeleri hukuki uzmanlık, stratejik danışmanlık ve gelişen teknolojilerle destekliyoruz.
          </p>
        </Reveal>
      </section>

      {/* 5. Contact Form */}
      <section className="py-16 md:py-24 bg-[#0c2044]">
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-[#0c2044] mb-1">
              Contact Us
            </h2>
            <p className="text-slate-500 mb-6 text-sm">
              Lütfen formu doldurun, 24 saat içinde size geri dönüş yapacağız.
            </p>
            <form className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="y-name">
                    Name
                  </label>
                  <input
                    id="y-name"
                    type="text"
                    className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="y-phone">
                    Phone
                  </label>
                  <input
                    id="y-phone"
                    type="tel"
                    className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="y-country">
                    Country
                  </label>
                  <select
                    id="y-country"
                    className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                    defaultValue="Macaristan"
                  >
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="y-email">
                    e-Mail
                  </label>
                  <input
                    id="y-email"
                    type="email"
                    className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="y-message">
                  Message
                </label>
                <textarea
                  id="y-message"
                  rows={4}
                  className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="flex items-center gap-3 border border-slate-300 rounded px-3 py-3 bg-[#f9f9f9]">
                <input type="checkbox" id="y-recaptcha" className="w-5 h-5 accent-accent" />
                <label htmlFor="y-recaptcha" className="text-sm text-slate-600 flex-1 select-none">
                  I'm not a robot
                </label>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <span className="w-5 h-5 rounded-full border border-slate-300 bg-white flex items-center justify-center">
                    ↻
                  </span>
                  reCAPTCHA
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#0B1E3D] hover:bg-[#162d54] text-white font-heading font-semibold px-7 py-3 rounded-full transition text-sm"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
