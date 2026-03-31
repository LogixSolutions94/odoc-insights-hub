import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import { Check, Lock, BadgeCheck, Shield, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odoc.fr";

const plans = [
  {
    name: "Starter",
    badge: "Pour démarrer",
    monthlyPrice: 0,
    priceLabel: "Gratuit",
    features: [
      "Jusqu'à 50 documents",
      "1 utilisateur",
      "Odoc Brain (10 questions/mois)",
      "Factures IA (5/mois)",
      "Documents, Brain, Analytics basique",
    ],
    cta: "Commencer gratuitement",
    ctaLink: `${APP_URL}/signup`,
    external: true,
    highlight: false,
  },
  {
    name: "Essentiel",
    badge: "Pour les petites équipes",
    monthlyPrice: 29,
    priceLabel: null,
    features: [
      "Jusqu'à 500 documents",
      "3 utilisateurs",
      "Odoc Brain illimité",
      "Factures IA (50/mois)",
      "Documents, Brain, Factures, Analytics, RH basique",
      "Support email",
    ],
    cta: "Commencer l'essai 14 jours",
    ctaLink: `${APP_URL}/signup`,
    external: true,
    highlight: false,
  },
  {
    name: "Pro",
    badge: "⭐ Le plus populaire",
    monthlyPrice: 79,
    priceLabel: null,
    features: [
      "Documents illimités",
      "10 utilisateurs",
      "Tous les modules inclus",
      "PO Matching IA",
      "Détection fraude",
      "Export FEC + PDF",
      "Support prioritaire",
    ],
    cta: "Commencer l'essai 14 jours",
    ctaLink: `${APP_URL}/signup`,
    external: true,
    highlight: true,
  },
  {
    name: "Entreprise",
    badge: "Pour les grandes organisations",
    monthlyPrice: -1,
    priceLabel: "Parlons-en",
    features: [
      "Tout le plan Pro",
      "Utilisateurs illimités",
      "SLA garanti",
      "Onboarding dédié",
      "Intégrations sur mesure",
      "Facturation personnalisée",
      "Account manager dédié",
    ],
    cta: "Contacter l'équipe",
    ctaLink: "/contact",
    external: false,
    highlight: false,
  },
];

const faqItems = [
  { question: "Puis-je changer de plan à tout moment ?", answer: "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement avec un prorata automatique." },
  { question: "Y a-t-il une période d'essai ?", answer: "Les plans Essentiel et Pro incluent un essai gratuit de 14 jours sans carte bancaire. Le plan Starter est gratuit sans limite de durée." },
  { question: "Mes données sont-elles sécurisées ?", answer: "Absolument. Vos données sont chiffrées AES-256, hébergées en France et conformes au RGPD. Nous ne revendons jamais vos données." },
  { question: "Le plan Starter est-il vraiment gratuit ?", answer: "Oui, le plan Starter est gratuit pour toujours. Aucune carte bancaire n'est requise. Vous pouvez évoluer quand vous le souhaitez." },
  { question: "Comment fonctionne la facturation annuelle ?", answer: "En choisissant le paiement annuel, vous bénéficiez de 20% de réduction. Vous recevez une facture conforme à chaque début de période." },
  { question: "Proposez-vous des remises pour les associations ou startups ?", answer: "Oui, contactez-nous pour discuter de tarifs adaptés. Nous proposons des remises pour les associations, startups early-stage et structures éducatives." },
];

const trustBadges = [
  { icon: "🇫🇷", label: "Données hébergées en France" },
  { icon: <Lock className="h-4 w-4" />, label: "Chiffrement AES-256" },
  { icon: <BadgeCheck className="h-4 w-4" />, label: "Conforme RGPD" },
  { icon: <Shield className="h-4 w-4" />, label: "Norme NF Z42-013" },
  { icon: <Zap className="h-4 w-4" />, label: "99.9% Uptime garanti" },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="Tarifs — Odoc | Copilot IA d'entreprise"
        description="Découvrez les tarifs d'Odoc : Starter gratuit, Essentiel à 29€/mois, Pro à 79€/mois et Entreprise sur mesure. Essai gratuit 14 jours."
        canonical="/pricing"
      />

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-14 text-center">
        <MotionDiv>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Un tarif pour chaque étape de votre croissance</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">Commencez gratuitement. Évoluez quand vous êtes prêts.</p>
        </MotionDiv>

        {/* Toggle */}
        <MotionDiv className="mt-10 flex items-center justify-center gap-3">
          <span className={`text-sm font-semibold ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Mensuel</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${annual ? "bg-primary" : "bg-muted"}`}
            aria-label="Basculer entre mensuel et annuel"
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-card shadow-sm transition-transform ${annual ? "translate-x-6" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-semibold ${annual ? "text-foreground" : "text-muted-foreground"}`}>Annuel</span>
          {annual && <span className="ml-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">Économisez 20%</span>}
        </MotionDiv>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const price = plan.monthlyPrice <= 0 ? 0 : annual ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
            const isCustom = plan.monthlyPrice === -1;

            return (
              <MotionDiv
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-xl p-7 transition-all duration-300 ${
                  plan.highlight
                    ? "border-2 border-primary bg-card shadow-elevated ring-1 ring-primary/15 scale-[1.02]"
                    : "border border-border bg-card shadow-card hover:shadow-card-hover"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                {!plan.highlight && <p className="text-xs text-muted-foreground mt-1">{plan.badge}</p>}
                <div className="mt-5 flex items-baseline gap-1">
                  {isCustom ? (
                    <span className="text-3xl font-bold text-foreground">{plan.priceLabel}</span>
                  ) : price === 0 ? (
                    <span className="text-3xl font-bold text-foreground">{plan.priceLabel}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-foreground">{price}€</span>
                      <span className="text-muted-foreground text-sm">/ mois</span>
                    </>
                  )}
                </div>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.external ? (
                  <a href={plan.ctaLink} className="mt-7">
                    <Button className={`w-full ${plan.highlight ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`} variant={plan.highlight ? "default" : "outline"} size="lg">{plan.cta}</Button>
                  </a>
                ) : (
                  <Link to={plan.ctaLink} className="mt-7">
                    <Button className="w-full" variant="outline" size="lg">{plan.cta}</Button>
                  </Link>
                )}
              </MotionDiv>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <MotionDiv className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Questions fréquentes</h2>
        </MotionDiv>
        <Accordion type="single" collapsible className="mt-10">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Trust Badges */}
      <section className="w-full py-10 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <span className="text-primary">{typeof b.icon === "string" ? b.icon : b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
