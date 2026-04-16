# SEO — что доделать

Статус по задачам SEO-оптимизации на 2026-04-17.

---

## ✅ Уже сделано

- [x] Title переписан с ключом в начале: `Студия пилатеса в Обнинске — Flow Pilates`
- [x] Meta description с CTA (166 chars)
- [x] Open Graph теги (title, description, url, siteName, locale, type, image)
- [x] Twitter Card (summary_large_image)
- [x] `theme-color` — two-step под светлую и тёмную схемы
- [x] `robots: index, follow` + `googleBot: max-image-preview=large`
- [x] `format-detection: telephone=no, address=no, email=no` (iOS не линкует цифры)
- [x] `keywords` — 9 локальных запросов (пилатес Обнинск, реформер и т.д.)
- [x] `apple-touch-icon` → `/icon.svg`
- [x] `icon.svg` в `src/app/` — фавикон из `logo-mark.svg` с чёрной птичкой
- [x] **JSON-LD `LocalBusiness + SportsActivityLocation + HealthClub`**:
  - адрес, телефон, email, диапазон цен 800–4400 ₽
  - founder, `areaServed: Обнинск`, `sameAs` (Telegram/WhatsApp)
  - `hasOfferCatalog` со всеми 5 форматами и ценами
- [x] OG-image перенесён с Tilda CDN на локальный `/public/images/flow-pilates/hero-poster.jpg`
- [x] `canonical: https://flowpilates.ru`

---

## 🟡 Нужен твой инпут

### 1. Geo-координаты студии
Где взять: Яндекс.Карты → «Обнинск, пр-т Ленина, 137 корп. 4» → правый клик на точке → «Что здесь?» → числа снизу.

Формат: `55.xxxxxx, 36.xxxxxx`.

Куда вставить: [src/app/layout.tsx](src/app/layout.tsx) — в объект `jsonLd`, добавить:
```js
geo: {
  "@type": "GeoCoordinates",
  latitude: 55.xxxxxx,
  longitude: 36.xxxxxx,
},
```

### 2. Часы работы студии
Например «Пн-Пт 07:00–22:00, Сб-Вс 09:00–21:00».

Куда вставить: в тот же `jsonLd`:
```js
openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "07:00",
    closes: "22:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
],
```

### 3. Полный адрес с индексом
Проверить почтовый индекс для «пр-т Ленина, 137 корп. 4». Добавить в `jsonLd.address.postalCode`.

---

## 🔵 После запуска на прод

### 4. Яндекс.Вебмастер + Google Search Console
Это **не метатеги**, а панели для мониторинга SEO.

1. Зарегистрироваться на [webmaster.yandex.ru](https://webmaster.yandex.ru) и [search.google.com/search-console](https://search.google.com/search-console)
2. Добавить сайт
3. Подтвердить владение — каждая панель выдаст свой уникальный meta-тег
4. Вставить в [src/app/layout.tsx](src/app/layout.tsx):
   ```ts
   verification: {
     yandex: "здесь-код-из-вебмастера",
     google: "здесь-код-из-search-console",
   },
   ```
5. Отправить sitemap (см. пункт 5)

### 5. sitemap.xml + robots.txt — ✅ готово
- [src/app/sitemap.ts](src/app/sitemap.ts) — генерирует `/sitemap.xml` со всеми страницами
- [src/app/robots.ts](src/app/robots.ts) — генерирует `/robots.txt`, разрешает всё кроме `/api/`, указывает путь к sitemap

**После деплоя:** отправить `https://flowpilates.ru/sitemap.xml` в Я.Вебмастер и Google Search Console для ускорения индексации. При добавлении новых страниц — пополнить `sitemap.ts`.

### 6. Яндекс.Метрика + Google Analytics
Это **аналитика поведения пользователей** (не SEO, но смежно).
- Создать счётчики, получить ID
- Добавить компонент `<YandexMetrika />` и `<GoogleAnalytics />` в layout
- Настроить цели: клик на «Записаться», «Написать в Telegram», клик по телефону

---

## 🟢 Будущие улучшения

### 7. Proper landscape OG-image
Сейчас `hero-poster.jpg` — портрет 853×1280. Соцсети/мессенджеры обрезают. Сделать ландшафтный вариант 1200×630 или 1600×900 специально для превью.

### 8. Отзывы → `aggregateRating` в JSON-LD
Когда будут реальные отзывы (Яндекс.Карты, 2ГИС), добавить:
```js
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "47",
},
```
Это даст звёзды в поисковой выдаче — сильно повышает CTR.

### 9. FAQPage schema
Добавить секцию FAQ на страницу (частые вопросы: «Нужна ли предварительная запись?», «Что взять с собой?», «Можно ли беременным?» и т.д.) + JSON-LD `FAQPage`. Google показывает FAQ-блоки прямо в выдаче, сильно расширяет присутствие в SERP.

### 10. BreadcrumbList
Если когда-нибудь добавятся подстраницы (блог, отдельные страницы форматов) — добавить хлебные крошки и `BreadcrumbList` schema.

### 11. Страница отдельного тренера + `Person` schema
Если выделим каждого тренера на отдельную страницу — добавить schema.org/Person с квалификациями и сертификатами. Хорошо для E-E-A-T.

### 12. GEO-оптимизация (AI search)
Для появления в ChatGPT / Perplexity / Яндекс.Нейро:
- Чёткие прямые ответы в начале секций («Студия Flow Pilates находится в Обнинске…»)
- Факты с цифрами («с 2018 года», «5 форматов»)
- Внешние упоминания и обратные ссылки на сайт

---

## 📊 Проверка

После внесения изменений прогнать через:
- [Google Rich Results Test](https://search.google.com/test/rich-results) — JSON-LD
- [Schema.org Validator](https://validator.schema.org/) — структурированные данные
- [Яндекс.Валидатор](https://webmaster.yandex.ru/tools/microtest/) — micro-разметка
- [OpenGraph.xyz](https://www.opengraph.xyz/) — превью для соцсетей
- [PageSpeed Insights](https://pagespeed.web.dev/) — Core Web Vitals
