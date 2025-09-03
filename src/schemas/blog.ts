import { z } from "zod"
import { DefaultParamsSchema, ImageSchema, SEOAboutSchema, SEOAdditionalTypeSchema, SEOIsBaseOnSchema, SEOManageKeyWordsSchema, SEOMentionSchema, SEOSameAsSchema } from "./common"


export const GetBlogRequestSchema = z.object({
    customId: z.string(),
    LanguageCode: z.string().optional(),
})

export const GetBlogResponseSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    content: z.string().nullable().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.array(SEOManageKeyWordsSchema).optional(),
    metaCanonical: z.string().optional(),
    metaCrawlMode: z.number().optional(),
    additionalType: z.array(SEOAdditionalTypeSchema).optional(),
    sameAs: z.array(SEOSameAsSchema).optional(),
    isBasedOn: z.array(SEOIsBaseOnSchema).optional(),
    wordCount: z.number().optional(),
    about: z.array(SEOAboutSchema).optional(),
    mention: z.array(SEOMentionSchema).optional(),
    author: z.string().nullable().optional(),
    isPublish: z.boolean().nullable().optional(),
    id: z.string(),
    tenantId: z.string().nullable().optional(),
    customId: z.number().nullable().optional(),
    blogCategoryId: z.string().nullable().optional(),
    createdBy: z.string().nullable().optional(),
    updatedBy: z.string().nullable().optional(),
    createdDate: z.string().nullable().optional(),
    updatedDate: z.string().nullable().optional(),
    status: z.number().nullable().optional(),
    images: z.array(ImageSchema).optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    categoryCustomId: z.number().nullable().optional(),
    categoryName: z.string().nullable().optional(),
    categoryUrl: z.string().nullable().optional(),
    itemUrl: z.string().nullable().optional(),
    targetKeyword: z.string().optional().nullable(),
    lsiKeywords: z.string().optional().nullable(),
    outline: z.string().optional().nullable(),
    LanguageCode: z.string().optional(),
    supportedLanguages: z.array(z.string()).optional(),
})

export const GetBlogsRequestSchema = DefaultParamsSchema.extend({
    BlogCategoryId: z.string().optional(),
    IsPublish: z.boolean().optional().nullable(),
    BlogIds: z.array(z.string()).optional().nullable(),
    LanguageCode: z.string().optional(),
    IncludeLanguageCode: z.string().optional(),
    SearchTerm: z.string().optional().nullable(),
})

export const GetBlogsResponseSchema = z.object({
    totalCount: z.number().int().min(0),
    items: z.array(GetBlogResponseSchema),
})
