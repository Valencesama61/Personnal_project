#  Portfolio Sama

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.5.24-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Motion One](https://img.shields.io/badge/Motion_One-12.23.24-FF6B6B?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Portfolio moderne et élégant construit avec Vue.js 3, Tailwind CSS et Motion One**

[ Demo Live](https://sama.agence-fastlane.com) • [📧 Contact](mailto:valence.odounbourou@epitech.eu)

</div>

---

## Caractéristiques

- **Design Premium** - Interface moderne avec glassmorphisme et animations fluides
- **Mode Sombre/Clair** - Thème adaptatif avec persistance localStorage
- **Responsive** - Optimisé pour tous les appareils (mobile-first)
- **Performance** - Build optimisé avec Vite pour un chargement ultra-rapide
- **Animations** - Transitions et animations élégantes avec Motion One
- **SEO Optimisé** - Meta tags et structure sémantique
- **Modulaire** - Architecture basée sur des composants réutilisables
- **Data-Driven** - Contenu facilement modifiable via fichiers de données

---

## Structure du Projet

```
Portfolio_Sama/
├── public/
│   └── images/              # Images et assets statiques
├── src/
│   ├── components/          # Composants Vue.js
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ContactSection.vue
│   │   ├── NavBar.vue
│   │   └── Footer.vue
│   ├── data/                # Fichiers de données
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── contact.js
│   ├── utils/               # Utilitaires
│   │   └── theme.js
│   ├── App.vue              # Composant principal
│   ├── main.js              # Point d'entrée
│   └── style.css            # Styles globaux
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Technologies Utilisées

| Technologie | Description |
|------------|-------------|
| **Vue.js 3** | Framework JavaScript progressif avec Composition API |
| **Tailwind CSS** | Framework CSS utility-first pour un design rapide |
| **Motion One** | Bibliothèque d'animation performante et légère |
| **Vite** | Build tool ultra-rapide pour le développement moderne |
| **PostCSS** | Outil de transformation CSS |

---

## Installation et Démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Valencesama61/Personnal_project.git

# Naviguer dans le dossier
cd Portfolio_Sama

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## Personnalisation

### Modifier le Contenu

Tous les contenus sont centralisés dans le dossier `src/data/`. Modifiez simplement les fichiers correspondants :

- **`hero.js`** - Section d'accueil
- **`about.js`** - Section à propos
- **`skills.js`** - Compétences techniques
- **`projects.js`** - Portfolio de projets
- **`services.js`** - Services proposés
- **`contact.js`** - Informations de contact

**Exemple** - Ajouter un nouveau projet dans `src/data/projects.js` :

```javascript
{
    id: 6,
    name: "Mon Nouveau Projet",
    image: "../../public/images/mon-projet.png",
    description: "Description du projet",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    codeLink: "https://github.com/username/projet",
    demoLink: "https://demo.com"
}
```

### Personnaliser le Thème

Les couleurs et le design sont configurables dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',    // Violet principal
      secondary: '#EC4899',  // Rose secondaire
      // Ajoutez vos couleurs personnalisées
    }
  }
}
```

---

## Sections du Portfolio

| Section | Description |
|---------|-------------|
| **Hero** | Présentation principale avec CTA |
| **About** | Présentation personnelle et parcours |
| **Skills** | Compétences techniques organisées par catégories |
| **Projects** | Showcase de projets avec liens démo et code |
| **Services** | Services proposés avec cartes glassmorphiques |
| **Contact** | Formulaire de contact et informations |
| **Footer** | Liens sociaux et copyright |

---

## Projets Présentés

- **TrustR** - Plateforme d'appréciation de produits digitaux (Vue.js, Laravel, MySQL)
- **Rotten Movies** - Application de présentation de films et séries (Next.js, Tailwind, MongoDB)
- **LINTRA** - Dashboard de centralisation de statistiques (Nest.js, React.js)
- **ShowTime** - Gestion de billeterie d'événements (Nest.js, Tailwind, EJS)
- **Rolexion** - E-commerce de bijoux de luxe (HTML5, CSS3, JavaScript)

---

## Optimisations

- Lazy loading des images
- Code splitting automatique avec Vite
- Minification CSS et JavaScript
- Animations optimisées avec Motion One
- Thème persistant avec localStorage
- Design mobile-first responsive

---

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## Contact

**Sama** - [@Valencesama61](https://github.com/Valencesama61)

🌐 **Site Web** : [sama.agence-fastlane.com](https://sama.agence-fastlane.com)

---

<div align="center">

Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !

Made with ❤️ and Vue.js

</div>
