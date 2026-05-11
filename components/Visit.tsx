import Image from "next/image";
import Link from "next/link";

export default function Visit() {
  return (
    <section className="visit-panel">
      {/* Left: blue info panel */}
      <div className="visit-panel__text">
        <span
          className="visit-panel__eyebrow"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            fontWeight: 500,
          }}
        >
          § Nº 03 — Планирај посета
        </span>
        <h2>
          Еден <em>пас</em>,<br />
          дваесет и три локалитети.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.2vw, 28px)",
            lineHeight: 1.32,
            color: "rgba(247,244,239,0.85)",
            maxWidth: "40ch",
          }}
        >
          Охрид Пас отвора пристап до сите цркви, музеи и тврдини на Заводот,
          за 48 или 72 часа.
        </p>
        <dl className="visit-panel__hours">
          <div>
            <dt>Работно време</dt>
            <dd>
              Пон — Нед
              <br />
              09:00 — 19:00
            </dd>
          </div>
          <div>
            <dt>Локација</dt>
            <dd>
              Куќа на Робевци,
              <br />
              ул. Цар Самоил 62
            </dd>
          </div>
          <div>
            <dt>Билет, возрасен</dt>
            <dd>300 ден. — Пас 48ч</dd>
          </div>
          <div>
            <dt>Деца и студенти</dt>
            <dd>150 ден. — со ИД</dd>
          </div>
        </dl>
        <div className="visit-panel__cta">
          <Link href="/ohrid-pas" className="pill-cta pill-cta--on-blue">
            Купи Охрид Пас
          </Link>
          <Link href="/poseti" className="pill-cta pill-cta--on-blue-ghost">
            Покажи мапа
          </Link>
        </div>
      </div>

      {/* Right: image + floating pass card */}
      <div className="visit-panel__img">
        <Image
          src="/images/atrakcii/samoilova_tvrdina_galerija_1-750x600.jpg"
          alt="Охрид — поглед"
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="visit-panel__pass-card">
          <span className="pass-label">Охрид Пас · 72ч</span>
          <h3>
            Сè во <em>еден билет</em>
          </h3>
          <p>
            Цркви, музеи, тврдини и попуст во избрани ресторани во старо
            градскотo јадро.
          </p>
          <Link
            href="/ohrid-pas"
            className="pill-cta"
            style={{ alignSelf: "flex-start", marginTop: 6 }}
          >
            500 ден. <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
