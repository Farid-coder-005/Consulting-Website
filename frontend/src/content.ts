export const LOGO_URL = "/logo2.png";

export const HERO_BG =
  "https://gurcanpartners.com/wp-content/uploads/gurcan-partners-faaliyet-alanlarimiz.jpg";

export const WHATSAPP_URL = "https://wa.me/36705758590";
export const WHATSAPP_NUMBER = "+36 70 575 8590";
export const EMAIL = "info@gurcanpartners.com";

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/gurcanpartners/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/gurcanpartners/", icon: "instagram" },
  { label: "Twitter", href: "https://twitter.com/gurcanpartners", icon: "twitter" },
  { label: "E-posta", href: "mailto:info@gurcanpartners.com", icon: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gurcanpartners/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@gurcanpartners", icon: "youtube" },
] as const;

export type LanguageOption = {
  name: string;
  flag: string;
  locale: string;
};

export const languages: LanguageOption[] = [
  { name: "English", flag: "https://flagcdn.com/w320/gb.png", locale: "en" },
  { name: "Türkçe", flag: "https://flagcdn.com/w320/tr.png", locale: "tr" },
  { name: "Deutsch", flag: "https://flagcdn.com/w320/de.png", locale: "de" },
  { name: "Magyar", flag: "https://flagcdn.com/w320/hu.png", locale: "hu" },
  { name: "Polski", flag: "https://flagcdn.com/w320/pl.png", locale: "pl" },
  { name: "Français", flag: "https://flagcdn.com/w320/fr.png", locale: "fr" },
  { name: "Português", flag: "https://flagcdn.com/w320/pt.png", locale: "pt" },
  { name: "العربية", flag: "https://flagcdn.com/w320/sa.png", locale: "ar" },
  { name: "Čeština", flag: "https://flagcdn.com/w320/cz.png", locale: "cs" },
  { name: "Русский", flag: "https://flagcdn.com/w320/ru.png", locale: "ru" },
  { name: "Eesti", flag: "https://flagcdn.com/w320/ee.png", locale: "et" },
  { name: "中文", flag: "https://flagcdn.com/w320/cn.png", locale: "zh" },
  { name: "Српски", flag: "https://flagcdn.com/w320/rs.png", locale: "sr" },
];

type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", to: "/" },
  {
    label: "Şirket Kuruluşu",
    to: "/sirket-kurulusu",
    children: [
      { label: "Macaristan’da Şirket Kuruluşu", to: "/sirket-kurulusu/macaristan" },
      { label: "Almanya’da Şirket Kuruluşu", to: "/sirket-kurulusu/almanya" },
      { label: "Çek Cumhuriyet’inde Şirket Kuruluşu", to: "/sirket-kurulusu/cek-cumhuriyeti" },
      { label: "Türkiye’de Şirket Kuruluşu", to: "/sirket-kurulusu/turkiye" },
      { label: "Polonya’da Şirket Kuruluşu", to: "/sirket-kurulusu/polonya" },
      { label: "Sırbistan’da Şirket Kuruluşu", to: "/sirket-kurulusu/sirbistan" },
      { label: "Estonya’da Şirket Kuruluşu", to: "/sirket-kurulusu/estonya" },
      { label: "ABD’de Şirket Kuruluşu", to: "/sirket-kurulusu/abd" },
      { label: "Singapur’da Şirket Kuruluşu", to: "/sirket-kurulusu/singapur" },
    ],
  },
  {
    label: "Faaliyet Alanlarımız",
    to: "/",
    children: [
      { label: "BT & Blockchain Hukuku", to: "/#services" },
      { label: "Uluslararası Ticaret Hukuku ve Sözleşmeler", to: "/#services" },
      { label: "Şirket Birleşmeleri ve Satın Almalar", to: "/#services" },
      { label: "Uluslararası Şirketleşme & Kuruluş", to: "/#services" },
      { label: "Gayrimenkul Hukuku ve Yatırım", to: "/#services" },
      { label: "Kurumsal Hizmetler", to: "/#services" },
    ],
  },
  { label: "Vergi ve Danışmanlık", to: "/vergi-ve-danismanlik" },
  { label: "Yatırım", to: "/yatirim" },
  { label: "BLOG", to: "/blog" },
  {
    label: "Hakkımızda",
    to: "/hakkimizda",
    children: [
      { label: "Ekibimiz", to: "/hakkimizda" },
      { label: "Ofislerimiz", to: "/hakkimizda" },
      { label: "Üyeliklerimiz", to: "/hakkimizda" },
    ],
  },
  { label: "İletişim", to: "/#contact" },
];

