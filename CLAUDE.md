# 🧠 CLAUDE.md — Odoc SaaS Landing Page & Blog

**Document de référence pour tous les travaux de développement sur Odoc (landing page + blog)**

---

## 🏗️ ARCHITECTURE 2 SITES — RÈGLE CRITIQUE (LIRE EN PREMIER)

Ce VPS héberge DEUX applications DISTINCTES. Ne JAMAIS les confondre.

| Domaine               | Rôle          | Container       | Port |
|-----------------------|---------------|-----------------|------|
| odocpilot.com         | Landing page  | odoc-landing    | 3000 |
| app.odocpilot.com     | SaaS app      | odoc-frontend   | 3001 |

### Règles strictes — sans exception
1. **Ce repo (odoc-insights-hub) = UNIQUEMENT la landing page** (odocpilot.com / container odoc-landing port 3000)
2. **JAMAIS** toucher Dockerfile, nginx.conf, docker-compose.yml du SaaS (odoc-frontend)
3. **JAMAIS** faire `docker-compose up` sans préciser le service exact
4. Toute commande Docker/Nginx → DEMANDER CONFIRMATION avant d'appliquer si risque de toucher le SaaS
5. Le container SaaS (odoc-frontend / port 3001) ne doit JAMAIS être redémarré ou modifié depuis cette session

### Déploiement Landing seulement
```bash
# ✅ CORRECT — uniquement la landing
npm run build
scp -i ~/.ssh/odoc_vps_rsa -r dist/* root@151.80.144.236:/var/www/odoc/

# ❌ INTERDIT — ne jamais faire depuis ce repo
docker restart odoc-frontend  # Jamais toucher le SaaS
```

---

## 📍 **CONTEXTE PROJET**

### Vision Odoc
```
Odoc = OS d'entreprise next-gen + Copilot IA pour TPE/PME
Tagline : "Votre employé IA. 24h/24."

Objectif : Remplacer 10+ outils éparpillés (Drive, Notion, Slack, Pennylane, etc.)
          par un seul système d'exploitation d'entreprise intelligent
```

### Stack technique (NE PAS CHANGER)
```
Frontend : React 18 + TypeScript strict + Vite
Styling  : Tailwind CSS + shadcn/ui (composants)
Animations : Framer Motion via MotionDiv (JAMAIS motion.div)
SEO      : react-helmet-async
Backend  : Supabase (blog_posts, newsletter_subscribers)
Deploy   : Nginx reverse proxy + SSL Let's Encrypt
Font     : Plus Jakarta Sans
Theme    : Navy Premium (dark blue)
```

---

## 🌐 **ARCHITECTURE & DOMAINES**

### Domaines en production
```
┌─ https://odocpilot.com         → Landing page + Blog (React SPA)
├─ https://app.odocpilot.com     → SaaS Frontend (Docker, port 3001)
├─ https://api.odocpilot.com     → API REST (port 4000)
├─ https://blog.odocpilot.com    → Blog (port 3100)
├─ https://docs.odocpilot.com    → Docs (port 3200)
└─ https://status.odocpilot.com  → Status page (port 3300)
```

### Répertoires locaux
```
/src/pages/
  ├── HomePage.tsx               → Landing page hero + modules
  ├── PricingPage.tsx            → Pricing 4 plans + comparatif
  ├── FonctionnalitesPage.tsx    → 11 modules détaillés
  ├── BlogPage.tsx               → Blog listing
  ├── BlogPostPage.tsx           → Article individuel
  ├── ContactPage.tsx            → Formulaire contact
  ├── AProposPage.tsx            → À propos
  └── ...autres pages

/src/components/
  ├── SiteHeader.tsx             → Navigation principale
  ├── SiteFooter.tsx             → Footer
  ├── MotionDiv.tsx              → Wrapper Framer Motion
  ├── SEOHead.tsx                → Composant SEO/helmet
  ├── MarketingLayout.tsx        → Layout pages marketing
  └── /ui/                       → shadcn/ui components

/src/integrations/supabase/
  └── client.ts                  → Client Supabase config

/public/
  └── ...assets, favicon, etc.
```

### Déploiement VPS
```
VPS : 151.80.144.236 (OVH)
SSH : ssh -i ~/.ssh/odoc_vps_rsa root@151.80.144.236

Landing page : /var/www/odoc/               (fichiers statiques)
Nginx config : /etc/nginx/sites-available/odocpilot.conf
SSL certs    : /etc/letsencrypt/live/odocpilot.com/
```

---

## 🎨 **CONVENTIONS & PATTERNS**

### 1. Variables d'environnement
```typescript
// TOUJOURS utiliser cette approche pour APP_URL
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odocpilot.com";

// Utilisation dans les CTAs
<a href={`${APP_URL}/signup`}>Essayer gratuitement</a>
<a href={`${APP_URL}/login`}>Se connecter</a>
```

