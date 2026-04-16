import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MoveRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  bookingLink,
  mainNavigation,
  phoneLink,
  telegramLink,
  whatsappLink,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Условия посещения студии — Flow Pilates",
  description:
    "Правила записи на тренировки, срок действия абонементов, заморозка, отмена занятий и рекомендации для первого визита в студию пилатеса Flow Pilates в Обнинске.",
  alternates: { canonical: "/terms" },
};

type TermSection = {
  index: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  footnote?: string[];
};

const sections: TermSection[] = [
  {
    index: "01",
    title: "Запись на тренировку",
    paragraphs: [
      "Без предварительной записи на тренировку администрация имеет право отказать клиенту в посещении занятия.",
      "Запись на тренировку по предоплате 100%.",
    ],
  },
  {
    index: "02",
    title: "Групповые тренировки",
    items: [
      "Минимальное количество тренирующихся «Реформер / Стретчинг + реформер» — 2 чел., максимальное — 4 чел.",
      "Минимальное количество тренирующихся «Пилатес с малым оборудованием / Стретчинг + МФР» — 2 чел., максимальное — 5 чел.",
    ],
  },
  {
    index: "03",
    title: "Срок действия абонемента",
    items: [
      "Срок действия абонемента на 4–6 занятий — 30 календарных дней с момента приобретения.",
      "Срок действия абонемента на 8–12 занятий — 60 календарных дней с момента приобретения.",
    ],
    footnote: [
      "При наличии абонемента «Пилатес с малым оборудованием» групповые тренировки на Реформере / Стретчинг + реформер — с доплатой.",
      "При наличии абонемента «Реформер» групповые тренировки с малым оборудованием — без доплаты.",
    ],
  },
  {
    index: "04",
    title: "Заморозка абонемента",
    paragraphs: ["Бесплатная заморозка абонемента 14 дней — 1 раз в год."],
  },
  {
    index: "05",
    title: "Сохранение занятия в абонементе",
    items: [
      "При предоставлении больничного листа — занятие сохраняется.",
      "При отказе от тренировки более чем за 6 часов до начала — занятие сохраняется.",
      "При отмене тренировки администрацией студии — занятие сохраняется.",
      "Индивидуальные случаи обсуждаются с руководителем студии.",
    ],
  },
  {
    index: "06",
    title: "Отмена занятия",
    paragraphs: [
      "Отмена менее чем за 6 часов приравнивается к списанию занятия.",
      "Индивидуальные случаи обсуждаются с руководителем студии.",
    ],
  },
  {
    index: "07",
    title: "Рекомендации",
    items: [
      "Приходите за 5–10 минут до начала занятия.",
      "Занимайтесь в удобной спортивной форме: футболка / лонгслив / майка, леггинсы / шорты, противоскользящие носки для пилатеса (спортивная обувь не требуется).",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1">
      <SiteHeader
        navigation={mainNavigation}
        bookingLink={bookingLink}
        whatsappLink={whatsappLink}
        telegramLink={telegramLink}
        phoneLink={phoneLink}
        alwaysDark
      />

      <section className="relative bg-[#eef2eb] text-[#173127]">
        <div className="section-shell pb-16 pt-32 sm:pt-36 md:pt-40">
          <Reveal blur>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51] transition-colors hover:text-[#b85a42]"
            >
              <ArrowLeft className="size-4" />
              На главную
            </Link>
          </Reveal>

          <Reveal blur delay={80}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#596157]">
              Информация
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl lg:text-7xl">
              Условия посещения студии
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#556154] sm:text-lg">
              Всё важное можно прочитать заранее и спокойно выбрать удобный
              формат практики.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#eef2eb] text-[#173127]">
        <div className="section-shell pb-18">
          {sections.map((section, sectionIndex) => (
            <Reveal key={section.index} blur delay={sectionIndex * 60}>
              <article className="grid gap-6 border-t border-[#c5d0c0] py-8 md:grid-cols-[6rem_minmax(0,1fr)] md:items-start lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-10 lg:py-10">
                <div className="font-heading text-5xl leading-none text-[#173127] lg:text-6xl">
                  {section.index}
                </div>

                <div>
                  <h2 className="font-heading text-3xl leading-[1.05] text-[#173127] sm:text-4xl">
                    {section.title}
                  </h2>

                  {section.paragraphs ? (
                    <div className="mt-5 space-y-3 text-base leading-7 text-[#4d564b]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.items ? (
                    <ul className="mt-5 space-y-3 text-base leading-7 text-[#4d564b]">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.footnote ? (
                    <div className="mt-6 space-y-2 rounded-md border border-[#c5d0c0] bg-[#e4ecde] p-4 text-sm leading-6 text-[#4d564b]">
                      {section.footnote.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#b5d5a1] text-[#111111]">
        <div className="section-shell flex flex-col gap-5 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/56">
              Готовы попробовать
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-[0.94]">
              Выбирайте удобный формат и приходите в студию.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-md border border-[#111111] bg-[#111111] px-5 text-sm text-[#f7f4ee] hover:bg-[#1d1d1d]",
              )}
            >
              Записаться онлайн
              <MoveRight className="size-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-md border-[#111111]/30 bg-transparent px-5 text-sm text-[#111111] hover:bg-black/8",
              )}
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
