import { z } from "zod"
import { GetBlogContentRequestSchema, GetBlogContentResponseSchema, GetBlogRequestSchema, GetBlogResponseSchema, GetBlogsRequestSchema, GetBlogsResponseSchema } from "@/schemas/blog"

export type GetBlogRequest = z.infer<typeof GetBlogRequestSchema>
export type GetBlogResponse = z.infer<typeof GetBlogResponseSchema>
export type GetBlogsRequest = z.infer<typeof GetBlogsRequestSchema>
export type GetBlogsResponse = z.infer<typeof GetBlogsResponseSchema>
export type GetBlogContentRequest = z.infer<typeof GetBlogContentRequestSchema>
export type GetBlogContentResponse = z.infer<typeof GetBlogContentResponseSchema>