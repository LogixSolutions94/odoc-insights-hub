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
  Play,
  FolderOpen,
  AlertTriangle,
  Clock,
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

const painPoints = [
  {
    icon: FolderOpen,
    title: "Des documents partout",
    description: "Emails, Drive, bureaux locaux… vous perdez du temps à chercher ce qui compte.",
  },
  {
    icon: AlertTriangle,
    title: "Des factures qui s'accumulent",
    description: "Relances oubliées, conformité légale incertaine, rapprochements manuels épuisants.",
  },
  {
    icon: Clock,
    title: "Votre équipe sans outils centraux",
    description: "RH, projets, messagerie gérés dans 5 apps différentes. Plus pour longtemps.",
  },
];

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

      {/* ─── HERO ─── */}
      <section className="w-full min-h-[85svh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-ring/10 pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <MotionDiv>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
                ✦ Nouveau — Copilot IA multi-outils
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                Odoc, votre copilot<br />d'entreprise IA
              </h1>
              <p className="mt-6 max-w-xl text-lg sm:text-xl text-muted-foreground">
                Une dizaine d'outils intelligents pour gérer documents, factures, équipes, projets et finances. Comme un employé en plus — sans les charges.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`${APP_URL}/signup`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Essayer gratuitement <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Voir une démo
                  </Button>
                </a>
              </div>
            </MotionDiv>
          </div>
          {/* Floating icons mockup */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-ring/10 border border-border/60 backdrop-blur-sm" />
              <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-primary" />
              {[FileText, Receipt, BarChart3, Users, KanbanSquare, MessageSquare, Cloud].map((Icon, i) => {
                const angle = (i * 360) / 7;
                const rad = (angle * Math.PI) / 180;
                const r = 120;
                return (
                  <div
                    key={i}
                    className="absolute h-10 w-10 rounded-lg bg-card/80 border border-border/60 flex items-center justify-center shadow-card"
                    style={{ top: `calc(50% + ${Math.sin(rad) * r}px - 20px)`, left: `calc(50% + ${Math.cos(rad) * r}px - 20px)` }}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ─── PROBLÈME ─── */}
      <section className="w-full py-16 sm:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Vous gérez trop de choses à la fois.</h2>
          </MotionDiv>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {painPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <MotionDiv key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }} className="p-6 rounded-lg border border-border/60 bg-card/50">
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Un seul outil. Dix compétences.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Odoc centralise tout ce dont votre entreprise a besoin dans un copilot IA qui apprend, automatise et vous assiste.
            </p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mt-12 mx-auto w-64 h-64 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-ring/10 border border-primary/30" />
            <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-primary" />
            {tools.slice(0, 8).map((_, i) => {
              const angle = (i * 360) / 8 - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 100;
              return (
                <div
                  key={i}
                  className="absolute h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs"
                  style={{ top: `calc(50% + ${Math.sin(rad) * r}px - 16px)`, left: `calc(50% + ${Math.cos(rad) * r}px - 16px)` }}
                >
                  <span>{tools[i].emoji}</span>
                </div>
              );
            })}
          </MotionDiv>
        </div>
      </section>

      {/* ─── 10 OUTILS ─── */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Les outils de votre nouvel employé IA</h2>
          </MotionDiv>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tools.map((tool, i) => (
              <MotionDiv
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{tool.emoji}</span>
                <h3 className="text-lg font-bold text-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DÉMO ─── */}
      <section id="demo" className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Voyez Odoc en action</h2>
            <p className="mt-4 text-lg text-muted-foreground">En moins de 2 minutes, découvrez comment Odoc transforme la gestion de votre entreprise.</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-ring/10 border border-border/60 flex flex-col items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Play className="h-8 w-8 text-primary ml-1" />
              </div>
              <span className="text-muted-foreground text-sm font-medium">Démo disponible bientôt</span>
            </div>
            <div className="mt-8">
              <a href={`${APP_URL}/signup`}>
                <Button size="lg">Commencer gratuitement <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ─── POUR QUI ─── */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Conçu pour les équipes qui avancent vite</h2>
          </MotionDiv>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <MotionDiv
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-72 md:w-auto snap-center p-6 rounded-xl bg-card border border-border/60 shadow-card"
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

      {/* ─── NEWSLETTER ─── */}
      <section className="w-full py-16 sm:py-24 bg-card/50 border-y border-border/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv>
            <h2 className="text-3xl font-bold tracking-tight">Restez informé des nouveautés Odoc</h2>
            <p className="mt-4 text-muted-foreground">Conseils IA, nouvelles fonctionnalités, études de cas — directement dans votre boîte mail.</p>
          </MotionDiv>
          <form onSubmit={handleNewsletter} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="votre@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={newsletterLoading} className="sm:w-auto">
              {newsletterLoading ? "…" : "Je m'abonne"}
            </Button>
          </form>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ils ont adopté leur nouvel employé IA</h2>
          </MotionDiv>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <MotionDiv key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.5 }} viewport={{ once: true }} className="p-6 rounded-xl bg-card border border-border/60 shadow-card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
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
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="w-full py-8 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">{typeof b.icon === "string" ? b.icon : b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-card to-ring/10 border border-primary/20 p-8 sm:p-12">
            <MotionDiv>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Votre copilot d'entreprise vous attend.</h2>
              <p className="mt-4 text-lg text-muted-foreground">Démarrez gratuitement. Aucune carte bancaire requise.</p>
              <div className="mt-8">
                <a href={`${APP_URL}/signup`}>
                  <Button size="lg" className="px-8">Créer mon compte gratuit <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                <CheckCircle className="inline h-3 w-3 mr-1" />Gratuit pour toujours · <CheckCircle className="inline h-3 w-3 mr-1" />Setup en 2 min · <CheckCircle className="inline h-3 w-3 mr-1" />Annulation à tout moment
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
