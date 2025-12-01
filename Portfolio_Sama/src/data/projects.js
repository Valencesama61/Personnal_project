import { reactive } from 'vue';

export const projectsData = reactive({
    // Section metadata
    sectionTitle: "Projets",
    subtitle: "MES RÉALISATIONS",

    // Projects list - Add as many projects as you want here!
    projects: [
        {
            id: 1,
            name: "TrustR",
            image: "images/trust.png",
            description: "Une plateforme d'appréciation des produits digitaux pour aider dans la prise de décision d'achat.",
            tags: ["Vue.js", "Laravel", "Mysql"],
            codeLink: "https://github.com/username/ecommerce",
            demoLink: "https://sama.agence-fastlane.com"
        },
        {
            id: 2,
            name: "Rotten Movies",
            image: "images/Rotten_Movies.png",
            description: "Application de gestion de tâches avec drag & drop, notifications et collaboration.",
            tags: ["Next.js", "MongoDb", "Tailwind"],
            codeLink: "https://github.com/username/task-manager",
            demoLink: "https://test-gap-j4ks-qp3lejknz-valencesamas-projects.vercel.app/"
        },
        {
            id: 3,
            name: "LINTRA",
            image: "images/Lintra_1.png",
            description: "un dashboard qui vous permet de centraliser les statistiques de vos évènements de divers plateformes sur une seule interface.",
            tags: ["Nest.js", "React.js"],
            codeLink: "https://github.com/username/weather-dashboard",
            demoLink: "https://post-it.agence-fastlane.com"
        },
        {
            id: 4,
            name: "ShowTime",
            image: "https://via.placeholder.com/600x400/FFD5E5/FF4D8C?text=Portfolio+Builder",
            description: "Application web de gestion de billeterie d'évènement. Réservez vos ticket aux divers festivals et mettez en favoris vos groupes préférés.",
            tags: ["Nest.js", "MongoDb", "EJS"],
            codeLink: "https://github.com/username/portfolio-builder",
            demoLink: "https://demo-portfolio.com"
        },
        {
            id: 5,
            name: "Rolexion",
            image: "images/Rolexion.png",
            description: "Site Vitrine de présentation d'articles et bijoux de luxe. Consultez les meilleurs bijoux au meilleurs prix.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            codeLink: "https://github.com/username/social-dashboard",
            demoLink: "https://king-kakatsi.github.io/Rolexion"
        },
        
    ]
});
