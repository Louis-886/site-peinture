"use client";

import { ElementType } from "react";
import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, ShieldCheck, FileText, Users } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { whyUs } from "@/lib/data";

const icons: Record<string, ElementType> = {
  soigne: Sparkles,
  delais: CalendarCheck,
  garantie: ShieldCheck,
  devis: FileText,
  equipe: Users,
};

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="relative overflow-hidden bg-noir py-24 sm:py-32">
      {/* Texture discrète pour rappeler la matière (grain de peinture) */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="La rigueur d'un grand groupe, la proximité d'un artisan."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-0 border-t border-noir-line sm:grid-cols-2 lg:grid-cols-5 lg:border-t-0">
          {whyUs.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-noir-line py-10 pr-6 lg:border-b-0 lg:border-l lg:py-4 lg:pl-6"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex h-14 w-14 items-center justify-center border border-noir-line text-orange"
                >
                  <Icon size={26} strokeWidth={1.5} />
                </motion.div>
                <h3 className="mt-6 font-display text-lg font-bold text-blanc">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
