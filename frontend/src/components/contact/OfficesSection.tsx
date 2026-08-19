import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { officesData } from "../../data/officesData";

export default function OfficesSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-title text-3xl font-bold text-[#0F2B5C] md:text-4xl">
            Hizmet Verdiğimiz Noktalar
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#5B9BD5]" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {officesData.map((office, index) => (
            <div
              key={office.id}
              className={`grid gap-6 p-6 md:grid-cols-3 md:gap-8 md:p-8 ${
                index % 2 === 0 ? "bg-white" : "bg-[#EBF3FA]"
              }`}
            >
              {/* Column 1: City image + flag badge */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={office.imageUrl}
                  alt={`${office.city}, ${office.country}`}
                  className="h-48 w-full object-cover md:h-full"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow">
                  <img
                    src={office.flagUrl}
                    alt={office.country}
                    className="h-4 w-6 rounded-sm object-cover"
                  />
                  <span className="text-sm font-semibold text-[#0F2B5C]">
                    {office.city}, {office.country}
                  </span>
                </div>
              </div>

              {/* Column 2: Office details */}
              <div className="flex flex-col justify-center">
                <h3 className="font-title text-xl font-bold text-[#0F2B5C]">
                  {office.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#5B9BD5]" />
                    <span>{office.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#5B9BD5]" />
                    <span>
                      <span className="block">{office.phone}</span>
                      <span className="block text-slate-500">
                        {office.turkishPhoneInfo}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#5B9BD5]" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-[#5B9BD5]"
                    >
                      {office.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#5B9BD5]" />
                    <span>{office.workingHours}</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Map embed */}
              <div className="flex flex-col">
                <div className="h-48 overflow-hidden rounded-xl border border-slate-200 md:flex-1">
                  <iframe
                    title={`${office.city} harita`}
                    src={office.mapEmbedUrl}
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
                <a
                  href={office.mapExternalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-[#0F2B5C] px-4 py-2 text-sm font-semibold text-[#0F2B5C] transition hover:bg-[#0F2B5C] hover:text-white"
                >
                  Haritalar&apos;da aç
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
