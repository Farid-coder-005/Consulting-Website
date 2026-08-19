import { Link } from "react-router-dom";
import { featuredPost } from "../content";
import { Reveal } from "./motion";
import Img from "./Img";
import { SectionHeading } from "./inner";

export default function HomeBlog() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Reveal className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="Gurcan Journal"
            title="Gurcan Journal"
            light={false}
          />
          <p className="text-slate-600 leading-relaxed mb-8 max-w-md text-left">
            Uluslararası şirketleşme, vergi ve hukuk dünyasından en güncel
            makaleler, rehberler ve uzman görüşleriyle bilgiye bir adım
            önde olun.
          </p>
          <Link
            to="/blog"
            className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white font-heading font-semibold px-7 py-3 rounded-full uppercase tracking-wide transition"
          >
            Tüm Blogları Keşfet
          </Link>
        </div>

        <div>
          <article className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-6">
              <h3 className="font-title font-bold text-xl text-brand mb-3 leading-snug">
                {featuredPost.title}
              </h3>
              <Link
                to={featuredPost.url}
                className="inline-flex items-center gap-1 text-accent font-heading font-semibold uppercase tracking-wide text-sm group-hover:gap-2 transition"
              >
                Devamını Oku ›
              </Link>
            </div>
          </article>
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
