import { useState, useEffect, useRef } from "react";
import { WHATSAPP_URL, countries } from "../content";

/* ── SVG Icons ─────────────────────────────────────────── */

function WhatsAppSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Contact Form Modal ───────────────────────────────── */

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 transition" aria-label="Kapat">
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10">
          <form className="space-y-5" noValidate>
            {/* First / Last Name */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-first">First Name</label>
                <input id="c-first" type="text" className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-last">Last Name</label>
                <input id="c-last" type="text" className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-phone">Phone</label>
              <input id="c-phone" type="tel" className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" />
            </div>

            {/* Country / Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-country">Country:</label>
                <select id="c-country" className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" defaultValue="Hungary">
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-email">e-Mail</label>
                <input id="c-email" type="email" className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="c-message">Message</label>
              <textarea id="c-message" rows={5} className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0062E0]" />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-3 bg-[#f9f9f9] max-w-sm">
              <input type="checkbox" id="c-recaptcha" className="w-5 h-5 accent-[#0062E0]" />
              <label htmlFor="c-recaptcha" className="text-sm text-gray-600 flex-1 select-none">Ben robot değilim</label>
              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <span className="w-5 h-5 rounded-full border border-gray-300 bg-white flex items-center justify-center">↻</span>
                reCAPTCHA
              </span>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-[#0f2042] hover:bg-[#162d54] text-white font-semibold py-3.5 rounded transition text-sm tracking-wide">
              SUBMIT
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-6 text-center">
            This form is powered by: <a href="#" className="underline hover:text-gray-600">Sticky Floating Forms Lite</a>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Floating Widgets ────────────────────────────── */

export default function FloatingWidgets() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Contact Form Modal */}
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Vertical "Contact Us" side tab */}
      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed right-0 z-50 bg-[#1d70b8] hover:bg-[#1a63a0] transition text-white font-semibold text-[11px] tracking-wider px-[6px] py-4 shadow-md cursor-pointer"
        style={{ writingMode: "vertical-rl", top: "60%" }}
        aria-label="Contact Us"
      >
        Contact Us
      </button>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <WhatsAppSvg className="h-7 w-7 text-white" />
      </a>
    </>
  );
}
