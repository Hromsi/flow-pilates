import type { Metadata, Viewport } from "next";

import "./globals.css";

const title = "Студия пилатеса в Обнинске — Flow Pilates";
const description =
  "Первая студия в Обнинске с профессиональным оборудованием для группового пилатеса: реформер, малое оборудование, персональные и сплит-тренировки, программы для подростков. Запишитесь онлайн.";
const siteUrl = "https://flowpilates.ru";
const ogImage = "/images/flow-pilates/hero-poster.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation", "HealthClub"],
  "@id": `${siteUrl}#studio`,
  name: "Flow Pilates",
  alternateName: "Флоу Пилатес",
  description,
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1410" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Flow Pilates",
  keywords: [
    "пилатес Обнинск",
    "студия пилатеса",
    "реформер Обнинск",
    "флоу пилатес",
    "пилатес для подростков",
    "персональные тренировки пилатеса",
    "сплит-тренировки",
    "пилатес с малым оборудованием",
    "студия здорового тела",
  ],
  authors: [{ name: "Flow Pilates" }],
  creator: "Flow Pilates",
  publisher: "Flow Pilates",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Flow Pilates",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 853,
        height: 1280,
        alt: "Студия Flow Pilates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  verification: {
    // Заполнить когда подключим Я.Вебмастер / Google Search Console
    // yandex: "...",
    // google: "...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
