import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-noir pt-20">
      <div className="container-px grid grid-cols-1 gap-14 border-b border-noir-line pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bloc marque */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#top" className="font-display text-xl font-black text-blanc">
            PIGMENT<span className="text-orange">.</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
            Entreprise de peinture et de rénovation de bâtiments. Un savoir-faire
            artisanal, une exigence de grande entreprise.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social"
                className="flex h-10 w-10 items-center justify-center border border-noir-line text-white/60 transition-colors hover:border-orange hover:text-orange"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest2 text-white/40">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="text-sm text-white/60 hover:text-orange">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest2 text-white/40">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              ["Pourquoi nous", "#pourquoi-nous"],
              ["Réalisations", "#realisations"],
              ["Avis clients", "#avis"],
              ["FAQ", "#faq"],
              ["Devis gratuit", "#devis"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-sm text-white/60 hover:text-orange">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest2 text-white/40">
            Contact
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange" />
              12 rue des Artisans, 69006 Lyon
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Phone size={16} className="shrink-0 text-orange" />
              <a href="tel:+33400000000" className="hover:text-orange">04 00 00 00 00</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Mail size={16} className="shrink-0 text-orange" />
              <a href="mailto:contact@pigment-renovation.fr" className="hover:text-orange">
                contact@pigment-renovation.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/35 sm:flex-row">
        <p>© {new Date().getFullYear()} Pigment Peinture &amp; Rénovation. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange">Mentions légales</a>
          <a href="#" className="hover:text-orange">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
