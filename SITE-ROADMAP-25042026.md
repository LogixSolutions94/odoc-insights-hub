# 🚀 OdocPilot — Roadmap Site Vitrine J-6 → J-DAY

**Période :** 25 avril 2026 → 1er mai 2026
**Périmètre :** odocpilot.com uniquement (landing + blog). Pas de toucher au SaaS app.odocpilot.com.
**Verdict d'audit :** 🟡 **CONDITIONNEL** — peut partir le 1er mai si les 3 corrections "non-négociables" sont faites avant J-2.

---

## 🚨 Les 3 corrections NON-NÉGOCIABLES avant le 1er mai

| # | Correction | Pourquoi | Effort |
|---|-----------|----------|--------|
| 1 | Retirer `aggregateRating` 4.8/5 (12 avis) de `index.html` | Publicité trompeuse + violation Google guidelines | 5 min |
| 2 | Aligner promesses pricing avec features livrées (CRM, Smart Connectors bidir, NF Z42-013) | Risque DGCCRF + remboursements clients | 30 min |
| 3 | Footer : `*.odoc.fr` → `*.odocpilot.com` + `/e-facture` ajoutée au sitemap | Liens cassés J1 = mauvaise première impression | 10 min |

---

## 📅 Plan jour par jour

### 🟥 Vendredi 25 avril — J-6 — "Stop the bleeding"
🎯 Objectif : neutraliser tous les risques juridiques en moins de 3h.

- [ ] 🚨 Retirer le bloc `aggregateRating` du JSON-LD `index.html`
- [ ] 🚨 PricingPage : retirer "CRM basique" du plan Essential (ou créer page CRM minimaliste)
- [ ] 🚨 PricingPage / FonctionnalitesPage : retirer "bidirectionnel" sur Smart Connectors et Calendrier tant que non livré
- [ ] 🚨 Vérifier la mention "NF Z42-013" → la remplacer par "compatible NF Z42-013" si pas certifié
- [ ] 🛠 SiteFooter : remplacer `docs.odoc.fr`, `status.odoc.fr` → `docs.odocpilot.com`, `status.odocpilot.com`
- [ ] 🛠 sitemap.xml : ajouter `/e-facture`
- [ ] 🛠 Newsletter : ajouter mention RGPD sous le champ email
- [ ] 🛠 HomePage.tsx : remplacer `import { motion }` → `MotionDiv` partout (cohérence CLAUDE.md)
- [ ] ✅ `npm run build` + déploiement VPS

**Modèle recommandé :** Haiku 4.5 — corrections atomiques.

---

### 🟧 Samedi 26 avril — J-5 — "Performance & SEO foundations"
🎯 Objectif : rendre le site indexable et rapide.

- [ ] 🔥 Installer `vite-plugin-prerender` (ou `react-snap`) sur 8 routes :
  - `/`, `/fonctionnalites`, `/pricing`, `/a-propos`, `/contact`, `/e-facture`, `/blog`, `/recrutement`
- [ ] 🔥 Vérifier que `react-helmet-async` produit bien des `<title>` et `<meta>` dans le HTML pré-rendu
- [ ] 📊 Ajouter `rollup-plugin-visualizer` au build, identifier les 3 plus gros chunks
- [ ] 📊 Lazy-load `tsparticles` (uniquement sur Hero, dynamic import)
- [ ] 📊 Lazy-load `recharts` et `react-markdown` (BlogPostPage uniquement)
- [ ] 🎨 index.html : ajouter `<link rel="preconnect" href="https://api.fontshare.com">`
- [ ] 🎨 Convertir les images du Hero en AVIF/WebP avec fallback
- [ ] ✅ Lighthouse mobile ≥ 85 sur toutes les pages

**Modèle :** Sonnet 4.6 — refactor multi-fichiers.

---

### 🟨 Dimanche 27 avril — J-4 — "Trust & Conversion"
🎯 Objectif : transformer le visiteur en testeur.

