import translations from './locales';

export const DEFAULT_LOCALE = 'en';

export const getMessages = (locale: string): {} => translations[locale] || translations[DEFAULT_LOCALE];
