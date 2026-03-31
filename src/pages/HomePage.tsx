import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/components/MotionDiv";
import { SEOHead } from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  ArrowRight,
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
  Star,
  CheckCircle,
  Shield,
  Lock,
  BadgeCheck,
  Zap,
  Building2,
  Briefcase,
  Scale,
  UserCheck,
} from "lucide-react";

const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odoc.fr";

const tools = [
  { icon: FileText, emoji: "📄", title: "Gestion Documentaire", description: "Uploadez, classez et retrouvez n'importe quel document en secondes. L'IA extrait les données clés automatiquement." },
  { icon: Receipt, emoji: "🧾", title: "Factures IA", description: "Extraction automatique, workflow de validation, conformité NF Z42-013, détection de fraude, archivage légal SHA-256." },
  { icon: Brain, emoji: "🧠", title: "Odoc Brain (Copilot IA)", description: "Posez n'importe quelle question sur vos documents. Obtenez des réponses précises avec sources, en langage naturel." },
  { icon: BarChart3, emoji: "📊", title: "Analytics Multi-Métiers", description: "Tableaux de bord Général, Comptable, Juridique et Administratif. Export PDF et CSV en un clic." },
  { icon: Users, emoji: "👥", title: "Gestion d'Équipe", description: "Invitez vos collaborateurs, assignez des rôles (comptable, juriste, admin), gérez les accès par profil." },
  { icon: UserCog, emoji: "🧑‍💼", title: "Module RH", description: "Gestion des employés, suivi des congés, approbations automatiques, export des données RH." },
  { icon: KanbanSquare, emoji: "📋", title: "Projets Kanban", description: "Créez vos projets, assignez des tâches avec priorités, suivez l'avancement en vue Kanban ou liste." },
  { icon: MessageSquare, emoji: "💬", title: "Messagerie Interne", description: "Canaux d'équipe, messages temps réel, @mentions, pièces jointes. Tout en un, sans quitter Odoc." },
  { icon: Link2, emoji: "🔗", title: "Portail Fournisseur", description: "Envoyez un lien sécurisé à vos fournisseurs pour qu'ils déposent leurs factures directement dans Odoc." },
  { icon: Cloud, emoji: "☁️", title: "Smart Connectors", description: "Connectez Google Drive et Dropbox pour synchroniser vos documents automatiquement dans Odoc." },
];

const audiences = [
  { icon: Building2, title: "TPE & PME", description: "De 1 à 50 employés, centralisez tout sans infrastructure complexe." },
  { icon: Briefcase, title: "Cabinets Comptables", description: "Gérez vos clients, leurs factures et votre conformité depuis un seul endroit." },
  { icon: Scale, title: "Services Juridiques", description: "Suivi des contrats, alertes de renouvellement, conformité légale intégrée." },
  { icon: UserCheck, title: "Équipes RH & Admin", description: "Congés, projets, messagerie, documents — tout dans un seul outil." },
];

const testimonials = [
  {
    quote: "Odoc nous a fait gagner 8h par semaine sur la gestion des factures. L'extraction IA est bluffante.",
    name: "Sophie M.",
    role: "DAF, cabinet comptable Paris",
    size: "15 salariés",
    initials: "SM",
  },
  {
    quote: "Le portail fournisseur a changé notre vie. Plus d'emails, tout arrive directement dans l'app.",
    name: "Karim B.",
    role: "Directeur Général, PME logistique",
    size: "28 salariés",
    initials: "KB",
  },
  {
    quote: "L'Odoc Brain répond à toutes mes questions sur mes contrats en quelques secondes. Indispensable.",
    name: "Nathalie R.",
    role: "Juriste d'entreprise, Lyon",
    size: "",
    initials: "NR",
  },
];

const trustBadges = [
  { icon: "🇫🇷", label: "Données hébergées en France" },
  { icon: <Lock className="h-4 w-4" />, label: "Chiffrement AES-256" },
  { icon: <BadgeCheck className="h-4 w-4" />, label: "Conforme RGPD" },
  { icon: <Shield className="h-4 w-4" />, label: "Norme NF Z42-013" },
  { icon: <Zap className="h-4 w-4" />, label: "99.9% Uptime garanti" },
];

