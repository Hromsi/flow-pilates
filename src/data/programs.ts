import { bookingLink, whatsappLink } from "@/lib/links";

export type FeaturedProgram = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  note: string;
  image: string;
};

export type Program = {
  index: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  action: string;
  href: string;
};

export const featuredProgram: FeaturedProgram = {
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

export const programs: Program[] = [
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

export const formatsCopy = {
  kicker: "Форматы",
  title: "Направления студии, которые помогают выстроить свой ритм практики.",
  description:
    "Можно начать с того формата, который телу ближе сейчас, и дальше углублять практику в своем темпе.",
};
