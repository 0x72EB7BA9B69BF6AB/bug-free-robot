export const translations = {
  en: {
    welcome: "Welcome to Harmony TV - Your Gateway to Live Television Streaming",
    selectLanguage: "Select Your Language",
    languageAvailability: "Only English and French are currently available",
    termsOfService: "Terms of Service",
    importantNotice: "Important Notice",
    termsIntro: "By using Harmony TV, you acknowledge and agree that:",
    terms: [
      "You have valid subscriptions for all television channels available on this platform",
      "You are solely responsible for ensuring your access rights to the content",
      "In case of any legal issues or disputes, the responsibility lies entirely with you",
      "Harmony TV serves as a streaming platform and does not provide content licenses",
      "You must comply with all applicable copyright and broadcasting laws in your jurisdiction"
    ],
    termsConfirmation: "By clicking \"I Accept\", you confirm that you understand and agree to these terms.",
    accept: "I Accept",
    goBack: "Go Back",
    english: "English",
    french: "Français"
  },
  fr: {
    welcome: "Bienvenue sur Harmony TV - Votre Passerelle vers la Télévision en Direct",
    selectLanguage: "Sélectionnez votre langue",
    languageAvailability: "Seuls l'anglais et le français sont actuellement disponibles",
    termsOfService: "Conditions d'utilisation",
    importantNotice: "Avis important",
    termsIntro: "En utilisant Harmony TV, vous reconnaissez et acceptez que :",
    terms: [
      "Vous disposez d'abonnements valides pour toutes les chaînes de télévision disponibles sur cette plateforme",
      "Vous êtes seul responsable de vous assurer de vos droits d'accès au contenu",
      "En cas de problèmes juridiques ou de litiges, la responsabilité vous incombe entièrement",
      "Harmony TV sert de plateforme de streaming et ne fournit pas de licences de contenu",
      "Vous devez vous conformer à toutes les lois applicables sur le droit d'auteur et la radiodiffusion dans votre juridiction"
    ],
    termsConfirmation: "En cliquant sur \"J'accepte\", vous confirmez que vous comprenez et acceptez ces conditions.",
    accept: "J'accepte",
    goBack: "Retour",
    english: "English",
    french: "Français"
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en