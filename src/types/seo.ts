export interface ImageObject {
    small: string | null
    medium: string | null
    origin: string
}

export interface SeoData {
    metaTitle: string
    metaDescription: string
    metaKeywords: string[]
    metaCanonical: string
    metaCrawlMode: number
    additionalType: string[]
    sameAs: string[]
    isBasedOn: string[]
    wordCount: number
    about: string[]
    mention: string[]
    author: string
    id: string
    title: string
    imageUrl: string
    images: ImageObject[]
    itemUrl: string
    customId: number
    description: string
    createdDate: string
    updatedDate: string | null
    categoryId: string
    categoryName: string
    categoryUrl: string
}
