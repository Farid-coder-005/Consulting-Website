import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import Locations from "../components/Locations";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { hakkimizdaReferences, memberships, LOGO_URL } from "../content";

const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

export default function Hakkimizda() {
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
        <div className="absolute inset-0 bg-[#0F2B5C]/60" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <p className="text-lg md:text-xl font-bold text-white mb-3">
            About Keystone Partners
          </p>
          <h1 className="font-title text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight font-medium">
            15+ Years of Cross-Border Corporate Expertise
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4 space-y-16">

          {/* Block 1: Logo + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <img
                src={LOGO_URL}
                alt="Keystone Partners"
                className="w-48 md:w-56 lg:w-64 h-auto"
              />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
                Your Gateway to Excellence in Global Business and Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Keystone Partners is a leading international law and consulting
                firm with over 15 years of experience in cross-border corporate
                structuring, tax optimization, and investment advisory. With a
                team of attorneys from the USA, Hungary, Poland, Czech Republic,
                Serbia, Germany, Malta, the UAE, and Estonia, we have mastered the
                art of navigating complex legal matters across 10 jurisdictions.{" "}
                <a
                  href="#offices"
                  className="text-accent hover:underline font-semibold"
                >
                  Visit our offices
                </a>{" "}
                to learn how our expertise — deep and broad — ensures your
                business receives meticulous, confidential, and internationally
                compliant counsel.
              </p>
            </div>
          </div>

          {/* Block 2: Confidentiality & Precision */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
              Confidentiality, Legal Precision & International Tax Standards — The Keystone Promise
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Keystone Partners, we go beyond traditional legal services. We
              are a trusted advisor to entrepreneurs, investors, and multinational
              enterprises seeking to establish or expand their global footprint.
              Every engagement is handled with the highest standards of
              confidentiality, legal precision, and adherence to international
              tax regulations. Our commitment to protecting client information
              and delivering structurally sound solutions has earned us the trust
              of over 500 corporate clients across ten jurisdictions.
            </p>
          </div>

          {/* Block 3: Integrated Services */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
              Integrated Corporate, Tax & Legal Solutions — Your Strategic Partner for Global Growth
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our mission is to be more than a service provider — we are your
              strategic partner for global expansion. Having helped over 500
              companies take their businesses international, we understand the
              nuances of market entry, operational setup, and ongoing compliance.
              Through our affiliated consulting arm, Keystone Partners delivers
              comprehensive tax and accounting services across 8 countries,
              ensuring a seamless transition into new markets.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Choose Keystone Partners for a partnership that values
              confidentiality, embraces innovation, and prioritizes your global
              success. Let our expert legal and tax advisory services guide you
              through the complexities of international expansion. With Keystone
              Partners, global business is not just an option — it is your future.
            </p>
            <p className="font-bold text-gray-900">
              Discover the Keystone difference. Expand globally with confidence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center pt-8 border-t border-slate-200">
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

      {/* Member Organizations */}
      <section className="py-16 bg-slate-50">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold text-center mb-10">
            Member Organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memberships.slice(0, 4).map((m) => (
              <div
                key={m.alt}
                className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32"
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <Locations />
      <Services />

      <Contact logos={hakkimizdaReferences} />

      <CtaBand
        title="Expand Your Business Internationally with Keystone Partners"
        text="Keystone Partners specializes in international company formation, corporate structuring, and tax optimization. Whether you are establishing a presence in Europe, the UAE, or beyond, we provide the legal, tax, and corporate expertise to build a solid foundation for your global venture."
      />
    </PageTransition>
  );
}
