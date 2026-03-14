# Plan du projet Odoc - Site Marketing

Ce document sert de journal de bord pour le développement du site marketing d'Odoc.

**Date de création initiale:** 2026-03-12

---

## Pages Créées

- `/` (Homepage): Landing page principale (Hero, Problème, Solution, Fonctionnalités, Audience, Steps, CTA) + JSON-LD Schema.org SoftwareApplication. ✅
- `/a-propos`: Page À propos (Hero, Histoire, Valeurs, KPIs animés, CTA). ✅
- `/pricing`: Page tarifs avec toggle mensuel/annuel, 3 cartes (Starter gratuit, Essentiel 29€, Pro 79€), FAQ accordéon. ✅
- `/fonctionnalites`: Page détaillée des 6 modules (Factures IA, Relances, PO Matching, Analytics, Multi-utilisateurs, Conformité) avec sticky nav latérale. ✅
- `/blog`: Page listant tous les articles du blog (6 articles). ✅
- `/blog/[slug]`: Template pour un article de blog individuel. ✅
- `/contact`: Formulaire de contact avec validation Zod, honeypot anti-spam, soumission via Edge Function Resend. ✅
- `/mentions-legales`: Mentions légales complètes (éditeur, hébergeur, RGPD, cookies, PI). ✅
- `/cgu`: CGU complètes (5 articles : objet, accès, abonnements, données, responsabilité). ✅

## Composants Générés

- `SiteHeader`: Navigation principale (Fonctionnalités, À propos, Tarifs, Blog, Contact) + lien Connexion + menu mobile.
- `SiteFooter`: Pied de page avec liens complets incluant À propos.
- `MarketingLayout`: Layout wrapper avec Header + Footer.
- `MotionDiv`: Wrapper pour `framer-motion` avec animation d'entrée par défaut.
- `SEOHead`: Composant react-helmet-async pour title, description, canonical, Open Graph, Twitter Card, JSON-LD.

## Architecture

- Framework : React + Vite + TypeScript
- Styling : Tailwind CSS (thème sombre indigo/violet)
- Routing : React Router DOM
- Animations : Framer Motion
- SEO : react-helmet-async + sitemap.xml + robots.txt + JSON-LD
- Blog : Données mockées dans `src/lib/blog.ts` (6 articles)
- Backend : Lovable Cloud (Supabase) — Edge Function `send-contact-email` via API Resend

## SEO

- `<SEOHead>` utilisé sur toutes les pages (title, description, canonical, OG, Twitter)
- `public/sitemap.xml` : toutes les URLs avec lastmod et priority (incluant /a-propos et articles blog)
- `public/robots.txt` : allow all + sitemap pointer
- JSON-LD Schema.org `SoftwareApplication` sur la homepage avec les 3 offres tarifaires

## Articles Blog

1. "Comment l'IA transforme la gestion des factures en PME" (IA Documentaire)
2. "De Google Drive au poste de pilotage documentaire : les 5 étapes" (Stratégie)
3. "Automatiser sans perdre le contrôle : bonnes pratiques pour les dirigeants" (Conseils PME)
4. "Facture électronique obligatoire en 2026 : ce que toutes les PME doivent savoir" (Conformité) ✅ NEW
5. "Comment les PME gagnent 8h par semaine grâce à l'automatisation comptable IA" (Productivité) ✅ NEW
6. "Comment choisir son logiciel de gestion documentaire en 2026 : le guide complet" (Guide) ✅ NEW

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

---
