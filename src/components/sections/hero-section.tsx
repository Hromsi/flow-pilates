import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { buttonVariants } from "@/components/ui/button";
import { heroCopy, heroSide, heroStats } from "@/data/hero";
import {
  heroPosterImage,
  heroVideoBackgroundUrl,
  practiceSessionImage,
} from "@/lib/images";
import { heroVideoLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f1410] text-[#f6f3ec]">
      <div className="absolute inset-0">
        <HeroVideoBackground
          posterSrc={heroPosterImage}
          posterAlt="Пространство студии Flow Pilates"
          videoSrc={heroVideoBackgroundUrl}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,11,0.9)_0%,rgba(10,12,11,0.7)_42%,rgba(10,12,11,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,0.24)_0%,rgba(10,12,11,0.4)_48%,rgba(10,12,11,0.88)_100%)]" />
      </div>

      <div className="section-shell relative flex min-h-[100svh] flex-col pb-8 pt-[7.75rem] sm:pt-[8rem] md:pt-[8.25rem]">
        <div
          id="top"
          className="scroll-mt-[7.75rem] grid flex-1 items-end gap-12 py-8 sm:scroll-mt-[8rem] md:scroll-mt-[8.25rem] lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center lg:gap-14 lg:py-8 xl:py-10"
        >
          <HeroLead />
          <HeroAside />
        </div>
      </div>
    </section>
  );
}

function HeroLead() {
  return (
    <div className="max-w-4xl pb-2">
      {/* <Image
        src="/logo-mark.svg"
        alt="Flow Pilates"
        width={260}
        height={155}
        priority
        className="hero-rise -ml-3 mb-3 h-auto w-36 select-none sm:w-44"
        style={{ "--hero-delay": "120ms" } as CSSProperties}
      /> */}
      <p
        className="hero-rise text-xs font-semibold uppercase tracking-[0.32em] text-[#dec768]"
        style={{ "--hero-delay": "180ms" } as CSSProperties}
      >
        {heroCopy.kicker}
      </p>
      <h1
        className="hero-rise mt-5 max-w-4xl font-heading text-balance text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
        style={{ "--hero-delay": "240ms" } as CSSProperties}
      >
        {heroCopy.title}
      </h1>
      <p
        className="hero-rise mt-5 max-w-2xl font-heading text-2xl leading-tight text-[#f1ede4] sm:text-3xl"
        style={{ "--hero-delay": "320ms" } as CSSProperties}
      >
        {heroCopy.subtitle}
      </p>
      <p
        className="hero-rise mt-6 max-w-3xl text-base leading-7 text-white/78 sm:text-lg"
        style={{ "--hero-delay": "400ms" } as CSSProperties}
      >
        {heroCopy.description}
      </p>
      <p
        className="hero-rise mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base"
        style={{ "--hero-delay": "470ms" } as CSSProperties}
      >
        {heroCopy.detail}
      </p>

      <div
        className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
        style={{ "--hero-delay": "540ms" } as CSSProperties}
      >
        <a
          href="#formats"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hover-lift h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127] hover:shadow-[0_18px_40px_rgba(215,236,189,0.18)]",
          )}
        >
          Поймать баланс
        </a>
      </div>

      <div
        className="hero-rise mt-10 grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-3"
        style={{ "--hero-delay": "620ms" } as CSSProperties}
      >
        {heroStats.map((item) => (
          <div key={item.value}>
            <p className="font-heading text-3xl leading-none text-[#f7f4eb]">
              {item.value}
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/62">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroAside() {
  return (
    <div
      className="hero-rise grid gap-4 lg:pb-4"
      style={{ "--hero-delay": "300ms" } as CSSProperties}
    >
      <div className="grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_190px]">
        <div className="overflow-hidden rounded-lg border border-white/12 bg-black/15 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm">
          <div className="relative aspect-[1.28] overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,rgba(215,236,189,0.12),rgba(10,12,11,0.16))]">
            <Image
              src={practiceSessionImage}
              alt="Основатель студии Flow Pilates"
              fill
              sizes="(max-width: 1024px) 100vw, 24rem"
              className="object-cover object-top"
            />
          </div>

          <div className="px-5 pb-5 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
              {heroSide.founderName}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              {heroSide.founderCaption}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7ecbd]">
              {heroSide.valueKicker}
            </p>
            <p className="mt-3 font-heading text-3xl leading-none text-white">
              {heroSide.valueTitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/68">
              {heroSide.valueDescription}
            </p>
          </div>

          <a
            href={heroVideoLink}
            target="_blank"
            rel="noreferrer"
            className="hover-lift-soft group block rounded-lg border border-white/12 bg-black/15 p-4 transition-colors hover:border-[#d7ecbd]/60"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7ecbd]">
              {heroSide.mediaKicker}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {heroSide.mediaDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-white transition-colors group-hover:text-[#d7ecbd]">
              {heroSide.mediaCta}
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/12 pt-4 text-sm text-white/70">
        <span className="inline-flex items-center gap-2">
          <Clock3 className="size-4 text-[#dec768]" />
          {heroSide.duration}
        </span>
        <span className="inline-flex items-center gap-2">
          <Sparkles className="size-4 text-[#dec768]" />
          {heroSide.level}
        </span>
      </div>
    </div>
  );
}
