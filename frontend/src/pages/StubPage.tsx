import { Link } from "react-router-dom";
import { Reveal } from "../components/motion";

type StubPageProps = { title: string; subtitle?: string };

export default function StubPage({ title, subtitle }: StubPageProps) {
  return (
    <section className="py-24 md:py-32 bg-slate-50 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-brand">
            {title}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto my-4" />
          <p className="text-slate-600 leading-relaxed">
            {subtitle ?? "Bu sayfa yakında yayına alınacaktır."}
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-accent hover:bg-brand text-white font-heading font-semibold px-7 py-3 rounded transition"
          >
            Ana Sayfaya Dön
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
