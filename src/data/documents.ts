export type StudioDocument = {
  title: string;
  description: string;
  href: string;
};

export const studioDocuments: StudioDocument[] = [
  {
    title: "Договор-оферта",
    description:
      "Публичный договор оказания услуг между студией и клиентом.",
    href: "/documents/public-offer.pdf",
  },
  {
    title: "Правила посещения студии",
    description:
      "Приложение к договору: абонементы, отмены, возрастные группы, видеонаблюдение.",
    href: "/documents/studio-rules.pdf",
  },
  {
    title: "Вводный инструктаж",
    description:
      "Инструкция по безопасности, требованиям к здоровью и форме для первого визита.",
    href: "/documents/intro-briefing.pdf",
  },
];

export const documentsCopy = {
  kicker: "Документы",
  description:
    "Полные юридические документы студии — договор, правила и инструктаж для клиентов.",
};
