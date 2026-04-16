"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Клиентская навигация Next.js не всегда прокручивает к элементу из hash в URL.
 * После смены маршрута читаем hash и вызываем scrollIntoView.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    if (!id) {
      return;
    }

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
