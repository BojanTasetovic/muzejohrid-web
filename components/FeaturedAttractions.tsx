"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const attractions = [
  {
    title: "Самоилова Тврдина",
    subtitle: "Атракција",
    description: "Средновековна тврдина со панорамски поглед на Охридското Езеро и градот.",
    href: "/atrakcii/samoilova-tvrdina",
    image: "/images/atrakcii/06_slider_samoilova_tvrdina.jpg",
    span: "tall",
  },
  {
    title: "Антички Театар",
    subtitle: "Атракција",
    description: "Единствениот античкиот театар на отворено во Македонија.",
    href: "/atrakcii/anticki-teatar",
    image: "/images/atrakcii/02_slider_antichki_teatar.jpg",
    span: "normal",
  },
  {
    title: "Галерија на Икони",
    subtitle: "Збирка",
    description: "Еден од најзначајните збирки на средновековни икони во светот.",
    href: "/zbirki/galerija-ikoni",
    image: "/images/zbirki/11_slider_galerija_na_ikoni.jpg",
    span: "normal",
  },
  {
    title: "Плаошник",
    subtitle: "Локалитет",
    description: "Свето место — дом на базиликата Свети Климент и неговата школа.",
    href: "/atrakcii/plaoshnik",
    image: "/images/atrakcii/07_slider_mozaik_bazilika_plaoshnik.jpg",
    span: "wide",
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

export default function FeaturedAttractions() {
  return (
    <section className="bg-off-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header — editorial, like cphmuseum.kk.dk */}
        <motion.div
          className="flex items-end justify-between mb-14 border-b border-stone/30 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-byzantine-gold text-xs uppercase tracking-[0.25em] mb-3">
              Истражувај
            </p>
            <h2 className="font-heading text-ohrid-blue text-4xl md:text-5xl font-semibold">
              Атракции и збирки
            </h2>
          </div>
          <Link
            href="/atrakcii"
            className="hidden md:inline-flex items-center gap-2 text-ohrid-blue/60 hover:text-ohrid-blue text-sm tracking-wide transition-colors duration-300 group"
          >
            Сите атракции
            <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Bento-style grid — inspired by smk.dk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Large card — spans 2 rows on desktop */}
          <motion.div
            className="lg:row-span-2"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AttractionCard attraction={attractions[0]} tall />
          </motion.div>

          {/* Normal cards */}
          {attractions.slice(1, 3).map((a, i) => (
            <motion.div
              key={a.title}
              variants={cardVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i + 1) * 0.1 }}
            >
              <AttractionCard attraction={a} />
            </motion.div>
          ))}

          {/* Wide card — spans 2 cols */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AttractionCard attraction={attractions[3]} wide />
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/atrakcii"
            className="text-ohrid-blue text-sm tracking-wide border-b border-ohrid-blue/30 pb-0.5"
          >
            Сите атракции →
          </Link>
        </div>
      </div>
    </section>
  );
}

function AttractionCard({
  attraction,
  tall = false,
  wide = false,
}: {
  attraction: (typeof attractions)[0];
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <Link href={attraction.href} className="block group h-full">
      <div
        className={`relative overflow-hidden bg-ohrid-blue ${
          tall ? "h-[520px] md:h-full min-h-[520px]" : wide ? "h-64 md:h-72" : "h-64 md:h-72"
        }`}
      >
        <Image
          src={attraction.image}
          alt={attraction.title}
          fill
          sizes={
            tall
              ? "(max-width: 1024px) 100vw, 33vw"
              : wide
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ohrid-blue/80 via-ohrid-blue/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-byzantine-gold text-[10px] uppercase tracking-[0.2em] font-sans block mb-2">
            {attraction.subtitle}
          </span>
          <h3 className="font-heading text-white text-xl md:text-2xl font-semibold mb-2 leading-tight">
            {attraction.title}
          </h3>
          <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed max-w-sm line-clamp-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            {attraction.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
