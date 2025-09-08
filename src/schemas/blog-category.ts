import { z } from "zod"
import { DefaultParamsSchema, ImageSchema, SEOAboutSchema, SEOAdditionalTypeSchema, SEOIsBaseOnSchema, SEOManageKeyWordsSchema, SEOMentionSchema, SEOSameAsSchema } from "./common"

export const GetBlogCategoryRequestSchema = z.object({
    id: z.string(),
    LanguageCode: z.string().optional(),
})
export const GetBlogCategoryResponseSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    content: z.string().optional(),
    author: z.string().optional(),
    isPublish: z.boolean().optional(),
    id: z.string(),
    languageCode: z.string(),
    customId: z.number().optional(),
    parentId: z.string().nullable(),
    status: z.number().optional(),
    images: z.array(ImageSchema),
    order: z.number(),
    imageUrl: z.string().optional(),
    itemUrl: z.string().optional(),
    supportedLanguages: z.array(z.string()).optional(),
    createdDate: z.string().optional(),
    updatedDate: z.string().optional(),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaCanonical: z.string().optional(),
    metaCrawlMode: z.number().optional(),
    metaKeywords: z.array(SEOManageKeyWordsSchema).optional(),
    about: z.array(SEOAboutSchema).optional(),
    mention: z.array(SEOMentionSchema).optional(),
    additionalType: z.array(SEOAdditionalTypeSchema).optional(),
    sameAs: z.array(SEOSameAsSchema).optional(),
    isBasedOn: z.array(SEOIsBaseOnSchema).optional(),
})

export const GetBlogCategoriesRequestSchema = DefaultParamsSchema.extend({
    BlogCategoryId: z.string().optional(),
    LanguageCode: z.string().optional(),
    IncludeLanguageCode: z.string().optional(),
})

export const GetBlogCategoriesResponseSchema = z.object({
    totalCount: z.number().int().min(0),
    items: z.array(GetBlogCategoryResponseSchema),
})