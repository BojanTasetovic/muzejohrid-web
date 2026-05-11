import Link from "next/link";

function Word({
  text,
  italic,
  amp,
  delay,
}: {
  text: string;
  italic?: boolean;
  amp?: boolean;
  delay: number;
}) {
  const cls = ["word", italic ? "italic" : "", amp ? "amp" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} style={{ animationDelay: `${delay}s` }}>
      {text}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero-type">
      {/* Top row: edition info + coordinates */}
      <div className="hero-type__top">
        <div className="hero-type__top-left">
          <span className="eyebrow" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500, color: "var(--ink)" }}>
            Nº 04 — Лето / Есен 2026
          </span>
          <span className="folio" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: 11, color: "rgba(26,26,26,0.55)" }}>
            Издание на македонски јазик
          </span>
        </div>
        <div className="hero-type__top-right">
          <div>41°06′ С · 20°48′ И</div>
          <div>Височина 695 м · Езеро од 5 милиони години</div>
          <div>Светско наследство · UNESCO 1979</div>
        </div>
      </div>

      {/* Giant typographic title with unfurl animation */}
      <h1 className="hero-type__title">
        <span className="hero-type__line">
          <Word text="Завод" delay={0.05} />
          {" "}
          <Word text="и" italic delay={0.13} />
          {" "}
          <Word text="Музеј" delay={0.21} />
        </span>
        <span className="hero-type__line">
          <Word text="—" amp delay={0.35} />
          {" "}
          <Word text="Охрид" italic delay={0.43} />
        </span>
      </h1>

      {/* Sub section: dek + meta facts */}
      <div className="hero-type__sub">
        <p className="hero-type__dek">
          Чувар на најстарото живо езеро на Балканот и градот што го напишал
          првото словенско писмо. Од антички мозаик до византиска икона —
          триесет и пет века собрани под едно име.
        </p>
        <dl className="hero-type__meta">
          <div>
            <dt>Збирки</dt>
            <dd>над 12 200 предмети</dd>
          </div>
          <div>
            <dt>Атракции</dt>
            <dd>23 локалитети</dd>
          </div>
          <div>
            <dt>Постојани изложби</dt>
            <dd>4 куќи · 7 цркви</dd>
          </div>
          <div>
            <dt>Посетители / год.</dt>
            <dd>180 000+</dd>
          </div>
          <div className="hero-type__cta-row">
            <Link href="/zbirki" className="pill-cta">
              Истражи ги збирките <span>→</span>
            </Link>
            <Link href="/poseti" className="pill-cta pill-cta--ghost">
              Планирај посета
            </Link>
          </div>
        </dl>
      </div>
    </section>
  );
}
