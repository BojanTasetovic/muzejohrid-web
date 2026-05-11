import Link from "next/link";

const EVENTS = [
  {
    day: "12",
    mon: "ЈУН",
    time: "21:00",
    title: <>Отворање на <em>Охридско Лето</em></>,
    loc: "Античкиот Театар",
    tag: "ФЕСТИВАЛ",
    href: "/nastani",
  },
  {
    day: "23",
    mon: "ЈУН",
    time: "19:00 — 24:00",
    title: <>Ноќта на <em>музеите</em></>,
    loc: "Сите локации",
    tag: "ОТВОРЕНО",
    href: "/nastani",
  },
  {
    day: "04",
    mon: "ЈУЛ",
    time: "18:00",
    title: <>Изложба: <em>Реставрирани икони</em> 2025</>,
    loc: "Куќа на Робевци",
    tag: "ИЗЛОЖБА",
    href: "/nastani",
  },
  {
    day: "17",
    mon: "ЈУЛ",
    time: "20:30",
    title: <>Археолошки разговори — <em>Лихнидос</em></>,
    loc: "Античкиот Театар",
    tag: "ПРЕДАВАЊЕ",
    href: "/nastani",
  },
  {
    day: "08",
    mon: "АВГ",
    time: "20:00",
    title: <>Балканска средба на <em>традиционални инструменти</em></>,
    loc: "Долни Сарај",
    tag: "КОНЦЕРТ",
    href: "/nastani",
  },
];

export default function EventsSection() {
  return (
    <section className="section-editorial events-editorial">
      <div className="section__head">
        <span className="section__num">§ Nº 02 — Календар</span>
        <h2 className="section__title">
          Настани <em>оваа сезона</em>
        </h2>
        <p className="section__meta">
          Од летниот фестивал на Античкиот Театар до ноќта на музеите.
        </p>
      </div>

      <div className="event-list">
        {EVENTS.map((e, i) => (
          <Link key={i} href={e.href} className="event-row">
            <div className="event-row__date">
              <span className="day">{e.day}</span>
              <span className="mon">
                {e.mon} · {e.time}
              </span>
            </div>
            <div className="event-row__title">
              <h3>{e.title}</h3>
              <span>{e.tag}</span>
            </div>
            <div className="event-row__loc">{e.loc}</div>
            <div className="event-row__tag">{e.tag}</div>
            <div className="event-row__arrow">→</div>
          </Link>
        ))}
      </div>

      <div className="events-more">
        <p className="events-more__meta">
          Целосниот календар содржи 47 настани до крајот на годината.
        </p>
        <Link href="/nastani" className="pill-cta pill-cta--ghost">
          Цел календар <span>→</span>
        </Link>
      </div>
    </section>
  );
}
