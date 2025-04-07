export type Language = 'de' | 'en' | 'fr' | 'es' | 'it' | 'nl' | 'pl' | 'pt' | 'ru' | 'tr'

export const languages: Record<Language, { name: string; flag: string }> = {
  de: {
    name: 'Deutsch',
    flag: '🇩🇪'
  },
  en: {
    name: 'English',
    flag: '🇬🇧'
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸'
  },
  it: {
    name: 'Italiano',
    flag: '🇮🇹'
  },
  nl: {
    name: 'Nederlands',
    flag: '🇳🇱'
  },
  pl: {
    name: 'Polski',
    flag: '🇵🇱'
  },
  pt: {
    name: 'Português',
    flag: '🇵🇹'
  },
  ru: {
    name: 'Русский',
    flag: '🇷🇺'
  },
  tr: {
    name: 'Türkçe',
    flag: '🇹🇷'
  }
} 