import { reactive } from 'vue';

export const skillsData = reactive({
    // Section metadata
    sectionTitle: "Compétences",
    subtitle: "MON ARSENAL TECHNIQUE",

    // Skills categories
    categories: [
        {
            icon: "code",
            title: "Frontend",
            skills: [
                "HTML5 / CSS3",
                "JavaScript (ES6+)",
                "React / Vue",
                "Tailwind "
            ]
        },
        {
            icon: "database",
            title: "Backend",
            skills: [
                "Laravel",
                "Nest.js",
                "Next.js",
                "Flask",
                "SQL / NoSQL",
                "API REST"
            ]
        },
        {
            icon: "brush",
            title: "Design & Tools",
            skills: [
                "Figma",
                "Git / GitHub",
                "VS Code",
                "Responsive Design"
            ]
        }
    ]
});
