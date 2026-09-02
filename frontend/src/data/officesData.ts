export type Office = {
  id: number;
  country: string;
  city: string;
  flagUrl: string;
  imageUrl: string;
  title: string;
  address: string;
  phone: string;
  turkishPhoneInfo: string;
  email: string;
  workingHours: string;
  mapEmbedUrl: string;
  mapExternalLink: string;
};

export const officesData: Office[] = [
  {
    id: 1,
    country: "Malta",
    city: "San Gwann",
    flagUrl: "/MaltaFlag.jpg",
    imageUrl: "/Malta.jpg",
    title: "Keystone Partners Malta Ofis",
    address: "14 GARDENIA BLK A FL 2 TRIQ L-ISPANJULETT KAPPARA, SAN GWANN, SGN 4042, Malta",
    phone: "+356 7960 1628",
    turkishPhoneInfo: "",
    email: "info@keystonegp.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=San+Gwann,+Malta&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=San+Gwann+Malta",
  },
];
