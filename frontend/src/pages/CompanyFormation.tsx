import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import { jurisdictions } from "../content/jurisdictions";
import { companyFormationSlugs } from "../content";

function JurisdictionCard({
  jurisdiction,
}: {
  jurisdiction: (typeof jurisdictions)[number];
}) {
  return (
    <Link
      to={`/sirket-kurulusu/${jurisdiction.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={jurisdiction.heroImage}
          alt={jurisdiction.country}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={jurisdiction.flag}
            alt={`${jurisdiction.country} flag`}
            className="w-8 h-6 object-cover rounded"
          />
          <h3 className="font-heading font-bold text-lg text-[#0c2044]">
            {jurisdiction.country}
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {jurisdiction.overview.slice(0, 150)}...
        </p>
      </div>
    </Link>
  );
}

function JurisdictionDetail({
  jurisdiction,
}: {
  jurisdiction: (typeof jurisdictions)[number];
}) {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden">
        <img
          src={jurisdiction.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0c2044]/70" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={jurisdiction.flag}
              alt={`${jurisdiction.country} flag`}
              className="w-12 h-9 object-cover rounded"
            />
            <h1 className="font-title text-3xl md:text-5xl font-bold text-white">
              {jurisdiction.country} Company Formation
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Establish your business in {jurisdiction.country} with Keystone
            Partners
          </p>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Link
          to="/sirket-kurulusu"
          className="text-accent hover:underline text-sm font-medium"
        >
          ← {t("company_formation.eyebrow")}
        </Link>
      </div>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-6">
            Overview
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {jurisdiction.overview}
          </p>
        </Reveal>
      </section>

      {/* Advantages */}
      <section className="py-12 md:py-16 bg-[#f4f7fa]">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-8">
            Why {jurisdiction.country}?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {jurisdiction.advantages.map((adv) => (
              <div
                key={adv}
                className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-sm"
              >
                <span className="text-accent text-lg mt-0.5">✓</span>
                <p className="text-slate-700 text-sm leading-relaxed">{adv}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-8">
            Registration Process
          </h2>
          <div className="space-y-4">
            {jurisdiction.process.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0c2044] text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Requirements & Tax */}
      <section className="py-12 md:py-16 bg-[#f4f7fa]">
        <Reveal className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-6">
              Requirements
            </h2>
            <ul className="space-y-3">
              {jurisdiction.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 text-slate-700 text-sm"
                >
                  <span className="text-accent mt-1">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-6">
              Tax Information
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {jurisdiction.taxInfo}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Timeline & Costs */}
      <section className="py-12 md:py-16 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-title text-2xl text-[#0c2044] font-bold mb-4">
              Timeline
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {jurisdiction.timeline}
            </p>
          </div>
          <div>
            <h2 className="font-title text-2xl text-[#0c2044] font-bold mb-4">
              Costs
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {jurisdiction.costs}
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-[#f4f7fa]">
        <Reveal className="max-w-4xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-[#0c2044] font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {jurisdiction.faqItems.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-heading font-semibold text-[#0c2044] mb-2">
                  {item.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </PageTransition>
  );
}

export default function CompanyFormation() {
  const { slug } = useParams();

  if (slug) {
    const jurisdiction = jurisdictions.find((j) => j.slug === slug);
    if (jurisdiction) {
      return <JurisdictionDetail jurisdiction={jurisdiction} />;
    }
    return (
      <PageTransition>
        <section className="py-24 text-center">
          <h1 className="font-title text-3xl text-[#0c2044]">
            {companyFormationSlugs[slug] || "Company Formation"}
          </h1>
          <p className="text-slate-500 mt-4">
            This page is being prepared. Please contact us for details.
          </p>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0c2044]/70" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="font-title text-3xl md:text-5xl font-bold text-white mb-4">
            International Company Formation
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Establish your business in the right jurisdiction with expert
            guidance from Keystone Partners
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-600 leading-relaxed text-lg max-w-4xl mx-auto">
            Keystone Partners provides end-to-end company formation services
            across 10+ jurisdictions. Select a country below to learn about the
            registration process, requirements, tax advantages, and timelines.
          </p>
        </Reveal>
      </section>

      {/* Jurisdiction Grid */}
      <section className="py-12 md:py-24 bg-[#f4f7fa]">
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jurisdictions.map((j) => (
              <JurisdictionCard key={j.slug} jurisdiction={j} />
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </PageTransition>
  );
}
