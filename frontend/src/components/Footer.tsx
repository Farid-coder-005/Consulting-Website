import { Link } from "react-router-dom";
import { footerOffices, footerServices } from "../content";

export default function Footer() {
  return (
    <footer id="footer" className="scroll-mt-28 bg-[#0A192F] pt-20 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        {/* Hizmet Noktalarımız */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Hizmet Noktalarımız
          </h3>
          <ul className="space-y-0">
            {footerOffices.map((o) => (
              <li key={o}>
                <Link
                  to="/iletisim"
                  className="flex items-center gap-2 border-b border-blue-900/40 py-2 text-slate-300 text-sm hover:text-white transition"
                >
                  <span className="text-slate-500 text-xs">›</span>
                  {o}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Faaliyet Alanlarımız */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Faaliyet Alanlarımız
          </h3>
          <ul className="space-y-0">
            {footerServices.map((s) => (
              <li key={s}>
                <Link
                  to="/#services"
                  className="flex items-center gap-2 border-b border-blue-900/40 py-2 text-slate-300 text-sm hover:text-white transition"
                >
                  <span className="text-slate-500 text-xs">›</span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Description Block */}
        <div>
          <p className="italic text-white text-base font-medium mb-4 leading-relaxed block">
            Uluslararası Şirket Kuruluşu Hizmetlerimizle İşinizi Küresel Ölçekte Büyütün
          </p>
          <div className="text-slate-300 text-sm leading-relaxed space-y-4">
            <p>
              Gurcan Partners olarak; entegre hukuk, vergi ve kurumsal danışmanlık
              hizmetlerimiz aracılığıyla girişimcilerin, yatırımcıların ve şirketlerin
              uluslararası alanda kurulmalarına ve büyümelerine yardımcı oluyoruz.
            </p>
            <p>
              İster Avrupa'da şirket kuruluşu, BAE'de iş kurulumu, Türkiye'de şirket
              tescili, Balkanlar'a genişleme, Asya pazarına giriş veya Amerika Birleşik
              Devletleri'nde şirketleşme hizmetleri arıyor olun; ekibimiz tüm süreç
              boyunca uçtan uca destek sağlar. İşinize uygun ülke seçiminden şirket
              kuruluşuna, vergi ve mevzuata uyumdan sürekli hukuki desteğe kadar,
              işletmelerin uluslararası büyüme için güçlü bir temel oluşturmalarına
              yardımcı oluyoruz.
            </p>
            <p>
              İşinizi küresel ölçekte büyütmek için gerekli tüm rehberlik ve desteği
              almak üzere bizimle iletişime geçin. Avrupa'da şirket kuruluşu ve Dubai'de
              şirket kuruluşu süreçlerinizi sorunsuz bir şekilde yönetmek için bize ulaşın.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-blue-900/40">
        <div className="text-center text-xs text-white/50">
          Gurcan Partners - 2026 |{" "}
          <a href="#" className="hover:text-white/80 transition">
            Gizlilik Politikası
          </a>
        </div>
      </div>
    </footer>
  );
}
