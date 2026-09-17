import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  subtitleKey: string;
  titleKey: string;
  buttons: { labelKey: string; to: string }[];
  bg: string;
  dark: boolean;
};

const slides: Slide[] = [
  {
    subtitleKey: "hero.subtitle",
    titleKey: "hero.title",
    buttons: [
      { labelKey: "hero.locations_btn", to: "/#offices" },
      { labelKey: "hero.cta", to: "/#contact" },
    ],
    bg: "https://gurcanpartners.com/wp-content/uploads/gurcan-partners-banner-home-page.png",
    dark: true,
  },
  {
    subtitleKey: "hero.subtitle",
    titleKey: "hero.title",
    buttons: [
      { labelKey: "hero.locations_btn", to: "/#offices" },
      { labelKey: "hero.cta", to: "/#contact" },
    ],
    bg: "https://gurcanpartners.com/wp-content/uploads/gurcan-partners-homepage-banner.webp",
    dark: false,
  },
  {
    subtitleKey: "hero.subtitle",
    titleKey: "hero.title",
    buttons: [
      { labelKey: "hero.locations_btn", to: "/#offices" },
      { labelKey: "nav.about", to: "/hakkimizda" },
      { labelKey: "hero.cta", to: "/#contact" },
    ],
    bg: "https://gurcanpartners.com/wp-content/uploads/homepage-banner-gurcan-partners.webp",
    dark: true,
  },
];

export default function Hero() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[idx];

  return (
    <section className="relative bg-brand isolate overflow-hidden h-[440px] md:h-[480px] flex items-center">
      {/* Slide background image */}
      <img
        key={slide.bg}
        src={slide.bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hero-fade"
        aria-hidden="true"
      />

      {/* Left-side gradient overlay for dark slides */}
      {slide.dark && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2044]/90 via-[#0c2044]/40 to-transparent" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div key={idx} className="hero-fade max-w-2xl">
          <p
            className={`font-sans italic text-sm md:text-base font-light tracking-wide mb-3 ${
              slide.dark ? "text-slate-200" : "text-[#122352]/80"
            }`}
          >
            {t(slide.subtitleKey)}
          </p>
          <h1
            className={`font-sans font-bold text-2xl lg:text-3xl leading-tight max-w-3xl ${
              slide.dark ? "text-white" : "text-[#122352]"
            }`}
          >
            {t(slide.titleKey)}
          </h1>
          <div className="mt-8 flex flex-wrap gap-8">
            {slide.buttons.map((b) => (
              <Link
                key={b.labelKey}
                to={b.to}
                className={`inline-flex items-center gap-1 font-sans font-semibold text-lg transition group ${
                  slide.dark
                    ? "text-white hover:text-accent-light"
                    : "text-[#122352] hover:text-[#2079be]"
                }`}
              >
                {t(b.labelKey)}
                <span className="transition group-hover:translate-x-1">›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Left arrow */}
      <button
        type="button"
        onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}
        aria-label={t("hero.prev_slide")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 border border-white/50 rounded-full p-2.5 text-white hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => setIdx((i) => (i + 1) % slides.length)}
        aria-label={t("hero.next_slide")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 border border-white/50 rounded-full p-2.5 text-white hover:bg-white/20 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
