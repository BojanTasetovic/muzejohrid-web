import Link from "next/link";

const footerLinks = {
  "Истражи": [
    { label: "Збирки", href: "/zbirki" },
    { label: "Атракции", href: "/atrakcii" },
    { label: "Настани", href: "/nastani" },
    { label: "Охрид Пас", href: "/ohrid-pas" },
  ],
  "Посета": [
    { label: "Планирај посета", href: "/poseti" },
    { label: "Работно време", href: "/poseti#radno-vreme" },
    { label: "Цени", href: "/poseti#ceni" },
    { label: "Пристап", href: "/poseti#pristap" },
  ],
  "Институција": [
    { label: "За нас", href: "/za-nas" },
    { label: "Историја", href: "/za-nas#istorija" },
    { label: "Контакт", href: "/kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-byzantine-gold text-xs uppercase tracking-[0.2em] mb-2 font-sans">
              НУ Завод и Музеј
            </p>
            <h3 className="font-heading text-white text-2xl font-semibold mb-5">Охрид</h3>
            <p className="text-sm leading-relaxed text-white/40">
              Заштитник на UNESCO наследството на Охрид и чувар на
              вековната историја на Македонија.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-byzantine-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} НУ Завод и Музеј Охрид. Сите права задржани.</p>
          <p className="flex items-center gap-1">
            <a href="http://muzejohrid.mk" className="hover:text-white/60 transition-colors duration-300">
              muzejohrid.mk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
