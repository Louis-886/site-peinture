"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean; // true = texte clair (utilisé sur fond noir)
};

/**
 * En-tête de section standardisé : eyebrow orange + titre display + texte
 * de description optionnel. Animation d'apparition au scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={clsx(
          "h-section mt-5",
          light ? "text-blanc" : "text-encre"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-white/60" : "text-encre-muted"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
