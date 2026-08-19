import { useEffect, useRef, useState } from "react";
import { Reveal } from "../motion";

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              setValue(Math.floor(t * target));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div ref={ref} className="font-title font-bold text-5xl md:text-6xl text-brand">
      {v}{suffix}
    </div>
  );
}

const statsData = [
  { value: 10, suffix: "", label: "Ülke" },
  { value: 13, suffix: "", label: "Dil" },
  { value: 500, suffix: "+", label: "Kurumsal Müşteri" },
];

export default function HomeStatsIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex items-center gap-6 mb-6">
          <span className="flex-1 h-[1px] bg-slate-300" />
          <h2 className="font-title font-bold text-2xl md:text-3xl text-brand uppercase tracking-wide shrink-0">
            Gurcan Partners Global Hukuk Bürosu
          </h2>
          <span className="flex-1 h-[1px] bg-slate-300" />
        </div>

        <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Uluslararası ticaret, hukuk ve yatırım çözümlerinde güvenilir ortağınız olarak girişimcilerin ve şirketlerin küresel pazarlarda güvenle ilerlemesine yardımcı oluyoruz.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-14 max-w-2xl mx-auto">
          {statsData.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="text-slate-500 mt-2 uppercase tracking-wide text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#process"
            className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-heading font-semibold px-8 py-3 rounded-full transition text-sm tracking-wide"
          >
            İşletmeler Neden Gurcan Partners'ı Tercih Ediyor?
          </a>
        </div>
      </Reveal>
    </section>
  );
}
