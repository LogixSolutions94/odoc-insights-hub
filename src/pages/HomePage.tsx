import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import {
  ArrowRight,
  FileText,
  Cpu,
  CheckCircle,
  Search,
  Upload,
  Receipt,
  Filter,
  BarChart3,
  Building2,
  Briefcase,
  AlertTriangle,
  Clock,
  FolderOpen,
  Eye,
} from "lucide-react";

const painPoints = [
  {
    icon: <FolderOpen className="h-6 w-6 text-primary" />,
    title: "Documents éparpillés",
    description: "Factures dans les mails, contrats sur le Drive, RIB dans un dossier… Impossible de tout retrouver rapidement.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: "Factures perdues ou en double",
    description: "Des erreurs de saisie, des doublons non détectés et des oublis qui coûtent cher à votre entreprise.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Temps perdu en administratif",
    description: "Des heures passées chaque semaine à classer, saisir et vérifier manuellement des documents.",
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Manque de vision globale",
    description: "Impossible de savoir en un coup d'œil où en sont vos dépenses, vos contrats ou vos échéances.",
  },
];

const solutionCards = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Centralisation Intelligente",
    description: "Rassemblez tous vos documents (factures, contrats, e-mails) en un seul endroit sécurisé. Fini les fichiers éparpillés.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Lecture et Structuration Automatique",
    description: "Notre IA lit, classe et extrait les informations clés de chaque document, sans aucune saisie manuelle.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Contrôles et Alertes Proactives",
    description: "Détectez les anomalies, les doublons ou les échéances critiques. Odoc surveille vos documents pour vous.",
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Tableaux de Bord Décisionnels",
    description: "Visualisez vos données et posez des questions en langage naturel pour des réponses instantanées.",
  },
];

const features = [
  {
    icon: <Upload className="h-5 w-5 text-primary" />,
    title: "Ingestion intelligente des documents",
    description: "Import par glisser-déposer, email dédié ou API. PDF, images, mails : tout est pris en charge.",
  },
  {
    icon: <Receipt className="h-5 w-5 text-primary" />,
    title: "Traitement des factures par IA",
    description: "Extraction automatique des montants, fournisseurs, dates et TVA avec vérification intégrée.",
  },
  {
    icon: <Filter className="h-5 w-5 text-primary" />,
    title: "Moteur de recherche et filtres puissants",
    description: "Retrouvez n'importe quel document en quelques secondes grâce à la recherche en langage naturel.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    title: "Tableaux de bord pour dirigeants",
    description: "Synthèses visuelles de vos dépenses, flux documentaires et indicateurs clés en temps réel.",
  },
];

const audiences = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Dirigeants de PME / TPE",
    benefits: [
      "Gagnez 5h par semaine sur l'administratif",
      "Visualisez vos dépenses et échéances en un coup d'œil",
      "Détectez les anomalies avant qu'elles ne coûtent cher",
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Cabinets comptables & conseil",
    benefits: [
      "Automatisez la collecte et le tri des pièces clients",
      "Réduisez les allers-retours avec vos clients de 80%",
      "Offrez un service à plus forte valeur ajoutée",
    ],
  },
];

const steps = [
  { num: "01", title: "Déposez", description: "Transférez vos documents (PDF, emails, images) par simple glisser-déposer ou via une adresse email dédiée." },
  { num: "02", title: "L'IA analyse", description: "Odoc identifie le type de document, extrait les données, les vérifie et les classe automatiquement." },
  { num: "03", title: "Pilotez", description: "Utilisez les tableaux de bord, la recherche intelligente et les alertes pour prendre des décisions rapides et informées." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[80svh] flex flex-col justify-center items-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-[1.1]">
            Votre poste de pilotage<br />documentaire.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Odoc centralise, lit et analyse tous vos documents pour transformer la charge administrative en décisions éclairées. Reprenez le contrôle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact">
              <Button size="lg">Demander une démo</Button>
            </Link>
            <a href="#solution">
              <Button variant="outline" size="lg">
                Découvrir <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </MotionDiv>
      </section>

      {/* Pain Points */}
      <section className="w-full py-16 sm:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Le chaos documentaire vous freine
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Vous reconnaissez-vous dans ces situations ?
            </p>
          </MotionDiv>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point, i) => (
              <MotionDiv
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border/60 bg-card/50"
              >
                <div className="mb-3">{point.icon}</div>
                <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              De la paperasse à la performance
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Odoc n'est pas un simple espace de stockage. C'est une usine d'intelligence qui travaille pour vous.
            </p>
          </MotionDiv>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card, i) => (
              <MotionDiv
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-muted-foreground">{card.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Fonctionnalités clés</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour reprendre le contrôle de vos documents.
            </p>
          </MotionDiv>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-lg border border-border/40 hover:border-border transition-colors"
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pour qui est Odoc ?</h2>
          </MotionDiv>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {audiences.map((audience, i) => (
              <MotionDiv
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-lg shadow-card"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mb-5">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{audience.title}</h3>
                <ul className="mt-4 space-y-3">
                  {audience.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Comment ça marche ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Trois étapes simples pour transformer vos documents en décisions.</p>
          </MotionDiv>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {steps.map((step, i) => (
              <MotionDiv
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-lg shadow-card"
              >
                <div className="font-mono text-2xl font-bold text-primary">{step.num}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-card rounded-2xl p-8 sm:p-12 shadow-card">
          <MotionDiv>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Prêt à transformer votre gestion documentaire ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Libérez-vous de l'administratif et concentrez-vous sur ce qui compte vraiment : la croissance de votre entreprise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Demander une démo personnalisée</Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
