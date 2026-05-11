"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function OhridPassBanner() {
  return (
    <section className="relative overflow-hidden bg-stone py-24 px-6 md:px-16">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/atrakcii/09_slider_crkva_sv_kliment_i_pantelejmon_plaoshnik.jpg"
          alt="Плаошник"
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-ohrid-blue/60 text-xs uppercase tracking-[0.25em] font-sans mb-4">
            City Pass
          </p>
          <h2 className="font-heading text-ohrid-blue text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Охрид Пас —<br />неограничен пристап
          </h2>
          <p className="text-ohrid-blue/70 font-sans text-base leading-relaxed">
            Еден пас, сите атракции. Посетете ги Самоиловата Тврдина,
            Галеријата на Икони, Античкиот Театар и уште многу локалитети
            по специјална цена.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Link
            href="/ohrid-pas"
            className="inline-flex items-center gap-3 bg-ohrid-blue text-white px-8 py-4 text-sm font-sans tracking-wide hover:bg-dark transition-colors duration-300"
          >
            Дознај повеќе
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
