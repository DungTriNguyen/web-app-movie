import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'zh', 'es', 'fr', 'de', 'ru', 'jp', 'kr', 'vi'],

    // Used when no locale matches
    defaultLocale: 'en'
});