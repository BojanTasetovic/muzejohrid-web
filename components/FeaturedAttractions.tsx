import Image from "next/image";
import Link from "next/link";

const FEATURED = [
  {
    tag: "ЗБИРКА",
    kicker: "Куќа на Робевци",
    title: <>Античките тајни на <em>Лихнидос</em></>,
    dek: "Мозаици, монети и керамика од градот под езерото — три милениуми во една сала.",
    href: "/zbirki",
    img: "/images/atrakcii/03_slider_kuka_robevci.jpg",
    span: "feat-card--span-6",
    num: "Nº 01",
  },
  {
    tag: "АТРАКЦИЈА",
    kicker: "Тврдина",
    title: <>Самоилова <em>Тврдина</em></>,
    dek: "Камените бедеми над градот — поглед кон езерото и Албанија.",
    href: "/atrakcii/samoilova-tvrdina",
    img: "/images/atrakcii/06_slider_samoilova_tvrdina.jpg",
    span: "feat-card--span-3",
    num: "Nº 02",
  },
  {
    tag: "АТРАКЦИЈА",
    kicker: "Заливот на Коските",
    title: <>Музеј на <em>вода</em></>,
    dek: "Наколна населба на водата — живот пред 3 000 години.",
    href: "/atrakcii",
    img: "/images/atrakcii/nakolna_naselba_vo_zalivot_na_koskite_galerija_1-600x750.jpg",
    span: "feat-card--span-3",
    num: "Nº 03",
  },
  {
    tag: "ЗБИРКА",
    kicker: "Иконопис",
    title: <>Охридска иконографска <em>школа</em></>,
    dek: "XIII–XIV век. Темпера, дрво, златен лист.",
    href: "/zbirki/galerija-ikoni",
    img: "/images/zbirki/11_slider_galerija_na_ikoni.jpg",
    span: "feat-card--span-4",
    num: "Nº 04",
  },
  {
    tag: "АТРАКЦИЈА",
    kicker: "Античка",
    title: <>Античкиот <em>Театар</em></>,
    dek: "Хеленистички амфитеатар, II век п.н.е.",
    href: "/atrakcii/anticki-teatar",
    img: "/images/atrakcii/02_slider_antichki_teatar.jpg",
    span: "feat-card--span-4",
    num: "Nº 05",
  },
  {
    tag: "АТРАКЦИЈА",
    kicker: "Плаошник",
    title: <>Свети Климент и <em>Пантелејмон</em></>,
    dek: "Универзитетот на словенската писменост.",
    href: "/atrakcii/plaoshnik",
    img: "/images/atrakcii/07_slider_mozaik_bazilika_plaoshnik.jpg",
    span: "feat-card--span-4",
    num: "Nº 06",
  },
];

function FeatCard({ f, priority }: { f: (typeof FEATURED)[0]; priority?: boolean }) {
  return (
    <Link href={f.href} className={`feat-card ${f.span}`}>
      <div className="feat-card__media">
        <Image
          src={f.img}
          alt={typeof f.title === "string" ? f.title : f.kicker}
          fill
          priority={priority}
          loading={priority ? "eager" : undefined}
          sizes={
            f.span === "feat-card--span-6"
              ? "(max-width: 1100px) 50vw, 50vw"
              : f.span === "feat-card--span-4"
              ? "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
              : "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 20vw"
          }
          className="object-cover"
        />
        <span className="feat-card__tag">{f.tag}</span>
        <span className="feat-card__num">{f.num}</span>
      </div>
      <div className="feat-card__body">
        <span className="feat-card__kicker">{f.kicker}</span>
        <h3 className="feat-card__title">{f.title}</h3>
        <p className="feat-card__dek">{f.dek}</p>
      </div>
    </Link>
  );
}

export default function FeaturedAttractions() {
  return (
    <section className="section-editorial">
      <div className="section__head">
        <span className="section__num">§ Nº 01 — Истакнато</span>
        <h2 className="section__title">
          Од збирките
          <br />
          <em>и тврдините</em>
        </h2>
        <p className="section__meta">
          Шест предмети и места одбрани од кустосите за ова издание.
        </p>
      </div>
      <div className="featured-grid">
        {FEATURED.map((f, i) => (
          <FeatCard key={f.num} f={f} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}
