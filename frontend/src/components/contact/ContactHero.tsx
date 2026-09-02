import { Mail, Video, MessageSquare } from "lucide-react";
import { WHATSAPP_URL, EMAIL } from "../../content";

export default function ContactHero() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="font-title font-bold text-4xl md:text-5xl text-[#0F2B5C]">
          Bize Ulaşın
        </h1>
        <p className="mt-3 text-lg md:text-xl text-[#0F2B5C]/70 font-medium">
          Keystone Partners&apos;te Görüşme Randevuları
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed">
          Keystone Partners olarak hem yüz yüze hem de online görüşmeler
          gerçekleştirebilirsiniz. Sorularınız ve danışmanlık talepleriniz için
          bizimle{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#0F2B5C] font-semibold underline underline-offset-2 hover:text-[#5B9BD5]"
          >
            {EMAIL}
          </a>{" "}
          adresinden dilediğiniz zaman iletişime geçebilirsiniz.
        </p>

        {/* Quick contact cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#5B9BD5]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF3FA] text-[#0F2B5C] transition group-hover:bg-[#0F2B5C] group-hover:text-white">
              <Mail className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold text-[#0F2B5C]">
                Hemen Bize Bir Mail Gönderin
              </span>
              <span className="mt-1 block text-sm text-slate-500">
                {EMAIL}
              </span>
            </span>
          </a>

          <a
            href="/iletisim#contact-form"
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#5B9BD5]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF3FA] text-[#0F2B5C] transition group-hover:bg-[#0F2B5C] group-hover:text-white">
              <Video className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold text-[#0F2B5C]">
                15 Dakikalık Ücretsiz Görüşme Planlayın
              </span>
              <span className="mt-1 block text-sm text-slate-500">
                Online video görüşmesi
              </span>
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#25D366]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF3FA] text-[#0F2B5C] transition group-hover:bg-[#25D366] group-hover:text-white">
              <MessageSquare className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold text-[#0F2B5C]">
                Hemen Bize Bir Mesaj Gönderin
              </span>
              <span className="mt-1 block text-sm text-slate-500">
                WhatsApp üzerinden
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
