"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: { day: "18", month: "МАЈ" },
    category: "Меѓународен ден на музеите",
    title: "27та традиционална изложба по повод Меѓународниот ден на музеите",
    href: "/nastani/muzejski-den-2024",
    image: "/images/nastani/D64ArPwgCdizlozba_NUB_1--min.jpg",
  },
  {
    date: { day: "24", month: "МАЈ" },
    category: "Свечена академија",
    title: "Ден на сесловенските просветители — Свети Кирил и Методиј",
    href: "/nastani/kiril-metodij-2024",
    image: "/images/nastani/Настан-Европски-денови-на-културата-2024.jpg",
  },
  {
    date: { day: "08", month: "СЕП" },
    category: "Изложба",
    title: "Јапонска изложба — специјална презентација на јапонската уметност",
    href: "/nastani/japanska-izlozba",
    image: "/images/nastani/Плакат-јапонска-изложба.jpg",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-ohrid-blue py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-14 border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-byzantine-gold text-xs uppercase tracking-[0.25em] mb-3">
              Календар
            </p>
            <h2 className="font-heading text-white text-4xl md:text-5xl font-semibold">
              Настани
            </h2>
          </div>
          <Link
            href="/nastani"
            className="hidden md:inline-flex items-center gap-2 text-white/50 hover:text-byzantine-gold text-sm tracking-wide transition-colors duration-300 group"
          >
            Сите настани
            <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Events list — editorial style like cphmuseum.kk.dk */}
        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link href={event.href} className="group block">
                <div className="flex items-start gap-6 md:gap-10 py-8 border-b border-white/10 hover:border-byzantine-gold/40 transition-colors duration-300">

                  {/* Date */}
                  <div className="flex-shrink-0 text-center w-14">
                    <span className="font-heading text-byzantine-gold text-3xl font-semibold leading-none block">
                      {event.date.day}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-sans mt-1 block">
                      {event.date.month}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="flex-shrink-0 w-px self-stretch bg-white/10 group-hover:bg-byzantine-gold/40 transition-colors duration-300" />

                  {/* Text */}
                  <div className="flex-1 min-w-0 pt-1">
                    <span className="text-stone text-[11px] uppercase tracking-[0.2em] font-sans block mb-2">
                      {event.category}
                    </span>
                    <h3 className="font-heading text-white text-lg md:text-xl font-semibold leading-snug group-hover:text-byzantine-gold transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  {/* Thumbnail — hidden on mobile */}
                  <div className="hidden lg:block flex-shrink-0 relative w-28 h-20 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center text-white/20 group-hover:text-byzantine-gold transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/nastani"
            className="text-white/60 text-sm tracking-wide border-b border-white/20 pb-0.5 hover:text-byzantine-gold hover:border-byzantine-gold/40 transition-colors duration-300"
          >
            Сите настани →
          </Link>
        </div>
      </div>
    </section>
  );
}