### 2. Composants Framer Motion
```typescript
// ✅ CORRECT - Utiliser MotionDiv
import { MotionDiv } from "@/components/MotionDiv";

<MotionDiv
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.5 }}
  viewport={{ once: true }}
>
  Contenu animé
</MotionDiv>

// ❌ JAMAIS : motion.div
import { motion } from "framer-motion";  // NE PAS IMPORTER
<motion.div>...</motion.div>  // NE PAS UTILISER
```

### 3. Import Lucide Icons
```typescript
// ✅ CORRECT - Ajouter aux imports existants
import { FileText, Receipt, Brain, Calendar, Plus } from "lucide-react";

// ❌ JAMAIS dupliquer les imports
// import { FileText } from "lucide-react";
// import { Calendar } from "lucide-react";  // ← Fusion!
```

### 4. Styling avec Tailwind
```typescript
// ✅ Tailwind uniquement
className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"

// ❌ Pas de CSS inline ou style={}
style={{ color: "red" }}  // Ne pas faire ça
<style>{`...`}</style>    // Ne pas faire ça
```

### 5. Couleurs (palette Navy Premium)
```css
--primary: hsl(214 80% 18%)         /* Navy profond */
--primary-glow: hsl(217 75% 40%)    /* Navy lumineux */
--accent: hsl(217 75% 42%)          /* Bleu électrique */
--background: hsl(210 20% 98%)      /* Très clair */
--foreground: hsl(215 30% 10%)      /* Très foncé */
```

---

## 📝 **FICHIERS CRITIQUES & RÈGLES**

### ✅ TOUJOURS faire
```
1. Lire le fichier avant de le modifier
2. Vérifier que TypeScript compile : npm run build
3. Tester les changements localement
4. Utiliser MotionDiv pour animations
5. Optimiser SEO (title, description, canonical)
6. Supporter le mode sombre (dark class)
7. Responsive design (mobile-first)
8. Vérifier les images/placeholders
```

### ❌ JAMAIS faire
```
1. Changer le stack technique sans permission
2. Ajouter des librairies npm sans validation
3. Utiliser motion.div directement
4. Dupliquer les imports Lucide
5. Hardcoder des URLs (sauf APP_URL)
6. CSS inline ou <style> tags
7. Modifier les fichiers de config (vite.config.ts, etc.)
8. Commit sans tester le build
```

---

## 🚀 **PROCESSUS DE DÉPLOIEMENT**

### Local → VPS (4 étapes)

**1. Développer & tester**
```bash
npm run dev                    # Démarrer le dev server
npm run build                  # Vérifier le build
git add .
git commit -m "DESCRIPTION"
```

**2. Vérifier avant de pousser**
```bash
npm run build                  # ✅ Doit compiler sans erreurs
git log --oneline -5           # Vérifier les commits
```

**3. Déployer sur VPS**
```bash
scp -i ~/.ssh/odoc_vps_rsa -r dist/* root@151.80.144.236:/var/www/odoc/
```

**4. Vérifier que c'est live**
```bash
curl -I https://odocpilot.com  # Doit retourner HTTP/2 200
```

### Commandes utiles
```bash
# Voir les logs Nginx
ssh -i ~/.ssh/odoc_vps_rsa root@151.80.144.236 "tail -f /var/log/nginx/access.log"

# Redémarrer Nginx
ssh -i ~/.ssh/odoc_vps_rsa root@151.80.144.236 "systemctl restart nginx"

# Vérifier certificats SSL
ssh -i ~/.ssh/odoc_vps_rsa root@151.80.144.236 "certbot certificates"
```

---

## 📱 **PAGES CLÉS & LEURS RESPONSABILITÉS**

### HomePage.tsx
```
✅ Hero section : Tagline + CTA "Essayer gratuitement"
✅ Badge animé : "● Nouveau — OS d'entreprise IA"
✅ Section problème : 3 douleurs TPE/PME
✅ Section modules : 11 modules (grille 5 colonnes)
✅ Section "Pour qui" : 4 audiences (TPE, Comptables, Juridique, RH)
✅ Social proof : Trustpilot (placeholder pour maintenant)
✅ Pricing teaser : 4 plans
✅ CTA final : "Votre employé IA vous attend"
✅ Newsletter : Formulaire Supabase

Paramètre critique : APP_URL (pointe vers app.odocpilot.com)
```

### PricingPage.tsx
```
✅ Toggle mensuel/annuel
✅ 4 plans : Starter (gratuit), Essentiel (29€), Pro (79€), Entreprise (sur mesure)
✅ Tableau "Odoc vs les autres" (5 lignes + total)
✅ Garantie "Satisfait ou remboursé 30 jours"
✅ FAQ (6 questions)
✅ Trust badges

Règle : Pro plan = highlight (border + ring)
```

