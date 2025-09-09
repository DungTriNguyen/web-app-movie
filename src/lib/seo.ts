import { SeoOnPage } from "@/types/common";
import { getMovieHomeService } from "@/services/home/home-service";
import type { ResolvingMetadata, Metadata } from "next";
import { NEXT_PUBLIC_BASE_URL } from "@/configs/env";
export async function generateSeoMetadata(
  options: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  let seoData: Partial<SeoOnPage> = {};
  try {
    const blogData = await getMovieHomeService({});
    seoData = blogData.data?.data?.seoOnPage as Partial<SeoOnPage>;
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
  }
  return {
    title: seoData.titleHead || parentMetadata.title,
    description: seoData.descriptionHead || parentMetadata.description,
    keywords: seoData.og_Type || parentMetadata.keywords || undefined,
    alternates: {
      canonical:
        `${NEXT_PUBLIC_BASE_URL}${seoData.titleHead}` ||
        parentMetadata?.alternates?.canonical,
    },
    openGraph: {
      images:
        seoData.og_Image?.map((img: string) => ({ url: img })) ||
        parentMetadata.openGraph?.images,
    },
  };
}
