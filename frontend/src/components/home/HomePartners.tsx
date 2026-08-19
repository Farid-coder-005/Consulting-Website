import { Reveal } from "../motion";
import Img from "../Img";

const partnerLogos = [
  { src: "https://gurcanpartners.com/wp-content/uploads/dogus-group-logo.png", alt: "Doğuş Group" },
  { src: "https://gurcanpartners.com/wp-content/uploads/gedik-logo.png", alt: "Gedik" },
  { src: "https://gurcanpartners.com/wp-content/uploads/turk-telekom-logo.png", alt: "Türk Telekom" },
  { src: "https://gurcanpartners.com/wp-content/uploads/satelo-logo.png", alt: "SATELO" },
  { src: "https://gurcanpartners.com/wp-content/uploads/empa-electronics-logo.png", alt: "empa:::electronics" },
  { src: "https://gurcanpartners.com/wp-content/uploads/kibar-logo.png", alt: "Kibar" },
  { src: "https://gurcanpartners.com/wp-content/uploads/und-logo.png", alt: "UND" },
  { src: "https://gurcanpartners.com/wp-content/uploads/firstmed-logo.png", alt: "FIRSTMED" },
  { src: "https://gurcanpartners.com/wp-content/uploads/liv-hospital-logo.png", alt: "LIV Hospital" },
];

export default function HomePartners() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f7fa]">
      <Reveal className="max-w-5xl mx-auto px-4 text-center">
        <a
          href="#"
          className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-heading font-semibold px-8 py-3 rounded-full transition text-sm tracking-wide mb-12"
        >
          Tecrübelerimize Göz Atın
        </a>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-24 border border-slate-100 rounded-lg"
              >
                <Img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 w-auto object-contain px-4"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
