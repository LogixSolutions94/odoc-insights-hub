# Audit site marketing odocpilot.com — 1er mai 2026

**Score global : 72 / 100 — Verdict : BON**
Architecture solide et design cohérent, mais 5 bloquants pré-lancement à régler en moins d'une journée.

---

## 1. Score global & verdict

Le site est **techniquement bien fait** : routes complètes, SEOHead par page, JSON-LD, design cohérent, mobile nav OK, conventions CLAUDE.md respectées (MotionDiv, APP_URL).
Mais **trois familles de problèmes le bloquent en pré-lancement** :

1. **Liens & emails morts** (anciens domaines `odoc.fr` partout dans le footer, CGU, mentions, privacy)
2. **Mentions légales placeholder** (adresse `XXX, 750XX`)
3. **OG image absente** (`/og-image.png` n'existe pas → toutes les previews sociales cassées)

Plus deux risques marketing : l'`aggregateRating 4.8/12` dans le JSON-LD et la section Trustpilot 5 étoiles alors qu'aucun avis n'existe.

---

## 2. État de chaque page

| Page | Fichier | Statut | Score | Note |
|---|---|---|---|---|
| `/` | HomePage.tsx | COMPLÈTE | 8/10 | Trustpilot factice, import `motion` mort |
| `/fonctionnalites` | FonctionnalitesPage.tsx | COMPLÈTE | 8/10 | Visuels = placeholders |
| `/pricing` | PricingPage.tsx | COMPLÈTE | 8/10 | Comparatif incomplet, FAQ sans e-facture |
| `/blog` | BlogPage.tsx | OK code / contenu à confirmer | 6/10 | console.log en prod, lib/blog.ts a un TODO |
| `/blog/:slug` | BlogPostPage.tsx | COMPLÈTE | 8/10 | CTA inline → /pricing au lieu de auth |
| `/contact` | ContactPage.tsx | COMPLÈTE | 9/10 | Honeypot bien fait |
| `/a-propos` | AProposPage.tsx | COMPLÈTE | 7/10 | KPI marketing à substantiver |
| `/roadmap` | RoadmapPage.tsx | PARTIELLE | 6/10 | Incohérent : Calendrier/CRM listés "phase 2" mais déjà en prod |
| `/changelog` | ChangelogPage.tsx | PARTIELLE | 6/10 | Aucune entrée avril/mai 2026 |
| `/recrutement` | RecrutementPage.tsx | COMPLÈTE | 7/10 | Aucun poste affiché |
| `/e-facture` | EFacturePage.tsx | COMPLÈTE | 9/10 | Excellent SEO 2026, claim 98% à substantiver |
| `/mentions-legales` | MentionsLegalesPage.tsx | **PARTIELLE** | **3/10** | **Adresse placeholder XXX → bloquant légal** |
| `/cgu` | CguPage.tsx | PARTIELLE | 4/10 | Prix 29€ ≠ 49€ pricing, emails @odoc.fr |
| `/politique-confidentialite` | PolitiqueConfidentialitePage.tsx | PARTIELLE | 5/10 | Emails @odoc.fr |
| `*` | NotFound.tsx | COMPLÈTE | 8/10 | RAS |
| (orphelin) | **Index.tsx** | ORPHELIN | 0/10 | **Résidu Lovable « Welcome to Your Blank App » — à supprimer** |

---

## 3. Performance

- **Lazy-loading des pages : ABSENT.** App.tsx importe les 14 pages en static. Bundle initial inutilement gros.
- **Fontshare : pas de `preconnect`, pas de `preload`** → risque FOUT (`display=swap` est correct, déjà OK).
- **Dépendances probablement mortes** (à confirmer avec depcheck) : `lovable-tagger`, `input-otp`, `react-day-picker`, `vaul`, `embla-carousel-react`, `recharts`, `cmdk`. Plusieurs dizaines de KB chacun.
- **Lovable résiduel** : `lovable-tagger` dans devDependencies + `src/pages/Index.tsx` placeholder.
- **console.log en prod** : `ThemeToggle.tsx` (×2), `BlogPage.tsx` (×1).
- **Images** : avatar auteur dans BlogPostPage non `lazy`. Le reste OK.

---

## 4. SEO & copywriting

**Bon** :
- SEOHead utilisé sur 100% des pages avec canonical.
- 3 JSON-LD globaux + 2 spécifiques (Home, EFacture).
- Robots.txt + sitemap propres.
- EFacturePage = **page SEO premium**, riche en lois et mots-clés 2026.

**Manques** :
- **`og-image.png` et `og-default.png` ABSENTS de `/public`** alors que référencés. Toutes les previews sociales sont des images cassées.
- `aggregateRating 4.8 / 12 avis` dans JSON-LD `index.html` = INVENTÉ (zéro avis réel). Risque de pénalité Google + incohérence avec section Trustpilot vide.
- Sitemap : `/e-facture` manquant.
- Mots-clés sous-représentés : « gestion documentaire PME », « GED TPE France », « logiciel RH PME », « facturation obligatoire septembre 2026 » (formulation exacte).
- Twitter card image : ok dans SEOHead par page mais absente dans index.html.

---

## 5. Responsive & accessibilité

- Navigation mobile : drawer OK avec aria-label.
- Grids : tous correctement breakpointés.
- Tableau comparatif Pricing : `overflow-x-auto` OK.
- **Point à corriger** : HomePage h1 = `text-5xl lg:text-7xl` sans `sm:` → 48px sur 375px, tasse le hero. Ajouter `sm:text-5xl lg:text-7xl` et `text-4xl` mobile.
- Liens externes : `rel="noopener noreferrer"` systématiquement présent (audit grep OK).

---

## 6. Contenu 2026 — pages vides / liens morts

### Liens morts (Footer)
```
docs.odoc.fr     → docs.odocpilot.com
docs.odoc.fr/api → docs.odocpilot.com/api
status.odoc.fr   → status.odocpilot.com
```

### Emails @odoc.fr disséminés (à passer en @odocpilot.com)
- `MentionsLegalesPage.tsx` : contact@odoc.fr, privacy@odoc.fr
- `CguPage.tsx` : contact@odoc.fr (article 2)
- `PolitiqueConfidentialitePage.tsx` : privacy@odoc.fr (×3)

### Incohérences narratives
- **Roadmap dit Calendrier et CRM en « phase 2 »** mais ils sont vendus comme « en prod » sur Home, Fonctionnalités et Pricing.
- **CGU article 3 mentionne « 29€ »** alors que Pricing est à **49€** (Essential).
- **Mentions Légales** : adresse `XXX, 750XX Île-de-France` placeholder. **Privacy** mentionne « Le Plessis-Trévise » → divergence interne.
- **Changelog** : v1.0 daté février 2026, pas d'entrée avril/mai 2026 alors que le lancement marketing est aujourd'hui.

### Blog
`lib/blog.ts` a un TODO « Remplacer ce mock ». BlogPage charge depuis Supabase. Nombre d'articles en prod indéterminable depuis le code — à vérifier visuellement, idéalement 3-5 articles avant lancement pour éviter l'empty state.

---

## 7. Plan Haiku — par priorité

### CRITIQUE (avant lancement)
- **SITE-H-01** Footer : remplacer `docs.odoc.fr` et `status.odoc.fr` par les sous-domaines `.odocpilot.com` (5 min)
- **SITE-H-02** Mentions/CGU/Privacy : mass-replace `@odoc.fr` → `@odocpilot.com` (10 min)
- **SITE-H-03** CGU article 3 : `29 € HT` → `49 € HT`, `Essentiel` → `Essential` (5 min)
- **SITE-H-04** Générer et déposer `/public/og-image.png` + `/public/og-default.png` (1200×630) (30 min)
- **SITE-H-05** Supprimer `src/pages/Index.tsx` (résidu Lovable) (1 min)

### HAUTE
- **SITE-H-06** Supprimer `lovable-tagger` + audit deps mortes via depcheck (30 min)
- **SITE-H-07** Migrer pages non-Home vers `React.lazy` + Suspense (1 h)
- **SITE-H-08** `index.html` : ajouter `<link rel=preconnect>` Fontshare (5 min)
- **SITE-H-09** `index.html` : retirer le `aggregateRating 4.8/12` du JSON-LD tant que pas de vrais avis (2 min)
- **SITE-H-10** Sitemap : ajouter `/e-facture` (5 min)
- **SITE-H-11** RoadmapPage : aligner phase 2 avec la réalité (Calendrier/CRM déjà en prod) (20 min)
- **SITE-H-12** HomePage : retirer l'import `motion` ligne 3 (mort) (1 min)

### MOYENNE
- **SITE-H-13** Retirer console.log dans ThemeToggle et BlogPage (5 min)
- **SITE-H-14** PricingPage : ajouter Calendrier/Portail/Connectors au tableau + 1 FAQ e-facture (30 min)
- **SITE-H-15** HomePage : retravailler la section Trustpilot factice (10 min)
- **SITE-H-16** HomePage h1 : ajouter breakpoint mobile (5 min)
- **SITE-H-17** ChangelogPage : ajouter entrée v1.3 mai 2026 (10 min)

### BASSE
- **SITE-H-18** BlogPostPage CTA inline → `${APP_URL}/auth` (5 min)
- **SITE-H-19** Redirect `/tarifs` → `/pricing` (10 min)
- **SITE-H-20** `loading="lazy"` sur avatar auteur BlogPost (1 min)

**Total CRITIQUE+HAUTE estimé : ~3 h.**

---

## 8. Décisions humain / fondateur

| ID | Domaine | Décision | Urgence |
|---|---|---|---|
| BUS-01 | Légal | Fournir adresse réelle siège, RCS, SIRET, capital social Logix Solutions SASU | **AVANT LANCEMENT** |
| BUS-02 | Décision | Trancher emails : @odoc.fr legacy vs @odocpilot.com → créer boîtes + MX | **AVANT LANCEMENT** |
| BUS-03 | Contenu | Valider ou reformuler « +200 équipes actives » et « 1000 entreprises visées 2026 » | **AVANT LANCEMENT** |
| BUS-04 | Blog | Publier 3-5 articles avant lancement (e-facture, GED PME, Brain, étude de cas) | **AVANT LANCEMENT** |
| BUS-05 | Décision | Substantiver ou nuancer le claim « 98%+ de précision » EFacture | **AVANT LANCEMENT** |
| BUS-06 | Contenu | Produire 11 vrais screenshots modules pour Fonctionnalités | J+30 |
| BUS-07 | Décision | Activer Trustpilot et collecter 5-10 vrais avis | J+7 |
| BUS-08 | Copy | Section équipe/fondateur sur À propos avec photos | J+30 |
| BUS-09 | Décision | Statuer sur la roadmap PDP (« en préparation ») | J+7 |

---

**Conclusion :** le site est à ~3 heures de travail Haiku + 5 décisions fondateur d'un état lançable. Aucune refonte nécessaire, uniquement des corrections ponctuelles bloquantes.
