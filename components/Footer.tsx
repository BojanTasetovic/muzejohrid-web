import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-editorial">
      <div className="footer-editorial__top">
        <div className="footer-editorial__brand">
          <h3>
            НУ Завод и <em>Музеј</em> — Охрид
          </h3>
          <p>
            Куќа на Робевци, ул. Цар Самоил 62
            <br />
            6000 Охрид, Република Северна Македонија
            <br />
            +389 46 267 173 · info@muzejohrid.mk
          </p>
        </div>

        <div className="footer-editorial__col">
          <h4>Истражи</h4>
          <Link href="/zbirki">Збирки</Link>
          <Link href="/atrakcii">Атракции</Link>
          <Link href="/nastani">Настани</Link>
          <Link href="/ohrid-pas">Охрид Пас</Link>
        </div>

        <div className="footer-editorial__col">
          <h4>Институција</h4>
          <Link href="/za-nas">За Заводот</Link>
          <Link href="/za-nas#tim">Тим</Link>
          <Link href="/za-nas#izdavaci">Издавачка дејност</Link>
          <Link href="/kontakt">Контакт</Link>
        </div>

        <div className="footer-editorial__col">
          <h4>Партнери</h4>
          <a href="https://whc.unesco.org" target="_blank" rel="noopener">UNESCO</a>
          <a href="https://icom.museum" target="_blank" rel="noopener">ICOM</a>
          <Link href="/za-nas">Министерство за култура</Link>
          <Link href="/za-nas">Општина Охрид</Link>
        </div>
      </div>

      <div className="footer-editorial__bottom">
        <span>© 1948 — {new Date().getFullYear()} НУ Завод и Музеј Охрид</span>
        <span>Том XXI · Издание 04 · Лето 2026</span>
        <span>Сите права задржани</span>
      </div>
    </footer>
  );
}
