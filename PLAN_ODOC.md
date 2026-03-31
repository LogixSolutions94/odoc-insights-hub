# Plan du projet Odoc - Site Marketing

Ce document sert de journal de bord pour le développement du site marketing d'Odoc.

**Date de création initiale:** 2026-03-12

---

## Pages Créées

- `/` (Homepage): Landing page "Copilot IA d'entreprise" — Hero, Problème, Solution hub, 10 outils, Démo, Pour qui, Newsletter, Témoignages, Trust badges, CTA. ✅
- `/a-propos`: Page À propos (Vision copilot, Mission, Valeurs, 4 KPIs animés, CTA). ✅
- `/pricing`: Page tarifs 4 plans (Starter 0€, Essentiel 29€, Pro 79€, Entreprise sur mesure) + toggle annuel + FAQ + trust badges. ✅
- `/fonctionnalites`: 10 modules du copilot IA (Documents, Factures, Brain, Analytics, Équipe, RH, Projets, Messagerie, Portail Fournisseur, Connectors) avec sticky nav. ✅
- `/blog`: Page index dynamique (Supabase), recherche, filtres catégories, article featured, pagination, état vide. ✅
- `/blog/[slug]`: Article dynamique (Supabase), rendu Markdown, CTA inline, articles similaires, SEO dynamique, compteur de vues. ✅
- `/contact`: Formulaire de contact avec validation Zod, honeypot anti-spam, soumission via Edge Function Resend. ✅
- `/mentions-legales`: Mentions légales complètes (éditeur, hébergeur, RGPD, cookies, PI). ✅
- `/cgu`: CGU complètes (5 articles : objet, accès, abonnements, données, responsabilité). ✅
- `/politique-confidentialite`: Politique de confidentialité RGPD complète (9 sections). ✅

## Composants Générés

- `SiteHeader`: Navigation (Fonctionnalités, Tarifs, Blog, À propos, Contact) + Connexion/Essai gratuit + mobile.
- `SiteFooter`: 4 colonnes (Produit, Entreprise, Ressources, Légal) + mention "Fait en France".
- `MarketingLayout`: Layout wrapper Header + Footer + CookieBanner.
- `CookieBanner`: Bandeau cookies RGPD (slide-up, localStorage, accept/refuse).
- `MotionDiv`: Wrapper framer-motion.
- `SEOHead`: react-helmet-async (title, desc, canonical, OG, Twitter, JSON-LD).
- `BlogCard`, `BlogCategoryBadge`, `BlogSEOHead`: Composants blog réutilisables.

## Architecture

- Framework : React + Vite + TypeScript
- Styling : Tailwind CSS (thème clair premium B2B 2026 — bleu pétrole + accent teal)
- Routing : React Router DOM
- Animations : Framer Motion
- SEO : react-helmet-async + sitemap dynamique (Edge Function) + robots.txt + JSON-LD
- Blog : Table Supabase `blog_posts` + rendu Markdown (react-markdown + rehype-highlight)
- Backend : Lovable Cloud (Supabase)
  - Edge Function `send-contact-email` : envoi email via API Resend
  - Edge Function `publish-blog-post` : webhook N8N pour CRUD articles
  - Edge Function `sitemap` : génération dynamique du sitemap XML
  - Fonction SQL `increment_view_count` : compteur de vues par article

## Base de données

### Table `blog_posts`
- Schéma complet avec catégories, SEO, status, featured, view_count
- RLS : lecture publique (published), écriture service_role

### Table `newsletter_subscribers`
- email (unique), subscribed_at, source
- RLS : insert public, read service_role uniquement

## Positionnement

Odoc = **Copilot d'entreprise IA** — 10 outils intégrés :
1. Gestion Documentaire
2. Factures IA
3. Odoc Brain (Copilot IA)
4. Analytics Multi-Métiers
5. Gestion d'Équipe
6. Module RH
7. Projets Kanban
8. Messagerie Interne
9. Portail Fournisseur
10. Smart Connectors

Tagline : "Votre employé IA. Disponible 24h/24."
Cible : TPE/PME, cabinets comptables, services juridiques, équipes RH.

---

## Historique des modifications

- [2026-03-12] - Projet complet - Création initiale du site marketing
- [2026-03-13] - Pages pricing, fonctionnalités, contact, SEO
- [2026-03-14] - À propos, mentions légales, CGU, articles blog, pricing refonte
- [2026-03-15] - Blog infra Supabase, Edge Functions, composants blog
- [2026-03-29] - **REFONTE COMPLÈTE** — Nouveau positionnement "Copilot IA d'entreprise"
  - HomePage : toutes sections recréées (hero, problème, solution, 10 outils, démo, pour qui, newsletter, témoignages, trust, CTA)
  - PricingPage : 4 plans (Starter/Essentiel/Pro/Entreprise) + FAQ + trust badges
  - FonctionnalitesPage : 10 modules avec descriptions longues et sous-features
  - AProposPage : vision/mission copilot, 4 KPIs mis à jour
  - NotFound : page 404 custom avec gradient et CTA
  - PolitiqueConfidentialitePage : politique RGPD complète (9 sections)
  - CookieBanner : bandeau cookies RGPD (accept/refuse, localStorage)
  - Newsletter : table Supabase + formulaire inscription
  - SiteHeader : Connexion + Essai gratuit → app.odoc.fr
  - SiteFooter : 4 colonnes restructurées + liens morts placeholder
  - MarketingLayout : ajout CookieBanner
  - App.tsx : route /politique-confidentialite + 404 dans MarketingLayout
  - sitemap.xml : ajout /politique-confidentialite
  - robots.txt : inchangé
  - PLAN_ODOC.md : mise à jour complète
- [2026-03-31] - **REFONTE LAYOUT HOMEPAGE** — Tunnel de vente B2B 2026
  - Réorganisation des sections : Hero (H1 agrandi + trust badges sous CTA) → Cerveau Copilot + grille 5×2 modules → Pour qui → Social proof (témoignages + trust) → Pricing teaser → CTA final + newsletter inline
  - Sections supprimées en tant que blocs autonomes : Problème, Démo (ancre conservée sur pricing teaser)
  - Aucun changement de texte, SEO, routes ni Edge Functions

---
