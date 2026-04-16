import Image from "next/image";
import { MoveRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  type Program,
  featuredProgram,
  formatsCopy,
  programs,
} from "@/data/programs";
import { bookingLink, heroVideoLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function FormatsSection() {
  return (
    <section id="formats" className="scroll-mt-14 bg-[#eef2eb]">
      <div className="section-shell pt-10 pb-18">
        <FormatsIntro />

        <Reveal delay={40} blur>
          <FeaturedProgramCard />
        </Reveal>

        <div className="mt-8">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 90} blur>
              <ProgramRow program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormatsIntro() {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
        {formatsCopy.kicker}
      </p>
      <h2 className="mt-4 font-heading text-balance text-5xl leading-[0.95] text-[#173127]">
        {formatsCopy.title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[#556154]">
        {formatsCopy.description}
      </p>
    </div>
  );
}

function FeaturedProgramCard() {
  return (
    <article className="mt-10 grid gap-8 rounded-lg border border-[#c5d0c0] bg-[#121814] p-6 text-white shadow-[0_20px_50px_rgba(12,18,14,0.12)] lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center lg:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#dec768]">
          {featuredProgram.subtitle}
        </p>
        <h3 className="mt-4 font-heading text-5xl leading-[0.94]">
          {featuredProgram.title}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
          {featuredProgram.description}
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-white/70">
          {featuredProgram.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#dec768]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/58">
          <span>{featuredProgram.note}</span>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hover-lift h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
            )}
          >
            Записаться на реформер
          </a>
          <a
            href={heroVideoLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-white/18 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
            )}
          >
            Посмотреть подборку
          </a>
        </div>
      </div>

      <div className="relative aspect-[1/1] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(223,240,214,0.14),rgba(210,107,81,0.12))]">
        <Image
          src={featuredProgram.image}
          alt={featuredProgram.title}
          fill
          sizes="(max-width: 1024px) 100vw, 18rem"
          className="object-contain p-8"
        />
      </div>
    </article>
  );
}

function ProgramRow({ program }: { program: Program }) {
  return (
    <article className="grid gap-6 border-t border-[#c5d0c0] py-6 md:grid-cols-[4.5rem_minmax(0,1fr)_7rem] md:items-center lg:grid-cols-[6rem_minmax(0,1fr)_9rem]">
      <div className="font-heading text-5xl leading-none text-[#173127]">
        {program.index}
      </div>

      <div>
        <h3 className="font-heading text-3xl leading-none text-[#173127]">
          {program.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#556154]">
          {program.description}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#556154]">
          {program.detail}
        </p>
        <a
          href={program.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#173127] transition-colors hover:text-[#d26b51]"
        >
          {program.action}
          <MoveRight className="size-4" />
        </a>
      </div>

      <div className="relative aspect-[1/1] overflow-hidden rounded-lg border border-[#c5d0c0] bg-[#f8faf4]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 1024px) 100vw, 9rem"
          className="object-contain p-4"
        />
      </div>
    </article>
  );
}
