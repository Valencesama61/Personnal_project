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
            image: "../assets/images/trust.png",
            description: "Une plateforme d'appréciation des produits digitaux pour aider dans la prise de décision d'achat.",
            tags: ["Vue.js", "Laravel", "Mysql"],
            codeLink: "https://github.com/username/ecommerce",
            demoLink: "https://demo-ecommerce.com"
        },
        {
            id: 2,
            name: "Rotten Movies",
            image: "https://via.placeholder.com/600x400/FFE5D5/FF8C4D?text=Task+Manager",
            description: "Application de gestion de tâches avec drag & drop, notifications et collaboration.",
            tags: ["React", "Firebase", "Tailwind"],
            codeLink: "https://github.com/username/task-manager",
            demoLink: "https://demo-tasks.com"
        },
        {
            id: 3,
            name: "Weather Dashboard",
            image: "https://via.placeholder.com/600x400/D5F5FF/4D9FFF?text=Weather+App",
            description: "Dashboard météo avec prévisions, cartes interactives et alertes personnalisées.",
            tags: ["JavaScript", "API REST", "Chart.js"],
            codeLink: "https://github.com/username/weather-dashboard",
            demoLink: "https://demo-weather.com"
        },
        {
            id: 4,
            name: "Portfolio Builder",
            image: "https://via.placeholder.com/600x400/FFD5E5/FF4D8C?text=Portfolio+Builder",
            description: "Créateur de portfolio en ligne avec templates personnalisables et export.",
            tags: ["Vue.js", "Tailwind", "Vite"],
            codeLink: "https://github.com/username/portfolio-builder",
            demoLink: "https://demo-portfolio.com"
        },
        {
            id: 5,
            name: "Social Media Dashboard",
            image: "https://via.placeholder.com/600x400/D5FFE5/4DFF8C?text=Social+Dashboard",
            description: "Dashboard analytique pour réseaux sociaux avec graphiques et statistiques.",
            tags: ["React", "D3.js", "Express"],
            codeLink: "https://github.com/username/social-dashboard",
            demoLink: "https://demo-social.com"
        },
        {
            id: 6,
            name: "Chat Application",
            image: "https://via.placeholder.com/600x400/FFF5D5/FFD54D?text=Chat+App",
            description: "Application de messagerie en temps réel avec rooms et partage de fichiers.",
            tags: ["Socket.io", "Node.js", "MongoDB"],
            codeLink: "https://github.com/username/chat-app",
            demoLink: "https://demo-chat.com"
        }
    ]
});
