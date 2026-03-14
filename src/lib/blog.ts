// TODO: Remplacer ce mock par une vraie source de données (CMS Headless, fichiers Markdown...)

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  readTime?: string;
  metaTitle?: string;
  metaDescription?: string;
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
  {
    slug: "facture-electronique-obligatoire-2026-pme",
    title: "Facture électronique obligatoire en 2026 : ce que toutes les PME doivent savoir",
    category: "Conformité",
    date: "2026-01-15",
    readTime: "8 min",
    metaTitle: "Facture électronique obligatoire 2026 : guide complet PME | Odoc",
    metaDescription: "Calendrier, formats acceptés (Factur-X, UBL), sanctions : tout ce que les PME doivent savoir sur la facturation électronique obligatoire en 2026.",
    summary: "La réforme de la facturation électronique entre en vigueur progressivement. Êtes-vous prêt ?",
    content: `
      <h2>La facturation électronique : un tournant réglementaire majeur</h2>
      <p>La France a engagé une réforme profonde de la facturation entre entreprises (B2B). Initialement prévue pour 2024, puis repoussée, la facturation électronique obligatoire se déploie désormais selon un calendrier progressif qui concerne toutes les entreprises, quelle que soit leur taille.</p>
      <p>L'objectif du gouvernement est triple : lutter contre la fraude à la TVA (estimée à plus de 15 milliards d'euros par an), simplifier les obligations déclaratives des entreprises, et améliorer la connaissance en temps réel de l'activité économique.</p>

      <h2>Le calendrier de déploiement</h2>
      <p>La réforme se déploie en plusieurs phases pour permettre aux entreprises de s'adapter progressivement :</p>
      <ul>
        <li><strong>Septembre 2026 :</strong> Obligation de réception des factures électroniques pour toutes les entreprises, quelle que soit leur taille. Les grandes entreprises et les ETI ont l'obligation d'émettre des factures électroniques.</li>
        <li><strong>Septembre 2027 :</strong> Obligation d'émission étendue aux PME et micro-entreprises. À cette date, l'ensemble du tissu économique français sera couvert par la réforme.</li>
      </ul>
      <p>Concrètement, cela signifie que dès septembre 2026, votre PME devra être capable de recevoir et traiter des factures au format électronique structuré. Et un an plus tard, vous devrez également en émettre.</p>

      <h2>Les formats acceptés</h2>
      <p>La réforme impose l'utilisation de formats structurés permettant le traitement automatisé des données. Trois formats sont officiellement acceptés :</p>
      <ul>
        <li><strong>Factur-X :</strong> Un format hybride qui combine un PDF lisible par l'humain et un fichier XML structuré lisible par les machines. C'est le format le plus accessible pour les PME car il conserve l'aspect visuel d'une facture classique tout en intégrant les données structurées nécessaires.</li>
        <li><strong>UBL (Universal Business Language) :</strong> Un standard international XML largement utilisé en Europe. Plus technique, il est idéal pour les échanges automatisés entre systèmes d'information.</li>
        <li><strong>CII (Cross Industry Invoice) :</strong> Un autre standard international basé sur les normes UN/CEFACT, utilisé principalement dans les échanges industriels internationaux.</li>
      </ul>

      <h2>Les plateformes de dématérialisation</h2>
      <p>Les factures ne pourront plus être envoyées directement par email. Elles devront transiter par des plateformes agréées :</p>
      <ul>
        <li><strong>Le Portail Public de Facturation (PPF) :</strong> La plateforme gratuite mise en place par l'État, basée sur Chorus Pro. Elle offre un service minimal mais universel.</li>
        <li><strong>Les Plateformes de Dématérialisation Partenaires (PDP) :</strong> Des opérateurs privés agréés par l'administration fiscale, qui offrent des services à valeur ajoutée : archivage, rapprochement automatique, intégrations comptables, etc.</li>
      </ul>

      <h2>Les sanctions en cas de non-conformité</h2>
      <p>Le non-respect de l'obligation de facturation électronique expose les entreprises à des sanctions financières :</p>
      <ul>
        <li><strong>15 € par facture</strong> non émise au format électronique, dans la limite de 15 000 € par année civile.</li>
        <li><strong>250 € par transmission manquante</strong> au titre du e-reporting (déclaration des données de transaction), plafonné à 15 000 € par année civile.</li>
      </ul>
      <p>Au-delà des sanctions, le risque principal est opérationnel : une entreprise non préparée sera incapable de traiter les factures de ses fournisseurs et de facturer ses clients dans les règles.</p>

      <h2>Comment Odoc vous aide à vous conformer automatiquement</h2>
      <p>Odoc a été conçu pour anticiper cette réforme et simplifier la transition pour les PME :</p>
      <ul>
        <li><strong>Génération native au format Factur-X :</strong> Toutes les factures émises depuis Odoc sont automatiquement générées au format Factur-X, conformes aux exigences réglementaires, sans aucune manipulation de votre part.</li>
        <li><strong>Réception et lecture automatique :</strong> Les factures reçues au format électronique (Factur-X, UBL ou CII) sont automatiquement lues, structurées et intégrées dans votre espace de gestion.</li>
        <li><strong>Archivage conforme :</strong> Odoc assure un archivage à valeur probante conforme à la norme NF Z42-013, avec horodatage et piste d'audit complète.</li>
        <li><strong>Connexion aux plateformes :</strong> Odoc s'interface avec le PPF et les principales PDP pour automatiser l'envoi et la réception de vos factures via les canaux agréés.</li>
      </ul>
      <p>En utilisant Odoc, vous n'avez pas à vous soucier des détails techniques de la réforme. La conformité est intégrée par défaut dans votre flux de travail quotidien.</p>

      <h2>Nos recommandations pour vous préparer dès maintenant</h2>
      <ol>
        <li><strong>Auditez vos flux actuels :</strong> Identifiez combien de factures vous émettez et recevez chaque mois, et par quels canaux (email, courrier, portails fournisseurs).</li>
        <li><strong>Choisissez votre solution :</strong> N'attendez pas le dernier moment. Testez les solutions disponibles et choisissez celle qui s'intègre le mieux dans votre organisation.</li>
        <li><strong>Formez vos équipes :</strong> La transition sera d'autant plus fluide que vos collaborateurs seront préparés aux nouveaux processus.</li>
        <li><strong>Anticipez :</strong> Même si l'obligation d'émission pour les PME est fixée à septembre 2027, commencer dès 2026 vous permettra d'être rodé le jour J.</li>
      </ol>
    `,
  },
  {
    slug: "automatiser-comptabilite-pme-ia",
    title: "Comment les PME gagnent 8h par semaine grâce à l'automatisation comptable IA",
    category: "Productivité",
    date: "2026-02-10",
    readTime: "7 min",
    metaTitle: "Automatiser la comptabilité PME avec l'IA : 8h gagnées/semaine | Odoc",
    metaDescription: "Traitement des factures, rapprochement bancaire, alertes d'échéance : découvrez comment l'IA change la donne pour les petites structures.",
    summary: "Traitement des factures, rapprochement bancaire, alertes d'échéance : l'IA change la donne pour les petites structures.",
    content: `
      <h2>Le constat : l'administratif dévore le temps des dirigeants</h2>
      <p>Selon une étude menée auprès de 500 dirigeants de PME françaises, le temps moyen consacré aux tâches administratives et comptables s'élève à 8 heures par semaine. Pour une entreprise de moins de 20 salariés, cela représente l'équivalent d'un jour entier de travail chaque semaine — un jour qui n'est pas consacré au développement commercial, à l'innovation ou au management.</p>
      <p>Ces tâches sont principalement : la réception et le tri des factures fournisseurs, la saisie des données comptables, le rapprochement bancaire, le suivi des échéances de paiement, et la préparation des documents pour l'expert-comptable.</p>

      <h2>Cas d'usage concrets : ce que l'IA automatise réellement</h2>

      <h3>1. Traitement automatique des factures</h3>
      <p>L'IA ne se contente pas de scanner un document. Elle comprend son contenu : elle identifie le fournisseur, extrait le montant HT, la TVA, la date d'échéance, le numéro de facture, et les lignes de détail. En moyenne, le traitement passe de 4 minutes par facture (saisie manuelle) à moins de 10 secondes.</p>
      <p>Pour une PME qui traite 200 factures par mois, cela représente un gain de plus de 13 heures mensuelles sur cette seule tâche.</p>

      <h3>2. Rapprochement bancaire automatisé</h3>
      <p>L'une des tâches les plus fastidieuses en comptabilité est de rapprocher les mouvements bancaires avec les factures émises et reçues. L'IA analyse les montants, les dates et les libellés pour proposer automatiquement les correspondances. Le taux de rapprochement automatique atteint généralement 85 à 95 %, ne laissant que les cas ambigus à la validation humaine.</p>

      <h3>3. Alertes d'échéance et relances automatiques</h3>
      <p>Oublier une date d'échéance de paiement peut coûter cher : pénalités de retard, dégradation de la relation fournisseur, voire rupture de stock. L'IA surveille en continu les échéances et déclenche des alertes proactives. Mieux encore, elle peut générer et envoyer automatiquement des emails de relance pour les factures impayées, en adaptant le ton selon le nombre de jours de retard.</p>

      <h3>4. Préparation comptable automatisée</h3>
      <p>La préparation du Fichier des Écritures Comptables (FEC) et l'export des données pour l'expert-comptable sont souvent source de stress en fin de mois. L'IA pré-impute les écritures comptables en se basant sur l'historique et les règles métier de l'entreprise, réduisant considérablement le travail de vérification.</p>

      <h2>Le ROI concret de l'automatisation</h2>
      <p>Prenons l'exemple d'une PME de 15 salariés dans le secteur du BTP :</p>
      <ul>
        <li><strong>Avant Odoc :</strong> 1 personne consacrait 2 jours par semaine à la gestion administrative (factures, relances, classement). Coût estimé : 2 400 €/mois en temps salarié.</li>
        <li><strong>Après Odoc :</strong> La même personne consacre désormais une demi-journée par semaine à la supervision et à la validation des cas complexes. Le reste de son temps est redirigé vers le suivi de chantier et la relation client.</li>
        <li><strong>Gain net :</strong> 1,5 jour/semaine récupéré, soit environ 1 800 €/mois en valeur de temps. Pour un abonnement Essentiel à 29 €/mois, le ROI est immédiat et massif.</li>
      </ul>

      <h2>Comparatif : traitement manuel vs automatisé</h2>
      <p>Voici un comparatif concret sur les principales tâches comptables :</p>
      <ul>
        <li><strong>Saisie de facture :</strong> Manuel = 4 min | IA = 10 sec (gain : 97 %)</li>
        <li><strong>Rapprochement bancaire :</strong> Manuel = 2h/semaine | IA = 15 min/semaine (gain : 87 %)</li>
        <li><strong>Relances impayés :</strong> Manuel = 1h/semaine | IA = automatique (gain : 100 %)</li>
        <li><strong>Export FEC :</strong> Manuel = 1 jour/mois | IA = 1 clic (gain : 99 %)</li>
        <li><strong>Recherche de document :</strong> Manuel = 5-15 min | IA = 3 sec (gain : 98 %)</li>
      </ul>

      <h2>Passer à l'action avec Odoc</h2>
      <p>L'automatisation comptable n'est plus réservée aux grandes entreprises avec des budgets IT conséquents. Avec Odoc, n'importe quelle PME peut bénéficier de la puissance de l'IA pour reprendre le contrôle de son administratif, dès 29 €/mois et sans compétence technique requise.</p>
      <p>Le plan Starter gratuit vous permet de tester immédiatement avec vos propres documents. En quelques minutes, vous verrez la différence.</p>
    `,
  },
  {
    slug: "choisir-logiciel-gestion-documents-pme",
    title: "Comment choisir son logiciel de gestion documentaire en 2026 : le guide complet",
    category: "Guide",
    date: "2026-03-01",
    readTime: "10 min",
    metaTitle: "Choisir son logiciel GED en 2026 : 7 critères clés | Odoc",
    metaDescription: "GED classique ou IA ? Cloud ou on-premise ? Voici les 7 critères à vérifier avant de choisir votre logiciel de gestion documentaire pour PME.",
    summary: "GED classique ou IA ? Cloud ou on-premise ? Voici les 7 critères à vérifier avant de signer.",
    content: `
      <h2>Pourquoi le choix de votre GED est stratégique</h2>
      <p>La gestion documentaire n'est plus un simple sujet d'archivage. En 2026, avec l'obligation de facturation électronique, le renforcement du RGPD et la montée en puissance de l'IA, le choix de votre solution de gestion documentaire a un impact direct sur la productivité, la conformité et la compétitivité de votre entreprise.</p>
      <p>Le marché français compte aujourd'hui des dizaines de solutions, des GED traditionnelles aux plateformes d'intelligence documentaire nouvelle génération. Voici les 7 critères essentiels pour faire le bon choix.</p>

      <h2>Critère 1 : Intelligence artificielle intégrée</h2>
      <p>C'est le critère le plus différenciant en 2026. Une GED sans IA, c'est un classeur numérique. Une GED avec IA, c'est un assistant qui travaille pour vous.</p>
      <p>Vérifiez que la solution propose :</p>
      <ul>
        <li>L'extraction automatique des données des documents (OCR intelligent, pas juste de l'OCR basique)</li>
        <li>La classification et le tri automatiques</li>
        <li>La détection d'anomalies et de doublons</li>
        <li>Un assistant conversationnel pour interroger vos documents en langage naturel</li>
      </ul>
      <p><strong>Question clé :</strong> "L'IA apprend-elle de mes habitudes et de mon historique, ou applique-t-elle simplement des règles fixes ?"</p>

      <h2>Critère 2 : Sécurité et hébergement des données</h2>
      <p>Vos documents contiennent des informations sensibles : données financières, contrats, informations personnelles de vos clients et fournisseurs. La sécurité n'est pas négociable.</p>
      <ul>
        <li><strong>Localisation des serveurs :</strong> Privilégiez un hébergement en France ou dans l'UE. Évitez les solutions hébergées aux États-Unis si vous traitez des données personnelles européennes.</li>
        <li><strong>Chiffrement :</strong> Exigez le chiffrement au repos (AES-256) et en transit (TLS 1.3).</li>
        <li><strong>Certifications :</strong> ISO 27001, SOC 2, ou a minima une politique de sécurité documentée et auditable.</li>
      </ul>

      <h2>Critère 3 : Tarification transparente</h2>
      <p>Méfiez-vous des modèles de prix opaques. Certaines solutions affichent un prix d'appel attractif mais facturent ensuite par page scannée, par Go de stockage, ou par fonctionnalité supplémentaire.</p>
      <p>Préférez les solutions avec un prix clair et prévisible, incluant un volume défini de documents traités. Vérifiez s'il y a des frais cachés : formation, intégration, export de données, support.</p>

      <h2>Critère 4 : Intégrations avec votre écosystème</h2>
      <p>Votre GED ne doit pas être un silo. Elle doit s'intégrer naturellement avec les outils que vous utilisez déjà :</p>
      <ul>
        <li>Logiciel comptable (Sage, Cegid, Pennylane...)</li>
        <li>Stockage cloud (Google Drive, Dropbox, OneDrive)</li>
        <li>Messagerie (Gmail, Outlook)</li>
        <li>CRM et outils métier</li>
        <li>API ouverte pour des intégrations sur mesure</li>
      </ul>

      <h2>Critère 5 : Conformité réglementaire française</h2>
      <p>En 2026, la conformité n'est plus optionnelle. Votre solution doit vous aider à respecter :</p>
      <ul>
        <li>La réforme de la facturation électronique (formats Factur-X, UBL, CII)</li>
        <li>Le RGPD (gestion des données personnelles, droit à l'oubli, registre des traitements)</li>
        <li>Les normes d'archivage à valeur probante (NF Z42-013 / ISO 14641)</li>
        <li>Les obligations de conservation des documents commerciaux et comptables (10 ans)</li>
      </ul>

      <h2>Critère 6 : Support client en français</h2>
      <p>Cela peut sembler évident, mais beaucoup de solutions internationales n'offrent qu'un support en anglais, parfois avec des délais de réponse de 48 à 72h. Pour une PME française, avoir un support réactif, en français, qui comprend les enjeux réglementaires locaux, est un atout considérable.</p>
      <p>Vérifiez les engagements : temps de réponse garanti (SLA), canaux disponibles (chat, email, téléphone), horaires de disponibilité.</p>

      <h2>Critère 7 : Scalabilité et évolutivité</h2>
      <p>Votre entreprise va grandir. Votre solution de gestion documentaire doit pouvoir suivre :</p>
      <ul>
        <li>Ajout facile d'utilisateurs supplémentaires</li>
        <li>Augmentation du volume de documents sans dégradation de performance</li>
        <li>Nouvelles fonctionnalités régulièrement ajoutées</li>
        <li>Migration de plan fluide (pas besoin de tout reconfigurer)</li>
      </ul>

      <h2>Tableau comparatif des solutions du marché français</h2>
      <p>Voici un aperçu comparatif des principales catégories de solutions disponibles en France :</p>
      <ul>
        <li><strong>GED traditionnelle (Zeendoc, M-Files) :</strong> Bonne gestion documentaire, mais peu ou pas d'IA. Prix souvent élevé. Idéal pour les grandes structures avec des besoins d'archivage lourds.</li>
        <li><strong>Outils comptables avec GED intégrée (Pennylane, Dext) :</strong> Bonnes fonctionnalités comptables, GED basique. Idéal si votre besoin principal est la comptabilité.</li>
        <li><strong>Plateformes d'intelligence documentaire (Odoc) :</strong> IA native, interface moderne, conformité intégrée, prix accessible. Idéal pour les PME qui veulent aller au-delà du simple classement.</li>
        <li><strong>Solutions généralistes (Google Drive + plugins) :</strong> Gratuit ou peu cher, mais aucune intelligence ni conformité. À éviter pour un usage professionnel sérieux.</li>
      </ul>

      <h2>Pourquoi Odoc se distingue</h2>
      <p>Odoc a été conçu spécifiquement pour les PME et cabinets français. Chaque critère de ce guide est couvert nativement :</p>
      <ul>
        <li>IA de dernière génération avec assistant conversationnel (Odoc Brain)</li>
        <li>Hébergement en Europe, chiffrement de bout en bout</li>
        <li>Prix clair dès 29 €/mois, plan gratuit disponible</li>
        <li>Intégrations Drive, Dropbox, exports FEC</li>
        <li>Conformité Factur-X et archivage NF Z42-013</li>
        <li>Support en français, réactif et compétent</li>
        <li>Scalable de 1 à 50+ utilisateurs</li>
      </ul>
      <p>Testez gratuitement avec le plan Starter et jugez par vous-même.</p>
    `,
  },
];

export const getPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
