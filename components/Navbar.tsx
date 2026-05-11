"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const links = [
  { href: "/", label: "Почетна" },
  { href: "/za-nas", label: "За нас" },
  { href: "/zbirki", label: "Збирки" },
  { href: "/atrakcii", label: "Атракции" },
  { href: "/nastani", label: "Настани" },
  { href: "/ohrid-pas", label: "Охрид Пас" },
  { href: "/poseti", label: "Посети" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="issue-strip">
        <span>Том XXI · Издание 04</span>
        <span className="issue-strip__center">
          НУ Завод за заштита на спомениците на културата и Музеј — Охрид
        </span>
        <span className="issue-strip__right">
          <span>UNESCO 1979</span>
          <span>Основан 1948</span>
        </span>
      </div>

      <header className="site-header">
        <div className="site-header__inner">
          {/* Brand */}
          <Link href="/" className="brand-mark">
            <span className="brand-mark__box">М</span>
            <span className="brand-mark__text">
              <strong>Музеј Охрид</strong>
              <span>Завод · Музеј</span>
            </span>
          </Link>

          {/* Centered nav */}
          <nav className="editorial-nav">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Utility */}
          <div className="header-utility">
            <span className="header-utility__lang">
              <button className="is-active">МК</button>
              <span>/</span>
              <button>EN</button>
            </span>
            <Link href="/poseti#ceni" className="pill-cta">
              Купи карта <span>→</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Мени"
          >
            <span>Мени</span>
            <span className="menu-toggle__lines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-off-white flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--rule)]">
              <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
                <span className="brand-mark__box">М</span>
                <span className="brand-mark__text">
                  <strong>Музеј Охрид</strong>
                  <span>Завод · Музеј</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[var(--ink)]"
                aria-label="Затвори"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-10 gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 border-b border-[var(--rule-soft)]"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(28px, 6vw, 40px)",
                      color: "var(--ink)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 mt-auto pb-10">
              <Link
                href="/poseti#ceni"
                className="pill-cta w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Купи карта <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
