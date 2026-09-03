import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CompanyFormation from "./pages/CompanyFormation";
import NotFound from "./pages/NotFound";
import Vergi from "./pages/Vergi";
import Yatirim from "./pages/Yatirim";
import Blog from "./pages/Blog";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import FaaliyetAlanlari from "./pages/FaaliyetAlanlari";
import { ArrowUpIcon } from "./components/icons";
import FloatingWidgets from "./components/FloatingWidgets";
import { applyDirection } from "./components/GoogleTranslateBridge";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/iletisim") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

/**
 * Google Translate initialization component.
 * Loads the Google Translate script and applies saved language on mount.
 */
function GoogleTranslateInit() {
  useEffect(() => {
    const savedLang = localStorage.getItem("user_lang");

    // Apply RTL direction if needed
    if (savedLang) {
      applyDirection(savedLang);
    }

    // Initialize Google Translate element
    window.googleTranslateElementInit = () => {
      new window.google!.translate!.TranslateElement(
        {
          pageLanguage: "auto",
          includedLanguages:
            "en,tr,de,hu,pl,fr,pt,ar,cs,ru,et,zh-CN,sr",
          layout: 0,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
    };

    // Load the Google Translate script
    const existingScript = document.querySelector(
      `script[src*="translate.google.com/translate_a/element.js"]`
    );
    if (!existingScript) {
      const s = document.createElement("script");
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
      }}
    />
  );
}

export default function App() {
  const { t } = useTranslation();
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-body text-slate-700">
      <GoogleTranslateInit />
      <Header />
      <ScrollManager />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/sirket-kurulusu" element={<CompanyFormation />} />
            <Route path="/sirket-kurulusu/:slug" element={<CompanyFormation />} />
            <Route path="/vergi-ve-danismanlik" element={<Vergi />} />
            <Route path="/yatirim" element={<Yatirim />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/faaliyet-alanlarimiz" element={<FaaliyetAlanlari />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating bottom-right contact widgets */}
      <FloatingWidgets />

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("common.back_to_top")}
        className={`fixed bottom-6 left-6 z-40 bg-accent text-white w-12 h-12 rounded-full shadow-lg hover:bg-brand transition flex items-center justify-center ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
