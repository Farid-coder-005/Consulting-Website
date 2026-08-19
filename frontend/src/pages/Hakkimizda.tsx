import { PageTransition, Reveal } from "../components/motion";
import { CtaBand } from "../components/inner";
import Locations from "../components/Locations";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { hakkimizdaReferences, memberships, LOGO_URL } from "../content";

const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

export default function Hakkimizda() {
  return (
    <PageTransition>
      {/* Hero banner */}
      <section className="relative h-[420px] md:h-[520px] flex items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F2B5C]/60" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
          <p className="text-lg md:text-xl font-bold text-white mb-3">
            Hakkımızda
          </p>
          <h1 className="font-title text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight font-medium">
            Gurcan Partners Uluslararası Hukuk ve Danışmanlık
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white">
        <Reveal className="max-w-6xl mx-auto px-4 space-y-16">

          {/* Block 1: Logo + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <img
                src={LOGO_URL}
                alt="Gurcan Partners"
                className="w-48 md:w-56 lg:w-64 h-auto"
              />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
                Küresel İş ve Hukuk Alanında Mükemmelliğe Açılan Kapınız
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Küresel hukuk ve danışmanlık hizmetlerinde yenilikçi ortağınız
                Gürcan Partners'a hoş geldiniz. ABD, Macaristan, Türkiye, Polonya,
                Çek Cumhuriyeti, Sırbistan, Almanya, Arap ülkeleri, Malezya ve
                Estonya'dan çeşitli avukatlardan oluşan bir ekiple, 10 ülkede
                karmaşık yasal konuları ele alma sanatında ustalaştık.{" "}
                <a
                  href="#offices"
                  className="text-accent hover:underline font-semibold"
                >
                  Lütfen ofislerimizi ziyaret edin.
                </a>{" "}
                Uzmanlığımız sadece geniş değil, aynı zamanda derindir ve
                uluslararası hukukun inceliklerini titizlik ve verimlilikle ele
                almamızı sağlar.
              </p>
            </div>
          </div>

          {/* Block 2: İnovasyon */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
              Geleceğe İnanıyoruz – İnovasyon, Teknoloji ve Uzmanlık: Gürcan Sözü
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Gürcan Partners olarak bir hukuk bürosundan çok daha fazlasıyız;
              hukuk teknolojisi ve danışmanlığı alanında yenilikçiyiz ve
              işletmenizin hızla gelişen dijital dünyada bir adım önde olmasını
              sağlıyoruz. İnovasyon ve teknolojiye olan bağlılığımız, karmaşık
              yasal zorluklar için stratejik çözümler sunma konusundaki
              kararlılığımızla eşleşiyor ve bizi 21. yüzyılın hukuk endüstrisinde
              bir öncü haline getiriyor.
            </p>
          </div>

          {/* Block 3: İşbirliği */}
          <div>
            <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold mb-4">
              İşbirliğine İnanıyoruz – Şirketinizi Büyütüyor, Yasal İşlemleri Basitleştiriyoruz
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Görevimiz geleneksel hukuki hizmetlerin ötesine geçerek küresel
              genişlemede stratejik ortağınız olmayı hedefliyoruz. 400'den fazla
              şirketin işlerini uluslararası alana taşımalarına yardımcı olarak,
              küresel pazara girişin ve operasyonun nüanslarını anlıyoruz. Gürcan
              Partners, yan şirketimiz Gürcan Danışmanlık ile birlikte 8
              ülkede kapsamlı vergi ve muhasebe hizmetleri sunarak yeni
              pazarlara sorunsuz bir geçiş sağlıyor.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Yeniliğe İnanıyoruz – Yeniliğe değer veren, teknolojiyi kucaklayan
              ve küresel başarınıza öncelik veren bir ortaklık için Gürcan
              Partners'ı seçin. Uzman hukuk ve danışmanlık hizmetlerimizle
              uluslararası genişlemenin karmaşıklıklarında size rehberlik
              edelim. Gürcan Partners ile küresel iş sadece bir seçenek değil;
              sizin geleceğinizdir.
            </p>
            <p className="font-bold text-gray-900">
              Gürcan farkını keşfedin. Güvenle global olarak büyüyün.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center pt-8 border-t border-slate-200">
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">10</div>
              <div className="text-sm text-slate-500 mt-1">Ülke</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">13</div>
              <div className="text-sm text-slate-500 mt-1">Dil</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">400+</div>
              <div className="text-sm text-slate-500 mt-1">Kurumsal Müşteri</div>
            </div>
          </div>

        </Reveal>
      </section>

      {/* Üye Olduğumuz Kuruluşlar */}
      <section className="py-16 bg-slate-50">
        <Reveal className="max-w-6xl mx-auto px-4">
          <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-bold text-center mb-10">
            Üye Olduğumuz Kuruluşlar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memberships.slice(0, 4).map((m) => (
              <div
                key={m.alt}
                className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32"
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <Locations />
      <Services />

      <Contact logos={hakkimizdaReferences} />

      <CtaBand
        title="Yurt Dışında ve Avrupa'da Şirket Kurma Hizmetlerimizle İşinizi Globalleştirin"
        text="Gurcan Partners olarak, yurtdışında şirket kurma konusunda uzmanlaşmış bir danışmanlık firmasıyız. Avrupa’da ve Dubai’de şirket kurma sürecini hızlandıran ve kolaylaştıran çözümler sunuyoruz. Hedefiniz, Avrupa’da veya Dubai’de bir iş kurmaksa, size en uygun seçenekleri ve hukuki desteği sağlayarak başarılı bir girişim için sağlam bir temel oluşturmanıza yardımcı oluyoruz."
      />
    </PageTransition>
  );
}
