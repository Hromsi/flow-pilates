import Image from "next/image";
import {
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  PlayCircle,
  Send,
  Sparkles,
  Users,
  Waves,
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
  { label: "Студия", href: "#studio" },
  { label: "Форматы", href: "#programs" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const marqueeWords = [
  "reformer",
  "mindful movement",
  "spine care",
  "personal practice",
  "split sessions",
  "teens",
  "55 minutes",
  "flow pilates",
];

const heroStats = [
  {
    value: "55 минут",
    label: "бережной точной практики",
  },
  {
    value: "5 форматов",
    label: "от реформера до подростковых занятий",
  },
  {
    value: "с 2018",
    label: "опыт преподавания и персональная работа",
  },
];

const founderFacts = [
  "Высшее спортивное образование (Российский Университет Спорта ГЦОЛИФК).",
  "Опыт преподавания с 2018 года.",
  "Работа с групповыми программами на реформере в Москве.",
  "Сертифицированный специалист международной школы пилатеса Balance Body.",
];

const pillars = [
  {
    title: "Контроль",
    text: "Тело учится двигаться точнее, без суеты и ненужного напряжения.",
    icon: HeartPulse,
  },
  {
    title: "Поддержка",
    text: "Нагрузка адаптируется под уровень подготовки, задачи и самочувствие.",
    icon: Users,
  },
  {
    title: "Текучесть",
    text: "Сила, мобильность и дыхание соединяются в один естественный ритм.",
    icon: Waves,
  },
];

const stages = [
  {
    index: "01",
    title: "Сначала услышать тело",
    text: "Старт идет не от шаблона, а от вашего состояния, осанки, дыхания и реальной цели.",
  },
  {
    index: "02",
    title: "Потом собрать опору",
    text: "Через реформер, мат и малое оборудование возвращается ощущение центра, устойчивости и длины в движении.",
  },
  {
    index: "03",
    title: "И только потом усиливать",
    text: "Сила наращивается бережно, чтобы ее хотелось сохранять не пару недель, а надолго.",
  },
];

const featuredProgram = {
  title: "Тренировки на реформере",
  subtitle: "Флагманский формат студии",
  description:
    "Первая точка входа в Flow Pilates для тех, кто хочет выстроить сильное, вытянутое и устойчивое тело без ударной нагрузки. Реформер помогает почувствовать технику, увидеть глубину движения и сделать практику по-настоящему осознанной.",
  image:
    "https://static.tildacdn.com/tild3035-6637-4336-a236-666633656665/84748.png",
  note: "55 минут • любой уровень • запись онлайн",
};

const programs = [
  {
    index: "02",
    title: "Пилатес с малым оборудованием",
    description:
      "Мат, ролл, кольцо, лента и мяч помогают включить глубокие мышцы корпуса, улучшить осанку и добавить телу спокойную силу.",
    image:
      "https://static.tildacdn.com/tild6331-3236-4335-b564-343434383532/2320672.png",
    action: "Выбрать время",
    href: bookingLink,
  },
  {
    index: "03",
    title: "Персональные тренировки",
    description:
      "Формат для точной настройки техники, работы с индивидуальными задачами и бережного прогресса в своем темпе.",
    image:
      "https://static.tildacdn.com/tild6231-3637-4266-a461-373030656439/a9747d5b776b1bf5e1e4.png",
    action: "Написать администратору",
    href: whatsappLink,
  },
  {
    index: "04",
    title: "Сплит-тренировки",
    description:
      "Парная практика для двоих, где сохраняется внимание тренера и появляется дополнительная динамика совместного движения.",
    image:
      "https://static.tildacdn.com/tild6335-3433-4236-b363-366232396562/2963527.png",
    action: "Обсудить формат",
    href: whatsappLink,
  },
  {
    index: "05",
    title: "Пилатес для подростков 12–16",
    description:
      "Укрепляет опорно-двигательный аппарат, развивает координацию и делает физическую активность понятной и спокойной привычкой.",
    image:
      "https://static.tildacdn.com/tild3663-3736-4138-a537-646361343264/9208888.png",
    action: "Записать подростка",
    href: bookingLink,
  },
];

const prices = [
  {
    title: "Пилатес с малым оборудованием",
    price: "800 ₽",
    note: "разовое занятие",
    items: [
      "4 тренировки — 3 000 ₽",
      "6 тренировок — 4 200 ₽",
      "8 тренировок — 5 200 ₽",
      "12 тренировок — 7 200 ₽",
    ],
    href: bookingLink,
  },
  {
    title: "Реформер",
    price: "1 500 ₽",
    note: "разовое занятие",
    items: [
      "4 тренировки — 5 800 ₽",
      "6 тренировок — 8 400 ₽",
      "8 тренировок — 10 400 ₽",
      "12 тренировок — 15 000 ₽",
    ],
    href: bookingLink,
    highlight: true,
  },
  {
    title: "Персональные тренировки",
    price: "2 800 ₽",
    note: "по предварительной записи",
    items: [
      "4 тренировки — 10 800 ₽",
      "6 тренировок — 15 300 ₽",
      "8 тренировок — 19 600 ₽",
      "12 тренировок — 28 800 ₽",
    ],
    href: whatsappLink,
  },
  {
    title: "Сплит-тренировки",
    price: "4 400 ₽",
    note: "для двоих",
    items: [
      "4 тренировки — 17 200 ₽",
      "6 тренировок — 25 200 ₽",
      "8 тренировок — 32 000 ₽",
      "12 тренировок — 46 800 ₽",
    ],
    href: whatsappLink,
  },
  {
    title: "Подростковые тренировки",
    price: "1 100 ₽",
    note: "разовое занятие",
    items: [
      "4 тренировки — 4 200 ₽",
      "6 тренировок — 6 200 ₽",
      "8 тренировок — 8 200 ₽",
      "12 тренировок — 12 200 ₽",
    ],
    href: bookingLink,
  },
  {
    title: "Смешанный абонемент",
    price: "от 4 200 ₽",
    note: "реформер + малое оборудование",
    items: [
      "2+2 — 4 200 ₽",
      "3+3 — 6 200 ₽",
      "5+3 — 8 200 ₽",
      "8+4 — 12 200 ₽",
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
    href: "https://yandex.ru/maps/?text=Обнинск%2C%20пр-т%20Ленина%20137%20корп.%204%20пом.%20254",
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden bg-[#0f1410] text-[#f6f3ec]">
        <div className="absolute inset-0">
          <Image
            src="https://static.tildacdn.com/tild6437-3630-4863-b565-343366313536/40573.jpg"
            alt="Пространство студии Flow Pilates"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,11,0.9)_0%,rgba(10,12,11,0.68)_42%,rgba(10,12,11,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,0.18)_0%,rgba(10,12,11,0.44)_48%,rgba(10,12,11,0.86)_100%)]" />
        </div>

        <div className="section-shell relative flex min-h-[86svh] flex-col pb-8 pt-4 sm:min-h-[88svh] lg:min-h-[90svh]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-3 text-[11px] uppercase tracking-[0.28em] text-white/68">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span>Обнинск</span>
              <span>Mindful movement studio</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href={telegramLink} target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <nav className="flex items-center justify-between gap-4 py-5">
            <a
              href="#top"
              className="font-heading text-base uppercase tracking-[0.34em] text-[#d7ecbd]"
            >
              Flow Pilates
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/78 transition-colors hover:text-[#e6f5d4]"
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
                "h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-4 text-sm text-[#173127] hover:bg-[#ecf8e1]",
              )}
            >
              Записаться
            </a>
          </nav>

          <div
            id="top"
            className="grid flex-1 items-end gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_30rem] lg:gap-14 lg:py-12"
          >
            <div className="max-w-4xl pb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#dec768]">
                reformer • mindful movement • personal sessions
              </p>
              <h1 className="mt-5 max-w-4xl font-heading text-balance text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
                Плавная сила, собранная вокруг тела, а не против него.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                Flow Pilates делает движение красивым изнутри: через спокойный
                темп, точную технику, реформер, мат-практику и внимательную
                работу с тем, что телу действительно нужно именно сейчас.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1]",
                  )}
                >
                  Открыть запись
                </a>
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-md border-white/20 bg-white/8 px-5 text-sm text-white hover:bg-white/12 hover:text-white",
                  )}
                >
                  <PlayCircle className="size-4" />
                  Ощутить атмосферу
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-3">
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

            <div className="grid gap-4 lg:pb-4">
              <div className="grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_190px]">
                <div className="relative aspect-[0.88] overflow-hidden rounded-lg border border-white/12 bg-black/15">
                  <Image
                    src="https://static.tildacdn.com/tild6131-6165-4130-b632-623633653561/Photoroom_20250717_1.png"
                    alt="Основатель студии Flow Pilates"
                    fill
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(10,12,11,0.92))] px-5 pb-5 pt-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                      Екатерина Хромченкова
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Основатель студии и тренер, который собирает практику
                      вокруг человека, а не наоборот.
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
                      результат, с которым хочется жить каждый день.
                    </p>
                  </div>

                  <div className="relative aspect-[0.88] overflow-hidden rounded-lg border border-white/12">
                    <Image
                      src="https://static.tildacdn.com/tild3564-3662-4361-a538-316531356135/IMG_0330.jpeg"
                      alt="Интерьер Flow Pilates"
                      fill
                      sizes="(max-width: 1024px) 100vw, 190px"
                      className="object-cover"
                    />
                  </div>
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

      <section className="overflow-hidden border-y border-[#c5d0c0] bg-[#dfe8d9] text-[#173127]">
        <div className="marquee-track flex w-max items-center gap-4 py-4">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="flex items-center gap-4 px-1 text-sm uppercase tracking-[0.32em]"
            >
              <span>{word}</span>
              <span className="size-1.5 rounded-full bg-[#d26b51]" />
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="bg-[#eef2eb]">
        <div className="section-shell grid gap-12 py-18 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
              Студия
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-[0.94] text-[#173127]">
              Пилатес как внимательная архитектура движения.
            </h2>

            <ul className="mt-8 space-y-4 border-t border-[#c5d0c0] pt-5 text-sm leading-6 text-[#4b544a]">
              {founderFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
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
                  "h-11 rounded-md border border-[#173127] bg-[#173127] px-5 text-sm text-[#f6f4ee] hover:bg-[#214133]",
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
                  "h-11 rounded-md border-[#c5d0c0] bg-transparent px-5 text-sm text-[#173127] hover:bg-[#e5ece0]",
                )}
              >
                Перейти в Telegram
              </a>
            </div>
          </aside>

          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_13rem] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#596157]">
                  Манифест Flow Pilates
                </p>
                <p className="mt-5 max-w-4xl font-heading text-balance text-5xl leading-[0.95] text-[#173127] sm:text-6xl">
                  Разум и тело встречаются в одном спокойном ритме, где сила
                  приходит через ясность, а не через спешку.
                </p>
              </div>
              <div className="border-l border-[#c5d0c0] pl-4 text-sm leading-6 text-[#4d564b]">
                Мы создали пространство, в котором движение становится не
                обязанностью, а мягкой точкой опоры. Здесь можно начать с нуля,
                вернуться после паузы или углубить уже знакомую практику.
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="relative aspect-[1.3] overflow-hidden rounded-lg">
                <Image
                  src="https://static.tildacdn.com/tild6437-3630-4863-b565-343366313536/40573.jpg"
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
                    Теплый минимализм, точное оборудование и ритм, который дает
                    телу возможность не бороться, а раскрываться.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
                <div className="relative aspect-[1/1.08] overflow-hidden rounded-lg bg-[#dbe4d7]">
                  <Image
                    src="https://static.tildacdn.com/tild3734-3562-4465-a632-386164333664/82041.jpg"
                    alt="Практика в студии"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-[#c5d0c0] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d26b51]">
                    Основа метода
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#4d564b]">
                    Бережное, осознанное движение, которое остается с человеком
                    надолго и поддерживает качество повседневной жизни.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="border-t border-[#c5d0c0] pt-5 text-[#173127]"
                  >
                    <Icon className="size-5 text-[#d26b51]" />
                    <h3 className="mt-4 font-heading text-3xl leading-none">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#526052]">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173127] text-[#f6f3ec]">
        <div className="section-shell grid gap-10 py-18 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
              Как строится практика
            </p>
            <h2 className="mt-4 max-w-xl font-heading text-balance text-5xl leading-[0.95]">
              Не жесткая дисциплина, а точный и спокойный прогресс.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/72">
              Flow Pilates не разгоняет тело через перегруз. Вместо этого
              практика выстраивает новый способ двигаться, дышать и держать
              опору в повседневности.
            </p>
          </div>

          <div className="space-y-6">
            {stages.map((stage) => (
              <div
                key={stage.index}
                className="grid gap-4 border-t border-white/14 py-5 md:grid-cols-[5.5rem_minmax(0,1fr)]"
              >
                <div className="font-heading text-5xl leading-none text-[#dec768]">
                  {stage.index}
                </div>
                <div>
                  <h3 className="font-heading text-3xl leading-none">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
                    {stage.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-[#eef2eb]">
        <div className="section-shell py-18">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d26b51]">
              Форматы
            </p>
            <h2 className="mt-4 font-heading text-balance text-5xl leading-[0.95] text-[#173127]">
              Программы не спорят друг с другом, а собираются в одну систему.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556154]">
              Можно начать с того формата, который телу ближе сейчас, и дальше
              углублять практику в своем ритме.
            </p>
          </div>

          <article className="mt-10 grid gap-8 rounded-lg border border-[#c5d0c0] bg-[#121814] p-6 text-white lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center lg:p-8">
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
                    "h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1]",
                  )}
                >
                  Записаться на реформер
                </a>
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-md border-white/18 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
                  )}
                >
                  Открыть видео
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

          <div className="mt-8">
            {programs.map((program) => (
              <article
                key={program.title}
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
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#111512] text-[#f6f3ec]">
        <div className="section-shell grid gap-10 py-18 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
              Стоимость
            </p>
            <h2 className="mt-4 font-heading text-5xl leading-[0.95]">
              Прозрачные цены, чтобы выбрать свой темп без лишних раздумий.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/66">
              Основа собрана по текущему сайту студии. Для персональных и
              сплит-занятий удобнее всего сразу писать администратору.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1]",
              )}
            >
              Уточнить подходящий абонемент
            </a>
          </aside>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {prices.map((price) => (
              <article
                key={price.title}
                className={cn(
                  "rounded-lg border p-5",
                  price.highlight
                    ? "border-[#dec768] bg-[#171f19]"
                    : "border-white/10 bg-white/4",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/54">
                      {price.note}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl leading-none">
                      {price.title}
                    </h3>
                  </div>
                  {price.highlight ? (
                    <span className="rounded-md border border-[#dec768]/50 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-[#dec768]">
                      studio pick
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 font-heading text-5xl leading-none text-[#f7f4eb]">
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

                <a
                  href={price.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mt-6 h-11 w-full rounded-md border-white/14 bg-transparent text-sm text-white hover:bg-white/8 hover:text-white",
                  )}
                >
                  Открыть запись
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="relative isolate overflow-hidden bg-[#132018] text-[#f6f3ec]"
      >
        <div className="absolute inset-0">
          <Image
            src="https://static.tildacdn.com/tild3734-3562-4465-a632-386164333664/82041.jpg"
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
                Иногда все, что нужно телу, это одно внимательное первое
                занятие.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Записывайтесь онлайн, задавайте вопросы в мессенджерах и
                приходите знакомиться со студией в Обнинске. Первый шаг здесь
                ощущается спокойно уже с порога.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1]",
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
                    "h-12 rounded-md border-white/18 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
                  )}
                >
                  <Send className="size-4" />
                  Написать в Telegram
                </a>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                      className="border-t border-white/12 pt-5 transition-colors hover:text-[#d7ecbd]"
                    >
                      <Icon className="size-5 text-[#dec768]" />
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                        {contact.label}
                      </p>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-white/82">
                        {contact.value}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-t border-white/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                  Кому подходит Flow Pilates
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  Тем, кто хочет добавить телу мягкую силу, выровнять осанку,
                  почувствовать центр и вернуть движению спокойную точность.
                </p>
              </div>

              <div className="border-t border-white/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
                  Что есть в студии
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  Реформер, пилатес с малым оборудованием, персональная работа,
                  сплит-тренировки и отдельные программы для подростков 12–16.
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
