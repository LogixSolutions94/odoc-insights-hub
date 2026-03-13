import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import {
  FileText,
  Mail,
  GitCompareArrows,
  BarChart3,
  Users,
  ShieldCheck,
} from "lucide-react";

const modules = [
  {
    id: "factures-ia",
    icon: FileText,
    title: "Génération de factures IA",
    description:
      "Créez des factures conformes Factur-X en quelques clics. L'IA pré-remplit les champs à partir de vos données clients et génère automatiquement un PDF prêt à l'envoi.",
    benefits: [
      "Factures Factur-X conformes générées automatiquement",
      "Pré-remplissage intelligent à partir du CRM intégré",
      "Export PDF et envoi automatisé par email",
    ],
    screenshotLabel: "Aperçu — Génération facture IA",
    screenshotColor: "from-primary/20 to-primary/5",
  },
  {
    id: "relances",
    icon: Mail,
    title: "Relances automatiques",
    description:
      "Ne laissez plus aucune facture impayée sans suivi. Odoc déclenche des relances par email aux échéances que vous définissez, avec un suivi complet de chaque étape.",
    benefits: [
      "Séquences de relance personnalisables par client",
      "Envoi automatique à J+0, J+7, J+30…",
      "Historique complet des relances et statuts de paiement",
    ],
    screenshotLabel: "Aperçu — Tableau des relances",
    screenshotColor: "from-ring/20 to-ring/5",
  },
  {
    id: "po-matching",
    icon: GitCompareArrows,
    title: "PO Matching",
    description:
      "Rapprochez automatiquement vos bons de commande et vos factures fournisseurs. L'IA détecte les écarts de montant, de quantité ou de référence pour un contrôle sans effort.",
    benefits: [
      "Rapprochement automatique commande ↔ facture",
      "Alertes en cas d'écart ou d'anomalie",
      "Validation en un clic pour un workflow fluide",
    ],
    screenshotLabel: "Aperçu — Rapprochement PO",
    screenshotColor: "from-primary/20 to-ring/5",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & tableaux de bord",
    description:
      "Visualisez en temps réel votre chiffre d'affaires, les retards de paiement et les tendances de dépenses. Des graphiques clairs pour des décisions éclairées.",
    benefits: [
      "Dashboard CA, encaissements et retards en temps réel",
      "Graphiques interactifs par période, client ou catégorie",
      "Export des rapports pour vos réunions de direction",
    ],
    screenshotLabel: "Aperçu — Dashboard analytics",
    screenshotColor: "from-ring/20 to-primary/5",
  },
  {
    id: "multi-utilisateurs",
    icon: Users,
    title: "Multi-utilisateurs & rôles",
    description:
      "Invitez votre équipe et attribuez des rôles précis : administrateur, comptable ou lecteur. Chacun accède uniquement aux données qui le concernent.",
    benefits: [
      "Rôles admin, comptable et lecteur configurables",
      "Permissions granulaires par module",
      "Journal d'activité pour la traçabilité",
    ],
    screenshotLabel: "Aperçu — Gestion des rôles",
    screenshotColor: "from-primary/15 to-primary/5",
  },
  {
    id: "conformite",
    icon: ShieldCheck,
    title: "Conformité légale FR",
    description:
      "Respectez les exigences françaises sans y penser. Odoc assure la conformité NF Z42-013, l'archivage à valeur probante et un audit trail complet.",
    benefits: [
      "Archivage conforme NF Z42-013",
      "Piste d'audit complète et horodatée",
      "Certificats de conformité exportables",
    ],
    screenshotLabel: "Aperçu — Audit trail",
    screenshotColor: "from-ring/15 to-ring/5",
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
        title="Fonctionnalités — Odoc | Modules d'intelligence documentaire"
        description="Découvrez les fonctionnalités d'Odoc : facturation IA, relances, PO Matching, analytics, multi-utilisateurs et conformité légale française."
        canonical="/fonctionnalites"
      />

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 text-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Tout ce qu'il faut pour piloter vos documents
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Six modules pensés pour automatiser, sécuriser et valoriser votre gestion documentaire.
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
                    transition={{
                      delay: 0.05,
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
                    }}
                    viewport={{ once: true }}
                    className="grid gap-8 lg:grid-cols-2 items-center"
                  >
                    {/* Text */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                          {m.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground">{m.description}</p>
                      <ul className="mt-6 space-y-3">
                        {m.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Placeholder screenshot */}
                    <div
                      className={`rounded-xl bg-gradient-to-br ${m.screenshotColor} border border-border/40 aspect-video flex items-center justify-center ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <span className="text-sm text-muted-foreground font-medium">
                        {m.screenshotLabel}
                      </span>
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
            <h2 className="text-3xl font-bold tracking-tight">
              Prêt à découvrir Odoc en action ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Consultez nos tarifs ou demandez directement une démonstration personnalisée.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing">
                <Button size="lg">Voir les tarifs</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Demander une démo
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
