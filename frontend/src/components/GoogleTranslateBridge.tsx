import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
            multilanguagePage: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const RTL_LANGUAGES = new Set(["ar"]);

const LOCALE_TO_GOOGLE: Record<string, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  hu: "hu",
  pl: "pl",
  fr: "fr",
  pt: "pt",
  ar: "ar",
  cs: "cs",
  ru: "ru",
  et: "et",
  zh: "zh-CN",
  sr: "sr",
};

/**
 * Applies RTL/LTR direction to the document.
 */
function applyDirection(lang: string): void {
  if (RTL_LANGUAGES.has(lang)) {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = lang;
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }
}

/**
 * Sets the Google Translate cookie for persistence.
 */
function setGoogleTranslateCookie(lang: string): void {
  const googleLang = LOCALE_TO_GOOGLE[lang] || lang;
  const cookieValue = `/auto/${googleLang}`;
  document.cookie = `googtrans=${encodeURIComponent(cookieValue)};path=/;max-age=31536000`;
  localStorage.setItem("user_lang", lang);
}

/**
 * Removes the Google Translate cookie.
 */
function removeGoogleTranslateCookie(): void {
  document.cookie = "googtrans=;path=/;max-age=0";
  localStorage.removeItem("user_lang");
}

/**
 * Hook to provide a translate function for the language selector.
 * Uses Google Translate's cookie-based approach with page reload.
 */
export function useGoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const savedLang = localStorage.getItem("user_lang");
    if (savedLang) {
      applyDirection(savedLang);
    }
  }, []);

  const translate = useCallback(async (lang: string) => {
    applyDirection(lang);

    if (lang === "en") {
      removeGoogleTranslateCookie();
      // For English, reload to show original content
      window.location.reload();
      return;
    }

    // For tr and de, use i18next (we have manual translations)
    if (lang === "tr" || lang === "de") {
      try {
        const { default: i18n } = await import("../i18n");
        i18n.changeLanguage(lang);
        removeGoogleTranslateCookie();
        return;
      } catch {
        // Fall through to Google Translate
      }
    }

    // For all other languages, use Google Translate cookie + reload
    setGoogleTranslateCookie(lang);
    window.location.reload();
  }, []);

  return { translate };
}

export { applyDirection, LOCALE_TO_GOOGLE, RTL_LANGUAGES };