export const companyFormationSlugs: Record<string, string> = {
  macaristan: "Macaristan’da Şirket Kuruluşu",
  almanya: "Almanya’da Şirket Kuruluşu",
  "cek-cumhuriyeti": "Çek Cumhuriyet’inde Şirket Kuruluşu",
  turkiye: "Türkiye’de Şirket Kuruluşu",
  polonya: "Polonya’da Şirket Kuruluşu",
  sirbistan: "Sırbistan’da Şirket Kuruluşu",
  estonya: "Estonya’da Şirket Kuruluşu",
  abd: "ABD’de Şirket Kuruluşu",
  singapur: "Singapur’da Şirket Kuruluşu",
};

export type Service = { title: string; icon: string; desc: string };
export const services: Service[] = [
  {
    title: "Bilişim & Blockchain Hukuku",
    icon: "https://gurcanpartners.com/wp-content/uploads/BT-ve-Blockchain-Hukuku.png",
    desc: "Dijital dönüşüm süreçlerinde blockchain, kripto varlıklar ve bilişim hukuku alanında uçtan uca danışmanlık.",
  },
  {
    title: "Birleşme & Devralmalar",
    icon: "https://gurcanpartners.com/wp-content/uploads/Birlesme-ve-Devralmalar.webp",
    desc: "M&A süreçlerinde due diligence, yapılandırma ve entegrasyon desteği ile güvenli büyüme.",
  },
  {
    title: "Ticari Uyuşmazlıkların Çözümü",
    icon: "https://gurcanpartners.com/wp-content/uploads/Kurumsal-Hizmetler.webp",
    desc: "Ticari uyuşmazlıklarda arabuluculuk, tahkim ve dava süreçlerinde uçtan uca hukuki çözüm.",
  },
  {
    title: "Uluslararası Şirketleşme & Kuruluş",
    icon: "https://gurcanpartners.com/wp-content/uploads/Uluslararasi-Sirketlesme-Kurulus.webp",
    desc: "Avrupa ve global pazarlarda şirket kuruluşu, yapılandırma ve yasal temsil hizmetleri.",
  },
  {
    title: "Uluslararası Ticaret Hukuku ve Sözleşmeler",
    icon: "https://gurcanpartners.com/wp-content/uploads/Uluslararasi-Ticaret-Hukuku-ve-Sozlesmeler.webp",
    desc: "Sınır ötesi ticarette sözleşme yönetimi, ihracat-ithalat ve gümrük süreçlerinde hukuki güvence.",
  },
  {
    title: "Gayrimenkul Hukuku & Yatırım",
    icon: "https://gurcanpartners.com/wp-content/uploads/Gayrimenkul-Hukuku-ve-Yatirim.png",
    desc: "Taşınmaz yatırımları, kira ve satış süreçlerinde hukuki danışmanlık ve işlem güvenliği.",
  },
];

export type CompanyFormationFeature = {
  title: string;
  image: string;
  to: string;
};

export const companyFormationFeatures: CompanyFormationFeature[] = [
  {
    title: "Uluslararası Şirketleşme",
    image:
      "https://gurcanpartners.com/wp-content/uploads/gurcan-partners-faaliyet-alanlarimiz.jpg",
    to: "/sirket-kurulusu",
  },
  {
    title: "Avrupa'da Şirket Kurmak",
    image: "https://gurcanpartners.com/wp-content/uploads/almanya-1.webp",
    to: "/sirket-kurulusu",
  },
  {
    title: "Dubai'de Şirket Kurmak",
    image: "https://gurcanpartners.com/wp-content/uploads/dubai.webp",
    to: "/sirket-kurulusu",
  },
  {
    title: "Macaristan'da Şirket Kurmak",
    image: "https://gurcanpartners.com/wp-content/uploads/macaristan.webp",
    to: "/sirket-kurulusu",
  },
];

export const stats = [
  { label: "Ülke", value: "10" },
  { label: "Dil", value: "13" },
  { label: "Kurumsal Müşteri", value: "500+" },
];

export const featuredPost = {
  title: "Yazılım Şirketi Nasıl Kurulur? Maliyet ve Gerekli Belgeler",
  image: "/Blog.jpg",
  url: "/blog",
  excerpt:
    "Yazılım şirketi kurmak isteyen girişimciler için gereken yasal süreçler, kuruluş maliyetleri ve hazırlanması gereken belgeler hakkında kapsamlı rehber.",
};

