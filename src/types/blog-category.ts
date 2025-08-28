import { z } from "zod"
import { GetBlogCategoriesRequestSchema, GetBlogCategoriesResponseSchema, GetBlogCategoryRequestSchema, GetBlogCategoryResponseSchema } from '../schemas/blog-category';

export type GetBlogCategoriesRequest = z.infer<typeof GetBlogCategoriesRequestSchema>
export type GetBlogCategoriesResponse = z.infer<typeof GetBlogCategoriesResponseSchema>
export type GetBlogCategoryRequest = z.infer<typeof GetBlogCategoryRequestSchema>
export type GetBlogCategoryResponse = z.infer<typeof GetBlogCategoryResponseSchema>
