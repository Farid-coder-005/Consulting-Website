import { useEffect, useRef, useState } from "react";
import { Reveal } from "./motion";
import { stats } from "../content";

function useCountUp(target: number, duration = 1500) {
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
    <div
      ref={ref}
      className="font-title font-bold text-5xl md:text-6xl text-accent"
    >
      {v}
      {suffix}
    </div>
  );
}

export default function StatsIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Reveal className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-title font-bold text-2xl md:text-3xl text-brand uppercase leading-snug">
          Gurcan Partners Uluslararası Hukuk ve Danışmanlık Ofisi
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Şirket Kuruluşu, Uluslararası Şirketleşme, Uluslararası Vergi
          Danışmanlığı ve Daha Fazlası
        </p>
        <blockquote className="font-title italic text-xl md:text-2xl text-brand mt-8 max-w-3xl mx-auto">
          “Gurcan Partners uluslararası, inovatif bir Uluslararası hukuk ve
          danışmanlık şirketidir.”
        </blockquote>
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                value={parseInt(s.value.replace(/\D/g, ""), 10)}
                suffix={s.value.includes("+") ? "+" : ""}
              />
              <div className="text-slate-500 mt-2 uppercase tracking-wide text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
