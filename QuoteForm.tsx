"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const projectTypes = [
  "Peinture intérieure",
  "Peinture extérieure",
  "Rénovation complète",
  "Revêtements muraux",
  "Sols",
  "Façades",
];

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3 font-body text-blanc placeholder:text-white/35 focus:border-orange outline-none transition-colors duration-300";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // NOTE : ce handler simule l'envoi. Branchez-le sur votre API / service
  // d'e-mailing (ex: Resend, Formspree, route API Next.js) en production.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="devis" className="bg-noir py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="eyebrow text-blanc">Demander un devis</span>
          <h2 className="h-section mt-5 text-blanc">
            Parlons de votre <span className="text-orange">projet.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
            Remplissez ce formulaire en moins de deux minutes. Nous revenons
            vers vous sous 24h ouvrées pour planifier une visite technique
            gratuite et sans engagement.
          </p>

          <dl className="mt-12 space-y-6 border-t border-noir-line pt-8">
            <div className="flex justify-between text-sm">
              <dt className="text-white/40">Téléphone</dt>
              <dd className="font-medium text-blanc">04 00 00 00 00</dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-white/40">E-mail</dt>
              <dd className="font-medium text-blanc">contact@pigment-renovation.fr</dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-white/40">Zone d&apos;intervention</dt>
              <dd className="font-medium text-blanc">Lyon &amp; agglomération</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[420px] flex-col items-center justify-center border border-noir-line px-8 text-center"
              >
                <CheckCircle2 size={48} className="text-orange" />
                <h3 className="mt-6 font-display text-2xl font-bold text-blanc">
                  Demande envoyée !
                </h3>
                <p className="mt-3 max-w-xs text-sm text-white/55">
                  Merci, notre équipe vous recontacte sous 24h ouvrées pour
                  planifier votre visite technique gratuite.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8 border border-noir-line p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-1 block text-xs uppercase tracking-widest2 text-white/40">
                      Nom complet
                    </label>
                    <input id="nom" name="nom" type="text" required placeholder="Jean Dupont" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="mb-1 block text-xs uppercase tracking-widest2 text-white/40">
                      Téléphone
                    </label>
                    <input id="telephone" name="telephone" type="tel" required placeholder="06 00 00 00 00" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-widest2 text-white/40">
                    E-mail
                  </label>
                  <input id="email" name="email" type="email" required placeholder="vous@email.fr" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="type" className="mb-1 block text-xs uppercase tracking-widest2 text-white/40">
                    Type de projet
                  </label>
                  <select id="type" name="type" required defaultValue="" className={inputClass}>
                    <option value="" disabled className="text-encre">
                      Sélectionnez une prestation
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="text-encre">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-widest2 text-white/40">
                    Détails du projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Surface, délai souhaité, particularités du chantier..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.98 }}
                  className="btn-solid w-full disabled:opacity-60"
                >
                  {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                  {!loading && <Send size={15} />}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
