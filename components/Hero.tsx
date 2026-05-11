"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

const fadeLine = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: easing } },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/atrakcii/06_slider_samoilova_tvrdina.jpg"
        alt="Самоилова Тврдина — Охрид"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered overlays — atmospheric, inspired by Rijksmuseum/Louvre */}
      <div className="absolute inset-0 bg-gradient-to-t from-ohrid-blue/90 via-ohrid-blue/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ohrid-blue/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div variants={stagger} initial="initial" animate="animate">

          {/* Gold label */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
            <motion.span
              variants={fadeLine}
              className="block h-px w-12 bg-byzantine-gold origin-left"
            />
            <span className="text-byzantine-gold text-xs uppercase tracking-[0.25em] font-sans">
              НУ Завод и Музеј — Охрид
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-white text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] max-w-3xl mb-6"
          >
            Наследство
            <br />
            <span className="text-stone">на светот</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-white/70 font-sans text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Истражете ги вековите низ збирките, атракциите и
            UNESCO заштитеното наследство на Охрид.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/zbirki"
              className="inline-flex items-center gap-2 bg-byzantine-gold text-dark px-7 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-stone transition-colors duration-300"
            >
              Истражи збирки
            </Link>
            <Link
              href="/poseti"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm font-sans tracking-wide hover:border-byzantine-gold hover:text-byzantine-gold transition-colors duration-300"
            >
              Планирај посета
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest rotate-90 origin-center mb-4">
          scroll
        </span>
        <motion.div
          className="w-px h-12 bg-white/30"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
