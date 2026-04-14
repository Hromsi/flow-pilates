import type { Metadata } from "next";

import "./globals.css";

const title = "Flow Pilates | Студия здорового тела в Обнинске";
const description =
  "Первая студия в Обнинске с профессиональным оборудованием для группового пилатеса: реформер, малое оборудование, персональные и сплит-тренировки, программы для подростков.";
const ogImage =
  "https://static.tildacdn.com/tild6437-3630-4863-b565-343366313536/40573.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowpilates.ru"),
  title,
  description,
  applicationName: "Flow Pilates",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://flowpilates.ru",
    siteName: "Flow Pilates",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 900,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
