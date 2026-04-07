# 🚀 Odoc — OS d'entreprise IA pour TPE/PME

**Landing page premium + Blog + SaaS intégration**

[![Status](https://img.shields.io/badge/status-LIVE-brightgreen)](https://odocpilot.com)
[![License](https://img.shields.io/badge/license-Proprietary-red)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0-blue)](WORK_LOG.md)

---

## 📍 **PROJET ODOC — Vue d'ensemble**

### Ce que c'est
**Odoc** est un OS d'entreprise next-gen qui centralise tous les outils éparpillés (Drive, Notion, Slack, Pennylane, etc.) dans un seul copilot IA intelligent.

- **Landing page:** https://odocpilot.com (ce repo)
- **SaaS app:** https://app.odocpilot.com (repo odoc-pulse)
- **API:** https://api.odocpilot.com

### Tagline
```
"Odoc. Votre employé IA. 24h/24."
```

---

## 🏗️ **STACK TECHNIQUE**

| Component | Technology |
|-----------|-----------|
| Frontend | React 18 + TypeScript |
| Build | Vite 5.4 |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion 12+ |
| SEO | react-helmet-async 3.0 |
| Backend (Blog) | Supabase v2.99 |
| Deployment | Nginx + Let's Encrypt |
| Font | Plus Jakarta Sans |

---

## 🚀 **DÉMARRAGE RAPIDE**

```bash
# 1. Cloner
git clone https://github.com/LogixSolutions94/odoc-insights-hub.git
cd odoc-insights-hub

# 2. Installer
npm install

# 3. LIRE CETTE DOC (IMPORTANT!)
cat CLAUDE.md

# 4. Développer
npm run dev                   # http://localhost:5173

# 5. Tester
npm run build                 # Doit compiler sans erreurs

# 6. Déployer
scp -i ~/.ssh/odoc_vps_rsa -r dist/* root@151.80.144.236:/var/www/odoc/
```

---

## 📚 **DOCUMENTATION**

| Document | Purpose |
|----------|---------|
| **[CLAUDE.md](CLAUDE.md)** | ⭐ LIRE EN PREMIER — Contexte + Règles + Architecture |
| **[DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)** | How-to pratique + Troubleshooting |
| **[WORK_LOG.md](WORK_LOG.md)** | Historique sessions + commits détaillés |
| **[SESSION_TEMPLATE.md](SESSION_TEMPLATE.md)** | Template pour documenter nouveau travail |

---

## 🌐 **PAGES PRINCIPALES**

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing hero + 11 modules + pricing |
| Pricing | `/pricing` | 4 plans + comparatif + FAQ |
| Fonctionnalités | `/fonctionnalites` | Détails 11 modules |
| Blog | `/blog` | Articles (Supabase-driven) |
| À propos | `/a-propos` | Mission + valeurs |

---

## ✨ **CARACTÉRISTIQUES**

- ✅ Landing premium "Odoc, l'OS de votre entreprise"
- ✅ 11 modules détaillés
- ✅ Pricing 4 plans (Starter gratuit → Entreprise)
- ✅ Tableau comparatif vs outils séparés
- ✅ Garantie 30j remboursé
- ✅ Blog Supabase-driven
- ✅ Newsletter intégrée
- ✅ SEO optimisé
- ✅ Responsive (mobile-first)
- ✅ Animations Framer Motion

---

## 📂 **STRUCTURE PROJET**

```
src/
├── pages/
│   ├── HomePage.tsx           ← Landing hero
│   ├── PricingPage.tsx        ← Pricing plans
│   ├── FonctionnalitesPage.tsx ← 11 modules
│   ├── BlogPage.tsx           ← Blog listing
│   ├── BlogPostPage.tsx       ← Article
│   └── ...autres pages
├── components/
│   ├── SiteHeader.tsx         ← Navigation
│   ├── MotionDiv.tsx          ← Animations
│   ├── SEOHead.tsx            ← SEO
│   └── /ui/                   ← shadcn/ui
├── integrations/supabase/
├── App.tsx                    ← Routes
└── index.css                  ← Thème
```

---

## 🔐 **DÉPLOIEMENT**

### VPS (OVH)
```
Host: 151.80.144.236
SSH: ssh -i ~/.ssh/odoc_vps_rsa root@151.80.144.236
Root: /var/www/odoc/
```

### SSL/TLS
```
Provider: Let's Encrypt
Domains: 7 (odocpilot.com + subdomains)
Expires: 2026-07-06 (auto-renew)
```

### Deploy
```bash
npm run build
scp -i ~/.ssh/odoc_vps_rsa -r dist/* root@151.80.144.236:/var/www/odoc/
curl -I https://odocpilot.com  # Vérifier HTTP/2 200
```

---

## ⚙️ **CONVENTIONS**

### TypeScript
```typescript
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odocpilot.com";
```

### Animations
```typescript
<MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Content
</MotionDiv>
```

### Styling
```tsx
className="bg-primary text-white hover:bg-primary/90"
```

Voir **CLAUDE.md** pour toutes les règles!

---

## 📊 **STATISTIQUES**

```
Commits: 3+ (892d240, 2467fd0, ...)
Pages: 8+
Modules: 11
Plans pricing: 4
Build time: 12-16s
Uptime: 99.9%+
```

---

## 🐛 **ISSUES**

### ✅ Résolus
- URLs app.odoc.fr → app.odocpilot.com
- Nginx reverse proxy
- SSL 7 domaines

### 🔄 En cours
- Stripe integration
- Sentry monitoring
- PostHog analytics

Voir [WORK_LOG.md](WORK_LOG.md) pour plus.

---

## 🤝 **CONTRIBUER**

1. **Lire** [CLAUDE.md](CLAUDE.md) (contexte + règles)
2. **Lire** [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) (how-to)
3. **Développer**: `npm run dev`
4. **Tester**: `npm run build`
5. **Commit**: `git commit -m "TYPE: Description"`
6. **Documenter** dans [WORK_LOG.md](WORK_LOG.md)
7. **Déployer**: `scp dist/* VPS:/var/www/odoc/`

---

## 📞 **HELP**

- **Questions?** → [CLAUDE.md](CLAUDE.md)
- **How-to?** → [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
- **Historique?** → [WORK_LOG.md](WORK_LOG.md)

---

**Status:** 🟢 LIVE  
**Updated:** 2026-04-07  
**Maintainer:** LogixSolutions94
