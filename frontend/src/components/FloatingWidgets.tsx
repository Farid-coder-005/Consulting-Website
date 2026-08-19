import { useState } from "react";
import { WHATSAPP_URL } from "../content";

function WhatsAppSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChatBubbleSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="13" y2="12" />
    </svg>
  );
}

function ArrowLeftSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <WhatsAppSvg className="h-8 w-8 text-white" />
      </a>

      {/* Live chat widget with speech tooltip */}
      <div className="flex items-center gap-3">
        {/* Speech bubble tooltip */}
        {chatOpen && (
          <div className="relative rounded-xl bg-white px-5 py-3 shadow-xl">
            <p className="font-semibold text-[#1f2937] text-sm">Leave us a message!</p>
            <p className="text-[#6b7280] text-xs mt-0.5">How can we help you?</p>
            {/* Right-pointing pointer arrow */}
            <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 translate-x-full border-y-[8px] border-l-[8px] border-y-transparent border-l-white" />
          </div>
        )}

        {/* Live chat button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Canlı Destek"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#0062E0] shadow-lg transition hover:scale-105"
        >
          <ChatBubbleSvg className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* Vertical "Contact Us" side tab */}
      <div className="fixed bottom-[180px] right-0 flex items-center">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a2e] text-white shadow-md transition hover:scale-105 -mr-0 z-10"
          aria-label="Toggle Contact"
        >
          <ArrowLeftSvg className="h-4 w-4" />
        </button>
        <div className="flex items-center justify-center bg-[#1d70b8] py-4 px-2 rounded-l-lg shadow-md" style={{ writingMode: "vertical-rl" }}>
          <span className="text-white font-semibold text-sm tracking-wide">Contact Us</span>
        </div>
      </div>
    </div>
  );
}
