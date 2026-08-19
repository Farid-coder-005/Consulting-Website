import { memberships } from "../content";
import { Reveal } from "./motion";
import Img from "./Img";

export default function Memberships() {
  return (
    <section className="py-16 bg-slate-50">
      <Reveal className="max-w-7xl mx-auto px-4">
        <p className="text-center text-slate-500 mb-8 max-w-2xl mx-auto">
          Global ölçekte güvenilir çözüm ortaklarımız ve üye olduğumuz
          uluslararası kuruluşlar.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memberships.map((m) => (
            <div
              key={m.alt}
              className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center h-32"
            >
              <Img
                src={m.src}
                alt={m.alt}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
