import { Link } from "react-router-dom";
import { featuredPost } from "../../content";
import { Reveal } from "../motion";
import Img from "../Img";

const videos = [
  {
    title: "2026 Avrupa Birliği – Macaristan'da Şirket Kurmak Mantıklı Mı?",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Yurt Dışında Şirket Kurmak İsteyenler İçin Adım Adım Rehber",
    thumb: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Dubai'de Şirket Kurmak 2025 | Free Zone ve Mainland Şirket Nasıl Kurulur?",
    thumb: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
  },
];

export default function HomeKnowledge() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        <h2 className="font-title text-3xl md:text-4xl text-brand text-center mb-14">
          Bilgi <span className="text-accent">Merkezi</span>
        </h2>

        {/* Gurcan Journal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-title text-2xl text-brand mb-4">
              Gurcan <span className="text-accent">Journal</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-md">
              Gurcan Journal; 10 ülkede yasal, vergi ve yatırım fırsatları hakkında 13 dilde yayın yapan ücretsiz bir platformdur.
            </p>
            <Link
              to="/blog"
              className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-heading font-semibold px-7 py-3 rounded-full uppercase tracking-wide text-xs transition"
            >
              TÜM GÖNDERİLERİ KEŞFEDİN
            </Link>
          </div>

          <div>
            <article className="bg-white rounded-xl shadow-sm overflow-hidden group border border-slate-100">
              <div className="relative h-56 overflow-hidden">
                <Img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="font-title font-bold text-lg text-brand mb-3 leading-snug">
                  {featuredPost.title}
                </h3>
                <Link
                  to={featuredPost.url}
                  className="inline-flex items-center gap-1 text-accent font-heading font-semibold uppercase tracking-wide text-xs group-hover:gap-2 transition"
                >
                  DAHA FAZLA...
                </Link>
              </div>
            </article>
            <div className="flex items-center justify-center gap-2.5 mt-5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* YouTube Channel */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="text-center lg:text-left">
            <h3 className="font-title text-2xl text-brand mb-2">
              YouTube Kanalımıza <span className="text-accent">Göz Atın</span>
            </h3>
            <p className="text-slate-600 text-lg font-semibold mb-3">(10.000+ Abone)</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              En güncel hukuki değerlendirmelerimizi, yatırım analizlerimizi ve küresel kurumsal stratejilerimizi doğrudan video kanalımızda keşfedin.
            </p>
            <Link
              to="#"
              className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-heading font-semibold px-7 py-3 rounded-full uppercase tracking-wide text-xs transition"
            >
              TÜM VİDEOLARI KEŞFEDİN
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videos.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl shadow-sm overflow-hidden group border border-slate-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <Img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-heading font-semibold text-sm text-brand mb-2 leading-snug line-clamp-2">
                    {v.title}
                  </h4>
                  <Link
                    to="#"
                    className="text-accent font-heading font-semibold uppercase tracking-wide text-xs"
                  >
                    ŞİMDİ İZLE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
