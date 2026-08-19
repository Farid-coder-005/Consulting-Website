import { useEffect, useState } from "react";
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

export default function App() {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-body text-slate-700">
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
        aria-label="Yukarı çık"
        className={`fixed bottom-6 left-6 z-40 bg-accent text-white w-12 h-12 rounded-full shadow-lg hover:bg-brand transition flex items-center justify-center ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
