import { z } from 'zod'
import { MovieCategoryListResponseSchema, CategorySchema } from '@/schemas/k-phim/movie-category'

export type CategoryResponse = z.infer<typeof CategorySchema>

// TypeScript types
export type MovieCategoryListResponse = z.infer<typeof MovieCategoryListResponseSchema>
