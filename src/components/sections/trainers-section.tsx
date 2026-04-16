import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { type Trainer, trainers, trainersCopy } from "@/data/trainers";
import { cn } from "@/lib/utils";

export function TrainersSection() {
  return (
    <section
      id="trainers"
      className="relative scroll-mt-14 overflow-hidden bg-[#eef2eb] text-[#173127]"
    >
      <TrainersDecorations />

      <div className="section-shell relative py-18">
        <Reveal blur>
          <TrainersIntro />
        </Reveal>

        <div className="mt-14 space-y-20 lg:space-y-24">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} blur delay={index * 80}>
              <TrainerCard trainer={trainer} isReversed={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainersDecorations() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(23,49,39,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(222,199,104,0.22),transparent_60%)] blur-2xl lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] left-[-6rem] hidden h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(210,107,81,0.14),transparent_60%)] blur-2xl lg:block"
      />
    </>
  );
}

function TrainersIntro() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
          {trainersCopy.kicker}
        </p>
        <h2 className="mt-4 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl">
          {trainersCopy.title}
        </h2>
      </div>
      <p className="max-w-md text-base leading-7 text-[#556154] lg:border-l lg:border-[#c5d0c0] lg:pl-5">
        {trainersCopy.description}
      </p>
    </div>
  );
}

type TrainerCardProps = {
  trainer: Trainer;
  isReversed: boolean;
};

function TrainerCard({ trainer, isReversed }: TrainerCardProps) {
  return (
    <article
      className={cn(
        "grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14",
        isReversed && "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
      )}
    >
      <div className={cn("relative", isReversed && "lg:order-2")}>
        <TrainerPortrait trainer={trainer} />
      </div>

      <div className={cn("flex flex-col", isReversed && "lg:order-1")}>
        <TrainerMeta trainer={trainer} />
        <TrainerCredentials trainer={trainer} />
      </div>
    </article>
  );
}

function TrainerPortrait({ trainer }: { trainer: Trainer }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#c5d0c0] bg-[#dbe4d7] shadow-[0_22px_50px_rgba(23,49,39,0.14)]">
      <Image
        src={trainer.image}
        alt={trainer.name}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(15,20,16,0.72))]" />
      <div className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-4 px-5 pb-5 pt-12 text-white">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dec768]">
            {trainer.role}
          </p>
          <p className="mt-2 font-heading text-2xl leading-none">
            {trainer.name}
          </p>
        </div>
        <span className="font-heading text-5xl leading-none text-[#dec768]/80">
          {trainer.index}
        </span>
      </div>
    </div>
  );
}

function TrainerMeta({ trainer }: { trainer: Trainer }) {
  return (
    <>
      <div className="flex items-baseline gap-4">
        <span className="font-heading text-5xl leading-none text-[#d26b51] sm:text-6xl">
          {trainer.index}
        </span>
        <span className="h-px flex-1 bg-[#c5d0c0]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#596157]">
          {trainer.role}
        </span>
      </div>

      <h3 className="mt-6 font-heading text-balance text-4xl leading-[0.96] text-[#173127] sm:text-5xl">
        {trainer.name}
      </h3>

      <div className="mt-5 space-y-4 text-base leading-7 text-[#4d564b]">
        {trainer.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <blockquote className="mt-6 border-l-2 border-[#d26b51] pl-4 font-heading text-xl leading-snug text-[#173127]">
        «{trainer.quote}»
      </blockquote>
    </>
  );
}

function TrainerCredentials({ trainer }: { trainer: Trainer }) {
  return (
    <div className="mt-8 rounded-lg border border-[#1a2620] bg-[#121814] p-6 text-[#f6f3ec] shadow-[0_20px_50px_rgba(12,18,14,0.18)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dec768]">
        {trainer.credentialsTitle}
      </p>
      <ul className="mt-5 grid gap-x-6 gap-y-3 text-sm leading-6 text-white/80 sm:grid-cols-2">
        {trainer.credentials.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden
              className="mt-0.5 shrink-0 text-base leading-none text-[#dec768]"
            >
              ⭐️
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
