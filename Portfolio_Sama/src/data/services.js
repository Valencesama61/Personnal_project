import { reactive } from 'vue';

export const servicesData = reactive({
    // Section metadata
    sectionTitle: "Services",
    subtitle: "CE QUE JE PEUX FAIRE POUR VOUS",

    // Services list
    services: [
        {
            id: 1,
            icon: "code",
            title: "Développement Web & Mobile",
            description: "Création d'applications web et mobiles modernes et performantes avec les dernières technologies (Vue.js, React, React Native, Node.js). Des interfaces utilisateur intuitives, responsive et adaptées à tous les supports."
        },
        {
            id: 2,
            icon: "mobile",
            title: "Responsive Design",
            description: "Conception d'interfaces adaptatives qui s'affichent parfaitement sur tous les appareils : mobile, tablette et desktop. Expérience utilisateur optimale."
        },
        {
            id: 3,
            icon: "api",
            title: "API & Backend",
            description: "Développement d'API REST robustes et sécurisées. Intégration de bases de données et gestion complète du backend de vos applications."
        },
        {
            id: 4,
            icon: "design",
            title: "UI/UX Design",
            description: "Création d'interfaces élégantes et modernes avec une attention particulière à l'expérience utilisateur. Design system et prototypage avec Figma."
        },
        {
            id: 5,
            icon: "optimization",
            title: "Optimisation & Performance",
            description: "Amélioration des performances de vos applications web. Optimisation du code, du temps de chargement et du référencement SEO."
        },
        {
            id: 6,
            icon: "maintenance",
            title: "Maintenance & Support",
            description: "Maintenance continue de vos projets web. Corrections de bugs, mises à jour de sécurité et évolutions fonctionnelles."
        }
    ]
});
