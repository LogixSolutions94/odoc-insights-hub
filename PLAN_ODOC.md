# Plan du projet Odoc - Site Marketing

Ce document sert de journal de bord pour le développement du site marketing d'Odoc.

**Date de création initiale:** 2026-03-12

---

## Pages Créées

- `/` (Homepage): Landing page principale (Hero, Problème, Solution, Fonctionnalités, Audience, Steps, CTA) + JSON-LD Schema.org SoftwareApplication. ✅
- `/a-propos`: Page À propos (Hero, Histoire, Valeurs, KPIs animés, CTA). ✅
- `/pricing`: Page tarifs avec toggle mensuel/annuel, 3 cartes (Starter gratuit, Essentiel 29€, Pro 79€), FAQ accordéon. ✅
- `/fonctionnalites`: Page détaillée des 6 modules (Factures IA, Relances, PO Matching, Analytics, Multi-utilisateurs, Conformité) avec sticky nav latérale. ✅
- `/blog`: Page index dynamique (Supabase), recherche, filtres catégories, article featured, pagination, état vide. ✅
- `/blog/[slug]`: Article dynamique (Supabase), rendu Markdown, CTA inline, articles similaires, SEO dynamique, compteur de vues. ✅
- `/contact`: Formulaire de contact avec validation Zod, honeypot anti-spam, soumission via Edge Function Resend. ✅
- `/mentions-legales`: Mentions légales complètes (éditeur, hébergeur, RGPD, cookies, PI). ✅
- `/cgu`: CGU complètes (5 articles : objet, accès, abonnements, données, responsabilité). ✅

## Composants Générés

- `SiteHeader`: Navigation principale (Fonctionnalités, À propos, Tarifs, Blog, Contact) + lien Connexion + menu mobile.
- `SiteFooter`: Pied de page structuré en 4 colonnes (Produit, Entreprise, Ressources, Légal).
- `MarketingLayout`: Layout wrapper avec Header + Footer.
- `MotionDiv`: Wrapper pour `framer-motion` avec animation d'entrée par défaut.
- `SEOHead`: Composant react-helmet-async pour title, description, canonical, Open Graph, Twitter Card, JSON-LD.
- `BlogCard`: Carte d'article blog réutilisable (variants: default, compact, featured).
- `BlogCategoryBadge`: Badge coloré par catégorie de blog.
- `BlogSEOHead`: Composant SEO spécialisé pour les pages blog.

## Architecture

- Framework : React + Vite + TypeScript
- Styling : Tailwind CSS (thème sombre indigo/violet)
- Routing : React Router DOM
- Animations : Framer Motion
- SEO : react-helmet-async + sitemap dynamique (Edge Function) + robots.txt + JSON-LD
- Blog : Table Supabase `blog_posts` (données dynamiques) + rendu Markdown (react-markdown + rehype-highlight)
- Backend : Lovable Cloud (Supabase)
  - Edge Function `send-contact-email` : envoi email via API Resend
  - Edge Function `publish-blog-post` : webhook N8N pour CRUD articles (auth Bearer token)
  - Edge Function `sitemap` : génération dynamique du sitemap XML
  - Fonction SQL `increment_view_count` : compteur de vues par article

## Base de données

### Table `blog_posts`
- id, slug (unique), title, excerpt, content, cover_image_url
- category (facturation, comptabilite, ia-documents, gestion-pme, tutoriel, general)
- tags[], author_name, author_avatar_url
- seo_title, seo_description, seo_keywords, og_image_url
- status (draft, published, archived), featured, read_time_minutes
- published_at, created_at, updated_at, view_count
- RLS : lecture publique (published uniquement), écriture service_role
- Indexes : slug, status, category, published_at DESC, featured (partial)
- Trigger : updated_at automatique

## SEO

- `<SEOHead>` utilisé sur toutes les pages (title, description, canonical, OG, Twitter)
- Sitemap dynamique via Edge Function (pages statiques + articles publiés)
- `public/robots.txt` : allow all, disallow /auth /settings /team, pointer sitemap
- JSON-LD Schema.org `SoftwareApplication` sur la homepage avec les 3 offres tarifaires

## Secrets configurés

- `RESEND_API_KEY` : clé API Resend pour l'envoi d'emails
- `BLOG_WEBHOOK_SECRET` : token d'authentification pour le webhook N8N

---

## Historique des modifications

*Le format à suivre est : `[YYYY-MM-DD] - [Page/Composant] - [Description du changement]`*

- [2026-03-12] - Projet complet - Création initiale du site marketing
- [2026-03-13] - /pricing - Création page tarifs (toggle, 3 cartes, FAQ)
- [2026-03-13] - /fonctionnalites - Création page fonctionnalités (6 modules, sticky nav)
- [2026-03-13] - /contact - Refonte formulaire (Zod, honeypot, Edge Function Resend, toast)
- [2026-03-13] - SEOHead - Composant SEO ajouté sur toutes les pages
- [2026-03-13] - sitemap.xml / robots.txt - Création fichiers SEO
- [2026-03-13] - HomePage - Ajout JSON-LD SoftwareApplication
- [2026-03-13] - SiteHeader / SiteFooter - Ajout liens Fonctionnalités et Tarifs
- [2026-03-13] - Edge Function send-contact-email - Création (API Resend)
- [2026-03-14] - /a-propos - Création page À propos (hero, histoire, valeurs, KPIs animés, CTA)
- [2026-03-14] - /mentions-legales - Remplacement placeholder par contenu juridique réel
- [2026-03-14] - /cgu - Remplacement placeholder par 5 articles juridiques complets
- [2026-03-14] - Blog - Ajout de 3 articles SEO (conformité, productivité, guide GED)
- [2026-03-14] - /pricing - Refonte 3 offres (Starter gratuit, Essentiel 29€, Pro 79€)
- [2026-03-14] - SiteHeader - Ajout lien Connexion + lien À propos dans navigation
- [2026-03-14] - SiteFooter - Ajout lien À propos
- [2026-03-14] - sitemap.xml - Ajout /a-propos et 3 nouveaux articles blog
- [2026-03-15] - Blog infra - Migration table blog_posts + indexes + RLS + trigger updated_at + fonction increment_view_count
- [2026-03-15] - /blog - Refonte complète : données dynamiques Supabase, recherche, filtres catégorie, featured, pagination, état vide
- [2026-03-15] - /blog/:slug - Refonte complète : données dynamiques, rendu Markdown, CTA inline, articles similaires, SEO dynamique, compteur vues
- [2026-03-15] - Composants blog - Création BlogCard, BlogCategoryBadge, BlogSEOHead
- [2026-03-15] - Edge Function publish-blog-post - Webhook N8N (create/update/publish/unpublish) avec auth Bearer
- [2026-03-15] - Edge Function sitemap - Génération dynamique XML (pages statiques + articles publiés)
- [2026-03-15] - robots.txt - Mise à jour (disallow /auth /settings /team, pointer sitemap)
- [2026-03-15] - SiteFooter - Restructuration en 4 colonnes (Produit, Entreprise, Ressources, Légal)

---
