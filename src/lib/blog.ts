// TODO: Remplacer ce mock par une vraie source de données (CMS Headless, fichiers Markdown...)

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
}

const posts: Post[] = [
  {
    slug: "ia-transformation-factures",
    title: "Comment l'IA transforme la gestion des factures en PME",
    category: "IA Documentaire",
    date: "2024-05-20",
    summary:
      "Découvrez comment l'intelligence artificielle révolutionne le traitement des factures, de la saisie automatique à la détection d'anomalies, pour un gain de temps et une fiabilité accrus.",
    content: `
      <h2>Le fardeau de la gestion manuelle des factures</h2>
      <p>Pour de nombreux dirigeants de PME, la gestion des factures est une tâche chronophage et source d'erreurs. Saisie manuelle des données, rapprochement bancaire, validation, archivage… chaque étape est un risque de perte de temps et d'argent.</p>
      
      <h2>L'IA comme solution d'automatisation intelligente</h2>
      <p>L'intelligence artificielle, et plus particulièrement le traitement du langage naturel (NLP), change la donne. Voici comment :</p>
      <ul>
        <li><strong>Extraction automatique (OCR+) :</strong> L'IA lit le PDF ou l'image de la facture, identifie et extrait les champs clés (fournisseur, montant, date, TVA…) avec une précision supérieure à l'OCR classique.</li>
        <li><strong>Classification et Imputation :</strong> Le système apprend à classer les factures par nature de dépense et peut même préparer les imputations comptables.</li>
        <li><strong>Détection d'anomalies :</strong> Une facture en double ? Un montant inhabituel ? L'IA peut lever des alertes pour attirer votre attention sur les points de vigilance.</li>
      </ul>

      <h2>Au-delà de l'automatisation : l'aide à la décision</h2>
      <p>L'avantage majeur est de transformer ces données extraites en informations exploitables. En centralisant toutes vos factures, vous pouvez analyser vos postes de dépenses en temps réel, suivre votre trésorerie et prendre des décisions basées sur des données fiables, et non sur des estimations.</p>
    `,
  },
  {
    slug: "google-drive-au-poste-de-pilotage",
    title: "De Google Drive au poste de pilotage documentaire : les 5 étapes",
    category: "Stratégie",
    date: "2024-05-15",
    summary:
      "Stocker des documents, c'est bien. Les faire travailler pour vous, c'est mieux. Passez d'un simple cloud à un véritable outil de décision en 5 étapes clés.",
    content: `
      <h2>L'illusion du contrôle avec le stockage cloud</h2>
      <p>Google Drive, Dropbox ou OneDrive sont excellents pour stocker et partager des fichiers. Mais ils deviennent vite un "cimetière numérique" où l'information est difficile à retrouver et impossible à analyser globalement.</p>

      <h2>Les 5 étapes vers l'intelligence documentaire</h2>
      <ol>
        <li><strong>Centraliser :</strong> La première étape est de tout regrouper. Mais pas n'importe comment. Il faut un système capable d'ingérer des documents de sources multiples (emails, scans, uploads).</li>
        <li><strong>Structurer :</strong> C'est là que la magie opère. Un outil d'intelligence documentaire ne se contente pas de stocker le fichier, il en lit le contenu et le transforme en données structurées.</li>
        <li><strong>Contextualiser :</strong> Une facture n'est pas juste un montant. Elle est liée à un fournisseur, un projet, un contrat. Le système doit permettre de créer ces liens.</li>
        <li><strong>Analyser :</strong> Une fois les données structurées et contextualisées, vous pouvez les interroger. "Quelles sont mes dépenses pour le projet X ce trimestre ?"</li>
        <li><strong>Agir :</strong> L'étape finale est d'utiliser ces analyses pour décider. Renégocier un contrat, ajuster un budget, optimiser un processus.</li>
      </ol>
      <p>Passer d'un simple Drive à un poste de pilotage comme Odoc, c'est passer d'un rôle d'archiviste à celui de pilote de votre entreprise.</p>
    `,
  },
  {
    slug: "automatiser-sans-perdre-le-controle",
    title: "Automatiser sans perdre le contrôle : bonnes pratiques pour les dirigeants",
    category: "Conseils PME",
    date: "2024-05-10",
    summary:
      "L'automatisation peut faire peur. Comment déléguer des tâches à une machine tout en gardant la main ? Voici nos conseils pour une transition sereine et efficace.",
    content: `
      <h2>La peur légitime de la "boîte noire"</h2>
      <p>Confier des tâches critiques comme la validation de factures à un système automatisé peut être intimidant. La clé n'est pas l'automatisation totale, mais l'automatisation assistée.</p>

      <h2>Bonnes pratiques pour une automatisation maîtrisée</h2>
      <ul>
        <li><strong>Définir des circuits de validation :</strong> L'outil doit permettre de configurer des règles. Par exemple, "toute facture supérieure à 5000€ nécessite ma validation manuelle".</li>
        <li><strong>Exiger la traçabilité :</strong> Qui a validé quoi, et quand ? Un bon système doit offrir un historique complet de chaque document.</li>
        <li><strong>Utiliser les alertes, pas les actions automatiques :</strong> Au début, configurez le système pour qu'il vous alerte des anomalies plutôt que de les corriger lui-même. Vous gardez le dernier mot.</li>
        <li><strong>Commencer petit :</strong> Automatisez d'abord un processus simple et à faible enjeu, comme la collecte des factures fournisseurs, avant de passer à des flux plus complexes.</li>
      </ul>
      <p>L'objectif n'est pas de vous remplacer, mais de vous augmenter. L'automatisation bien pensée vous libère des tâches répétitives pour que vous puissiez vous concentrer sur la stratégie et la décision, là où votre valeur est maximale.</p>
    `,
  },
];

export const getPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
