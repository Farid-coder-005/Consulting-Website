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
    country: "Macaristan",
    city: "Budapeşte",
    flagUrl: "https://flagcdn.com/w320/hu.png",
    imageUrl: "https://picsum.photos/seed/budapest/600/400",
    title: "Keystone Partners Macaristan Ofis",
    address: "Váci út 1, 1054 Budapest, Macaristan",
    phone: "+36 70 575 8590",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Budapest,%20Macaristan&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Budapest+Macaristan",
  },
  {
    id: 2,
    country: "Almanya",
    city: "Düsseldorf",
    flagUrl: "https://flagcdn.com/w320/de.png",
    imageUrl: "https://picsum.photos/seed/dusseldorf/600/400",
    title: "Keystone Partners Almanya Ofis",
    address: "Königsallee 60, 40212 Düsseldorf, Almanya",
    phone: "+49 211 1234 567",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=D%C3%BCsseldorf,%20Almanya&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=D%C3%BCsseldorf+Almanya",
  },
  {
    id: 3,
    country: "Çekya",
    city: "Prag",
    flagUrl: "https://flagcdn.com/w320/cz.png",
    imageUrl: "https://picsum.photos/seed/prague/600/400",
    title: "Keystone Partners Çekya Ofis",
    address: "Wenceslas Square 12, 110 00 Praha, Çekya",
    phone: "+420 234 567 890",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Prag,%20%C3%87ekya&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Prag+%C3%87ekya",
  },
  {
    id: 4,
    country: "Polonya",
    city: "Varşova",
    flagUrl: "https://flagcdn.com/w320/pl.png",
    imageUrl: "https://picsum.photos/seed/warsaw/600/400",
    title: "Keystone Partners Polonya Ofis",
    address: "Aleje Jerozolimskie 100, 00-807 Warszawa, Polonya",
    phone: "+48 22 123 45 67",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Warszawa,%20Polonya&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Warszawa+Polonya",
  },
  {
    id: 5,
    country: "Sırbistan",
    city: "Belgrad",
    flagUrl: "https://flagcdn.com/w320/rs.png",
    imageUrl: "https://picsum.photos/seed/belgrade/600/400",
    title: "Keystone Partners Sırbistan Ofis",
    address: "Knez Mihailova 50, 11000 Beograd, Sırbistan",
    phone: "+381 11 123 4567",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Beograd,%20S%C4%B1rbistan&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Beograd+S%C4%B1rbistan",
  },
  {
    id: 6,
    country: "Estonya",
    city: "Tallinn",
    flagUrl: "https://flagcdn.com/w320/ee.png",
    imageUrl: "https://picsum.photos/seed/tallinn/600/400",
    title: "Keystone Partners Estonya Ofis",
    address: "Viru väljak 2, 10111 Tallinn, Estonya",
    phone: "+372 600 1234",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Tallinn,%20Estonya&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Tallinn+Estonya",
  },
  {
    id: 7,
    country: "ABD",
    city: "New York",
    flagUrl: "https://flagcdn.com/w320/us.png",
    imageUrl: "https://picsum.photos/seed/newyork/600/400",
    title: "Keystone Partners ABD Ofis",
    address: "100 Park Ave, New York, NY 10017, ABD",
    phone: "+1 212 555 0100",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=New%20York,%20ABD&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=New+York+ABD",
  },
  {
    id: 8,
    country: "Singapur",
    city: "Singapur",
    flagUrl: "https://flagcdn.com/w320/sg.png",
    imageUrl: "https://picsum.photos/seed/singapore/600/400",
    title: "Keystone Partners Singapur Ofis",
    address: "10 Marina Boulevard, Singapore 018983",
    phone: "+65 6555 0123",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Singapore&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Singapore",
  },
  {
    id: 9,
    country: "BAE",
    city: "Dubai",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    imageUrl: "https://picsum.photos/seed/dubai/600/400",
    title: "Keystone Partners BAE Ofis",
    address: "Sheikh Zayed Road, Dubai, BAE",
    phone: "+971 4 555 0123",
    turkishPhoneInfo: "Türkçe iletişim: +36 70 575 8590",
    email: "info@gurcanpartners.com",
    workingHours: "09:00 - 18:00 (Pazartesi - Cuma)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Dubai,%20BAE&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapExternalLink:
      "https://www.google.com/maps/search/?api=1&query=Dubai+BAE",
  },
];