### FonctionnalitesPage.tsx
```
✅ 11 modules listés avec détails
✅ Navigation sticky (desktop)
✅ Alternance image/texte (grid 2 colonnes)
✅ Benefits points pour chaque module
✅ CTA final : "Essayer gratuitement"

Modules : Documents, Factures, Brain, Analytics, Équipe, RH, Projets, 
          Messagerie, Portail Fournisseur, Smart Connectors, Calendrier
```

### BlogPage.tsx & BlogPostPage.tsx
```
✅ Récupère posts depuis Supabase (blog_posts table)
✅ Listing avec cards (image, titre, excerpt, date)
✅ Page article : Markdown rendu, SEO optimisé
✅ Navigation prev/next

Supabase table: blog_posts (id, title, slug, content, excerpt, published_at, cover_image)
```

---

## 🔧 **TÂCHES COURANTES**

### Ajouter un nouveau module
```typescript
// 1. Importer l'icône Lucide
import { NewIcon } from "lucide-react";

// 2. Ajouter au tableau modules[] dans FonctionnalitesPage.tsx
{
  id: "id-unique",
  icon: NewIcon,
  title: "Titre Module",
  description: "Description...",
  benefits: ["Benefit 1", "Benefit 2", ...],
  screenshotLabel: "Aperçu — Module"
}

// 3. Ajouter aussi dans HomePage.tsx tools[] avec emoji
{ icon: NewIcon, emoji: "🆕", title: "Titre", description: "..." }

// 4. Commit & redéployer
```

### Mettre à jour les pricing
```typescript
// Dans PricingPage.tsx, modifie le tableau plans[]
{
  name: "Plan Name",
  badge: "Badge text",
  monthlyPrice: 99,
  annualPrice: 79,  // 20% moins cher
  features: [...],
  ...
}
```

### Ajouter un article blog
```
1. Créer dans Supabase table blog_posts :
   - title: "Titre Article"
   - slug: "titre-article"
   - content: "Markdown content..."
   - excerpt: "Courte description"
   - cover_image: "https://..."
   - published_at: NOW()

2. Article apparaît auto sur BlogPage
3. Accessible sur /blog/titre-article
```

### Ajouter une nouvelle page
```
1. Créer /src/pages/NewPage.tsx
2. Importer dans App.tsx routes
3. Ajouter SEOHead avec title + description
4. Ajouter lien dans SiteHeader navLinks (si navigation principale)
5. Commit & redéployer
```

---

## 🎯 **CHECKLIST AVANT CHAQUE COMMIT**

```
□ Code lu avant modification
□ npm run build réussi sans erreurs
□ TypeScript strictement validé
□ MotionDiv utilisé (jamais motion.div)
□ APP_URL = app.odocpilot.com
□ SEO Head présent sur nouvelles pages
□ Responsive testée (mobile/desktop)
□ CTAs pointent vers app.odocpilot.com
□ Pas de hardcoding d'URLs
□ Pas d'import Lucide dupliqué
□ Images optimisées (placeholders OK pour MVP)
□ Git message clair & descriptif
```

---

## 📊 **COMMIT MESSAGE TEMPLATE**

```
TYPE: Courte description (max 60 chars)

Description détaillée (optionnel) :
- Point 1
- Point 2
- Impact/Raison

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

**Types acceptés:**
- `FEATURE:` Nouvelle fonctionnalité
- `FIX:` Correction de bug
- `UPGRADE:` Amélioration/refactor majeur
- `DOCS:` Documentation
- `STYLE:` Changements esthétiques/design

---

## 💡 **RAPPELS IMPORTANTS**

### Le site marketing (odocpilot.com)
- ✅ Donne envie d'essayer
- ✅ Explique la valeur (OS d'entreprise)
- ✅ Rassure sur la sécurité (France, RGPD, etc.)
- ✅ Dirige vers le SaaS pour signup/login
- ✅ Premium, moderne, next-gen

### Le SaaS (app.odocpilot.com)
- ✅ Dashboard & modules
- ✅ Signup/Login
- ✅ Gestion utilisateurs
- ⚠️ À développer selon roadmap

### Le Blog (dans la landing)
- ✅ Articles Supabase-driven
- ✅ Conseils IA, études de cas
- ✅ SEO + newsletter
- ✅ Renforce l'autorité

---

## 🤝 **QUESTIONS? BESOIN D'AIDE?**

**Avant de coder:**
1. Lire ce CLAUDE.md
2. Vérifier le code existant dans les pages similaires
3. Tester localement : `npm run dev`

**En cas de doute:**
- ✅ Utiliser MotionDiv pour animations
- ✅ Importer icônes Lucide correctement
- ✅ Vérifier APP_URL = app.odocpilot.com
- ✅ Toujours inclure SEOHead sur les pages

**Déploiement:**
```bash
npm run build && \
scp -i ~/.ssh/odoc_vps_rsa -r dist/* root@151.80.144.236:/var/www/odoc/
```

---

**Dernière mise à jour:** 2026-04-07
**Version:** 1.1 (Landing + Blog + SaaS intégration)
**Status:** 🟢 En production