export type Office = {
  country: string;
  city: string;
  title: string;
  image: string;
  flag: string;
};
export const offices: Office[] = [
  {
    country: "Macaristan",
    city: "Budapeşte",
    title: "Macaristan",
    image: "https://gurcanpartners.com/wp-content/uploads/macaristan.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/hungary-2.png",
  },
  {
    country: "Almanya",
    city: "Düsseldorf",
    title: "Almanya",
    image: "https://gurcanpartners.com/wp-content/uploads/almanya-1.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/germany.png",
  },
  {
    country: "Çek Cumhuriyeti",
    city: "Prag",
    title: "Çek Cumhuriyeti",
    image: "https://gurcanpartners.com/wp-content/uploads/prag.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/czech-republic.png",
  },
  {
    country: "Türkiye",
    city: "İstanbul",
    title: "Türkiye",
    image: "https://gurcanpartners.com/wp-content/uploads/turkiye.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/turkey.png",
  },
  {
    country: "Polonya",
    city: "Varşova",
    title: "Polonya",
    image: "https://gurcanpartners.com/wp-content/uploads/polonya.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/poland.png",
  },
  {
    country: "Sırbistan",
    city: "Belgrad",
    title: "Sırbistan",
    image: "https://gurcanpartners.com/wp-content/uploads/sirbistan.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/serbia.png",
  },
  {
    country: "Estonya",
    city: "Tallinn",
    title: "Estonya",
    image: "https://gurcanpartners.com/wp-content/uploads/estonya.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/estonia.png",
  },
  {
    country: "ABD",
    city: "New York",
    title: "Amerika Birleşik Devletleri",
    image: "https://gurcanpartners.com/wp-content/uploads/amerika.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/usa.png",
  },
  {
    country: "Singapur",
    city: "Singapur",
    title: "Singapur",
    image: "https://gurcanpartners.com/wp-content/uploads/singapur.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/singapore.png",
  },
  {
    country: "BAE",
    city: "Dubai",
    title: "Birleşik Arap Emirlikleri",
    image: "https://gurcanpartners.com/wp-content/uploads/dubai.webp",
    flag: "https://gurcanpartners.com/wp-content/uploads/uae.png",
  },
];

export const memberships = [
  { src: "https://gurcanpartners.com/wp-content/uploads/amcham-hungary.png", alt: "AmCham Hungary" },
  { src: "https://gurcanpartners.com/wp-content/uploads/ahk.png", alt: "AHK" },
  { src: "https://gurcanpartners.com/wp-content/uploads/ICC.png", alt: "ICC" },
  { src: "https://gurcanpartners.com/wp-content/uploads/canadian.png", alt: "Canadian Chamber" },
  { src: "https://gurcanpartners.com/wp-content/uploads/thomson-reuters-foundation.png", alt: "Thomson Reuters Foundation" },
  { src: "https://gurcanpartners.com/wp-content/uploads/bcch.png", alt: "BCCH" },
  { src: "https://gurcanpartners.com/wp-content/uploads/aea-1.png", alt: "AEA" },
  { src: "https://gurcanpartners.com/wp-content/uploads/greenwill-3.png", alt: "Greenwill" },
];

export type FaqItem = { q: string; a: string };
export const faqs: FaqItem[] = [
  {
    q: "Yabancı uyruklu kişiler Macaristan’da şirket kurabilir mi?",
    a: "Evet, AB vatandaşı olmayan yabancı uyruklular dahi Macaristan’da limited şirket (Kft.) kurabilir. Kuruluş için yerel bir adres ve yasal temsilci gereklidir.",
  },
  {
    q: "Şirket kuruluşu ne kadar sürer?",
    a: "Gerekli belgeler tamamlandığında Macaristan’da Kft. kuruluşu ortalama 3–5 iş günü içinde tamamlanabilir.",
  },
  {
    q: "Almanya’da şirket kurmak için sermaye şartı nedir?",
    a: "GmbH için minimum 25.000 € sermaye gerekir; kuruluş anında en az 12.500 €’sunun ödenmesi beklenir.",
  },
  {
    q: "Estonya e-Residence ile şirket kurabilir miyim?",
    a: "Evet, Estonya e-Residence kartı ile uzaktan dijital şirket kurulumu mümkündür; tamamen çevrimiçi yönetilebilir.",
  },
  {
    q: "Vergi numarası kuruluş sonrası mı alınır?",
    a: "Şirket ticaret siciline kaydedildikten sonra vergi dairesi otomatik olarak vergi numarası atar; ek başvuru gerekmez.",
  },
  {
    q: "Banka hesabı açmak zorunda mıyım?",
    a: "Faaliyet için yerel veya uluslararası bir kurumsal banka hesabı açmanız önerilir; birçok ülkede uzaktan hesap açılışı desteklenir.",
  },
  {
    q: "Muhasebe ve yıllık raporlama zorunluluğu var mı?",
    a: "Evet, tüm Avrupa şirketleri yıllık finansal tablo hazırlamak ve yerel otoritelere sunmakla yükümlüdür.",
  },
  {
    q: "Hangi ülkelerde ofisiniz bulunuyor?",
    a: "Macaristan, Almanya, Çek Cumhuriyeti, Türkiye, Polonya, Sırbistan, Estonya, ABD, Singapur ve BAE’de ofislerimizle hizmet veriyoruz.",
  },
];

