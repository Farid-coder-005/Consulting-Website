import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  labelKey: string;
  headerKey: string;
  to: string;
  items: { labelKey: string; to: string }[];
};

const sirketKurulusuMega: MegaCategory[] = [
  {
    labelKey: "mega.intl.label",
    headerKey: "mega.intl.header",
    to: "/sirket-kurulusu",
    items: [
      { labelKey: "mega.intl.i1", to: "/sirket-kurulusu" },
      { labelKey: "mega.intl.i2", to: "/sirket-kurulusu" },
      { labelKey: "mega.intl.i3", to: "/sirket-kurulusu" },
      { labelKey: "mega.intl.i4", to: "/sirket-kurulusu" },
      { labelKey: "mega.intl.i5", to: "/sirket-kurulusu" },
    ],
  },
  {
    labelKey: "mega.europe.label",
    headerKey: "mega.europe.header",
    to: "/sirket-kurulusu",
    items: [
      { labelKey: "mega.europe.i1", to: "/sirket-kurulusu" },
      { labelKey: "mega.europe.i2", to: "/sirket-kurulusu" },
      { labelKey: "mega.europe.i3", to: "/sirket-kurulusu" },
      { labelKey: "mega.europe.i4", to: "/sirket-kurulusu" },
      { labelKey: "mega.europe.i5", to: "/sirket-kurulusu" },
    ],
  },
  {
    labelKey: "mega.germany.label",
    headerKey: "mega.germany.header",
    to: "/sirket-kurulusu/almanya",
    items: [
      { labelKey: "mega.germany.i1", to: "/sirket-kurulusu/almanya" },
      { labelKey: "mega.germany.i2", to: "/sirket-kurulusu/almanya" },
      { labelKey: "mega.germany.i3", to: "/sirket-kurulusu/almanya" },
      { labelKey: "mega.germany.i4", to: "/sirket-kurulusu/almanya" },
      { labelKey: "mega.germany.i5", to: "/sirket-kurulusu/almanya" },
    ],
  },
  {
    labelKey: "mega.serbia.label",
    headerKey: "mega.serbia.header",
    to: "/sirket-kurulusu/sirbistan",
    items: [
      { labelKey: "mega.serbia.i1", to: "/sirket-kurulusu/sirbistan" },
      { labelKey: "mega.serbia.i2", to: "/sirket-kurulusu/sirbistan" },
      { labelKey: "mega.serbia.i3", to: "/sirket-kurulusu/sirbistan" },
      { labelKey: "mega.serbia.i4", to: "/sirket-kurulusu/sirbistan" },
    ],
  },
  {
    labelKey: "mega.poland.label",
    headerKey: "mega.poland.header",
    to: "/sirket-kurulusu/polonya",
    items: [
      { labelKey: "mega.poland.i1", to: "/sirket-kurulusu/polonya" },
      { labelKey: "mega.poland.i2", to: "/sirket-kurulusu/polonya" },
      { labelKey: "mega.poland.i3", to: "/sirket-kurulusu/polonya" },
      { labelKey: "mega.poland.i4", to: "/sirket-kurulusu/polonya" },
      { labelKey: "mega.poland.i5", to: "/sirket-kurulusu/polonya" },
    ],
  },
  {
    labelKey: "mega.czech.label",
    headerKey: "mega.czech.header",
    to: "/sirket-kurulusu/cek-cumhuriyeti",
    items: [
      { labelKey: "mega.czech.i1", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { labelKey: "mega.czech.i2", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { labelKey: "mega.czech.i3", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { labelKey: "mega.czech.i4", to: "/sirket-kurulusu/cek-cumhuriyeti" },
    ],
  },
  {
    labelKey: "mega.estonia.label",
    headerKey: "mega.estonia.header",
    to: "/sirket-kurulusu/estonya",
    items: [
      { labelKey: "mega.estonia.i1", to: "/sirket-kurulusu/estonya" },
      { labelKey: "mega.estonia.i2", to: "/sirket-kurulusu/estonya" },
      { labelKey: "mega.estonia.i3", to: "/sirket-kurulusu/estonya" },
      { labelKey: "mega.estonia.i4", to: "/sirket-kurulusu/estonya" },
    ],
  },
  {
    labelKey: "mega.hungary.label",
    headerKey: "mega.hungary.header",
    to: "/sirket-kurulusu/macaristan",
    items: [
      { labelKey: "mega.hungary.i1", to: "/sirket-kurulusu/macaristan" },
      { labelKey: "mega.hungary.i2", to: "/sirket-kurulusu/macaristan" },
      { labelKey: "mega.hungary.i3", to: "/sirket-kurulusu/macaristan" },
      { labelKey: "mega.hungary.i4", to: "/sirket-kurulusu/macaristan" },
    ],
  },
  {
    labelKey: "mega.dubai.label",
    headerKey: "mega.dubai.header",
    to: "/sirket-kurulusu/dubai",
    items: [
      { labelKey: "mega.dubai.i1", to: "/sirket-kurulusu/dubai" },
      { labelKey: "mega.dubai.i2", to: "/sirket-kurulusu/dubai" },
      { labelKey: "mega.dubai.i3", to: "/sirket-kurulusu/dubai" },
      { labelKey: "mega.dubai.i4", to: "/sirket-kurulusu/dubai" },
      { labelKey: "mega.dubai.i5", to: "/sirket-kurulusu/dubai" },
    ],
  },
];

const faaliyetDropdown = [
  { labelKey: "faaliyet.i1", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i2", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i3", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i4", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i5", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i6", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i7", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i8", to: "/faaliyet-alanlarimiz" },
  { labelKey: "faaliyet.i9", to: "/faaliyet-alanlarimiz" },
];

const hakkimizdaDropdown = [
  { labelKey: "about_menu.i1", to: "/hakkimizda" },
  { labelKey: "about_menu.i2", to: "/iletisim" },
  { labelKey: "about_menu.i3", to: "/hakkimizda" },
  { labelKey: "about_menu.i4", to: "/hakkimizda" },
  { labelKey: "about_menu.i5", to: "/blog" },
  { labelKey: "about_menu.i6", to: "/hakkimizda" },
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
  items: { labelKey: string; to: string }[];
  widthClass?: string;
  onMouseEnter: () => void;
  itemRef: (el: HTMLAnchorElement | null) => void;
}) {
  const { t } = useTranslation();
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
              key={child.labelKey}
              to={child.to}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`block whitespace-nowrap px-5 py-2.5 text-sm transition ${
                activeIdx === i
                  ? "bg-[#0B1E3D] text-white font-bold rounded-xl mx-1"
                  : "text-[#2C3E50] hover:text-[#0B1E3D]"
              }`}
            >
              {t(child.labelKey)}
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
  const { t } = useTranslation();
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
                key={cat.labelKey}
                type="button"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`block w-full text-left px-4 py-2.5 text-sm transition ${
                  i === activeIdx
                    ? "bg-[#0B1E3D] text-white font-bold rounded-xl"
                    : "text-[#2C3E50] hover:text-[#0B1E3D] hover:font-medium"
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
          <div className="pl-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0B1E3D]">
              {t(current.headerKey)}
            </h4>
            <ul className="space-y-2">
              {current.items.map((it) => (
                <li key={it.labelKey}>
                  <Link
                    to={it.to}
                    className="block text-sm text-[#4a5568] transition hover:font-medium hover:text-[#0B1E3D]"
                  >
                    {t(it.labelKey)}
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
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobil menü">
      <Link to="/" onClick={onClose} className={mobileLinkClass(active("/"))}>
        {t("nav.home")}
      </Link>

      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 rounded hover:bg-slate-100 cursor-pointer list-none uppercase font-bold text-[13px] tracking-[0.6px]">
          {t("nav.company_formation")}
          <ChevronDownIcon className="w-4 h-4" />
        </summary>
        <div className="pl-4 py-1">
          {sirketKurulusuMega.map((c) => (
            <Link
              key={c.labelKey}
              to={c.to}
              onClick={onClose}
              className="block px-3 py-2 text-sm hover:bg-slate-100 hover:text-[#1A2B4C] transition"
            >
              {t(c.labelKey)}
            </Link>
          ))}
        </div>
      </details>

      <Link
        to="/faaliyet-alanlarimiz"
        onClick={onClose}
        className={mobileLinkClass(active("/faaliyet-alanlarimiz"))}
      >
        {t("nav.services")}
      </Link>

      <Link
        to="/vergi-ve-danismanlik"
        onClick={onClose}
        className={mobileLinkClass(active("/vergi-ve-danismanlik"))}
      >
        {t("nav.tax")}
      </Link>
      <Link
        to="/yatirim"
        onClick={onClose}
        className={mobileLinkClass(active("/yatirim"))}
      >
        {t("nav.investment")}
      </Link>
      <Link to="/blog" onClick={onClose} className={mobileLinkClass(active("/blog"))}>
        {t("nav.blog")}
      </Link>

      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 rounded hover:bg-slate-100 cursor-pointer list-none uppercase font-bold text-[13px] tracking-[0.6px]">
          {t("nav.about")}
          <ChevronDownIcon className="w-4 h-4" />
        </summary>
        <div className="pl-4 py-1">
          {hakkimizdaDropdown.map((c) => (
            <Link
              key={c.labelKey}
              to={c.to}
              onClick={onClose}
              className="block px-3 py-2 text-sm hover:bg-slate-100 hover:text-[#1A2B4C] transition"
            >
              {t(c.labelKey)}
            </Link>
          ))}
        </div>
      </details>

      <Link
        to="/iletisim"
        onClick={onClose}
        className={mobileLinkClass(active("/iletisim"))}
      >
        {t("nav.contact")}
      </Link>
    </nav>
  );
}

/* ─── Header ──────────────────────────────────────────────────── */

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(() => {
    const saved = localStorage.getItem("i18nextLng");
    return languages.find((l) => l.locale === saved) || languages[1];
  });
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
                          i18n.changeLanguage(lang.locale);
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
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={LOGO_URL}
              alt="KeyStone Quality Partners"
              className="h-28 w-auto mr-10 object-contain"
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
              {t("nav.home")}
            </Link>

            {/* 2. Şirket Kuruluşu (mega menu) */}
            <DesktopMegaMenu
              label={t("nav.company_formation")}
              to="/sirket-kurulusu"
              categories={sirketKurulusuMega}
              onMouseEnter={() => setHoveredPath("/sirket-kurulusu")}
              itemRef={setItemRef("/sirket-kurulusu")}
            />

            {/* 3. Faaliyet Alanlarımız (dropdown) */}
            <DesktopDropdown
              label={t("nav.services")}
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
              {t("nav.tax")}
            </Link>

            {/* 5. Yatırım */}
            <Link
              ref={setItemRef("/yatirim")}
              to="/yatirim"
              onMouseEnter={() => setHoveredPath("/yatirim")}
              className={navLinkClass(activeHref === "/yatirim")}
            >
              {t("nav.investment")}
            </Link>

            {/* 6. Blog */}
            <Link
              ref={setItemRef("/blog")}
              to="/blog"
              onMouseEnter={() => setHoveredPath("/blog")}
              className={navLinkClass(activeHref === "/blog")}
            >
              {t("nav.blog")}
            </Link>

            {/* 7. Hakkımızda (dropdown) */}
            <DesktopDropdown
              label={t("nav.about")}
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
              {t("nav.contact")}
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
