import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import {
  FileText,
  Receipt,
  Brain,
  BarChart3,
  Users,
  UserCog,
  KanbanSquare,
  MessageSquare,
  Link2,
  Cloud,
} from "lucide-react";

const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odoc.fr";

const modules = [
  {
    id: "documents",
    icon: FileText,
    title: "Gestion Documentaire",
    description: "Uploadez, classez et retrouvez n'importe quel document en secondes. L'IA extrait les données clés automatiquement et les organise dans une arborescence intelligente.",
    benefits: [
      "Import par glisser-déposer, email dédié ou API",
      "Classification automatique par type de document",
      "OCR et extraction de données IA",
      "Recherche en langage naturel",
      "Archivage sécurisé avec historique complet",
    ],
    screenshotLabel: "Aperçu — Gestion documentaire IA",
    screenshotColor: "from-primary/20 to-primary/5",
  },
  {
    id: "factures-ia",
    icon: Receipt,
    title: "Factures IA",
    description: "Extraction automatique, workflow de validation, conformité NF Z42-013, détection de fraude et archivage légal SHA-256. De la réception au paiement, tout est automatisé.",
    benefits: [
      "Extraction automatique des montants, TVA, fournisseurs",
      "Workflow de validation multi-niveaux",
      "Conformité NF Z42-013 et Factur-X",
      "Détection de doublons et de fraude",
      "Archivage à valeur probante SHA-256",
    ],
    screenshotLabel: "Aperçu — Traitement factures IA",
    screenshotColor: "from-ring/20 to-ring/5",
  },
  {
    id: "odoc-brain",
    icon: Brain,
    title: "Odoc Brain (Copilot IA)",
    description: "Posez n'importe quelle question sur vos documents en langage naturel. Obtenez des réponses précises avec sources, citations et recommandations.",
    benefits: [
      "Questions en langage naturel sur tous vos documents",
      "Réponses sourcées avec citations exactes",
      "Analyse croisée de plusieurs documents",
      "Résumés automatiques de contrats et rapports",
      "Suggestions proactives et alertes intelligentes",
    ],
    screenshotLabel: "Aperçu — Odoc Brain",
    screenshotColor: "from-primary/20 to-ring/5",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Multi-Métiers",
    description: "Tableaux de bord Général, Comptable, Juridique et Administratif. Visualisez vos KPIs en temps réel et exportez vos rapports en PDF et CSV.",
    benefits: [
      "Dashboard général avec vue d'ensemble",
      "Vue comptable : CA, dépenses, trésorerie",
      "Vue juridique : contrats, échéances, alertes",
      "Vue administrative : documents traités, volumétrie",
      "Export PDF et CSV en un clic",
    ],
    screenshotLabel: "Aperçu — Analytics multi-métiers",
    screenshotColor: "from-ring/20 to-primary/5",
  },
  {
    id: "equipe",
    icon: Users,
    title: "Gestion d'Équipe",
    description: "Invitez vos collaborateurs, assignez des rôles (comptable, juriste, admin) et gérez les accès par profil. Chacun voit exactement ce dont il a besoin.",
    benefits: [
      "Invitation par email en un clic",
      "Rôles prédéfinis : admin, comptable, juriste, lecteur",
      "Permissions granulaires par module et par dossier",
      "Journal d'activité et traçabilité complète",
      "Gestion des équipes et départements",
    ],
    screenshotLabel: "Aperçu — Gestion d'équipe",
    screenshotColor: "from-primary/15 to-primary/5",
  },
  {
    id: "rh",
    icon: UserCog,
    title: "Module RH",
    description: "Gestion des employés, suivi des congés, approbations automatiques et export des données RH. Tout ce qu'il faut pour piloter vos ressources humaines.",
    benefits: [
      "Fiches employés complètes",
      "Suivi des congés et absences",
      "Workflows d'approbation automatiques",
      "Export des données RH (CSV, PDF)",
      "Alertes de renouvellement de contrats",
    ],
    screenshotLabel: "Aperçu — Module RH",
    screenshotColor: "from-ring/15 to-ring/5",
  },
  {
    id: "projets",
    icon: KanbanSquare,
    title: "Projets Kanban",
    description: "Créez vos projets, assignez des tâches avec priorités et suivez l'avancement en vue Kanban ou liste. Simple, visuel et collaboratif.",
    benefits: [
      "Vue Kanban et vue liste",
      "Tâches avec priorités, assignation et échéances",
      "Commentaires et pièces jointes par tâche",
      "Filtres et recherche avancée",
      "Notifications en temps réel",
    ],
    screenshotLabel: "Aperçu — Projets Kanban",
    screenshotColor: "from-primary/20 to-ring/10",
  },
  {
    id: "messagerie",
    icon: MessageSquare,
    title: "Messagerie Interne",
    description: "Canaux d'équipe, messages temps réel, @mentions et pièces jointes. Communiquez avec votre équipe sans quitter Odoc.",
    benefits: [
      "Canaux publics et privés",
      "Messages en temps réel",
      "@mentions et notifications",
      "Partage de fichiers et documents Odoc",
      "Recherche dans l'historique des conversations",
    ],
    screenshotLabel: "Aperçu — Messagerie interne",
    screenshotColor: "from-ring/20 to-primary/10",
  },
  {
    id: "portail-fournisseur",
    icon: Link2,
    title: "Portail Fournisseur",
    description: "Envoyez un lien sécurisé à vos fournisseurs pour qu'ils déposent leurs factures directement dans Odoc. Plus de mails perdus.",
    benefits: [
      "Lien sécurisé unique par fournisseur",
      "Upload direct dans votre espace Odoc",
      "Notifications de réception automatiques",
      "Historique complet des dépôts",
      "Aucun compte requis pour le fournisseur",
    ],
    screenshotLabel: "Aperçu — Portail fournisseur",
    screenshotColor: "from-primary/15 to-ring/5",
  },
  {
    id: "connectors",
    icon: Cloud,
    title: "Smart Connectors",
    description: "Connectez Google Drive et Dropbox pour synchroniser vos documents automatiquement dans Odoc. Votre écosystème, unifié.",
    benefits: [
      "Synchronisation Google Drive bidirectionnelle",
      "Synchronisation Dropbox bidirectionnelle",
      "Import automatique des nouveaux fichiers",
      "Mapping de dossiers personnalisable",
      "API ouverte pour intégrations custom",
    ],
    screenshotLabel: "Aperçu — Smart Connectors",
    screenshotColor: "from-ring/15 to-primary/5",
  },
];

