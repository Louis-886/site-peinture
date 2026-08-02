# Pigment — Site vitrine Peinture & Rénovation

Site premium pour une entreprise de peinture et de rénovation de bâtiments,
construit avec Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer
Motion et GSAP.

## Installation

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000.

## Build de production

```bash
npm run build
npm run start
```

## Personnalisation rapide

- **Contenu** (services, avis, FAQ, statistiques) : `lib/data.ts`
- **Couleurs / typographies** : `tailwind.config.ts`
- **Coordonnées, nom de marque** : `components/Header.tsx`, `components/Footer.tsx`, `app/layout.tsx`
- **Images** : déposez vos photos de chantier dans `public/images/` puis
  remplacez les placeholders dans `components/Hero.tsx` et `components/Gallery.tsx`
  (indiqués par des commentaires `// Remplacer ce bloc par...`).
- **Formulaire de devis** : `components/QuoteForm.tsx` — le handler `handleSubmit`
  simule actuellement l'envoi ; branchez-le sur votre API (route Next.js,
  Resend, Formspree...) en production.
- **Métadonnées SEO** : `app/layout.tsx` (title, description, Open Graph,
  données structurées Schema.org `HomeAndConstructionBusiness`).

## Structure

```
app/            Pages, layout, SEO (sitemap, robots)
components/     Sections du site (Hero, Services, Gallery, etc.)
components/ui/  Composants réutilisables (bouton, titres de section)
lib/            Contenu (data.ts) et hooks (useCountUp.ts)
public/images/  Vos visuels de chantier
```

## Notes techniques

- Toutes les animations respectent `prefers-reduced-motion`.
- Les polices (Archivo + Inter) sont auto-hébergées via `next/font` : aucune
  requête externe au chargement.
- Le formulaire, l'accordéon FAQ, le carrousel et le slider avant/après sont
  entièrement accessibles au clavier (focus visible, `aria-*` corrects).
- Pensez à ajouter une vraie vidéo/image de chantier en fond du Hero pour
  l'impact maximal, ainsi que vos photos avant/après dans la galerie.
