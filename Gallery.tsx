"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, MapPin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { galleryItems } from "@/lib/data";

/**
 * Slider avant/après : l'utilisateur fait glisser le curseur (souris,
 * doigt ou clavier) pour révéler la photo "après" par-dessus le "avant".
 * Le curseur reprend la forme du coup de pinceau signature du site.
 */
function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // % — position du curseur
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={`Curseur avant/après pour ${title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-noir-soft"
    >
      {/* Image "après" — pleine largeur, en fond */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange/25 via-noir to-noir text-white/20">
        <span className="font-display text-xs uppercase tracking-widest2">Photo « après »</span>
      </div>

      {/* Image "avant" — révélée/masquée selon la position du curseur */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-encre via-noir-soft to-noir text-white/20"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="font-display text-xs uppercase tracking-widest2">Photo « avant »</span>
      </div>

      {/* Ligne de séparation + poignée */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-blanc"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-blanc shadow-lg">
          <MoveHorizontal size={18} />
        </div>
      </div>

      {/* Étiquettes */}
      <span className="absolute left-4 top-4 z-10 bg-noir/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest2 text-blanc backdrop-blur-sm">
        Avant
      </span>
      <span className="absolute right-4 top-4 z-10 bg-orange px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest2 text-blanc">
        Après
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="realisations" className="bg-blanc py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Nos réalisations"
          title="La transformation, en un coup d'œil."
          description="Faites glisser le curseur pour comparer l'état initial et le résultat final de nos chantiers récents."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />
              <figcaption className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-encre">{item.title}</h3>
                <span className="flex items-center gap-1 text-xs text-encre-muted">
                  <MapPin size={13} className="text-orange" />
                  {item.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-encre-muted">
          Note : remplacez les visuels de démonstration par vos photos de chantier réelles dans{" "}
          <code className="text-orange">/public/images</code> et mettez à jour{" "}
          <code className="text-orange">lib/data.ts</code>.
        </p>
      </div>
    </section>
  );
}