const pricingTeaser = [
  { name: "Starter", price: "0€", label: "Gratuit pour toujours" },
  { name: "Essentiel", price: "29€", label: "/mois" },
  { name: "Pro", price: "79€", label: "/mois", highlight: true },
  { name: "Entreprise", price: "Sur mesure", label: "" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Odoc",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Odoc centralise documents, factures, RH, projets et messagerie dans un seul copilot IA. Comme un employé en plus — sans les charges.",
  offers: [
    { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "EUR", description: "Gratuit" },
    { "@type": "Offer", name: "Essentiel", price: "29", priceCurrency: "EUR", billingIncrement: "P1M" },
    { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR", billingIncrement: "P1M" },
    { "@type": "Offer", name: "Entreprise", price: "0", priceCurrency: "EUR", description: "Sur mesure" },
  ],
};

export default function HomePage() {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterLoading(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email: newsletterEmail.trim(), source: "landing" });
      if (error && error.code === "23505") {
        toast({ title: "✓ Vous êtes déjà inscrit !", description: "Cette adresse est déjà dans notre liste." });
      } else if (error) {
        throw error;
      } else {
        toast({ title: "✓ Merci ! Vous êtes inscrit.", description: "Vous recevrez nos prochaines actualités." });
      }
      setNewsletterEmail("");
    } catch {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setNewsletterLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <SEOHead
        title="Odoc — Le Copilot IA de votre Entreprise"
        description="Odoc centralise documents, factures, RH, projets et messagerie dans un seul copilot IA. Comme un employé en plus — sans les charges. Essai gratuit."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* ═══════════════════════════════════════════
          1 · HERO — above the fold
      ═══════════════════════════════════════════ */}
      <section className="w-full min-h-[90svh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/12 via-background to-background pointer-events-none" />
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <MotionDiv>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-8">
              ✦ Nouveau — Copilot IA multi-outils
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95]">
              Odoc, votre copilot
              <br />
              <span className="bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent">d'entreprise IA</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Une dizaine d'outils intelligents pour gérer documents, factures, équipes, projets et finances. Comme un employé en plus — sans les charges.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${APP_URL}/signup`}>
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6">
                  Essayer gratuitement <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6">
                  Voir une démo
                </Button>
              </a>
            </div>
          </MotionDiv>

          {/* Trust strip — compact, directly under CTAs */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {trustBadges.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="text-primary">{typeof b.icon === "string" ? b.icon : b.icon}</span>
                {b.label}
              </span>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2 · CERVEAU COPILOT + MODULES
      ═══════════════════════════════════════════ */}
      <section className="w-full py-20 sm:py-28 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hub visual + heading */}
          <div className="text-center mb-16">
            <MotionDiv>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Un seul outil. Dix compétences.</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Odoc centralise tout ce dont votre entreprise a besoin dans un copilot IA qui apprend, automatise et vous assiste.
              </p>
            </MotionDiv>

            {/* Hub-and-spoke visual */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 mx-auto w-56 h-56 sm:w-64 sm:h-64 relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-ring/10 border border-primary/30" />
              <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-primary" />
              {tools.slice(0, 8).map((t, i) => {
                const angle = (i * 360) / 8 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 90;
                return (
                  <div
                    key={i}
                    className="absolute h-9 w-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-sm"
                    style={{ top: `calc(50% + ${Math.sin(rad) * r}px - 18px)`, left: `calc(50% + ${Math.cos(rad) * r}px - 18px)` }}
                  >
                    <span>{t.emoji}</span>
                  </div>
                );
              })}
            </MotionDiv>
          </div>

          {/* Module grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {/* First row: 5 cards */}
            {tools.slice(0, 5).map((tool, i) => (
              <MotionDiv
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="group p-5 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{tool.emoji}</span>
                <h3 className="text-sm font-bold text-foreground leading-snug">{tool.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
              </MotionDiv>
            ))}
            {/* Second row: 5 cards */}
            {tools.slice(5).map((tool, i) => (
              <MotionDiv
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 5) * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="group p-5 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{tool.emoji}</span>
                <h3 className="text-sm font-bold text-foreground leading-snug">{tool.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 · POUR QUI — cas d'usage
      ═══════════════════════════════════════════ */}
      <section className="w-full py-20 sm:py-28 bg-card/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Conçu pour les équipes qui avancent vite</h2>
          </MotionDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <MotionDiv
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-card border border-border/60"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 · SOCIAL PROOF — témoignages + trust
      ═══════════════════════════════════════════ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Ils ont adopté leur nouvel employé IA</h2>
          </MotionDiv>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <MotionDiv
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border/60"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}{t.size && ` (${t.size})`}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map((b, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">{typeof b.icon === "string" ? b.icon : b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 · PRICING TEASER
      ═══════════════════════════════════════════ */}
      <section id="demo" className="w-full py-20 sm:py-28 bg-card/40 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Un tarif pour chaque étape de votre croissance</h2>
          </MotionDiv>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {pricingTeaser.map((plan) => (
              <MotionDiv
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl border bg-card/60 ${plan.highlight ? "border-primary/60 ring-1 ring-primary/20" : "border-border/60"}`}
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{plan.name}</p>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">{plan.price}</p>
                {plan.label && <p className="text-xs text-muted-foreground mt-1">{plan.label}</p>}
              </MotionDiv>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8">
                Voir tous les plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6 · CTA FINAL + Newsletter
      ═══════════════════════════════════════════ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-card to-ring/10 border border-primary/20 p-8 sm:p-14">
            <MotionDiv>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Votre copilot d'entreprise vous attend.</h2>
              <p className="mt-4 text-lg text-muted-foreground">Démarrez gratuitement. Aucune carte bancaire requise.</p>
              <div className="mt-8">
                <a href={`${APP_URL}/signup`}>
                  <Button size="lg" className="px-10 py-6 text-base">Créer mon compte gratuit <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                <CheckCircle className="inline h-3 w-3 mr-1" />Gratuit pour toujours · <CheckCircle className="inline h-3 w-3 mr-1" />Setup en 2 min · <CheckCircle className="inline h-3 w-3 mr-1" />Annulation à tout moment
              </p>
            </MotionDiv>

            {/* Newsletter inline */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-sm font-medium text-foreground">Restez informé des nouveautés Odoc</p>
              <p className="text-xs text-muted-foreground mt-1">Conseils IA, nouvelles fonctionnalités, études de cas — directement dans votre boîte mail.</p>
              <form onSubmit={handleNewsletter} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={newsletterLoading} variant="outline" className="sm:w-auto">
                  {newsletterLoading ? "…" : "Je m'abonne"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
