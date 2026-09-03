import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { footerOffices, footerServices } from "../content";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="scroll-mt-28 bg-[#0A192F] pt-20 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        {/* Hizmet Noktalarımız */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            {t("footer.locations")}
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
            {t("footer.services")}
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
            {t("home.offices_title")}
          </p>
          <div className="text-slate-300 text-sm leading-relaxed space-y-4">
            <p>
              {t("footer.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-blue-900/40">
        <div className="text-center text-xs text-white/50">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
