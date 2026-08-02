import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

// Polices auto-hébergées via next/font — pas de requête externe au runtime,
// bon pour la performance et le score Lighthouse.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.pigment-renovation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pigment — Peinture & Rénovation de bâtiments à Lyon",
    template: "%s | Pigment",
  },
  description:
    "Entreprise de peinture et de rénovation de bâtiments à Lyon. Peinture intérieure & extérieure, rénovation complète, façades, sols. Devis gratuit sous 48h.",
  keywords: [
    "peintre bâtiment Lyon",
    "rénovation appartement Lyon",
    "peinture intérieure",
    "ravalement façade",
    "entreprise de rénovation",
  ],
  authors: [{ name: "Pigment" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Pigment",
    title: "Pigment — Peinture & Rénovation de bâtiments",
    description:
      "Un savoir-faire artisanal complet pour la peinture et la rénovation de vos bâtiments. Devis gratuit sous 48h.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigment — Peinture & Rénovation de bâtiments",
    description:
      "Un savoir-faire artisanal complet pour la peinture et la rénovation de vos bâtiments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Données structurées Schema.org — améliore l'affichage dans les résultats
// de recherche (LocalBusiness) sans impacter le contenu visible.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Pigment — Peinture & Rénovation",
  image: `${siteUrl}/images/og-cover.jpg`,
  telephone: "+33400000000",
  email: "contact@pigment-renovation.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue des Artisans",
    postalCode: "69006",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  areaServed: "Lyon et agglomération",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
