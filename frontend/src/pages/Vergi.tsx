import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { vergiReferences, LOGO_URL } from "../content";

const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

const whyItems = [
  "Professional international expert team",
  "Comprehensive solutions tailored to your business",
  "We are always here to answer your questions and help you grow",
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
            Tax & Advisory
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Keystone Partners — Tax & Corporate Consulting
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
                alt="Keystone Partners"
                className="w-48 md:w-56 lg:w-64 h-auto"
              />
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-600 leading-relaxed">
                Keystone Partners is a professional consulting firm operating in
                Germany, Hungary, Poland, Czech Republic, Turkey, Serbia, the UAE,
                and Estonia. Working in partnership with the international law firm
                Keystone Partners, we deliver comprehensive advisory services
                from corporate accounting to tax filing — serving as your trusted
                growth partner.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center mt-12 pt-8 border-t border-slate-200">
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">15+</div>
              <div className="text-sm text-slate-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">10</div>
              <div className="text-sm text-slate-500 mt-1">Jurisdictions</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">500+</div>
              <div className="text-sm text-slate-500 mt-1">Corporate Clients</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why Keystone Partners */}
      <section className="py-16 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Why Keystone Partners?
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
              Schedule a Free Consultation
            </a>
          </div>
        </Reveal>
      </section>

      {/* Our Offices */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <h2 className="font-title text-3xl md:text-4xl text-[#0c2044] text-center mb-10">
            Our Offices
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
                  CONTACT
                </span>
              </div>
            </a>
          </div>
        </Reveal>
      </section>

      <Services />

      <Contact logos={vergiReferences} />

      <CtaBand
        title="Expand Your Business Internationally with Keystone Partners"
        text="Keystone Partners specializes in international company formation, corporate structuring, and tax optimization. Whether you are establishing a presence in Europe, the UAE, or beyond, we provide the legal, tax, and corporate expertise to build a solid foundation for your global venture."
      />
    </PageTransition>
  );
}
