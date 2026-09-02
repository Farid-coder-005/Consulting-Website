import { Reveal } from "../motion";

const reviews = [
  {
    initials: "YB",
    name: "Yunus Başürün",
    time: "5 Ay Önce",
    text: "Keystone Consultancy ekibi ilk günden itibaren sorularıma büyük bir özenle yaklaştı ve her zaman çözüm odaklı bir performans sergiledi. Özellikle Sayın Keystone'ın ufak det...",
    color: "bg-[#1a5276]",
  },
  {
    initials: "CM",
    name: "Cristian Mata Mejia",
    time: "5 Ay Önce",
    text: "Bedrettin Bey ve ekibi son derece profesyonel, harika, kişiye özel tavsiyelerle mükemmel bir hizmet sundular. Uzman şirket kuruluşu danışmanlığı arayan herkese kesinlikle tavsiye ederim.",
    color: "bg-[#1a6b52]",
  },
  {
    initials: "TS",
    name: "Tarik Serbes",
    time: "1 Yıl Önce",
    text: "Bedrettin Bey talebime son derece hızlı dönüş yaptı ve aynı gün ücretsiz bir danışmanlık görüşmesi organize etti. Tüm sorularımı yanıtlayarak artılarını ve eksilerini kristal netliğinde açıkladı. Çok...",
    color: "bg-[#6b3a1a]",
  },
];

export default function HomeReviews() {
  return (
    <section className="py-16 md:py-24 bg-[#0B1A30] text-white">
      <Reveal className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold">⭐⭐⭐⭐⭐ 5.0 | 50+ Değerlendirme</span>
          </div>

          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4">
            Müşterilerimiz <span className="text-accent">Ne Diyor?</span>
          </h2>
          <p className="text-white/70 text-lg">
            Dünya genelinde müşterilerimizin güvenini kazandık.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${r.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {r.initials}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-white/50 text-xs">{r.time}</div>
                </div>
                <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://gurcanpartners.com/tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1A30] font-heading font-semibold px-8 py-3 rounded-full transition text-sm"
          >
            Tüm Google Değerlendirmelerini Görüntüle →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
