const items = [
  "Свети Климент",
  "Самоилова Тврдина",
  "Лихнидос",
  "Свети Јован Канео",
  "Античкиот Театар",
  "Куќа на Робевци",
  "Плаошник",
  "Охридско Лето",
  "Долни Сарај",
  "Свети Пантелејмон",
  "Заливот на Коските",
];

export default function MarqueeStrip() {
  const line = [...items, ...items];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-strip__track">
        {line.map((t, i) => (
          <span key={i}>
            {t}
            <span className="marquee-strip__dot"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}
