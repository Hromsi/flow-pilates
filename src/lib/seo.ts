export const siteUrl = "https://flowpilates.ru";

export const siteTitle = "Студия пилатеса в Обнинске — Flow Pilates";

export const siteDescription =
  "Первая студия в Обнинске с профессиональным оборудованием для группового пилатеса: реформер, малое оборудование, персональные и сплит-тренировки, программы для подростков. Запишитесь онлайн.";

export const siteName = "Flow Pilates";

export const ogImagePath = "/images/flow-pilates/hero-poster.jpg";
export const ogImageWidth = 853;
export const ogImageHeight = 1280;

export const siteKeywords = [
  "пилатес Обнинск",
  "студия пилатеса",
  "реформер Обнинск",
  "флоу пилатес",
  "пилатес для подростков",
  "персональные тренировки пилатеса",
  "сплит-тренировки",
  "пилатес с малым оборудованием",
  "студия здорового тела",
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation", "HealthClub"],
  "@id": `${siteUrl}#studio`,
  name: siteName,
  alternateName: "Флоу Пилатес",
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  image: [
    `${siteUrl}/images/flow-pilates/hero-poster.jpg`,
    `${siteUrl}/images/flow-pilates/practice-session.jpg`,
  ],
  telephone: "+7-985-714-86-30",
  email: "Keit-Obninsk@yandex.ru",
  priceRange: "800–4400 ₽",
  currenciesAccepted: "RUB",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "пр-т Ленина, 137, корп. 4, пом. 254",
    addressLocality: "Обнинск",
    addressRegion: "Калужская область",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: "Обнинск",
  },
  founder: {
    "@type": "Person",
    name: "Екатерина Хромченкова",
    jobTitle: "Основатель и тренер",
  },
  sameAs: [
    "https://t.me/+fQooG2dMMcc4NmRi",
    "https://api.whatsapp.com/send/?phone=79857148630",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Форматы тренировок",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Тренировки на реформере",
          description:
            "Групповые тренировки на профессиональном оборудовании пилатеса — Reformer.",
        },
        price: "1500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Пилатес с малым оборудованием",
          description:
            "Групповые тренировки на коврике с малым оборудованием: кольцо, ролл, лента, мяч.",
        },
        price: "800",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Персональные тренировки",
          description:
            "Индивидуальная работа один на один с тренером под конкретные цели и особенности здоровья.",
        },
        price: "2800",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Сплит-тренировки",
          description:
            "Тренировка в паре по индивидуальной программе с профессиональным контролем тренера.",
        },
        price: "4400",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Пилатес для подростков 12-16",
          description:
            "Занятия на укрепление опорно-двигательного аппарата и развитие физических качеств.",
        },
        price: "1100",
        priceCurrency: "RUB",
      },
    ],
  },
} as const;
