import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "./TopbarSocials";
import { LOGO_URL, languages, socials } from "../content";
import type { LanguageOption } from "../content";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  mail: MailIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

const NAV_TEXT = "#2B3E50";
const NAV_ACTIVE = "#0F2B5C";

const navLinkClass = (active: boolean) =>
  `h-[85px] flex items-center uppercase font-semibold text-[13px] tracking-wide whitespace-nowrap transition-colors duration-200 ease-in-out ${
    active
      ? `text-[${NAV_ACTIVE}]`
      : `text-[${NAV_TEXT}] hover:text-[${NAV_ACTIVE}]`
  }`;

const mobileLinkClass = (active: boolean) =>
  `block px-3 py-2 uppercase font-semibold text-[13px] tracking-wide whitespace-nowrap transition-colors duration-200 ease-in-out ${
    active
      ? `text-[${NAV_ACTIVE}]`
      : `text-[${NAV_TEXT}] hover:text-[${NAV_ACTIVE}]`
  }`;

const dropdownItemClass =
  `h-[85px] flex items-center uppercase font-semibold text-[13px] tracking-wide whitespace-nowrap transition-colors duration-200 ease-in-out text-[${NAV_TEXT}] hover:text-[${NAV_ACTIVE}]`;

type MegaCategory = {
  label: string;
  header: string;
  to: string;
  items: { label: string; to: string }[];
};

