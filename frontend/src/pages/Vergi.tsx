import { Link } from "react-router-dom";
import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { vergiReferences, offices, LOGO_URL } from "../content";

const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

const whyItems = [
  "Profesyonel uluslararası uzman kadro",
  "Kapsamlı ve size özel çözümler",
  "Sorularınızı yanıtlamak ve işinizi büyütmenize yardımcı olmak için her zaman buradayız",
];

export default function Vergi() {
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
        <div className="absolute inset-0 bg-[#0c2044]/60" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <p className="text-sm font-medium text-slate-200 tracking-wider mb-2 uppercase">
            Vergi ve Daha Fazlası
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Keystone Consultancy Vergi ve Danışmanlık
          </h1>
        </div>
      </section>

      {/* Logo + Description + Stats */}
      <section className="py-16 md:py-20 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <img
                src={LOGO_URL}
                alt="Keystone Consultancy"
                className="w-48 md:w-56 lg:w-64 h-auto"
              />
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-600 leading-relaxed">
                Almanya, Macaristan, Polonya, Çek Cumhuriyeti, Türkiye, Sırbistan, BAE ve
                Estonya'da faaliyet gösteren profesyonel bir danışmanlık firmasıdır. Keystone
                Consultancy, uluslararası hukuk firması Keystone Partners ile ortaklık
                yapmaktadır. Kurumsal muhasebeden vergi beyannamelerine kadar büyüme
                ortağınız olmak için kapsamlı danışmanlık hizmetleri sunuyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center mt-12 pt-8 border-t border-slate-200">
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">10</div>
              <div className="text-sm text-slate-500 mt-1">Ülke</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">13</div>
              <div className="text-sm text-slate-500 mt-1">Dil</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">400+</div>
              <div className="text-sm text-slate-500 mt-1">Kurumsal Müşteri</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Neden Keystone Consultancy */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Neden Keystone Consultancy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {whyItems.map((item, i) => (
              <div
                key={item}
                className={`text-center px-8 py-6 ${
                  i < whyItems.length - 1 ? "md:border-r border-slate-300" : ""
                }`}
              >
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white border border-[#0c2044] text-[#0c2044] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#0c2044] hover:text-white transition shadow-sm"
            >
              Ücretsiz Bir Ön Görüşme Planlayın
            </a>
          </div>
        </Reveal>
      </section>

      {/* Ofislerimiz */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Ofislerimiz
          </h2>
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
                  <span className="bg-[#0c2044] text-white text-xs px-5 py-2 rounded-full hover:bg-blue-900 transition">
                    İLETİŞİM
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <Services />

      <Contact logos={vergiReferences} />

      <CtaBand
        title="Yurt Dışında ve Avrupa'da Şirket Kurma Hizmetlerimizle İşinizi Globalleştirin"
        text="Keystone Partners olarak, yurtdışında şirket kurma konusunda uzmanlaşmış bir danışmanlık firmasıyız. Avrupa'da ve Dubai'de şirket kurma sürecini hızlandıran ve kolaylaştıran çözümler sunuyoruz. Hedefiniz, Avrupa'da veya Dubai'de bir iş kurmaksa, size en uygun seçenekleri ve hukuki desteği sağlayarak başarılı bir girişim için sağlam bir temel oluşturmanıza yardımcı oluyoruz."
      />
    </PageTransition>
  );
}
