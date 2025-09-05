import ArticleSection from "@/components/Articles/ArticleSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Academy - Dex Space",
  description: "Stay updated with the latest articles and insights from Dex Space.",
  openGraph: {
    title: "Academy - Dex Space",
    description: "Stay updated with the latest articles and insights from Dex Space.",
    url: "https://dexspace.io/academy",
    siteName: "Dex Space",
    images: [
      {
        url: "https://dexspace.io/images/ready.jpeg",
        width: 1200,
        height: 630,
        alt: "Dex Space Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};
export default function ArticlesPage() {

  return (
    <section className="w-full pt-[100px] md:pt-30">
      <ArticleSection />
    </section>
  );
}
