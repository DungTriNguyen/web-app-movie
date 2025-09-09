import { ReactNode } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Providers from "../../configs/provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Common/header";
import Footer from "@/components/Common/footer";
import { NEXT_PUBLIC_BASE_URL } from "@/configs/env";
import DATA_SEO_DEFAULT from "@/constants/data-seo-default";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const locales = ["en", "vi", "de", "es", "fr", "jp", "kr", "ru", "zh"];

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const baseUrl = NEXT_PUBLIC_BASE_URL;
const openGraphImages = DATA_SEO_DEFAULT.openGraph.images.map((img) => ({
  ...img,
  url: img.url.startsWith("https") ? img.url : `${baseUrl}${img.url}`,
}));
const twitterImages = DATA_SEO_DEFAULT.twitter.images.map((img) =>
  img.startsWith("https") ? img : `${baseUrl}${img}`
);

export const metadata: Metadata = {
  title: {
    default: DATA_SEO_DEFAULT.title.default,
    template: DATA_SEO_DEFAULT.title.template,
  },
  description: DATA_SEO_DEFAULT.description,
  keywords: DATA_SEO_DEFAULT.keywords,
  alternates: {
    canonical:
      `${NEXT_PUBLIC_BASE_URL}` || DATA_SEO_DEFAULT.alternates.canonical,
  },
  openGraph: {
    ...DATA_SEO_DEFAULT.openGraph,
    images: openGraphImages,
    url: `${NEXT_PUBLIC_BASE_URL}` || DATA_SEO_DEFAULT.openGraph.url,
  },
  twitter: {
    ...DATA_SEO_DEFAULT.twitter,
    images: twitterImages,
  },
  robots: DATA_SEO_DEFAULT.robots,
  icons: DATA_SEO_DEFAULT.icons,
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased overflow-x-hidden`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <main className="min-h-screen w-full">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
