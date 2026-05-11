# CLAUDE.md — muzejohrid.mk / Веб проект

## Контекст на проектот
- **Проект:** Редизајн на официјалната веб страна на НУ Завод и Музеј – Охрид
- **URL:** muzejohrid.mk
- **Цел:** Модерна, визуелно силна презентација на институцијата и нејзините содржини
- **Јазик:** Македонски (примарен), со можност за англиски верзија подоцна

---

## Tech Stack

- **Framework:** React (со Vite или Next.js)
- **Анимации:** Framer Motion
- **UI компоненти:** shadcn/ui
- **Стилизација:** Tailwind CSS
- **Runtime:** Node.js

---

## Дизајн систем

### Боја палета
```
--ohrid-blue:    #1B3A5C   /* Примарна — темно охридско сино */
--stone:         #C4A882   /* Секундарна — камена беж */
--byzantine-gold:#C9A84C   /* Акцент — Византиско злато */
--off-white:     #F7F4EF   /* Позадина */
--dark:          #1A1A1A   /* Текст */
```

### Типографија
- **Display / Наслови:** Playfair Display (Google Fonts)
- **Body / UI:** Inter (Google Fonts)
- Наслови: `font-size` скала со `clamp()` за responsive
- Никогаш не користи Arial, Roboto, системски фонтови

### Дизајн референци (инспирација, не копирање)
- [cphmuseum.kk.dk](https://cphmuseum.kk.dk) — едиторијален layout
- [rijksmuseum.nl](https://rijksmuseum.nl) — колекции и навигација
- [louvre.fr](https://louvre.fr) — луксузна атмосфера
- [smk.dk](https://smk.dk) — модерна музејска естетика

---

## Содржина и структура

### Извор на содржина
- Скрепирана од muzejohrid.mk: **1416 слики + txt фајлови**
- Txt фајловите се во GitHub repo
- Слики = **placeholders преку `picsum.photos`** (до финална имплементација)

### Предложена структура на страните
```
/                    → Почетна (Hero + Featured атракции + Настани)
/za-nas              → За нас (историја, мисија, тим)
/zbirki              → Збирки (колекции, артефакти)
/atrakcii            → Атракции (локации, карта)
/nastani             → Настани (календар, фестивали)
/ohrid-pas           → Охрид Пас (city pass страна)
/poseti              → Планирај посета (работно време, цени, пристап)
/kontakt             → Контакт
```

---

## Работен режим

### Пред секоја задача
1. Провери дали задачата засега **1 компонента / 1 страна / 1 функција**
2. Ако е посложена — разложи ја и потврди план прво
3. Никогаш не започнувај со код без јасна структура

### Код стандарди
- Компонентите се **функционални React компоненти** со hooks
- Секоја компонента = 1 фајл во `/components/`
- Страните се во `/pages/` или `/app/` (во зависност од Next.js/Vite)
- Именувај фајлове: `PascalCase.jsx`
- CSS: само Tailwind класи + CSS variables за боите

### Анимации (Framer Motion)
- Секоја страна има **page transition**
- Hero секции: **staggered reveal** на елементи
- Картички/galleries: **hover effects** (scale + shadow)
- Scroll-trigger анимации за секции подолу на страната
- Принцип: **помалку, но поефектно** — не анимирај сè

### Слики
- Во development: `https://picsum.photos/{width}/{height}?random={id}`
- Во production: локални или CDN слики од музејот
- Секогаш користи `lazy loading` + `aspect-ratio` за да избегнеш layout shift

### Верификација пред "Done"
- [ ] Компонентата се рендерира без грешки
- [ ] Responsive на mobile (375px), tablet (768px), desktop (1280px)
- [ ] Боите се точни (провери со CSS variables)
- [ ] Framer Motion анимациите работат
- [ ] Нема console.log() во финален код

---

## Core Principles

- **Simplicity First** — секоја промена мора да биде минимална и прецизна
- **Museum-grade Quality** — ова е институција со UNESCO наследство; дизајнот мора да го одразува тоа
- **Performance** — Lighthouse score > 85 е цел
- **Accessibility** — alt текстови, контраст, keyboard navigation

---

## GitHub Workflow
- Repo содржи: само `txt` фајлови со содржина (не слики)
- Слики се решаваат со `picsum.photos` placeholders
- Commit пораки: на англиски, кратки и описни (`feat: add Hero component`)
