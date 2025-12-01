/**
 * Global Theme System
 * 
 * This file defines the design system tokens and utilities for the portfolio.
 * All components should reference these values for consistency.
 */

export const theme = {
    // Color Palette
    colors: {
        primary: '#6C4DFF',        // Main violet color
        primaryLight: '#A78BFA',   // Lighter violet for hover states
        primaryDark: '#5B21B6',    // Darker violet for active states

        // Backgrounds
        bgLight: '#FFFFFF',
        bgDark: '#0D0D0F',
        bgLightSecondary: '#F9FAFB',
        bgDarkSecondary: '#1A1A1D',

        // Text colors
        textLight: '#0F0F0F',
        textDark: '#F5F5F5',
        textLightSecondary: '#6B7280',
        textDarkSecondary: '#D1D5DB',
    },

    // Typography
    typography: {
        fontFamily: {
            primary: 'Inter, system-ui, sans-serif',
        },
        sizes: {
            h1: 'text-5xl sm:text-6xl lg:text-7xl',
            h2: 'text-4xl sm:text-5xl',
            h3: 'text-3xl sm:text-4xl',
            h4: 'text-2xl sm:text-3xl',
            body: 'text-base sm:text-lg',
            small: 'text-sm',
        },
        weights: {
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
        }
    },

    // Spacing
    spacing: {
        section: 'py-20 lg:py-28',
        container: 'container mx-auto px-4 sm:px-6 lg:px-8',
        maxWidth: 'max-w-7xl mx-auto',
    },

    // Components
    components: {
        button: {
            primary: 'px-6 py-3 rounded-xl font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200',
            secondary: 'px-6 py-3 rounded-xl font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200',
            ghost: 'px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200',
        },
        card: {
            default: 'bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700',
            hover: 'hover:shadow-xl hover:scale-105 transition-all duration-300',
        }
    },

    // Utility Classes Reference
    utilities: {
        // Text colors
        textPrimary: 'text-gray-900 dark:text-gray-100',
        textSecondary: 'text-gray-600 dark:text-gray-300',
        textMuted: 'text-gray-500 dark:text-gray-400',
        textAccent: 'text-primary-600 dark:text-primary-400',

        // Backgrounds
        bgPrimary: 'bg-white dark:bg-gray-900',
        bgSecondary: 'bg-gray-50 dark:bg-gray-800',
        bgCard: 'bg-white dark:bg-gray-800',

        // Borders
        border: 'border-gray-300 dark:border-gray-700',
        borderLight: 'border-gray-200 dark:border-gray-800',
    }
};

/**
 * Design Guidelines
 * 
 * 1. COLOR USAGE:
 *    - Use primary violet (#6C4DFF) for:
 *      * Call-to-action buttons
 *      * Important highlights and statistics
 *      * Accent elements and icons
 *      * Hover states on interactive elements
 * 
 * 2. TYPOGRAPHY:
 *    - All headings should use font-bold or font-extrabold
 *    - Body text should use text-base or text-lg
 *    - Maintain consistent line-height (leading-relaxed for body text)
 * 
 * 3. SPACING:
 *    - Sections: py-20 or py-28 for vertical padding
 *    - Cards/Components: p-6 or p-8 for internal padding
 *    - Grid gaps: gap-6, gap-8, or gap-12 depending on density
 * 
 * 4. DARK MODE:
 *    - Always provide dark mode variants using dark: prefix
 *    - Test both light and dark modes for readability
 *    - Use appropriate contrast ratios (WCAG AA minimum)
 * 
 * 5. BUTTONS:
 *    - Primary actions: bg-primary-600 with white text
 *    - Secondary actions: border with primary color
 *    - All buttons should have rounded-xl corners
 *    - Include hover states with smooth transitions
 * 
 * 6. ANIMATIONS:
 *    - Use Motion One for scroll-triggered animations
 *    - Keep animations subtle (0.3s - 0.8s duration)
 *    - Use ease-out easing for natural feel
 *    - Stagger animations for multiple elements (0.1s - 0.2s delay)
 */

export default theme;
