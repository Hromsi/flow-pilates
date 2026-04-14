"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  bookingLink: string;
  navigation: NavigationItem[];
  phoneLink: string;
  telegramLink: string;
  whatsappLink: string;
};

export function MobileNav({
  bookingLink,
  navigation,
  phoneLink,
  telegramLink,
  whatsappLink,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const menuOverlay =
    isMounted && isOpen
      ? createPortal(
          <div
            id="mobile-menu-panel"
            className="fixed inset-0 z-[220] overflow-y-auto overscroll-contain bg-[#0d100e]/98 text-[#f6f3ec] backdrop-blur-xl md:hidden"
          >
            <div className="section-shell flex min-h-[100dvh] flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]">
              <div className="sticky top-0 z-10 -mx-5 border-b border-white/10 bg-[#0d100e]/98 px-5 pb-4 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-heading text-base uppercase tracking-[0.34em] text-[#d7ecbd]">
                    Flow Pilates
                  </span>

                  <button
                    type="button"
                    aria-label="Закрыть меню"
                    onClick={closeMenu}
                    className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-white/16 bg-white/6 text-white transition-colors hover:bg-white/12"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 pb-8 pt-5">
                <div className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-white/8 py-4 font-heading text-[2rem] leading-none text-[#f6f3ec] transition-colors hover:text-[#d7ecbd]"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-4 text-white/40" />
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-12 w-full rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
                    )}
                  >
                    Записаться на занятие
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-white/62">
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="transition-colors hover:text-[#d7ecbd]"
                  >
                    Telegram
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="transition-colors hover:text-[#d7ecbd]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={phoneLink}
                    onClick={closeMenu}
                    className="transition-colors hover:text-[#d7ecbd]"
                  >
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="flex items-center gap-2 md:hidden">
      <a
        href={bookingLink}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ size: "sm" }),
          "h-10 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-4 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
        )}
      >
        Запись
      </a>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-white/16 bg-white/8 text-white transition-colors hover:bg-white/12"
      >
        <Menu className="size-4" />
      </button>
      {menuOverlay}
    </div>
  );
}