- [ ] 💬 Collecter 3 témoignages réels (beta testeurs / contacts directs) — TOI
- [ ] 💬 Intégrer section "Ils nous font confiance" sur HomePage au-dessus de la ligne de flottaison
- [ ] 🎯 Ajouter bandeau "Lancement 1er mai — 50 premiers comptes : -30% à vie" (FOMO légitime)
- [ ] 🎯 Remplacer ou doubler CTA Hero "Essai gratuit" par "Voir la démo en 90s" (vidéo Loom)
- [ ] 📈 Installer Plausible ou Umami (RGPD-friendly, pas besoin de banner cookie strict)
- [ ] 📝 Page Pricing : ajouter colonne comparative "Odoc vs Pennylane vs Qonto"
- [ ] 📝 Préparer un lead magnet : "Guide facturation électronique 2026 pour PME" (PDF)

**Modèle :** Sonnet 4.6 + Toi pour le contenu humain.

---

### 🟩 Lundi 28 avril — J-3 — "Blog go-live"
🎯 Objectif : 5 articles publiés avant J1.

- [ ] ✍️ Vérifier RLS Supabase : policy SELECT anon WHERE `status='published'`
- [ ] ✍️ Publier 5 articles minimum (rédigés à l'avance) :
  1. "Facturation électronique 2026 : ce que les PME doivent savoir"
  2. "RGPD et IA : peut-on confier ses documents à un Copilot ?"
  3. "10 tâches admin que les TPE peuvent automatiser dès aujourd'hui"
  4. "Pennylane vs OdocPilot : comparatif honnête 2026"
  5. "Comment l'IA RAG transforme la gestion documentaire des PME"
- [ ] 🔍 BlogSEOHead : ajouter JSON-LD `Article` (headline, datePublished, author, image)
- [ ] 🔍 BlogPostPage : vérifier balises Open Graph dynamiques (og:image par article)
- [ ] 🔍 Sitemap dynamique : régénérer avec les slugs des articles publiés
- [ ] 📷 Vérifier que `og-default.png` et `og-image.png` existent dans `/public` (1200x630)

**Modèle :** Sonnet pour code, Toi pour contenu rédactionnel.

---

### 🟦 Mardi 29 avril — J-2 — "Sécurité & infra"
🎯 Objectif : durcir nginx, headers, monitoring.

- [ ] 🔒 Versionner `nginx.conf.example` dans le repo (pas le fichier prod, juste la trame)
- [ ] 🔒 Headers HTTP à activer côté nginx :
  - `Content-Security-Policy` (au moins `default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://api.fontshare.com; font-src https://cdn.fontshare.com; connect-src 'self' https://*.supabase.co`)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- [ ] 🔒 Forcer HTTPS + redirect 301 www → non-www (ou inverse, à fixer)
- [ ] 🔒 Vérifier que `.env` n'est pas commité (`git check-ignore .env`)
- [ ] 📡 Installer un uptime monitor (UptimeRobot gratuit) sur odocpilot.com
- [ ] 📡 Vérifier certbot renewal : `certbot renew --dry-run`
- [ ] 🧪 Test mobile 375px sur HomePage, Pricing, Fonctionnalités

**Modèle :** Sonnet — infra.

---

### 🟪 Mercredi 30 avril — J-1 — "Final QA + dress rehearsal"
🎯 Objectif : tout tester comme un client.

- [ ] ✅ Parcours complet : Landing → Pricing → CTA "Essai" → app.odocpilot.com (signup OK ?)
- [ ] ✅ Parcours complet : Landing → Contact → soumission formulaire → email reçu
- [ ] ✅ Parcours complet : Landing → Blog → article → newsletter
- [ ] ✅ Tester sur 3 devices : iPhone Safari, Android Chrome, Desktop Firefox
- [ ] ✅ Tester partage LinkedIn / Twitter / WhatsApp → vérifier OG image
- [ ] ✅ Lighthouse Mobile : SEO ≥ 95, Performance ≥ 80, Accessibilité ≥ 90
- [ ] ✅ Google Search Console : soumettre sitemap, demander indexation manuelle des 8 pages clés
- [ ] ✅ Brevo / Mailjet : préparer email d'annonce J1 pour la liste newsletter
- [ ] ✅ Préparer post LinkedIn fondateur + post Twitter pour J1 06h00

---

### 🟢 Jeudi 1er mai — JOUR J — "Lancement"
🎯 Objectif : ouvrir, monitorer, réagir.

- [ ] 🚀 06h00 : retirer tout banner "bientôt" / "coming soon"
- [ ] 🚀 09h00 : publier post LinkedIn + Twitter
- [ ] 🚀 09h00 : envoyer email d'annonce newsletter
- [ ] 📊 Surveiller Plausible/Umami : conversion landing → signup
- [ ] 📊 Surveiller Sentry / logs nginx : erreurs JS, 404, 500
- [ ] 💬 Crisp/chat live activé sur /pricing
- [ ] 🩹 Hotfix réservé : 1 dev disponible toute la journée pour patcher si besoin

---

## 📋 Checklist SEO Go-Live

```
□ Tous les <title> uniques par page (≤ 60 chars)
□ Toutes les <meta description> uniques (≤ 155 chars)
□ Une seule <h1> par page
□ Hiérarchie H1 → H2 → H3 respectée
□ Canonical sur chaque page
□ Open Graph + Twitter Card sur chaque page
□ JSON-LD : Organization (✅), WebSite (✅), SoftwareApplication (✅), Article (à faire), BreadcrumbList (à faire)
□ sitemap.xml complet incl. /e-facture + slugs blog
□ robots.txt OK (Allow: /, sitemap déclaré)
□ Aucun aggregateRating fictif
□ Pré-rendu activé sur 8 routes statiques
□ Images en AVIF/WebP avec width/height déclarés
□ Bundle JS initial < 250 KB gzip
□ Lighthouse Mobile SEO ≥ 95
□ Search Console : sitemap soumis, ownership vérifié
```

---

## 📊 État des pages au 25 avril

| Page | Status | Bloquant J1 ? |
|------|--------|--------------|
| `/` HomePage | 🟧 OK structure / 🟥 motion import + Hero JS lourd | NON (corriger en J-6) |
| `/fonctionnalites` | 🟧 OK / promesses à nuancer | NON |
| `/pricing` | 🟥 CRM Essential incohérent + bidirectionnel à retirer | **OUI** |
| `/blog` | 🟧 vide à ce jour, articles à publier | OUI (J-3) |
| `/blog/:slug` | 🟧 fonctionnel mais Article JSON-LD manquant | NON |
| `/e-facture` | 🟩 OK (récemment optimisée) — manquante du sitemap | corriger |
| `/a-propos` | 🟩 OK | NON |
| `/contact` | 🟩 OK avec validation Zod + honeypot | NON |
| `/recrutement` | 🟧 page courte 94 lignes — à étoffer si recrutement actif | NON |
| `/roadmap` | 🟩 OK | NON |
| `/changelog` | 🟩 OK | NON |
| `/cgu` `/mentions-legales` `/politique-confidentialite` | 🟧 à faire relire avocat | **OUI** (relecture J-2) |
| `404 NotFound` | 🟩 OK | NON |

---

## 🎯 Top 5 propositions pour booster les conversions post-lancement

1. **Démo interactive sans inscription** (sandbox read-only) accessible depuis Hero — supprime la friction n°1 du SaaS B2B
2. **Page comparative "Odoc vs Pennylane"** dédiée (URL `/odocpilot-vs-pennylane`) — fort potentiel SEO longue traîne
3. **ROI Calculator** sur Pricing : "Combien Odoc vous fait gagner ?" → engagement + collecte email
4. **Lead magnet PDF** "Guide facturation électronique 2026" → multiplier par 5 la collecte newsletter
5. **OG images dynamiques** par page (via endpoint Vercel OG ou équivalent self-hosted) → +30-50% CTR LinkedIn

---

**🤖 Audit généré le 2026-04-25 par Claude Opus 4.7 — pré-lancement OdocPilot.**
