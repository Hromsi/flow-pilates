import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Dumbbell,
  HeartPulse,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bookingLink =
  "https://n1730823.yclients.com/company/1543386/about?o=m4492392&previousStepUrl=%2Fcompany%2F1543386%2Frecord-type%3Fo%3Dm4492392";
const whatsappLink =
  "https://api.whatsapp.com/send/?phone=79857148630&text=Здравствуйте%21+Хочу+записаться&type=phone_number&app_absent=0";
const telegramLink = "https://t.me/+fQooG2dMMcc4NmRi";
const videoLink =
  "https://vkvideo.ru/video72587992_456239758?list=ln-2KATAulJ47pVPb6xNW";
const phoneLink = "tel:+79857148630";
const mailLink = "mailto:Keit-Obninsk@yandex.ru";

const navigation = [
  { label: "О студии", href: "#studio" },
  { label: "Направления", href: "#programs" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Контакты", href: "#contacts" },
];

const heroHighlights = [
  {
    title: "Профессиональный реформер",
    text: "Первая студия в Обнинске с оборудованием для группового пилатеса.",
  },
  {
    title: "55 минут бережной нагрузки",
    text: "Форматы для любого уровня подготовки и понятный вход в практику.",
  },
  {
    title: "Осознанное движение",
    text: "Разум и тело работают в одном ритме без гонки за результатом любой ценой.",
  },
];

const founderFacts = [
  "Высшее спортивное образование (Российский Университет Спорта ГЦОЛИФК).",
  "Опыт преподавания с 2018 года.",
  "Практика работы с группами на реформере в Москве.",
  "Сертификация международной школы пилатеса Balance Body.",
];

const benefits = [
  {
    title: "Сильное тело без перегруза",
    text: "Глубокая работа с корпусом, осанкой и дыханием вместо резких пиков нагрузки.",
  },
  {
    title: "Индивидуальный взгляд на каждого",
    text: "Программа и темп подстраиваются под задачи, подготовку и особенности здоровья.",
  },
  {
    title: "Формат под ваш ритм",
    text: "Группа, персональная работа, тренировки в паре и отдельные программы для подростков.",
  },
];

const programs = [
  {
    title: "Тренировки на реформере",
    subtitle: "Флагманский формат студии",
    description:
      "Укрепляют все тело, улучшают выносливость и помогают выстроить гармоничное движение без ударной нагрузки.",
    duration: "55 минут",
    level: "Любой",
    image:
      "https://static.tildacdn.com/tild3035-6637-4336-a236-666633656665/84748.png",
    href: bookingLink,
    action: "Записаться онлайн",
  },
  {
    title: "Пилатес с малым оборудованием",
    subtitle: "Мат, кольцо, ролл, лента и мяч",
    description:
      "Помогает включить глубокие мышцы живота и спины, улучшает осанку и создает сильное сбалансированное тело.",
    duration: "55 минут",
    level: "Любой",
    image:
      "https://static.tildacdn.com/tild6331-3236-4335-b564-343434383532/2320672.png",
    href: bookingLink,
    action: "Выбрать время",
  },
  {
    title: "Персональные тренировки",
    subtitle: "Один на один с тренером",
    description:
      "Фокус на ваших целях, ощущениях и ограничениях. Подходит, когда нужен точный контроль техники и постепенный прогресс.",
    duration: "55 минут",
    level: "По записи",
    image:
      "https://static.tildacdn.com/tild6231-3637-4266-a461-373030656439/a9747d5b776b1bf5e1e4.png",
    href: whatsappLink,
    action: "Написать администратору",
  },
  {
    title: "Сплит-тренировки",
    subtitle: "Для двоих",
    description:
      "Парный формат с персональной программой, поддержкой тренера и общей динамикой, где комфортно идти в своем темпе.",
    duration: "55 минут",
    level: "По записи",
    image:
      "https://static.tildacdn.com/tild6335-3433-4236-b363-366232396562/2963527.png",
    href: whatsappLink,
    action: "Обсудить формат",
  },
  {
    title: "Пилатес для подростков",
    subtitle: "12–16 лет",
    description:
      "Укрепляет опорно-двигательный аппарат, развивает координацию и помогает привить спокойное отношение к физической активности.",
    duration: "55 минут",
    level: "Любой",
    image:
      "https://static.tildacdn.com/tild3663-3736-4138-a537-646361343264/9208888.png",
    href: bookingLink,
    action: "Записать подростка",
  },
];

const tariffs = [
  {
    title: "Пилатес с малым оборудованием",
    price: "800 ₽",
    note: "Разовое занятие",
    items: [
      "4 тренировки — 3 000 ₽",
      "6 тренировок — 4 200 ₽",
      "8 тренировок — 5 200 ₽",
      "12 тренировок — 7 200 ₽",
    ],
    href: bookingLink,
    accent: "border-t-[#d26b51]",
  },
  {
    title: "Тренировки на реформере",
    price: "1 500 ₽",
    note: "Разовое занятие",
    items: [
      "4 тренировки — 5 800 ₽",
      "6 тренировок — 8 400 ₽",
      "8 тренировок — 10 400 ₽",
      "12 тренировок — 15 000 ₽",
    ],
    href: bookingLink,
    accent: "border-t-[#dec768]",
  },
  {
    title: "Персональные тренировки",
    price: "2 800 ₽",
    note: "По предварительной записи",
    items: [
      "4 тренировки — 10 800 ₽",
      "6 тренировок — 15 300 ₽",
      "8 тренировок — 19 600 ₽",
      "12 тренировок — 28 800 ₽",
    ],
    href: whatsappLink,
    accent: "border-t-[#173127]",
  },
  {
    title: "Сплит-тренировки",
    price: "4 400 ₽",
    note: "Для двоих, по записи",
    items: [
      "4 тренировки — 17 200 ₽",
      "6 тренировок — 25 200 ₽",
      "8 тренировок — 32 000 ₽",
      "12 тренировок — 46 800 ₽",
    ],
    href: whatsappLink,
    accent: "border-t-[#91ac90]",
  },
  {
    title: "Тренировки для подростков",
    price: "1 100 ₽",
    note: "Разовое занятие",
    items: [
      "4 тренировки — 4 200 ₽",
      "6 тренировок — 6 200 ₽",
      "8 тренировок — 8 200 ₽",
      "12 тренировок — 12 200 ₽",
    ],
    href: bookingLink,
    accent: "border-t-[#d26b51]",
  },
  {
    title: "Смешанный абонемент",
    price: "от 4 200 ₽",
    note: "Реформер + пилатес с малым оборудованием",
    items: [
      "2+2 — 4 200 ₽",
      "3+3 — 6 200 ₽",
      "5+3 — 8 200 ₽",
      "8+4 — 12 200 ₽",
    ],
    href: bookingLink,
    accent: "border-t-[#dec768]",
  },
];

const contacts = [
  {
    label: "Телефон",
    value: "+7 985 714 86 30",
    href: phoneLink,
    icon: Phone,
  },
  {
    label: "Email",
    value: "Keit-Obninsk@yandex.ru",
    href: mailLink,
    icon: Mail,
  },
  {
    label: "Адрес",
    value: "Обнинск, пр-т Ленина, 137, корп. 4, пом. 254",
    href: "https://yandex.ru/maps/?text=Обнинск%2C%20пр-т%20Ленина%20137%20корп.%204%20пом.%20254",
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden bg-[#111512] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://static.tildacdn.com/tild6437-3630-4863-b565-343366313536/40573.jpg"
            alt="Пространство студии Flow Pilates"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,0.38)_0%,rgba(10,12,11,0.58)_45%,rgba(10,12,11,0.88)_100%)]" />
        </div>

        <div className="section-shell relative flex min-h-[82svh] flex-col pb-12 pt-5 sm:min-h-[84svh] lg:min-h-[86svh]">
          <nav className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
            <a
              href="#top"
              className="font-heading text-base uppercase tracking-[0.34em] text-[#d7ecbd]"
            >
              Flow Pilates
            </a>

            <div className="hidden items-center gap-6 md:flex">
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
                "h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-4 text-sm font-medium text-[#173127] hover:bg-[#ebf6dd]",
              )}
            >
              Записаться
            </a>
          </nav>

          <div
            id="top"
            className="grid flex-1 items-end gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.78fr)] lg:gap-16 lg:py-16"
          >
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d7ecbd]">
                Студия здорового тела
              </p>
              <h1 className="font-heading text-balance text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                Поймать баланс между силой, гибкостью и тишиной внутри.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                Flow Pilates помогает двигаться бережно и точно. Реформер,
                мат-практика, персональные форматы и программы для подростков
                собираются в единый спокойный ритм движения.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm font-medium text-[#173127] hover:bg-[#edf7e2]",
                  )}
                >
                  Записаться онлайн
                </a>
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-md border-white/30 bg-white/8 px-5 text-sm text-white hover:bg-white/14 hover:text-white",
                  )}
                >
                  <PlayCircle className="size-4" />
                  Смотреть атмосферу
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/76">
                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-[#dec768]" />
                  55 минут
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#dec768]" />
                  Любой уровень
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#dec768]" />
                  Обнинск
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/14 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c6d0c1] bg-[#eef2ea]">
        <div className="section-shell grid gap-8 py-8 md:grid-cols-3 md:gap-10">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="border-l border-[#c6d0c1] pl-4 first:border-l-0 first:pl-0 md:first:pl-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d26b51]">
                0{index + 1}
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-none text-[#173127]">
                {item.title}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#596157]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="bg-[#f7faf4]">
        <div className="section-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
              Метод студии
            </p>
            <h2 className="mt-4 font-heading text-balance text-4xl leading-[0.95] text-[#173127] sm:text-5xl">
              Разум и тело встречаются в одном спокойном ритме.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4f584d]">
              В основе Flow Pilates бережное и осознанное движение, которое
              остается с вами надолго. Здесь нагрузка не спорит с телом, а
              учится слышать его сигналы и постепенно раскрывать силу,
              устойчивость и подвижность.
            </p>

            <div className="mt-8 rounded-lg border border-[#c6d0c1] bg-[#edf1ea] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173127]">
                Екатерина Хромченкова
              </p>
              <p className="mt-2 text-sm leading-6 text-[#596157]">
                Основатель студии и проводник в практику, где внимание к технике
                идет рядом с вниманием к человеку.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#3e463d]">
                {founderFacts.map((fact) => (
                  <li key={fact} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-md border border-[#173127] bg-[#173127] px-5 text-sm text-[#f7faf2] hover:bg-[#214133]",
                )}
              >
                Выбрать направление
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 rounded-md border-[#c6d0c1] bg-transparent px-5 text-sm text-[#173127] hover:bg-[#edf1ea]",
                )}
              >
                Присоединиться в Telegram
              </a>
            </div>
          </div>

          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
            <div className="relative aspect-[1/1.12] overflow-hidden rounded-lg bg-[#dfe7d8] sm:row-span-2">
              <Image
                src="https://static.tildacdn.com/tild6131-6165-4130-b632-623633653561/Photoroom_20250717_1.png"
                alt="Flow Pilates"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1.05/1] overflow-hidden rounded-lg bg-[#d9e3d4]">
              <Image
                src="https://static.tildacdn.com/tild3734-3562-4465-a632-386164333664/82041.jpg"
                alt="Тренировка в студии"
                fill
                sizes="(max-width: 1024px) 50vw, 21vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1.05/1.08] overflow-hidden rounded-lg bg-[#d9e3d4]">
              <Image
                src="https://static.tildacdn.com/tild3564-3662-4361-a538-316531356135/IMG_0330.jpeg"
                alt="Интерьер студии Flow Pilates"
                fill
                sizes="(max-width: 1024px) 50vw, 21vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-[#121814] text-white">
        <div className="section-shell py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
              Направления
            </p>
            <h2 className="mt-4 font-heading text-balance text-4xl leading-[0.95] sm:text-5xl">
              Форматы, которые собираются под ваши задачи, возраст и темп.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              От первого знакомства с реформером до персональной программы:
              каждое направление держит в центре бережную механику движения и
              ощущение устойчивости в теле.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className={cn(
                  "rounded-lg border border-white/10 bg-white/5 p-5",
                  index === 0 ? "xl:col-span-3" : "xl:col-span-2",
                  index === programs.length - 1 ? "md:col-span-2 xl:col-span-2" : "",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                      {program.subtitle}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl leading-none">
                      {program.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-white/45" />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-start">
                  <div>
                    <p className="text-sm leading-6 text-white/72">
                      {program.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-white/78">
                      <span className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/6 px-3 py-2">
                        <Clock3 className="size-3.5 text-[#dec768]" />
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/6 px-3 py-2">
                        <Sparkles className="size-3.5 text-[#dec768]" />
                        {program.level}
                      </span>
                    </div>

                    <a
                      href={program.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#d7ecbd] transition-colors hover:text-[#edf7e2]"
                    >
                      {program.action}
                      <MoveRight className="size-4" />
                    </a>
                  </div>

                  <div className="relative aspect-[1/1] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(223,240,214,0.16),rgba(210,107,81,0.08))]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-contain p-5"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="bg-[#edf1ea]">
        <div className="section-shell py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
              Тарифы
            </p>
            <h2 className="mt-4 font-heading text-balance text-4xl leading-[0.95] text-[#173127] sm:text-5xl">
              Чистая и понятная стоимость без лишнего шума.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#586057]">
              Базовые цены и абонементы собраны по текущему содержимому сайта
              Flow Pilates. Для персональных и сплит-форматов лучше сразу писать
              администратору, чтобы подобрать время.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tariffs.map((tariff) => (
              <article
                key={tariff.title}
                className={cn(
                  "rounded-lg border border-[#c6d0c1] border-t-4 bg-[#f8faf4] p-5 shadow-[0_18px_40px_rgba(23,49,39,0.06)]",
                  tariff.accent,
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#596157]">
                  {tariff.note}
                </p>
                <h3 className="mt-3 font-heading text-3xl leading-none text-[#173127]">
                  {tariff.title}
                </h3>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-heading text-4xl leading-none text-[#173127]">
                    {tariff.price}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4e564d]">
                  {tariff.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tariff.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mt-6 h-11 w-full rounded-md border-[#c6d0c1] bg-transparent text-sm text-[#173127] hover:bg-[#edf1ea]",
                  )}
                >
                  Открыть запись
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="soft-grid bg-[#173127] text-white">
        <div className="section-shell py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
                Контакты
              </p>
              <h2 className="mt-4 max-w-2xl font-heading text-balance text-4xl leading-[0.95] sm:text-5xl">
                Найдите свой ритм гармонии и просто начните с первого движения.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Дышите полной грудью, задавайте вопросы и выбирайте формат,
                который сейчас нужен вашему телу. Flow Pilates ждет вас в
                Обнинске.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ebf6dd]",
                  )}
                >
                  Записаться в YCLIENTS
                </a>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-md border-white/20 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
                  )}
                >
                  Перейти в Telegram
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/12 bg-white/6 p-5">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="size-5 text-[#dec768]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/78">
                      Подходит, если
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/72">
                    хочется добавить телу устойчивость, мягкую силу и ясное
                    ощущение опоры в повседневном движении.
                  </p>
                </div>
                <div className="rounded-lg border border-white/12 bg-white/6 p-5">
                  <div className="flex items-center gap-3">
                    <Dumbbell className="size-5 text-[#dec768]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/78">
                      Форматы студии
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/72">
                    реформер, мат, персональные и сплит-тренировки, а также
                    отдельная практика для подростков 12–16 лет.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/12 bg-white/8 p-5 sm:p-6">
              <div className="space-y-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        contact.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="flex items-start gap-4 rounded-lg border border-white/10 bg-black/10 p-4 transition-colors hover:border-[#dec768]/40 hover:bg-black/14"
                    >
                      <span className="mt-1 inline-flex size-10 items-center justify-center rounded-md bg-white/10">
                        <Icon className="size-4 text-[#dec768]" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                          {contact.label}
                        </span>
                        <span className="mt-2 block text-base leading-7 text-white">
                          {contact.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-black/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Рядом с записью
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-white/76">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 px-3 py-3 transition-colors hover:border-[#dec768]/40 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Users className="size-4 text-[#dec768]" />
                      Задать вопрос в WhatsApp
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 px-3 py-3 transition-colors hover:border-[#dec768]/40 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <PlayCircle className="size-4 text-[#dec768]" />
                      Открыть видео студии
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/12 pt-6 text-sm leading-6 text-white/56">
            <p>© ФЛОУ ПИЛАТЕС</p>
            <p>ИП Хромченкова Екатерина Сергеевна</p>
            <p>ИНН 402508749919 • ОГРНИП 324400000041512</p>
            <p>Калужская обл., г. Обнинск, ул. Белкинская, 23А-17</p>
          </div>
        </div>
      </section>
    </main>
  );
}
