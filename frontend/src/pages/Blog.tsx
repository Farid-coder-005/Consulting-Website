import { PageTransition, Reveal } from "../components/motion";
import { InnerHero, SectionHeading } from "../components/inner";
import Img from "../components/Img";

const UP = "https://gurcanpartners.com/wp-content/uploads/";

type Post = {
  title: string;
  url: string;
  date: string;
  category: string;
  excerpt?: string;
  image: string;
};

const posts: Post[] = [
  {
    title: "What is a Benefit Corporation?",
    url: "https://gurcanpartners.com/blog/what-is-a-benefit-corporation/",
    date: "Jul 30, 2026",
    category: "General",
    excerpt:
      "A benefit corporation is a for-profit company that legally incorporates social and environmental impact into its core business mission.",
    image: UP + "what-is-a-benefit-corporation-1.jpg",
  },
  {
    title: "What Is a Subsidiary Company?",
    url: "https://gurcanpartners.com/blog/what-is-a-subsidiary-company/",
    date: "Jul 30, 2026",
    category: "General",
    image: UP + "what-is-a-subsidiary-company-370x251.jpg",
  },
  {
    title: "Company Registration in Czech Republic",
    url: "https://gurcanpartners.com/blog/company-registration-in-czech-republic/",
    date: "Jul 30, 2026",
    category: "English",
    image: UP + "Company-Registration-in-Czech-Republic-Gurcan-Partners-370x251.jpg",
  },
  {
    title: "Benefits of Company Formation in Hungary",
    url: "https://gurcanpartners.com/blog/benefits-of-company-formation-in-hungary/",
    date: "Jul 30, 2026",
    category: "English",
    image: UP + "Benefits-of-Company-Formation-in-Hungary-in-2025-370x251.jpg",
  },
  {
    title: "Company Acquisition in Germany",
    url: "https://gurcanpartners.com/company-acquisition-in-germany/",
    date: "Jul 30, 2026",
    category: "Germany",
    image: UP + "Resimler-1-9-370x251.png",
  },
  {
    title: "How to Dubai Free Zone Company Registration?",
    url: "https://gurcanpartners.com/blog/dubai-free-zone-company-registration/",
    date: "Jul 08, 2026",
    category: "Dubai",
    image: UP + "How-to-Register-a-Company-in-a-Dubai-Free-Zone_-Learn-in-7-Steps-370x251.jpg",
  },
  {
    title: "How to Establish an LLC?",
    url: "https://gurcanpartners.com/blog/how-to-establish-an-llc/",
    date: "Jul 08, 2026",
    category: "USA",
    image: UP + "how-to-establish-an-llc-2-370x251.jpg",
  },
];

const mostPopular = [
  {
    rank: "01",
    title: "Company Taxation in Germany (2025)",
    meta: "Germany | Oct 31, 2025",
    url: "https://gurcanpartners.com/blog/company-taxation-in-germany/",
  },
  {
    rank: "02",
    title: "Buying Property in Germany 2025: Step-by-Step Guide for Foreign Investors",
    meta: "English | Aug 29, 2025",
    url: "https://gurcanpartners.com/blog/buying-property-in-germany/",
  },
  {
    rank: "03",
    title: "Starting a Business in Serbia: Legal Process, Costs & Requirements",
    meta: "Serbia | May 11, 2026",
    url: "https://gurcanpartners.com/blog/company-registration-in-serbia/",
  },
  {
    rank: "04",
    title: "Turkish Citizenship by Investment 2026",
    meta: "Turkey | Jan 30, 2026",
    url: "https://gurcanpartners.com/blog/turkish-citizenship-by-investment-2026/",
  },
  {
    rank: "05",
    title: "Company Registration Hungary: How to Start a Business in Hungary",
    meta: "General | Jun 05, 2026",
    url: "https://gurcanpartners.com/blog/company-registration-hungary/",
  },
];

export default function Blog() {
  return (
    <PageTransition>
      <InnerHero
        eyebrow="Gurcan Journal"
        title="Gurcan Journal"
        subtitle="We Believe In Collaboration, Future and Innovation"
      />

      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Blog" title="Son Yazılar" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 bg-white"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400 mb-2">{p.date}</p>
                  <h3 className="font-heading font-bold text-lg text-brand mb-2 group-hover:text-accent transition">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {p.excerpt}
                    </p>
                  )}
                  <span className="inline-block mt-3 text-accent font-semibold text-sm">
                    Devamını oku →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <Reveal className="max-w-4xl mx-auto px-4">
          <SectionHeading eyebrow="En Çok Okunanlar" title="Most Popular" />
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg bg-white">
            {mostPopular.map((m) => (
              <a
                key={m.rank}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 hover:bg-slate-50 transition"
              >
                <span className="font-heading font-extrabold text-2xl text-accent shrink-0">
                  {m.rank}
                </span>
                <span>
                  <span className="block font-heading font-semibold text-brand group-hover:text-accent">
                    {m.title}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1">
                    {m.meta}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
