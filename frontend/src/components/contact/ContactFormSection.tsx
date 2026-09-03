import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { officesData } from "../../data/officesData";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "./SocialIcons";

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export default function ContactFormSection() {
  const { t } = useTranslation();
  const countries = officesData.map((o) => o.country);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact-form" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form (2/3) */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-10">
            <h2 className="font-title text-2xl font-bold text-[#0F2B5C]">
              {t("contact.form_title")}
            </h2>

            {sent ? (
              <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 text-green-700">
                {t("contact.form_success")}
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      {t("contact.form_name")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20"
                      placeholder={t("contact.form_name_placeholder")}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      {t("contact.form_phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20"
                      placeholder="+90 ___ ___ ____"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      {t("contact.form_country")}
                    </label>
                    <select
                      defaultValue="Macaristan"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      {t("contact.form_email")}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20"
                      placeholder="ornek@eposta.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {t("contact.form_message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20"
                    placeholder={t("contact.form_message_placeholder")}
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex h-[78px] w-[304px] max-w-full items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  reCAPTCHA
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0F2B5C] px-8 py-3 font-semibold uppercase tracking-wide text-white transition hover:bg-[#0d234d]"
                >
                  <Send className="h-4 w-4" />
                  {t("contact.form_submit")}
                </button>
              </form>
            )}
          </div>

          {/* Socials (1/3) */}
          <div className="rounded-2xl border border-slate-200 bg-[#0F2B5C] p-8 text-white">
            <h3 className="font-title text-2xl font-bold">Keystone Partners</h3>
            <p className="mt-3 text-sm text-white/70">
              {t("contact.form_social_desc")}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#5B9BD5]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
