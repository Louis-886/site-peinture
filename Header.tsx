"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Change l'apparence du header après un léger scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-noir/90 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-px flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-black tracking-tightest text-blanc">
          PIGMENT<span className="text-orange">.</span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/70 transition-colors duration-300 hover:text-blanc"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+33400000000"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-blanc"
          >
            <Phone size={16} className="text-orange" />
            04 00 00 00 00
          </a>
          <a href="#devis" className="btn-solid !px-6 !py-3 !text-xs">
            Demander un devis
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-blanc lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col justify-between bg-noir px-6 py-10 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-noir-line py-5 font-display text-2xl font-bold text-blanc"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a href="#devis" onClick={() => setMenuOpen(false)} className="btn-solid w-full">
              Demander un devis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
