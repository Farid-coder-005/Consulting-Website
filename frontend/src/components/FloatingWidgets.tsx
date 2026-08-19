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

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
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

function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="13" y2="12" />
    </svg>
  );
}

function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

/* ── Live Chat Widget Popup ───────────────────────────── */

function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="absolute bottom-[70px] right-0 w-[340px] rounded-2xl shadow-2xl overflow-hidden bg-white z-[90]">
      {/* Header */}
      <div className="bg-[#0066CC] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded-full p-2">
            <ChatIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-base">Görüşme(ler)</span>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white transition" aria-label="Küçült">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Body */}
      <div className="px-5 py-8 flex flex-col items-center text-center">
        {/* Ghost chat illustration */}
        <div className="mb-5 opacity-30">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
            <ellipse cx="45" cy="55" rx="30" ry="28" fill="#ccc" />
            <ellipse cx="75" cy="60" rx="22" ry="20" fill="#ddd" />
            <circle cx="38" cy="50" r="3" fill="#999" />
            <circle cx="52" cy="50" r="3" fill="#999" />
            <path d="M40 58 Q45 63 50 58" stroke="#999" strokeWidth="2" fill="none" />
            <circle cx="70" cy="56" r="2.5" fill="#aaa" />
            <circle cx="80" cy="56" r="2.5" fill="#aaa" />
            <path d="M72 62 Q75 65 78 62" stroke="#aaa" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <p className="text-gray-500 text-sm mb-5">Devam eden sohbet yok</p>

        <button className="flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold px-5 py-2.5 rounded-lg transition text-sm">
          <ChatIcon className="w-4 h-4" />
          Şimdi Sohbet Et
        </button>
      </div>

      {/* Bottom tabs */}
      <div className="border-t border-gray-200 flex">
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-[#0066CC] border-b-2 border-[#0066CC]">
          <MessageSquareIcon className="w-4 h-4" />
          <span className="text-[11px] font-medium">Görüşme</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-400 hover:text-gray-600 transition">
          <HelpCircleIcon className="w-4 h-4" />
          <span className="text-[11px]">SSS</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-400 hover:text-gray-600 transition">
          <FileTextIcon className="w-4 h-4" />
          <span className="text-[11px]">Makaleler</span>
        </button>
      </div>
    </div>
  );
}

/* ── Main Floating Widgets ────────────────────────────── */

export default function FloatingWidgets() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Contact Form Modal */}
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Vertical "Contact Us" side tab */}
      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#1d70b8] hover:bg-[#1a63a0] transition text-white font-semibold text-xs tracking-wider px-2 py-5 rounded-l-lg shadow-lg cursor-pointer"
        style={{ writingMode: "vertical-rl" }}
        aria-label="Contact Us"
      >
        Contact Us
      </button>

      {/* Bottom-right floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
        >
          <WhatsAppSvg className="h-8 w-8 text-white" />
        </a>

        {/* Live Chat button + widget */}
        <div className="relative">
          <ChatWidget open={isChatOpen} onClose={() => setIsChatOpen(false)} />

          {/* Speech bubble tooltip (shown when chat is closed) */}
          {!isChatOpen && (
            <div className="absolute bottom-0 right-[70px] mb-2">
              <div className="relative rounded-xl bg-white px-5 py-3 shadow-xl">
                <p className="font-semibold text-[#1f2937] text-sm">Leave us a message!</p>
                <p className="text-[#6b7280] text-xs mt-0.5">How can we help you?</p>
                <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 translate-x-full border-y-[8px] border-l-[8px] border-y-transparent border-l-white" />
              </div>
            </div>
          )}

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            aria-label="Canlı Destek"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#0062E0] shadow-lg transition hover:scale-105"
          >
            <ChatIcon className="h-7 w-7 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
