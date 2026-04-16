import type { CSSProperties } from "react";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bookingLink =
  "https://n1730823.yclients.com/company/1543386/about?o=m4492392&previousStepUrl=%2Fcompany%2F1543386%2Frecord-type%3Fo%3Dm4492392";
const whatsappLink =
  "https://api.whatsapp.com/send/?phone=79857148630&text=Здравствуйте%21+Хочу+записаться&type=phone_number&app_absent=0";
const telegramLink = "https://t.me/+fQooG2dMMcc4NmRi";
const phoneLink = "tel:+79857148630";
const mailLink = "mailto:Keit-Obninsk@yandex.ru";
const mapsLink =
  "https://yandex.ru/maps/?text=Обнинск%2C%20пр-т%20Ленина%20137%20корп.%204%20пом.%20254";
const termsLink = "http://flowpilates.ru/page77944686.html";
const heroVideoLink =
  "https://vkvideo.ru/video72587992_456239758?list=ln-2KATAulJ47pVPb6xNW";
const heroVideoBackgroundUrl = "/api/hero-video";
const heroPosterImage = "/images/flow-pilates/hero-poster.jpg";
const practiceSessionImage = "/images/flow-pilates/practice-session.jpg";
const methodFoundationImage = "/images/flow-pilates/method-foundation.jpg";

