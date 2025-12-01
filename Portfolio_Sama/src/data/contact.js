import { reactive } from 'vue';

export const contactData = reactive({
    // Section metadata
    sectionTitle: "Contact",
    subtitle: "DISCUTONS DE VOTRE PROJET",

    // Contact information
    contactInfo: {
        email: "valence.odounbourou@epitech.eu",
        phone: "+229 01 61405056",
        location: "Cotonou, Bénin"
    },

    // Form configuration
    form: {
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message...",
        submitButton: "Envoyer le message",
        sendingButton: "Envoi en cours...",
        successMessage: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer."
    },

    // EmailJS configuration (à configurer avec vos propres clés)
    emailJS: {
        serviceId: "YOUR_SERVICE_ID",
        templateId: "YOUR_TEMPLATE_ID",
        publicKey: "YOUR_PUBLIC_KEY"
    }
});
