# Plan du projet Odoc - Site Marketing

Ce document sert de journal de bord pour le développement du site marketing d'Odoc.

**Date de création initiale:** 2026-03-12

---

## Pages Créées

- `/` (Homepage): Landing page principale (Hero, Problème, Solution, Fonctionnalités, Audience, Steps, CTA) + JSON-LD Schema.org SoftwareApplication.
- `/pricing`: Page tarifs avec toggle mensuel/annuel, 3 cartes (Starter, Pro, Entreprise), FAQ accordéon.
- `/fonctionnalites`: Page détaillée des 6 modules (Factures IA, Relances, PO Matching, Analytics, Multi-utilisateurs, Conformité) avec sticky nav latérale.
- `/blog`: Page listant tous les articles du blog.
- `/blog/[slug]`: Template pour un article de blog individuel.
- `/contact`: Formulaire de contact avec validation Zod, honeypot anti-spam, soumission via Edge Function Resend.
- `/mentions-legales`: Page de mentions légales (placeholder).
- `/cgu`: Page des Conditions Générales d'Utilisation (placeholder).

## Composants Générés

- `SiteHeader`: Navigation principale (Fonctionnalités, Tarifs, Blog, Contact) + menu mobile.
- `SiteFooter`: Pied de page avec liens complets (Accueil, Fonctionnalités, Tarifs, Blog, Contact, Mentions Légales, CGU).
- `MarketingLayout`: Layout wrapper avec Header + Footer.
- `MotionDiv`: Wrapper pour `framer-motion` avec animation d'entrée par défaut.
- `SEOHead`: Composant react-helmet-async pour title, description, canonical, Open Graph, Twitter Card, JSON-LD.

## Architecture

- Framework : React + Vite + TypeScript
- Styling : Tailwind CSS (thème sombre indigo/violet)
- Routing : React Router DOM
- Animations : Framer Motion
- SEO : react-helmet-async + sitemap.xml + robots.txt + JSON-LD
- Blog : Données mockées dans `src/lib/blog.ts`
- Backend : Lovable Cloud (Supabase) — Edge Function `send-contact-email` via API Resend

## SEO

- `<SEOHead>` utilisé sur toutes les pages (title, description, canonical, OG, Twitter)
- `public/sitemap.xml` : toutes les URLs avec lastmod et priority
- `public/robots.txt` : allow all + sitemap pointer
- JSON-LD Schema.org `SoftwareApplication` sur la homepage avec les 3 offres tarifaires

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

---
