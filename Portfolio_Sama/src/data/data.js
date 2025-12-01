import { reactive } from 'vue';

export const data = reactive({
    navigation: [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' }
    ],
    hero: {
        title: "Hi, Je suis Valence ODOUNBOUROU",
        subtitle: "Développeur web Full Stack",
        description: "Je conçois des solutions web ou mobile modern.",
        cta: "Télécharger mon CV",
        cvPath: "/cv/valence_odounbourou_développeur_fullstack.pdf",
        image: "images/heroImage.png"
    },
    about: {
        title: "About Me",
        description: "I am a passionate developer with expertise in building modern web applications. I love creating beautiful, functional, and user-friendly experiences.",
        image: "/images/profile.png",
        highlights: [
            "2+ years of experience",
            "Full-stack development",
            "UI/UX focused",
            "Problem solver"
        ]
    },
    skills: [
        { name: "Vue.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 85 }
    ],
    projects: [
        {
            title: "Project 1",
            description: "A cool project.",
            image: "https://via.placeholder.com/300",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Another cool project.",
            image: "https://via.placeholder.com/300",
            link: "#"
        }
    ],
    services: [
        {
            title: "Web Development",
            description: "Building responsive websites."
        }
    ],
    contact: {
        email: "valence.odounbourou@epitech.eu",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    footer: {
        text: "© 2025 Valence Sama. Tous droits reservés."
    }
});
