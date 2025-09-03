import { z } from "zod"

export const PaginationSchema = z.object({
    PageSize: z.number().int().min(0),
    PageIndex: z.number().int().min(0),
})



export const DefaultParamsSchema = PaginationSchema

export const ImageSchema = z
    .object({
        small: z.string().optional().nullable(),
        medium: z.string().optional().nullable(),
        origin: z.string().optional().nullable(),
    })
    .optional()
    .nullable()


export const SEOAboutSchema = z.object({
    title: z.string(),
    headline: z.string(),
    url: z.string(),
    imageUrl: z.string(),
    description: z.string(),
})

export const SEOMentionSchema = z.object({
    title: z.string(),
    headline: z.string(),
    url: z.string(),
    imageUrl: z.string(),
    description: z.string(),
})

export const SEOIsBaseOnSchema = z.string()

export const SEOSameAsSchema = z.string()
export const SEOManageKeyWordsSchema = z.string()

export const SEOAdditionalTypeSchema = z.string()

export const SEOMetaKeywordsSchema = z.string()

export const SEOSlugSchema = z.object({
    slug: z.array(
        z.object({
            id: z.string(),
            fromRoute: z.string(),
        })
    ),
})
