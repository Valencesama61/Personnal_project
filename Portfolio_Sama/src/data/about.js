import { reactive } from 'vue';

export const aboutData = reactive({
    // Section metadata
    sectionTitle: "À propos",
    subtitle: "QUI SUIS-JE ?",
    heading: "Passionné par le code et le design",

    // Image
    image: "/images/heroImage.png",
    imageAlt: "Photo de profil",

    // Description paragraphs
    paragraphs: [
        "Je suis passionné par la création d'expériences web ou mobile modernes et intuitives. Mon approche combine expertise technique et sensibilité design pour créer des solutions qui font la différence.",
        "Chaque projet est une opportunité d'apprendre, d'innover et de repousser les limites du possible. Je crois en l'importance du détail et de la qualité dans tout ce que je crée."
    ],

    // Statistics
    stats: [
        {
            number: "03+",
            label: "Années d'expérience"
        },
        {
            number: "07+",
            label: "Projets complétés"
        }
    ]
});
