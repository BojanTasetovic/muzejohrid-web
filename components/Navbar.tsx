"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/zbirki", label: "Збирки" },
  { href: "/atrakcii", label: "Атракции" },
  { href: "/nastani", label: "Настани" },
  { href: "/ohrid-pas", label: "Охрид Пас" },
  { href: "/poseti", label: "Посети" },
  { href: "/za-nas", label: "За нас" },
  { href: "/kontakt", label: "Контакт" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ohrid-blue/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-heading text-byzantine-gold text-xs uppercase tracking-[0.2em] mb-0.5">
              НУ Завод и Музеј
            </span>
            <span className="font-heading text-white text-xl font-semibold tracking-wide group-hover:text-stone transition-colors duration-300">
              Охрид
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-byzantine-gold text-sm tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-byzantine-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Language + mobile toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-white/60 hover:text-byzantine-gold text-xs tracking-widest transition-colors duration-300">
              EN
            </button>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Мени"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ohrid-blue flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-white text-3xl hover:text-byzantine-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
