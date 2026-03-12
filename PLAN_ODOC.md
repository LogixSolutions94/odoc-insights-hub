# Plan du projet Odoc - Site Marketing

Ce document sert de journal de bord pour le développement du site marketing d'Odoc.

**Date de création initiale:** 2026-03-12

---

## Pages Créées

- `/` (Homepage): Landing page principale présentant le produit (Hero, Problème, Solution, Fonctionnalités, Audience, Steps, CTA).
- `/blog`: Page listant tous les articles du blog.
- `/blog/[slug]`: Template pour un article de blog individuel.
- `/contact`: Page avec formulaire de contact.
- `/mentions-legales`: Page de mentions légales (placeholder).
- `/cgu`: Page des Conditions Générales d'Utilisation (placeholder).

## Composants Générés

- `SiteHeader`: Navigation principale du site avec menu mobile.
- `SiteFooter`: Pied de page commun à tout le site.
- `MarketingLayout`: Layout wrapper avec Header + Footer.
- `MotionDiv`: Wrapper pour `framer-motion` avec animation d'entrée par défaut.

## Architecture

- Framework : React + Vite + TypeScript
- Styling : Tailwind CSS (thème sombre indigo/violet)
- Routing : React Router DOM
- Animations : Framer Motion
- Blog : Données mockées dans `src/lib/blog.ts`

---

## Historique des modifications

*Le format à suivre est : `[YYYY-MM-DD] - [Page/Composant] - [Description du changement]`*

- [2026-03-12] - Projet complet - Création initiale du site marketing

---