const sirketKurulusuMega: MegaCategory[] = [
  {
    label: "Uluslararası Şirketleşme",
    header: "ULUSLARARASI ŞİRKETLEŞME",
    to: "/sirket-kurulusu",
    items: [
      { label: "Uluslararası Şirket Kuruluşunda İlk Adımlar", to: "/sirket-kurulusu" },
      { label: "Hangi Ülkeyi Seçmelisiniz?", to: "/sirket-kurulusu" },
      { label: "Yabancı Yatırımcılar İçin Yasal Süreçler", to: "/sirket-kurulusu" },
      { label: "Vergi Anlaşmaları ve Çifte Vergilendirme", to: "/sirket-kurulusu" },
      { label: "Uluslararası Banka Hesabı Açmak", to: "/sirket-kurulusu" },
    ],
  },
  {
    label: "Avrupa'da Şirket Kurmak",
    header: "AVRUPA'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu",
    items: [
      { label: "Avrupa'da Şirket Kurmanın Avantajları", to: "/sirket-kurulusu" },
      { label: "AB Üye Ülkelerinde Şirket Kurma Rehberi", to: "/sirket-kurulusu" },
      { label: "Avrupa'da Vergi Oranları ve Teşvikler", to: "/sirket-kurulusu" },
      { label: "Avrupa Banka Hesabı Açılış Süreçleri", to: "/sirket-kurulusu" },
      { label: "AB Oturum ve Çalışma İzinleri", to: "/sirket-kurulusu" },
    ],
  },
  {
    label: "Almanya'da Şirket Kurmak",
    header: "ALMANYA'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu/almanya",
    items: [
      { label: "Almanya'da Şirket Kurmak İçin Gerekli Belgeler", to: "/sirket-kurulusu/almanya" },
      { label: "Almanya GmbH Şirket Kuruluşu", to: "/sirket-kurulusu/almanya" },
      { label: "Almanya'da Banka Hesabı Açmak", to: "/sirket-kurulusu/almanya" },
      { label: "Almanya Sanal Ofis ve Adres Temini", to: "/sirket-kurulusu/almanya" },
      { label: "Almanya Oturum İzni", to: "/sirket-kurulusu/almanya" },
    ],
  },
  {
    label: "Sırbistan'da Şirket Kurmak",
    header: "SIRBİSTAN'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu/sirbistan",
    items: [
      { label: "Sırbistan'da Şirket Kurma Avantajları", to: "/sirket-kurulusu/sirbistan" },
      { label: "Sırbistan Banka Hesabı Açılışı", to: "/sirket-kurulusu/sirbistan" },
      { label: "Sırbistan Vergi Sistemi ve Muafiyetler", to: "/sirket-kurulusu/sirbistan" },
      { label: "Sırbistan Oturum ve Çalışma İzni", to: "/sirket-kurulusu/sirbistan" },
    ],
  },
  {
    label: "Polonya'da Şirket Kurmak",
    header: "POLONYA'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu/polonya",
    items: [
      { label: "Polonya'da Şirket Kurmak İçin Gerekli Belgeler", to: "/sirket-kurulusu/polonya" },
      { label: "Polonya Sp. z o.o. Şirket Türü", to: "/sirket-kurulusu/polonya" },
      { label: "Polonya'da Banka Hesabı Açmak", to: "/sirket-kurulusu/polonya" },
      { label: "Polonya Vergi Sistemi ve KDV Kaydı", to: "/sirket-kurulusu/polonya" },
      { label: "Polonya Oturum İzni", to: "/sirket-kurulusu/polonya" },
    ],
  },
  {
    label: "Çek Cumhuriyeti'nde Şirket Kurmak",
    header: "ÇEK CUMHURİYETİ'NDE ŞİRKET KURMAK",
    to: "/sirket-kurulusu/cek-cumhuriyeti",
    items: [
      { label: "Çekya'da Şirket Kuruluş Aşamaları", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { label: "Çekya'da Banka Hesabı Açma", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { label: "Çekya Vergi Avantajları", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { label: "Prag Sanal Ofis Hizmetleri", to: "/sirket-kurulusu/cek-cumhuriyeti" },
    ],
  },
  {
    label: "Estonya'da Şirket Kurmak",
    header: "ESTONYA'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu/estonya",
    items: [
      { label: "E-Residency İle Estonya'da Şirket Kurmak", to: "/sirket-kurulusu/estonya" },
      { label: "Estonya Şirket Kurma Maliyeti", to: "/sirket-kurulusu/estonya" },
      { label: "Estonya Vergi Muafiyetleri (%0 Kurumlar Vergisi)", to: "/sirket-kurulusu/estonya" },
      { label: "Estonya Online Banka Hesabı Açılışı", to: "/sirket-kurulusu/estonya" },
    ],
  },
  {
    label: "Macaristan'da Şirket Kurmak",
    header: "MACARİSTAN'DA ŞİRKET KURMAK",
    to: "/sirket-kurulusu/macaristan",
    items: [
      { label: "Macaristan'da Şirket Kurma Avantajları (%9 Vergi)", to: "/sirket-kurulusu/macaristan" },
      { label: "Macaristan Kft Şirket Kuruluşu", to: "/sirket-kurulusu/macaristan" },
      { label: "Macaristan'da Banka Hesabı Açmak", to: "/sirket-kurulusu/macaristan" },
      { label: "Macaristan AB KDV (VAT) Numarası", to: "/sirket-kurulusu/macaristan" },
    ],
  },
  {
    label: "Dubai'de Şirket Kurmak",
    header: "DUBAİ'DE ŞİRKET KURMAK",
    to: "/sirket-kurulusu/dubai",
    items: [
      { label: "Dubai'de Şirket Kurmak İçin Gerekli Belgeler", to: "/sirket-kurulusu/dubai" },
      { label: "Dubai Serbest Bölge Avantajları Nelerdir?", to: "/sirket-kurulusu/dubai" },
      { label: "Dubai Serbest Bölge Listesi", to: "/sirket-kurulusu/dubai" },
      { label: "Dubai'de Banka Hesabı Açmak", to: "/sirket-kurulusu/dubai" },
      { label: "Dubai'de Şirket Türleri", to: "/sirket-kurulusu/dubai" },
    ],
  },
];

const faaliyetDropdown = [
  { label: "Bilişim Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Birleşme & Devralmalar", to: "/faaliyet-alanlarimiz" },
  { label: "Blockchain Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Fikri Mülkiyet Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Gayrimenkul Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Göçmenlik Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Şirket Göçü", to: "/faaliyet-alanlarimiz" },
  { label: "Ticaret & Şirketler Hukuku", to: "/faaliyet-alanlarimiz" },
  { label: "Uluslararası Vergi Danışmanlığı", to: "/faaliyet-alanlarimiz" },
];

const hakkimizdaDropdown = [
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Hizmet Noktalarımız", to: "/iletisim" },
  { label: "Ekibimiz", to: "/hakkimizda" },
  { label: "Referanslarımız", to: "/hakkimizda" },
  { label: "Haberler", to: "/blog" },
  { label: "Kariyer", to: "/hakkimizda" },
];

/* ─── Desktop Dropdown ────────────────────────────────────────── */

function DesktopDropdown({
  label,
  to,
  items,
  widthClass = "w-64",
  onMouseEnter,
  itemRef,
}: {
  label: string;
  to: string;
  items: { label: string; to: string }[];
  widthClass?: string;
  onMouseEnter: () => void;
  itemRef: (el: HTMLAnchorElement | null) => void;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div
      className="relative h-[85px] flex items-center group/dropdown"
      onMouseEnter={onMouseEnter}
    >
      <Link ref={itemRef} to={to} className={dropdownItemClass}>
        <span className="flex items-center gap-1.5">
          {label}
          <ChevronDownIcon className="w-[11px] h-[11px] text-[#666666]" />
        </span>
      </Link>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full ${widthClass} bg-white rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition z-40 mt-2`}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
        <div className="relative">
          {items.map((child, i) => (
            <Link
              key={child.label}
              to={child.to}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`block whitespace-nowrap px-5 py-2.5 text-sm transition ${
                activeIdx === i
                  ? "bg-[#0B1E3D] text-white font-bold rounded-xl mx-1"
                  : "text-[#2C3E50] hover:text-[#0B1E3D]"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Desktop Mega Menu ───────────────────────────────────────── */

function DesktopMegaMenu({
  label,
  to,
  categories,
  onMouseEnter,
  itemRef,
}: {
  label: string;
  to: string;
  categories: MegaCategory[];
  onMouseEnter: () => void;
  itemRef: (el: HTMLAnchorElement | null) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = categories[activeIdx];

  return (
    <div
      className="relative h-[85px] flex items-center group/dropdown"
      onMouseEnter={onMouseEnter}
    >
      <Link ref={itemRef} to={to} className={dropdownItemClass}>
        <span className="flex items-center gap-1.5">
          {label}
          <ChevronDownIcon className="w-[11px] h-[11px] text-[#666666]" />
        </span>
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition z-40 mt-2">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
        <div className="relative grid grid-cols-2 gap-6">
          <div className="space-y-1">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`block w-full text-left px-4 py-2.5 text-sm transition ${
                  i === activeIdx
                    ? "bg-[#0B1E3D] text-white font-bold rounded-xl"
                    : "text-[#2C3E50] hover:text-[#0B1E3D] hover:font-medium"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="pl-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0B1E3D]">
              {current.header}
            </h4>
            <ul className="space-y-2">
              {current.items.map((it) => (
                <li key={it.label}>
                  <Link
                    to={it.to}
                    className="block text-sm text-[#4a5568] transition hover:font-medium hover:text-[#0B1E3D]"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Nav ──────────────────────────────────────────────── */

function MobileNav({ onClose }: { onClose: () => void }) {
  const { pathname } = useLocation();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobil menü">
      <Link to="/" onClick={onClose} className={mobileLinkClass(active("/"))}>
        ANA SAYFA
      </Link>

      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 rounded hover:bg-slate-100 cursor-pointer list-none uppercase font-bold text-[13px] tracking-[0.6px]">
          ŞİRKET KURULUŞU
          <ChevronDownIcon className="w-4 h-4" />
        </summary>
        <div className="pl-4 py-1">
          {sirketKurulusuMega.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              onClick={onClose}
              className="block px-3 py-2 text-sm hover:bg-slate-100 hover:text-[#1A2B4C] transition"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </details>

      <Link
        to="/faaliyet-alanlarimiz"
        onClick={onClose}
        className={mobileLinkClass(active("/faaliyet-alanlarimiz"))}
      >
        FAALİYET ALANLARIMIZ
      </Link>

      <Link
        to="/vergi-ve-danismanlik"
        onClick={onClose}
        className={mobileLinkClass(active("/vergi-ve-danismanlik"))}
      >
        VERGİ VE DANIŞMANLIK
      </Link>
      <Link
        to="/yatirim"
        onClick={onClose}
        className={mobileLinkClass(active("/yatirim"))}
      >
        YATIRIM
      </Link>
      <Link to="/blog" onClick={onClose} className={mobileLinkClass(active("/blog"))}>
        BLOG
      </Link>

      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 rounded hover:bg-slate-100 cursor-pointer list-none uppercase font-bold text-[13px] tracking-[0.6px]">
          HAKKIMIZDA
          <ChevronDownIcon className="w-4 h-4" />
        </summary>
        <div className="pl-4 py-1">
          {hakkimizdaDropdown.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              onClick={onClose}
              className="block px-3 py-2 text-sm hover:bg-slate-100 hover:text-[#1A2B4C] transition"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </details>

      <Link
        to="/iletisim"
        onClick={onClose}
        className={mobileLinkClass(active("/iletisim"))}
      >
        İLETİŞİM
      </Link>
    </nav>
  );
}

/* ─── Header ──────────────────────────────────────────────────── */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(languages[1]);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const langRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const { pathname } = useLocation();

  const activeHref = useMemo(() => {
    if (pathname === "/") return "/";
    if (pathname.startsWith("/sirket-kurulusu")) return "/sirket-kurulusu";
    return pathname;
  }, [pathname]);

  const indicatorHref = hoveredPath ?? activeHref;

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    ready: false,
  });

  const updateIndicator = useCallback(() => {
    const el = itemRefs.current.get(indicatorHref);
    const container = navRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      const textTopOffset = (itemRect.height - 16) / 2;
      setIndicatorStyle({
        left: itemRect.left - containerRect.left,
        top: textTopOffset - 9,
        width: itemRect.width,
        ready: true,
      });
    }
  }, [indicatorHref]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateIndicator]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const setItemRef = useCallback(
    (href: string) => (el: HTMLAnchorElement | null) => {
      if (el) itemRefs.current.set(href, el);
    },
    [],
  );

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-brand text-white text-[11px]">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-7">
          <div className="hidden sm:block" />

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-white hover:text-accent-light transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <span className="hidden sm:block w-[1px] h-4 bg-white/30 mx-2" />

            <div className="relative" ref={langRef}>
              <button
                type="button"
                className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-white uppercase hover:text-accent-light transition"
                aria-haspopup="true"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <img
                  src={selectedLang.flag}
                  alt={selectedLang.name}
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>{selectedLang.name}</span>
                <ChevronDownIcon className="w-3 h-3" />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 w-44 bg-white text-brand rounded shadow-lg py-1 z-50 max-h-72 overflow-auto">
                  {languages.map((lang) => (
                    <li key={lang.locale}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-slate-100 transition flex items-center gap-2 ${
                          selectedLang.locale === lang.locale ? "bg-slate-50 font-semibold" : ""
                        }`}
                      >
                        <img
                          src={lang.flag}
                          alt=""
                          className="w-5 h-4 object-cover rounded-sm"
                        />
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto px-[50px] w-full flex items-center justify-between h-[85px]">
          <Link to="/" className="shrink-0">
            <img
              src={LOGO_URL}
              alt="KeyStone Quality Partners"
              className="w-[180px] h-auto mr-10 object-contain"
            />
          </Link>

          <nav
            ref={navRef}
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center gap-x-[22px] ml-auto relative"
            aria-label="Ana menü"
          >
            {/* ── Animated indicator line ── */}
            <span
              className="absolute h-[3px] bg-[#0F2B5C] transition-all duration-300 ease-in-out z-50 pointer-events-none"
              style={{
                left: indicatorStyle.left,
                top: indicatorStyle.top,
                width: indicatorStyle.width,
                opacity: indicatorStyle.ready ? 1 : 0,
              }}
            />

            {/* 1. Ana Sayfa */}
            <Link
              ref={setItemRef("/")}
              to="/"
              onMouseEnter={() => setHoveredPath("/")}
              className={navLinkClass(activeHref === "/")}
            >
              ANA SAYFA
            </Link>

            {/* 2. Şirket Kuruluşu (mega menu) */}
            <DesktopMegaMenu
              label="ŞİRKET KURULUŞU"
              to="/sirket-kurulusu"
              categories={sirketKurulusuMega}
              onMouseEnter={() => setHoveredPath("/sirket-kurulusu")}
              itemRef={setItemRef("/sirket-kurulusu")}
            />

            {/* 3. Faaliyet Alanlarımız (dropdown) */}
            <DesktopDropdown
              label="FAALİYET ALANLARIMIZ"
              to="/faaliyet-alanlarimiz"
              widthClass="w-80"
              items={faaliyetDropdown}
              onMouseEnter={() => setHoveredPath("/faaliyet-alanlarimiz")}
              itemRef={setItemRef("/faaliyet-alanlarimiz")}
            />

            {/* 4. Vergi ve Danışmanlık */}
            <Link
              ref={setItemRef("/vergi-ve-danismanlik")}
              to="/vergi-ve-danismanlik"
              onMouseEnter={() => setHoveredPath("/vergi-ve-danismanlik")}
              className={navLinkClass(activeHref === "/vergi-ve-danismanlik")}
            >
              VERGİ VE DANIŞMANLIK
            </Link>

            {/* 5. Yatırım */}
            <Link
              ref={setItemRef("/yatirim")}
              to="/yatirim"
              onMouseEnter={() => setHoveredPath("/yatirim")}
              className={navLinkClass(activeHref === "/yatirim")}
            >
              YATIRIM
            </Link>

            {/* 6. Blog */}
            <Link
              ref={setItemRef("/blog")}
              to="/blog"
              onMouseEnter={() => setHoveredPath("/blog")}
              className={navLinkClass(activeHref === "/blog")}
            >
              BLOG
            </Link>

            {/* 7. Hakkımızda (dropdown) */}
            <DesktopDropdown
              label="HAKKIMIZDA"
              to="/hakkimizda"
              items={hakkimizdaDropdown}
              onMouseEnter={() => setHoveredPath("/hakkimizda")}
              itemRef={setItemRef("/hakkimizda")}
            />

            {/* 8. İletişim */}
            <Link
              ref={setItemRef("/iletisim")}
              to="/iletisim"
              onMouseEnter={() => setHoveredPath("/iletisim")}
              className={navLinkClass(activeHref === "/iletisim")}
            >
              İLETİŞİM
            </Link>
          </nav>

          <div className="flex items-center">
            <span className="ml-[25px] w-[1px] h-5 bg-slate-200" />
            <button
              type="button"
              className="ml-[25px] text-[#2B3E50] hover:text-[#0F2B5C] transition"
              aria-label="Ara"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="lg:hidden ml-[25px] text-[#333333] hover:text-[#1A2B4C] transition"
              aria-label="Menü"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search panel */}
        {searchOpen && (
          <div className="border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 py-4">
              <form className="flex gap-2" role="search">
                <input
                  type="search"
                  placeholder="Aramak istediğiniz kelimeyi yazın…"
                  className="flex-1 border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="bg-accent text-white px-5 rounded hover:bg-brand transition"
                >
                  Ara
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b">
              <span className="font-sans font-bold text-brand">Menü</span>
              <button
                type="button"
                className="text-brand"
                aria-label="Kapat"
                onClick={() => setMobileOpen(false)}
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <MobileNav onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}
