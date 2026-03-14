import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import { Target, Shield, Rocket, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Animated Counter ── */
function AnimatedCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <motion.span
        className="text-4xl sm:text-5xl font-bold text-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}
        {suffix}
      </motion.span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </div>
  );
}

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Simplicité",
    description: "Un outil que vos équipes adoptent en moins d'une journée.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Sécurité",
    description: "Vos données hébergées en Europe, chiffrées, jamais revendues.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "Chaque semaine, de nouvelles fonctionnalités IA pour aller plus loin.",
  },
];

const kpis = [
  { end: 8, suffix: "h", label: "économisées / semaine par utilisateur" },
  { end: 98, suffix: "%", label: "de précision d'extraction IA" },
  { end: 29, suffix: "€", label: "/ mois tout inclus" },
];

export default function AProposPage() {
  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="À propos d'Odoc | IA documentaire pour PME"
        description="Découvrez l'équipe et la mission derrière Odoc, la plateforme SaaS d'intelligence documentaire pour PME et cabinets comptables."
        canonical="/a-propos"
      />

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 text-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            L'IA au service de votre entreprise
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Odoc est né d'un constat simple : les PME perdent en moyenne 8h/semaine à traiter leurs documents. Nous avons décidé d'y remédier.
          </p>
        </MotionDiv>
      </section>

      {/* Histoire */}
      <section className="w-full py-16 sm:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Notre histoire</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Fondée en 2025 en Île-de-France, Odoc a été pensée par des entrepreneurs pour des entrepreneurs. Fatigués des outils complexes et coûteux, nous avons construit une plateforme simple, puissante et accessible dès 29€/mois.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Notre mission : permettre à chaque dirigeant de PME de reprendre le contrôle sur ses documents et de piloter son entreprise avec des données fiables, en temps réel.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-border/60 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-primary/40" />
                <div className="absolute -bottom-3 -right-3 rounded-lg bg-primary/20 px-4 py-2 text-sm font-semibold text-primary border border-primary/30">
                  Depuis 2025
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nos valeurs</h2>
          </MotionDiv>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <MotionDiv
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow text-center"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {kpis.map((kpi) => (
              <AnimatedCounter key={kpi.label} {...kpi} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-card rounded-2xl p-8 sm:p-12 shadow-card">
          <MotionDiv>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Prêt à transformer votre gestion documentaire ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Libérez-vous de l'administratif et concentrez-vous sur ce qui compte vraiment : la croissance de votre entreprise.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg">Démarrer gratuitement</Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
