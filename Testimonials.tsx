"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "@/lib/data";

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = useCallback(
    (dir: number) => {
      setIndex(([prev]) => {
        const next = (prev + dir + testimonials.length) % testimonials.length;
        return [next, dir];
      });
    },
    []
  );

  // Défilement automatique, mis en pause au survol via onMouseEnter/Leave
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6500);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = testimonials[index];

  return (
    <section id="avis" className="bg-blanc-soft py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Témoignages"
            title="La confiance de nos clients, chantier après chantier."
          />
          <div className="flex gap-3">
            <button
              aria-label="Témoignage précédent"
              onClick={() => paginate(-1)}
              className="flex h-12 w-12 items-center justify-center border border-encre/15 text-encre transition-colors hover:border-orange hover:text-orange"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Témoignage suivant"
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center border border-encre/15 text-encre transition-colors hover:border-orange hover:text-orange"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative mt-14 min-h-[280px] overflow-hidden sm:min-h-[220px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr]"
            >
              <Quote size={56} strokeWidth={1} className="text-orange" />
              <div>
                <p className="font-display text-2xl font-medium leading-snug text-encre sm:text-3xl">
                  « {current.quote} »
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div>
                    <p className="font-display text-sm font-bold text-encre">{current.name}</p>
                    <p className="text-xs text-encre-muted">{current.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-orange text-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicateurs */}
        <div className="mt-10 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Aller au témoignage ${i + 1}`}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`h-[3px] transition-all duration-300 ${
                i === index ? "w-10 bg-orange" : "w-4 bg-encre/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