export const referenceLogos = [
  { src: "https://gurcanpartners.com/wp-content/uploads/dogus-mail.png", alt: "Doğuş" },
  { src: "https://gurcanpartners.com/wp-content/uploads/gedik-mail.png", alt: "Gedik" },
  { src: "https://gurcanpartners.com/wp-content/uploads/turk-telekom-mail.png", alt: "Türk Telekom" },
];

export const vergiReferences = [
  { src: "https://gurcanpartners.com/wp-content/uploads/dogus.png", alt: "Doğuş" },
  { src: "https://gurcanpartners.com/wp-content/uploads/gedik.png", alt: "Gedik" },
  { src: "https://gurcanpartners.com/wp-content/uploads/insider.png", alt: "Insider" },
  { src: "https://gurcanpartners.com/wp-content/uploads/satelo.png", alt: "Satelo" },
  { src: "https://gurcanpartners.com/wp-content/uploads/turk-telekom.png", alt: "Türk Telekom" },
];

export const yatirimReferences = [
  { src: "https://gurcanpartners.com/wp-content/uploads/dogus.png", alt: "Doğuş Group" },
  { src: "https://gurcanpartners.com/wp-content/uploads/gedik.png", alt: "Gedik" },
  { src: "https://gurcanpartners.com/wp-content/uploads/turk-telekom.png", alt: "Türk Telekom" },
  { src: "https://gurcanpartners.com/wp-content/uploads/satelo.png", alt: "SATTELO" },
  { src: "https://gurcanpartners.com/wp-content/uploads/Adsiz-tasarim-2.png", alt: "empa:::electronics" },
  { src: "https://gurcanpartners.com/wp-content/uploads/kibar.jpg", alt: "Kibar" },
  { src: "https://gurcanpartners.com/wp-content/uploads/und-logo.png", alt: "UND" },
  { src: "https://gurcanpartners.com/wp-content/uploads/cropped-firstmed-logo1-1.png", alt: "FIRSTMED" },
  { src: "https://gurcanpartners.com/wp-content/uploads/liv-hospital-mail.png", alt: "LIV Hospital" },
];

export const hakkimizdaReferences = [
  { src: "https://gurcanpartners.com/wp-content/uploads/dogus-mail.png", alt: "Doğuş" },
  { src: "https://gurcanpartners.com/wp-content/uploads/gedik-mail.png", alt: "Gedik" },
  { src: "https://gurcanpartners.com/wp-content/uploads/turk-telekom-mail.png", alt: "Türk Telekom" },
  { src: "https://gurcanpartners.com/wp-content/uploads/satelo-mail.png", alt: "Satelo" },
  { src: "https://gurcanpartners.com/wp-content/uploads/kibar-mail.png", alt: "Kibar" },
  { src: "https://gurcanpartners.com/wp-content/uploads/und-mail.png", alt: "UND" },
  { src: "https://gurcanpartners.com/wp-content/uploads/leaf-logistic-mail.png", alt: "Leaf Logistic" },
  { src: "https://gurcanpartners.com/wp-content/uploads/THOMSON-REUTERS-FOUNDATION-MAIL.png", alt: "Thomson Reuters Foundation" },
  { src: "https://gurcanpartners.com/wp-content/uploads/liv-hospital-mail.png", alt: "Liv Hospital" },
];

export const countries = [
  "Türkiye",
  "Macaristan",
  "Almanya",
  "Çek Cumhuriyeti",
  "Polonya",
  "Sırbistan",
  "Estonya",
  "ABD",
  "Singapur",
  "BAE",
  "Diğer",
];

export const footerOffices = [
  "Macaristan",
  "Almanya",
  "Türkiye",
  "Çek Cumhuriyeti",
  "Polonya",
  "Estonya",
  "Singapur",
  "BAE",
  "Sırbistan",
  "ABD",
];

export const footerServices = [
  "Bilişim Hukuku",
  "Birleşme & Devralmalar",
  "Blockchain Hukuku",
  "Fikri Mülkiyet Hukuku",
  "Gayrimenkul Hukuku",
  "Göçmenlik Hukuku",
  "Şirket Göçü",
  "Ticaret & Şirketler Hukuku",
  "Uluslararası Şirketleşme",
  "Uluslararası Vergi Danışmanlığı",
  "Avrupa'da Marka Tescili",
  "Avrupa'da Şirket Kuruluşu",
  "Keystone Yapay Zeka",
  "Dubai'de Şirket Kuruluşu",
];
