"use client";

import { useEffect, useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  bookingLink: string;
  navigation: NavigationItem[];
  phoneLink: string;
  telegramLink: string;
  whatsappLink: string;
  alwaysDark?: boolean;
};

export function SiteHeader({
  bookingLink,
  navigation,
  phoneLink,
  telegramLink,
  whatsappLink,
  alwaysDark = false,
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (alwaysDark) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [alwaysDark]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[180] text-[#f6f3ec] transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300",
        isScrolled
          ? "bg-[rgba(10,12,11,0.82)] backdrop-blur-md shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="section-shell">
        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity,transform,border-color] duration-300",
            isScrolled
              ? "max-h-0 translate-y-[-0.5rem] opacity-0 border-transparent"
              : "max-h-20 translate-y-0 opacity-100 border-b border-white/10 sm:max-h-16",
          )}
        >
          <div className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 text-[11px] uppercase tracking-[0.28em] text-white/68 sm:h-14 sm:min-h-0 sm:gap-y-4 sm:py-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span>Обнинск</span>
              <span>Студия здорового тела</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#d7ecbd]"
              >
                Telegram
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#d7ecbd]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <nav className="flex h-14 items-center justify-between gap-4 border-b border-white/10">
          <a
            href="#top"
            className="font-heading text-base uppercase tracking-[0.34em] text-[#d7ecbd] transition-colors hover:text-[#ecf8e1]"
          >
            Flow Pilates
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/78 transition-colors hover:text-[#d7ecbd]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hover-lift-soft hidden h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-4 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127] md:inline-flex",
            )}
          >
            Записаться
          </a>

          <MobileNav
            navigation={navigation}
            bookingLink={bookingLink}
            whatsappLink={whatsappLink}
            telegramLink={telegramLink}
            phoneLink={phoneLink}
          />
        </nav>
      </div>
    </header>
  );
}
