import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Settings, Clock, ArrowRight } from "lucide-react";

const phases = [
  {
    badge: "✓ En production",
    badgeClass: "bg-green-500/10 text-green-600 border-green-500/20",
    title: "Phase 1 — Les fondations",
    description:
      "Les 10 modules core — Documents, Factures IA, Odoc Brain, Analytics, Équipe, RH, Projets, Messagerie, Portail Fournisseur, Smart Connectors.",
    icon: CheckCircle,
    iconClass: "text-green-600",
  },
  {
    badge: "⚙ En cours",
    badgeClass: "bg-accent/10 text-accent border-accent/20",
    title: "Phase 2 — Expansion",
    description:
      "CRM léger intégré, Calendrier partagé, Intégrations avancées (Slack, Notion, HubSpot), Mode hors-ligne.",
    icon: Settings,
    iconClass: "text-accent",
  },
  {
    badge: "◷ À venir",
    badgeClass: "bg-muted text-muted-foreground border-border",
    title: "Phase 3 — Écosystème",
    description:
      "Application mobile iOS & Android, API publique documentée, Marketplace d'intégrations partenaires, Odoc Brain v2 (multi-agents).",
    icon: Clock,
    iconClass: "text-muted-foreground",
  },
];

export default function RoadmapPage() {
  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="Roadmap — Odoc"
        description="Découvrez les fonctionnalités en cours et à venir sur Odoc, votre copilot IA d'entreprise."
        canonical="/roadmap"
      />

      <section className="w-full py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Notre Roadmap
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Nous construisons Odoc pour les entreprises qui avancent vite. Voici ce qui arrive.
            </p>
          </MotionDiv>

          <div className="space-y-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <MotionDiv
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-card border border-border shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary/5 flex-shrink-0">
                      <Icon className={`h-5 w-5 ${phase.iconClass}`} />
                    </div>
                    <div>
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-3 ${phase.badgeClass}`}>
                        {phase.badge}
                      </span>
                      <h2 className="text-xl font-bold text-foreground">{phase.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-xl bg-secondary/50 border border-border text-center"
          >
            <h3 className="text-lg font-bold text-foreground">Une idée ? Une fonctionnalité manquante ?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Partagez vos suggestions avec notre équipe.</p>
            <div className="mt-6">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