export default function FonctionnalitesPage() {
  const [activeSection, setActiveSection] = useState(modules[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    modules.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="Fonctionnalités — Odoc | Les 10 modules du copilot IA"
        description="Découvrez les 10 modules d'Odoc : documents, factures IA, Odoc Brain, analytics, équipe, RH, projets, messagerie, portail fournisseur et smart connectors."
        canonical="/fonctionnalites"
      />

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 text-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Les 10 modules de votre copilot IA
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Chaque module est conçu pour automatiser une facette de votre entreprise. Ensemble, ils forment un employé IA complet.
          </p>
        </MotionDiv>
      </section>

      {/* Modules with sticky nav */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="flex gap-12">
          {/* Sticky sidebar — desktop only */}
          <nav className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-20 space-y-1">
              {modules.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    activeSection === m.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          <div className="flex-1 space-y-24">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.id} id={m.id} className="scroll-mt-24">
                  <MotionDiv
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid gap-8 lg:grid-cols-2 items-center"
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">{m.title}</h2>
                      </div>
                      <p className="text-muted-foreground">{m.description}</p>
                      <ul className="mt-6 space-y-3">
                        {m.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded-xl bg-gradient-to-br ${m.screenshotColor} border border-border/40 aspect-video flex items-center justify-center ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <span className="text-sm text-muted-foreground font-medium">{m.screenshotLabel}</span>
                    </div>
                  </MotionDiv>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-card rounded-2xl p-8 sm:p-12 shadow-card">
          <MotionDiv>
            <h2 className="text-3xl font-bold tracking-tight">Prêt à découvrir Odoc en action ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Essayez gratuitement ou demandez une démonstration personnalisée.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href={`${APP_URL}/signup`}>
                <Button size="lg">Essayer gratuitement</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline">Demander une démo</Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
