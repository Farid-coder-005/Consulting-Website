import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "../content";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp floating button (top) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>

      {/* Live chat widget with speech tooltip (bottom) */}
      <div className="flex items-center gap-3">
        {/* Speech bubble tooltip (left) */}
        <div className="relative rounded-xl bg-white px-4 py-2.5 shadow-xl">
          <p className="font-semibold text-slate-800 text-sm">Çevrimiçiyiz!</p>
          <p className="text-slate-500 text-xs">How can we help you?</p>
          {/* Right-pointing pointer arrow */}
          <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 translate-x-full border-y-[8px] border-l-[8px] border-y-transparent border-l-white" />
        </div>

        {/* Live chat button (right) */}
        <Link
          to="/iletisim"
          aria-label="Canlı Destek"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0062E0] shadow-lg transition hover:scale-105"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Link>
      </div>
    </div>
  );
}
