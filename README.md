# Mathis Maximin — Portfolio

Portfolio personnel de **Mathis Maximin**, développeur Full-Stack TypeScript/Node.js & DevSecOps.
Site moderne, sombre et responsive construit avec React, TypeScript, Tailwind CSS et Vite.

## Fonctionnalités

- 🌐 Bilingue (Français / Anglais) via React Context
- 🌑 Design dark moderne : glassmorphism, dégradés cyan/violet, grille lumineuse
- ⌨️ Hero avec effet machine à écrire cyclant sur plusieurs rôles
- 🎞️ Animations de révélation au scroll (Intersection Observer)
- 📱 Entièrement responsive
- 🎮 Easter egg Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
- 🚀 Build optimisé avec Vite

## Sections

- **Hero** — accroche, rôles animés, disponibilité, liens sociaux
- **À propos** — pitch + statistiques clés
- **Expériences** — timeline (Cleo Care / Saint-Martin-d'Hères, Kenko, ESIEA)
- **Réalisations** — projets phares (Kenko, app commerçants Flutter, Cleo Care)
- **Compétences** — stack technique groupée + certifications
- **Contact** — email, téléphone, localisation, langues

## Lancer le projet

```bash
yarn install     # ou npm install
yarn dev         # http://localhost:5173
yarn build       # build de production dans dist/
yarn preview     # prévisualiser le build
```

## Personnalisation

Tout le contenu (FR & EN) est centralisé dans **`src/i18n/content.ts`** :
expériences, projets, compétences, certifications, coordonnées.
La palette et les animations se règlent dans `tailwind.config.js` et `src/index.css`.

## Stack technique

React 18 · TypeScript · Tailwind CSS · Vite · Font Awesome · Intersection Observer API

## Licence

MIT
