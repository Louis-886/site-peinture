"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import AnimatedButton from "./ui/AnimatedButton";

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const titleLine1 = ["Votre", "projet", "mérite"];
const titleLine2 = ["une", "finition", "parfaite."];

export default function Hero() {
  const scaleRef = useRef<HTMLDivElement>(null);

  // GSAP : léger zoom-out du visuel de fond au chargement — donne de la
  // profondeur au hero sans dépendre du scroll, effet cinématique discret.
  useEffect(() => {
    if (!scaleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scaleRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.2, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-noir">
      {/* Visuel de fond — à remplacer par une vidéo ou photo de chantier en
          production (ex: public/images/hero-chantier.jpg). Un dégradé
          texturé sert de placeholder premium en attendant. */}
      <div ref={scaleRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2a1608_0%,_#0A0A0A_55%)]" />
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
        {/* Remplacer ce bloc par : <img src="/images/hero-chantier.jpg" className="h-full w-full object-cover" /> */}
      </div>

      {/* Dégradé de lisibilité pour le texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/10" />

      {/* Bande orange verticale — signature de marque, discrète */}
      <div className="absolute right-0 top-0 h-full w-1 bg-orange sm:w-1.5" />

      <div className="container-px relative z-10 w-full pb-20 pt-40 sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow text-blanc"
        >
          Peinture &amp; rénovation premium
        </motion.span>

        <h1 className="mt-6 font-display text-[13vw] font-black leading-[0.92] tracking-tightest text-blanc sm:text-[8vw] lg:text-[6.2vw]">
          {[titleLine1, titleLine2].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                variants={wordContainer}
                initial="hidden"
                animate="visible"
                className="inline-flex flex-wrap gap-x-4"
              >
                {line.map((w, i) => (
                  <span key={i} className="overflow-hidden">
                    <motion.span
                      variants={word}
                      className={
                        w === "finition" || w === "parfaite."
                          ? "inline-block text-orange"
                          : "inline-block"
                      }
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Peinture, rénovation, façades : une équipe d&apos;artisans qualifiés
          au service de vos bâtiments, du premier coup de crayon à la
          dernière couche de peinture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <AnimatedButton href="#devis">Demander un devis</AnimatedButton>
          <AnimatedButton href="#realisations" variant="outline" className="text-blanc">
            Nos réalisations
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 sm:right-10 lg:flex"
      >
        <span className="font-body text-xs uppercase tracking-widest2 text-white/40">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-white/40"
        />
      </motion.div>
    </section>
  );
}