const navigation = [
  { label: "Студия", href: "#studio" },
  { label: "Форматы", href: "#formats" },
  { label: "Тренеры", href: "#trainers" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const heroStats = [
  {
    value: "55 минут",
    label: "бережной и осознанной практики",
  },
  {
    value: "с 2018",
    label: "опыт преподавания и персональной работы",
  },
  {
    value: "5 форматов",
    label: "от реформера до подростковых занятий",
  },
];

const founderFacts = [
  "Высшее спортивное образование (Российский Университет Спорта ГЦОЛИФК).",
  "Опыт преподавания с 2018 года.",
  "Работала с группами на реформере в г. Москве.",
  "Сертифицированный специалист международной школы пилатеса Balance Body.",
];

const featuredProgram = {
  title: "Тренировки на реформере",
  subtitle: "Флагманское направление студии",
  description:
    "Система упражнений, выполняемых на большом оборудовании пилатеса - Reformer.",
  points: [
    "Тренировка направлена на укрепление всех частей тела и применима к любому виду активности. Помогает улучшить физическую форму, обрести гармонию тела и духа, повысить общую выносливость без вреда для здоровья.",
    "Стретчинг + Реформер объединяет упражнения на гибкость с использованием реформера и техники самомассажа (МФР).",
  ],
  note: "55 минут • любой уровень",
  image: "/images/flow-pilates/reformer-program.png",
};

const programs = [
  {
    index: "02",
    title: "Пилатес с малым оборудованием",
    description:
      "Система упражнений, выполняемых на коврике. Направлена на проработку глубоких мышц живота и спины, улучшение осанки и снижение риска травм.",
    detail:
      "На тренировке используется малое оборудование пилатеса: изотоническое кольцо, ролл, лента и мяч.",
    image: "/images/flow-pilates/mat-program.png",
    action: "Выбрать время",
    href: bookingLink,
  },
  {
    index: "03",
    title: "Персональные тренировки",
    description:
      "Тренировка один на один с тренером, полностью сфокусированная на ваши цели и задачи.",
    detail:
      "Программа выстраивается с учетом текущего уровня подготовки, особенностей здоровья и пожеланий.",
    image: "/images/flow-pilates/personal-training.png",
    action: "Написать администратору",
    href: whatsappLink,
  },
  {
    index: "04",
    title: "Сплит-тренировки",
    description:
      "Индивидуальная программа, разработанная для занятий в паре, с профессиональным контролем и поддержкой тренера.",
    detail:
      "Формат учитывает уровень подготовки, особенности здоровья и пожелания обоих участников.",
    image: "/images/flow-pilates/split-training.png",
    action: "Обсудить формат",
    href: whatsappLink,
  },
  {
    index: "05",
    title: "Пилатес для подростков 12-16",
    description:
      "Занятия направлены на укрепление опорно-двигательного аппарата и развитие физических качеств.",
    detail:
      "Первая часть тренировки проходит на коврике, вторая - на реформере. Формат помогает снизить уровень стресса и привить любовь к физической активности.",
    image: "/images/flow-pilates/teens-training.png",
    action: "Записать подростка",
    href: bookingLink,
  },
];

const trainers = [
  {
    index: "01",
    role: "Основатель и действующий тренер",
    name: "Екатерина Хромченкова",
    image: "/images/flow-pilates/ekaterina-khromchenkova.jpg",
    bio: [
      "Дипломированный специалист в области физической культуры, опыт в фитнесе — более 4 лет. Последние 2 года углублённо изучаю метод Пилатес и его возможности. Это стало моей страстью и делом жизни.",
      "Сертифицированный тренер Pilates Balanced Body (USA) — международный стандарт, который лежит в основе наших тренировок.",
    ],
    quote:
      "Моя миссия — помочь каждому добиться своих целей, улучшить качество жизни и полюбить своё тело.",
    credentialsTitle: "Ключевые сертификаты",
    credentials: [
      "Тренер-универсал групповых программ (Высшая школа фитнеса и бодибилдинга)",
      "Анатомия в фитнесе",
      "Принципы Движения",
      "Пилатес Mat 1, 2, 3 (Balanced Body)",
      "Анатомия 3D (Balanced Body)",
      "Скрининг тела, 24 ч (Школа Лели Савосиной «Move4S»)",
      "Реформер 1 (Balanced Body)",
      "Реформер 2 (Balanced Body)",
      "Стол-Трапеция, Кадиллак (Balanced Body)",
    ],
  },
  {
    index: "02",
    role: "Тренер студии",
    name: "Кристина Беспалова",
    image: "/images/flow-pilates/kristina-bespalova.jpg",
    bio: [
      "Дипломированный педагог физической культуры (КГУ им. К.Э. Циолковского) с опытом работы в фитнесе около 2 лет. За плечами этого срока — фундаментальное обучение, которое позволяет работать с телом глубоко и безопасно.",
      "Прошла внутреннее обучение студии по направлению «Реформер» и готова применять свои знания на практике.",
    ],
    quote:
      "Работаю бережно и внимательно — чтобы каждое движение приносило пользу и удовольствие.",
    credentialsTitle: "Профессиональный арсенал",
    credentials: [
      "Пилатес Mat 1 («РеалФит»)",
      "Анатомия 3D и Принципы Движения (Balanced Body)",
      "Коррекция осанки. Сколиозы («РеалФит»)",
      "Реабилитация после травм плеча, локтя, шеи («РеалФит»)",
    ],
  },
];

const prices = [
  {
    title: "Пилатес с малым оборудованием",
    price: "800 руб.",
    note: "Разовое занятие",
    items: [
      "Абонемент на 4 групповых тренировки - 3 000 руб.",
      "Абонемент на 6 групповых тренировок - 4 200 руб.",
      "Абонемент на 8 групповых тренировок - 5 200 руб.",
      "Абонемент на 12 групповых тренировок - 7 200 руб.",
    ],
    href: bookingLink,
  },
  {
    title: "Тренировки на реформере",
    price: "1 500 руб.",
    note: "Разовое занятие",
    items: [
      "Абонемент на 4 групповые тренировки - 5 800 руб.",
      "Абонемент на 6 групповых тренировок - 8 400 руб.",
      "Абонемент на 8 групповых тренировок - 10 400 руб.",
      "Абонемент на 12 групповых тренировок - 15 000 руб.",
    ],
    href: bookingLink,
    highlight: true,
  },
  {
    title: "Персональные тренировки",
    price: "2 800 руб.",
    note: "По предварительной записи у администратора",
    items: [
      "Абонемент на 4 персональных тренировки - 10 800 руб.",
      "Абонемент на 6 персональных тренировок - 15 300 руб.",
      "Абонемент на 8 персональных тренировок - 19 600 руб.",
      "Абонемент на 12 персональных тренировок - 28 800 руб.",
    ],
    href: whatsappLink,
  },
  {
    title: "Сплит-тренировки (2 чел.)",
    price: "4 400 руб.",
    note: "По предварительной записи у администратора",
    items: [
      "Абонемент на 4 групповых тренировки - 17 200 руб.",
      "Абонемент на 6 групповых тренировок - 25 200 руб.",
      "Абонемент на 8 групповых тренировок - 32 000 руб.",
      "Абонемент на 12 групповых тренировок - 46 800 руб.",
    ],
    href: whatsappLink,
  },
  {
    title: "Тренировки для подростков",
    price: "1 100 руб.",
    note: "Разовое занятие",
    items: [
      "Абонемент на 4 групповые тренировки - 4 200 руб.",
      "Абонемент на 6 групповых тренировок - 6 200 руб.",
      "Абонемент на 8 групповых тренировок - 8 200 руб.",
      "Абонемент на 12 групповых тренировок - 12 200 руб.",
    ],
    href: bookingLink,
  },
  {
    title: "Смешанный абонемент",
    price: "от 4 200 руб.",
    note: "Реформер + пилатес МО",
    items: [
      "Абонемент 2+2 (реформер + пилатес МО) - 4 200 руб.",
      "Абонемент 3+3 (реформер + пилатес МО) - 6 200 руб.",
      "Абонемент 5+3 (реформер + пилатес МО) - 8 200 руб.",
      "Абонемент 8+4 (реформер + пилатес МО) - 12 200 руб.",
    ],
    href: bookingLink,
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
    label: "Студия",
    value: "Обнинск, пр-т Ленина, 137, корп. 4, пом. 254",
    href: mapsLink,
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <SiteHeader
        navigation={navigation}
        bookingLink={bookingLink}
        whatsappLink={whatsappLink}
        telegramLink={telegramLink}
        phoneLink={phoneLink}
      />

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
            className="grid flex-1 items-end gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center lg:gap-14 lg:py-8 xl:py-10"
          >
            <div className="max-w-4xl pb-2">
              <p
                className="hero-rise text-xs font-semibold uppercase tracking-[0.32em] text-[#dec768]"
                style={{ "--hero-delay": "180ms" } as CSSProperties}
              >
                первая студия в обнинске с профессиональным оборудованием для
                группового пилатеса
              </p>
              <h1
                className="hero-rise mt-5 max-w-4xl font-heading text-balance text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
                style={{ "--hero-delay": "240ms" } as CSSProperties}
              >
                Флоу Пилатес
              </h1>
              <p
                className="hero-rise mt-5 max-w-2xl font-heading text-2xl leading-tight text-[#f1ede4] sm:text-3xl"
                style={{ "--hero-delay": "320ms" } as CSSProperties}
              >
                Добро пожаловать в мир гармонии и здоровья
              </p>
              <p
                className="hero-rise mt-6 max-w-3xl text-base leading-7 text-white/78 sm:text-lg"
                style={{ "--hero-delay": "400ms" } as CSSProperties}
              >
                &quot;Главная ценность в жизни - это здоровье&quot;. Наш метод -
                это диалог разума и тела, выстроенный индивидуально для вас.
                Бережное, осознанное движение, которое будет с вами всю жизнь.
              </p>
              <p
                className="hero-rise mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base"
                style={{ "--hero-delay": "470ms" } as CSSProperties}
              >
                Мы создали пространство, где разум и тело обретают гармонию
                через индивидуальный подход, бережное и осознанное движение,
                доступное в любом возрасте.
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
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "hover-lift-soft h-12 rounded-md border-white/20 bg-white/8 px-5 text-sm text-white hover:bg-white/12 hover:text-white",
                  )}
                >
                  Открыть запись
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
                      Екатерина Хромченкова
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Основатель студии и тренер, который выстраивает практику
                      вокруг человека и его состояния.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7ecbd]">
                      Главная ценность
                    </p>
                    <p className="mt-3 font-heading text-3xl leading-none text-white">
                      здоровье
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      Индивидуальный подход, бережное движение и устойчивый
                      результат без спешки и перегруза.
                    </p>
                  </div>

                  <a
                    href={heroVideoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-lift-soft group block rounded-lg border border-white/12 bg-black/15 p-4 transition-colors hover:border-[#d7ecbd]/60"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7ecbd]">
                      Фото и видео
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Загляните в атмосферу студии — практика, пространство и
                      тренеры в кадрах.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-white transition-colors group-hover:text-[#d7ecbd]">
                      Смотреть подборку
                      <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/12 pt-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-4 text-[#dec768]" />
                  55 минут на занятие
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="size-4 text-[#dec768]" />
                  любой уровень подготовки
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="scroll-mt-[7.5rem] bg-[#eef2eb] text-[#173127] md:scroll-mt-[8.25rem]"
      >
        <div className="section-shell grid gap-12 pt-18 pb-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start" direction="right" blur>
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
                Студия
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-[0.94] text-[#173127]">
                Пилатес как бережная и осознанная система движения.
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
          </Reveal>

          <Reveal className="space-y-12" delay={120} blur>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_13rem] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#596157]">
                  Манифест Flow Pilates
                </p>
                <p className="mt-5 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl">
                  &quot;Главная ценность в жизни - это здоровье&quot;. Наш
                  метод - это диалог разума и тела, выстроенный индивидуально
                  для вас.
                </p>
              </div>
              <div className="border-l border-[#c5d0c0] pl-4 text-sm leading-6 text-[#4d564b]">
                Бережное, осознанное движение, которое будет с вами всю жизнь.
                Мы создали пространство, где разум и тело обретают гармонию
                через индивидуальный подход, бережное и осознанное движение,
                доступное в любом возрасте.
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="relative aspect-[1.3] overflow-hidden rounded-lg">
                <Image
                  src={heroPosterImage}
                  alt="Зал студии Flow Pilates"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,20,16,0.72))]" />
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-12 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                    Пространство
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/74">
                    Теплый минимализм, профессиональное оборудование и спокойный
                    ритм практики.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[1.3] overflow-hidden rounded-lg md:aspect-auto md:h-full">
                <Image
                  src={methodFoundationImage}
                  alt="Основа метода Flow Pilates"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,20,16,0.72))]" />
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-12 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                    Основа метода
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/74">
                    Индивидуальный подход, бережное движение и практика, к
                    которой хочется возвращаться надолго.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="formats"
        className="scroll-mt-[7.5rem] bg-[#eef2eb] md:scroll-mt-[8.25rem]"
      >
        <div className="section-shell pt-10 pb-18">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
              Форматы
            </p>
            <h2 className="mt-4 font-heading text-balance text-5xl leading-[0.95] text-[#173127]">
              Направления студии, которые помогают выстроить свой ритм практики.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556154]">
              Можно начать с того формата, который телу ближе сейчас, и дальше
              углублять практику в своем темпе.
            </p>
          </div>

          <Reveal delay={40} blur>
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
          </Reveal>

          <div className="mt-8">
            {programs.map((program, index) => (
              <Reveal
                key={program.title}
                delay={index * 90}
                blur
              >
                <article
                  className="grid gap-6 border-t border-[#c5d0c0] py-6 md:grid-cols-[4.5rem_minmax(0,1fr)_7rem] md:items-center lg:grid-cols-[6rem_minmax(0,1fr)_9rem]"
              >
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="trainers"
        className="relative scroll-mt-[7.5rem] overflow-hidden bg-[#eef2eb] text-[#173127] md:scroll-mt-[8.25rem]"
      >
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

        <div className="section-shell relative py-18">
          <Reveal blur>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
                  Команда
                </p>
                <h2 className="mt-4 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl">
                  Тренеры, которые выстраивают практику вокруг вас.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#556154] lg:border-l lg:border-[#c5d0c0] lg:pl-5">
                Два профессиональных тренера с фундаментальным образованием и
                сертификатами международных школ. Каждая тренировка — бережное,
                осознанное движение под внимательным контролем.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-20 lg:space-y-24">
            {trainers.map((trainer, trainerIndex) => {
              const isReversed = trainerIndex % 2 === 1;

              return (
                <Reveal key={trainer.name} blur delay={trainerIndex * 80}>
                  <article
                    className={cn(
                      "grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14",
                      isReversed && "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
                    )}
                  >
                    <div
                      className={cn(
                        "relative",
                        isReversed && "lg:order-2",
                      )}
                    >
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
                    </div>

                    <div
                      className={cn(
                        "flex flex-col",
                        isReversed && "lg:order-1",
                      )}
                    >
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
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-[7.5rem] bg-[#111512] text-[#f6f3ec] md:scroll-mt-[8.25rem]"
      >
        <div className="section-shell grid gap-10 py-18 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
              Тарифы
            </p>
            <h2 className="mt-4 font-heading text-5xl leading-[0.95]">
              Стоимость занятий по действующему сайту студии.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/66">
              Для персональных и сплит-занятий удобнее всего сразу писать
              администратору.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "hover-lift mt-8 h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
              )}
            >
              Уточнить подходящий абонемент
            </a>
          </aside>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {prices.map((price, index) => (
              <Reveal
                key={price.title}
                delay={index * 80}
                blur
                className="h-full"
              >
                <article
                  className={cn(
                  "hover-lift relative flex h-full flex-col rounded-lg border p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)]",
                  price.highlight
                    ? "border-[#dec768] bg-[#171f19]"
                    : "border-white/10 bg-white/4",
                )}
              >
                {price.highlight ? (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#dec768]/60 bg-[#171f19] py-1 pl-2 pr-[calc(0.5rem-0.2em)] text-[11px] uppercase tracking-[0.2em] text-[#dec768]">
                    Популярное
                  </span>
                ) : null}
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/54 md:min-h-8">
                    {price.note}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl leading-none lg:min-h-[3rem] xl:min-h-[3rem]">
                    {price.title}
                  </h3>
                </div>

                <p className="mt-5 whitespace-nowrap font-heading text-[2rem] leading-none text-[#f7f4eb]">
                  {price.price}
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-white/72">
                  {price.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={price.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-11 w-full rounded-md border-white/14 bg-transparent text-sm text-white hover:bg-white/8 hover:text-white",
                    )}
                  >
                    Открыть запись
                  </a>
                </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b5d5a1] text-[#111111]">
        <div className="section-shell flex flex-col gap-5 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/56">
              Условия посещения студии
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-[0.94]">
              Все важное можно прочитать заранее и спокойно выбрать удобный
              формат.
            </h2>
          </div>
          <a
            href={termsLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hover-lift-soft h-11 rounded-md border border-[#111111] bg-[#111111] px-5 text-sm text-[#f7f4ee] hover:bg-[#1d1d1d]",
            )}
          >
            Читать подробнее
          </a>
        </div>
      </section>

      <section
        id="contacts"
        className="relative isolate scroll-mt-[7.5rem] overflow-hidden bg-[#132018] text-[#f6f3ec] md:scroll-mt-[8.25rem]"
      >
        <div className="absolute inset-0">
          <Image
            src={practiceSessionImage}
            alt="Студия Flow Pilates"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,17,13,0.9)_0%,rgba(12,17,13,0.72)_45%,rgba(12,17,13,0.82)_100%)]" />
        </div>

        <div className="section-shell relative py-18">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
                Контакты
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-balance text-5xl leading-[0.95]">
                Дышите полной грудью и приходите знакомиться со студией.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Записывайтесь онлайн, задавайте вопросы в мессенджерах и
                приходите в студию в Обнинске. Ждем вас.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "hover-lift h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
                  )}
                >
                  Записаться онлайн
                </a>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "hover-lift-soft h-12 rounded-md border-white/18 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
                  )}
                >
                  <Send className="size-4" />
                  Написать в Telegram
                </a>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;

                  return (
                    <Reveal key={contact.label} delay={index * 90} blur className="h-full">
                      <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        contact.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="hover-lift-soft group block h-full border-t border-white/12 pt-5"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="size-4 text-[#dec768]" />
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58 transition-colors group-hover:text-[#d7ecbd]">
                          {contact.label}
                        </p>
                      </div>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-white/82 transition-colors group-hover:text-[#d7ecbd]">
                        {contact.value}
                      </p>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-t border-white/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                  Что есть в студии
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  Реформер, пилатес с малым оборудованием, персональная работа,
                  сплит-тренировки и отдельные программы для подростков 12-16.
                </p>
              </div>

              <div className="border-t border-white/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                  Юридическая информация
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  © ФЛОУ ПИЛАТЕС
                  <br />
                  ИП Хромченкова Екатерина Сергеевна
                  <br />
                  ИНН 402508749919
                  <br />
                  ОГРНИП 324400000041512
                  <br />
                  Калужская обл., г. Обнинск, ул. Белкинская, 23А-17
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
