import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { mailLink, mapsLink, phoneLink } from "@/lib/links";

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const contacts: Contact[] = [
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

export const contactsCopy = {
  kicker: "Контакты",
  title: "Дышите полной грудью и приходите знакомиться со студией.",
  description:
    "Записывайтесь онлайн, задавайте вопросы в мессенджерах и приходите в студию в Обнинске. Ждем вас.",
  bookingCta: "Записаться онлайн",
  telegramCta: "Написать в Telegram",
  aboutKicker: "Что есть в студии",
  aboutDescription:
    "Реформер, пилатес с малым оборудованием, персональная работа, сплит-тренировки и отдельные программы для подростков 12-16.",
  legalKicker: "Юридическая информация",
  legal: [
    "© ФЛОУ ПИЛАТЕС",
    "ИП Хромченкова Екатерина Сергеевна",
    "ИНН 402508749919",
    "ОГРНИП 324400000041512",
    "Калужская обл., г. Обнинск, ул. Белкинская, 23А-17",
  ],
};

export const termsBannerCopy = {
  kicker: "Условия посещения студии",
  title:
    "Все важное можно прочитать заранее и спокойно выбрать удобный формат.",
  cta: "Читать подробнее",
};
