"use client";

import { ElementType } from "react";
import { motion } from "framer-motion";
import { PaintRoller, Sun, HardHat, Layers, LayoutGrid, Building2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { services } from "@/lib/data";

// Association icône <-> service (par id) — icônes issues de lucide-react
const icons: Record<string, ElementType> = {
  "peinture-interieure": PaintRoller,
  "peinture-exterieure": Sun,
  "renovation-complete": HardHat,
  "revetements-muraux": Layers,
  sols: LayoutGrid,
  facades: Building2,
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-blanc py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Nos services"
          title="Un savoir-faire complet, sous un même toit."
          description="De la retouche esthétique à la rénovation lourde, nous couvrons l'ensemble des corps de métier liés à la peinture et à la rénovation de bâtiments."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-encre/10 bg-encre/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative flex min-h-[280px] flex-col justify-between bg-blanc p-8 transition-colors duration-500 hover:bg-noir"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-orange transition-transform duration-500 group-hover:scale-110"
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-encre/30 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-orange"
                  />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-encre transition-colors duration-500 group-hover:text-blanc">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre-muted transition-colors duration-500 group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
