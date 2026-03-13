import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    features: [
      "1 utilisateur",
      "50 factures / mois",
      "Export PDF",
      "Support email",
    ],
    cta: "Essayer",
    ctaLink: "/contact",
    highlight: false,
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    features: [
      "5 utilisateurs",
      "Factures illimitées",
      "Relances automatiques",
      "PO Matching",
      "Support prioritaire",
    ],
    cta: "Démarrer",
    ctaLink: "/contact",
    highlight: true,
  },
  {
    name: "Entreprise",
    monthlyPrice: null,
    features: [
      "Utilisateurs illimités",
      "Conformité Factur-X / NF Z42-013",
      "Onboarding dédié",
      "SLA garanti",
    ],
    cta: "Nous contacter",
    ctaLink: "/contact",
    highlight: false,
  },
];

const faqItems = [
  {
    question: "Y a-t-il un engagement minimum ?",
    answer:
      "Non, tous nos plans sont sans engagement. Vous pouvez résilier à tout moment depuis votre espace client. En cas de paiement annuel, vous bénéficiez d'une réduction de 20 % et restez actif jusqu'à la fin de la période payée.",
  },
  {
    question: "Mes données sont-elles protégées (RGPD) ?",
    answer:
      "Absolument. Odoc est conforme au RGPD. Vos documents sont chiffrés au repos et en transit, hébergés en France, et ne sont jamais partagés avec des tiers. Vous pouvez exercer vos droits d'accès, de rectification et de suppression à tout moment.",
  },
  {
    question: "Puis-je exporter mes données ?",
    answer:
      "Oui. Vous pouvez exporter l'intégralité de vos documents et métadonnées à tout moment aux formats PDF, CSV ou JSON depuis les paramètres de votre compte.",
  },
  {
    question: "Proposez-vous un essai gratuit ?",
    answer:
      "Oui, le plan Starter est disponible en essai gratuit pendant 14 jours, sans carte bancaire requise. Vous pouvez tester toutes les fonctionnalités de base avant de vous engager.",
  },
  {
    question: "Comment fonctionne la facturation ?",
    answer:
      "La facturation est mensuelle ou annuelle selon votre choix. Vous recevez une facture conforme à chaque début de période. Les changements de plan prennent effet immédiatement avec un prorata automatique.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="Tarifs — Odoc | Intelligence documentaire pour PME"
        description="Découvrez les tarifs d'Odoc : Starter, Pro et Entreprise. Choisissez le plan adapté à votre gestion documentaire intelligente."
        canonical="/pricing"
      />

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 text-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Des tarifs simples et transparents
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choisissez le plan adapté à votre entreprise. Sans surprise, sans engagement.
          </p>
        </MotionDiv>

        {/* Toggle */}
        <MotionDiv className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Mensuel
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
              annual ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Basculer entre mensuel et annuel"
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-foreground transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Annuel
          </span>
          {annual && (
            <span className="ml-1 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
              -20 %
            </span>
          )}
        </MotionDiv>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = plan.monthlyPrice
              ? annual
                ? Math.round(plan.monthlyPrice * 0.8)
                : plan.monthlyPrice
              : null;

            return (
              <MotionDiv
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-xl p-8 ${
                  plan.highlight
                    ? "border-2 border-primary bg-card shadow-card-hover ring-1 ring-primary/20"
                    : "border border-border/60 bg-card shadow-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Recommandé
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  {price !== null ? (
                    <>
                      <span className="text-4xl font-bold text-foreground">{price}€</span>
                      <span className="text-muted-foreground text-sm">/ mois</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-foreground">Sur devis</span>
                  )}
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={plan.ctaLink} className="mt-8">
                  <Button
                    className="w-full"
                    variant={plan.highlight ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </MotionDiv>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <MotionDiv className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Questions fréquentes</h2>
        </MotionDiv>
        <Accordion type="single" collapsible className="mt-8">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
