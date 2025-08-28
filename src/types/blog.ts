import { z } from "zod"
import { GetBlogRequestSchema, GetBlogResponseSchema, GetBlogsRequestSchema, GetBlogsResponseSchema } from "@/schemas/blog"

export type GetBlogRequest = z.infer<typeof GetBlogRequestSchema>
export type GetBlogResponse = z.infer<typeof GetBlogResponseSchema>
export type GetBlogsRequest = z.infer<typeof GetBlogsRequestSchema>
export type GetBlogsResponse = z.infer<typeof GetBlogsResponseSchema>