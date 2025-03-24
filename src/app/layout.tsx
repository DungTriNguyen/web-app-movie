import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DexSpace | The Next Dimension of Secure Crypto Trading",
  description: "DexSpace provides real-time market updates and secure crypto trading with advanced features for all traders.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
