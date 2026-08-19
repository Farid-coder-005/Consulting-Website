import {
  referenceLogos,
  hakkimizdaReferences,
  countries,
} from "../content";
import { Reveal } from "./motion";
import Img from "./Img";

type Props = {
  experiences?: boolean;
  logos?: { src: string; alt: string }[];
};

export default function Contact({
  experiences = false,
  logos = referenceLogos,
}: Props) {
  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-24 bg-slate-50">
      <Reveal className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          {experiences ? (
            <>
              <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                Deneyimlerimiz
              </p>
              <h2 className="font-title font-bold text-3xl text-brand mt-2 mb-4">
                Deneyimlerimiz
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Global ölçekte kurumsal müvekkillerimize sunduğumuz
                hizmetlerle güvenin adresi olmaya devam ediyoruz. Çeşitli
                sektörlerden saygın markaların çözüm ortağıyız.
              </p>
              <div className="grid grid-cols-3 gap-4 items-center opacity-80">
                {hakkimizdaReferences.map((l) => (
                  <Img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    className="h-10 w-auto mx-auto"
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-accent font-heading font-semibold tracking-widest uppercase text-sm">
                Güvenilir Çözüm Ortağı
              </p>
              <h2 className="font-title font-bold text-3xl text-brand mt-2 mb-6">
                Referanslarımız
              </h2>
              <div className="grid grid-cols-3 gap-4 items-center opacity-70">
                {logos.map((l) => (
                  <Img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    className="h-10 w-auto mx-auto"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right column: form */}
        <div
          id="contact-form"
          className="scroll-mt-28 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="font-title font-bold text-2xl text-brand mb-1">
            Lütfen Formu Doldurun
          </h2>
          <p className="text-slate-500 mb-6">
            24 Saat İçinde Size Geri Dönüş Yapacağız
          </p>
          <form className="space-y-4" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold text-brand mb-1"
                  htmlFor="name"
                >
                  İsim
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-brand mb-1"
                  htmlFor="phone"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-brand mb-1"
                htmlFor="country"
              >
                Ülke
              </label>
              <select
                id="country"
                className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-brand mb-1"
                htmlFor="email"
              >
                e-Mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-brand mb-1"
                htmlFor="message"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-slate-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="flex items-center gap-3 border border-slate-300 rounded px-3 py-3 bg-[#f9f9f9]">
              <input
                type="checkbox"
                id="recaptcha"
                className="w-5 h-5 accent-accent"
              />
              <label
                htmlFor="recaptcha"
                className="text-sm text-slate-600 flex-1 select-none"
              >
                Ben robot değilim
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
              className="w-full bg-brand hover:bg-brand-dark text-white font-heading font-semibold px-6 py-3 rounded transition"
            >
              GÖNDER
            </button>
            <p className="text-xs text-slate-400">
              Form bilgileriniz gizli tutulur ve yalnızca talebinizi
              yanıtlamak için kullanılır.
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
