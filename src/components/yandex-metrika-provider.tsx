"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const YANDEX_METRIKA_ID = 106524733;
const isProduction = process.env.NODE_ENV === "production";

export const YandexMetrikaProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !isProduction) return;
    ym("hit", pathname);
  }, [pathname]);

  if (!isProduction) return null;

  return (
    <YMInitializer
      accounts={[YANDEX_METRIKA_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};
