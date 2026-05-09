"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { X } from "lucide-react";

import { privacyPolicyLink } from "@/lib/links";

const DISMISSED_STORAGE_KEY = "fp-cookie-notice-dismissed";
const DISMISSED_EVENT = "fp-cookie-notice-dismissed";

const subscribe = (callback: () => void) => {
  window.addEventListener(DISMISSED_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(DISMISSED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

const getSnapshot = () =>
  localStorage.getItem(DISMISSED_STORAGE_KEY) === "true";

const getServerSnapshot = () => true;

const useNoticeDismissed = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

const dismissNotice = () => {
  localStorage.setItem(DISMISSED_STORAGE_KEY, "true");
  window.dispatchEvent(new Event(DISMISSED_EVENT));
};

export const CookieConsent = () => {
  const dismissed = useNoticeDismissed();

  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookie"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-sm"
    >
      <div className="relative rounded-lg border border-white/12 bg-[#132018]/95 p-4 text-[#f6f3ec] shadow-2xl backdrop-blur-md sm:p-5">
        <p className="pr-8 text-sm leading-6 text-white/82">
          Сайт использует файлы cookie и сервис Яндекс.Метрика для анализа
          посещаемости. Продолжая использовать сайт, вы соглашаетесь с{" "}
          <Link
            href={privacyPolicyLink}
            className="font-semibold text-[#dec768] underline underline-offset-4 hover:text-[#e9d692]"
          >
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismissNotice}
          className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#d7ecbd] px-4 text-sm font-semibold text-[#173127] transition-colors hover:bg-[#ecf8e1]"
        >
          Понятно
        </button>
        <button
          type="button"
          onClick={dismissNotice}
          aria-label="Закрыть"
          className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-full text-white/56 transition-colors hover:bg-white/8 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};
