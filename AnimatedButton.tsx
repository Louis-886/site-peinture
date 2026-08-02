"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * Bouton avec micro-interaction au survol : la flèche glisse légèrement
 * vers la droite, un léger scale au clic donne un retour tactile.
 */
export default function AnimatedButton({
  href,
  children,
  variant = "solid",
  className,
}: AnimatedButtonProps) {
  const baseClass = variant === "solid" ? "btn-solid" : "btn-outline";

  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={clsx(baseClass, "group", className)}
    >
      {children}
      <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.a>
  );
}
