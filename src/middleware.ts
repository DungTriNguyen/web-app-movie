import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';

export function middleware(request: any) {
    const { pathname } = request.nextUrl;
    const hasLocale = routing.locales.some(locale => pathname.startsWith(`/${locale}`));
    if (!hasLocale) {
        const acceptLang = request.headers.get('accept-language');
        const browserLocale = acceptLang.split(",")[0].split("-")[0];
        const locale = routing.locales.includes(browserLocale) ? browserLocale : routing.defaultLocale;
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }
    return NextResponse.next();
}
export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};