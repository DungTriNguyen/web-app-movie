import { getBlog } from '@/services/blog'
import type { ResolvingMetadata, Metadata } from 'next'
import { NEXT_PUBLIC_BASE_URL } from '@/configs/env'
import { SeoData } from '@/types/seo'
export async function generateSeoMetadata(id: string, parent: ResolvingMetadata): Promise<Metadata> {
    const parentMetadata = await parent
    console.log('Parent Metadata:', parentMetadata)
    let seoData: Partial<SeoData> = {}
    try {
        const blogData = await getBlog({ customId: id })
        seoData = blogData.data as Partial<SeoData>
    } catch (error) {
        console.error('Error fetching SEO metadata:', error)
    }
    return {
        title: seoData.metaTitle || parentMetadata.title,
        description: seoData.metaDescription || parentMetadata.description,
        keywords: seoData.metaKeywords || parentMetadata.keywords || undefined,
        alternates: {
            canonical: seoData.metaCanonical
                ? `${NEXT_PUBLIC_BASE_URL}/${seoData.metaCanonical.replace(/^\/+/, "")}`
                : parentMetadata?.alternates?.canonical,
        },
        openGraph: {
            images: Array.isArray(seoData.images) && seoData.images.length > 0
                ? seoData.images.map(img => ({ url: img.origin }))
                : parentMetadata.openGraph?.images,
        },
    }
}
