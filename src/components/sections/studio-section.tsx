import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { founderFacts, studioCopy } from "@/data/studio";
import {
  heroPosterImage,
  methodFoundationImage,
} from "@/lib/images";
import { bookingLink, telegramLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function StudioSection() {
  return (
    <section
      id="studio"
      className="scroll-mt-14 bg-[#eef2eb] text-[#173127]"
    >
      <div className="section-shell grid gap-12 pt-18 pb-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start" direction="right" blur>
          <StudioAside />
        </Reveal>

        <Reveal className="space-y-12" delay={120} blur>
          <StudioManifest />
          <StudioGallery />
        </Reveal>
      </div>
    </section>
  );
}

function StudioAside() {
  return (
    <aside>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
        {studioCopy.kicker}
      </p>
      <h2 className="mt-4 font-heading text-4xl leading-[0.94] text-[#173127]">
        {studioCopy.title}
      </h2>

      <ul className="mt-8 space-y-4 border-t border-[#c5d0c0] pt-5 text-sm leading-6 text-[#4b544a]">
        {founderFacts.map((fact, index) => (
          <li
            key={fact}
            className="flex gap-3"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <Check className="mt-1 size-4 shrink-0 text-[#d26b51]" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hover-lift-soft h-11 rounded-md border border-[#173127] bg-[#173127] px-5 text-sm text-[#f6f4ee] hover:bg-[#214133]",
          )}
        >
          Найти свое занятие
        </a>
        <a
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "hover-lift-soft h-11 rounded-md border-[#c5d0c0] bg-transparent px-5 text-sm text-[#173127] hover:bg-[#e5ece0]",
          )}
        >
          Перейти в Telegram
        </a>
      </div>
    </aside>
  );
}

function StudioManifest() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_13rem] lg:items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#596157]">
          {studioCopy.manifestKicker}
        </p>
        <p className="mt-5 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl">
          {studioCopy.manifest}
        </p>
      </div>
      <div className="border-l border-[#c5d0c0] pl-4 text-sm leading-6 text-[#4d564b]">
        {studioCopy.manifestDetail}
      </div>
    </div>
  );
}

function StudioGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <StudioGalleryCard
        src={heroPosterImage}
        alt="Зал студии Flow Pilates"
        kicker={studioCopy.spaceKicker}
        description={studioCopy.spaceDescription}
        sizes="(max-width: 768px) 100vw, 60vw"
        className="aspect-[1.3]"
      />
      <StudioGalleryCard
        src={methodFoundationImage}
        alt="Основа метода Flow Pilates"
        kicker={studioCopy.methodKicker}
        description={studioCopy.methodDescription}
        sizes="(max-width: 768px) 100vw, 30vw"
        className="aspect-[1.3] md:aspect-auto md:h-full"
      />
    </div>
  );
}

type StudioGalleryCardProps = {
  src: string;
  alt: string;
  kicker: string;
  description: string;
  sizes: string;
  className: string;
};

function StudioGalleryCard({
  src,
  alt,
  kicker,
  description,
  sizes,
  className,
}: StudioGalleryCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,20,16,0.72))]" />
      <div className="absolute bottom-0 left-0 px-5 pb-5 pt-12 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
          {kicker}
        </p>
        <p className="mt-2 max-w-md text-sm leading-6 text-white/74">
          {description}
        </p>
      </div>
    </div>
  );
}
