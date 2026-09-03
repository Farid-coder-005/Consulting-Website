import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactCtaBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#5B9BD5]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <h2 className="text-center font-title text-xl font-bold text-white md:text-left md:text-2xl">
          {t("contact.cta_title")}
        </h2>
        <Link
          to="/iletisim#contact-form"
          className="shrink-0 rounded-lg bg-white px-7 py-3 font-semibold uppercase tracking-wide text-[#0F2B5C] transition hover:bg-[#0F2B5C] hover:text-white"
        >
          {t("contact.cta_btn")}
        </Link>
      </div>
    </section>
  );
}
