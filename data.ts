// ----------------------------------------------------------------------------
// Contenu du site — centralisé ici pour être facilement modifiable
// sans toucher aux composants.
// ----------------------------------------------------------------------------

export const services = [
  {
    id: "peinture-interieure",
    title: "Peinture intérieure",
    description:
      "Murs, plafonds, boiseries : des finitions nettes et durables pour sublimer chaque pièce, du salon au bureau professionnel.",
  },
  {
    id: "peinture-exterieure",
    title: "Peinture extérieure",
    description:
      "Protection et esthétique de vos façades face aux intempéries, avec des peintures haute résistance et un rendu impeccable.",
  },
  {
    id: "renovation-complete",
    title: "Rénovation complète",
    description:
      "De la démolition aux finitions, un interlocuteur unique pour piloter l'ensemble de votre chantier, sans mauvaise surprise.",
  },
  {
    id: "revetements-muraux",
    title: "Revêtements muraux",
    description:
      "Papiers peints, enduits décoratifs, effets matière : nous posons des revêtements sur-mesure qui font la signature d'un lieu.",
  },
  {
    id: "sols",
    title: "Sols",
    description:
      "Résine, parquet, carrelage ou sol souple : une pose soignée qui allie résistance à l'usage quotidien et esthétique durable.",
  },
  {
    id: "facades",
    title: "Façades",
    description:
      "Ravalement, isolation thermique par l'extérieur et traitement des façades pour redonner de la valeur à votre bâtiment.",
  },
];

export const whyUs = [
  {
    id: "soigne",
    title: "Travail soigné",
    description: "Chaque chantier est traité avec la même exigence de finition, du premier coup de brosse à la dernière retouche.",
  },
  {
    id: "delais",
    title: "Respect des délais",
    description: "Un planning clair, communiqué en amont, et tenu — parce que votre temps a de la valeur.",
  },
  {
    id: "garantie",
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts, pour une tranquillité d'esprit totale une fois le chantier livré.",
  },
  {
    id: "devis",
    title: "Devis gratuit",
    description: "Une estimation précise et sans engagement, établie après une visite technique sur site.",
  },
  {
    id: "equipe",
    title: "Équipe qualifiée",
    description: "Des artisans formés en continu, certifiés RGE, qui maîtrisent les techniques et matériaux les plus récents.",
  },
];

export const stats = [
  { id: "chantiers", value: 480, suffix: "+", label: "Chantiers réalisés" },
  { id: "clients", value: 98, suffix: "%", label: "Clients satisfaits" },
  { id: "experience", value: 15, suffix: " ans", label: "D'expérience" },
];

export const galleryItems = [
  {
    id: "salon",
    title: "Rénovation d'un salon",
    location: "Lyon 6e",
    before: "/images/salon-avant.jpg",
    after: "/images/salon-apres.jpg",
  },
  {
    id: "facade",
    title: "Ravalement de façade",
    location: "Villeurbanne",
    before: "/images/facade-avant.jpg",
    after: "/images/facade-apres.jpg",
  },
  {
    id: "cuisine",
    title: "Rénovation de cuisine",
    location: "Caluire-et-Cuire",
    before: "/images/cuisine-avant.jpg",
    after: "/images/cuisine-apres.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Claire Dubosc",
    role: "Propriétaire, Lyon 6e",
    quote:
      "Un chantier mené avec sérieux du début à la fin. Les délais annoncés ont été tenus et la finition est irréprochable. Je recommande sans hésiter.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marc Herrera",
    role: "Gérant, Boulangerie Herrera",
    quote:
      "Rénovation complète de notre local commercial pendant la fermeture estivale : équipe efficace, propre, et un résultat qui a transformé l'ambiance du magasin.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Lambert",
    role: "Copropriété Les Tilleuls",
    quote:
      "Ravalement de façade pour tout l'immeuble. Communication claire avec le syndic, respect du planning et des riverains. Un vrai professionnalisme.",
    rating: 5,
  },
  {
    id: 4,
    name: "Julien Faure",
    role: "Propriétaire, Villeurbanne",
    quote:
      "Devis détaillé, aucune surprise sur la facture finale. L'équipe a été de bon conseil sur le choix des teintes et des matériaux.",
    rating: 5,
  },
];

export const faqItems = [
  {
    question: "Comment se déroule une demande de devis ?",
    answer:
      "Vous nous contactez via le formulaire ou par téléphone, nous planifions une visite technique gratuite sous 48h, puis vous recevez un devis détaillé sous 5 jours ouvrés, sans engagement.",
  },
  {
    question: "Intervenez-vous chez les particuliers et les professionnels ?",
    answer:
      "Oui, nous réalisons aussi bien des chantiers résidentiels (appartements, maisons, copropriétés) que des locaux professionnels (bureaux, commerces, établissements recevant du public).",
  },
  {
    question: "Quels sont vos délais moyens d'intervention ?",
    answer:
      "Selon la période et l'ampleur du chantier, nous pouvons démarrer sous 2 à 4 semaines après validation du devis. Un planning précis vous est communiqué avant le début des travaux.",
  },
  {
    question: "Vos travaux sont-ils garantis ?",
    answer:
      "Tous nos chantiers sont couverts par la garantie décennale et une garantie de parfait achèvement d'un an, conformément à la réglementation en vigueur.",
  },
  {
    question: "Proposez-vous un accompagnement sur le choix des couleurs et matériaux ?",
    answer:
      "Oui, notre équipe vous conseille sur les teintes, finitions et revêtements les plus adaptés à votre projet et à votre budget, avec des échantillons sur site si nécessaire.",
  },
  {
    question: "Faut-il libérer les lieux pendant le chantier ?",
    answer:
      "Cela dépend de l'ampleur des travaux. Pour la plupart des chantiers de peinture, il est possible de continuer à occuper une partie du logement. Nous en discutons ensemble lors du devis.",
  },
];
