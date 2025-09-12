import { z } from 'zod'

// Category của phim
export const MovieCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

// Country của phim
export const MovieCountrySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

// TMDB thông tin
export const TMDBSchema = z.object({
  id: z.string().nullable(),
  season: z.number().nullable().optional(),
  type: z.string().nullable().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
})

// IMDB thông tin
export const IMDBSchema = z.object({
  id: z.string().nullable(),
})

// Modified info
export const ModifiedSchema = z.object({
  time: z.string(),
})

// Movie item
export const MovieItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  origin_name: z.string(),
  slug: z.string(),
  poster_url: z.string(),
  thumb_url: z.string(),
  type: z.string(),
  year: z.number(),
  episode_current: z.string().optional(),
  quality: z.string().optional(),
  lang: z.string(),
  time: z.string(),
  tmdb: TMDBSchema,
  imdb: IMDBSchema,
  category: z.array(MovieCategorySchema).optional(),
  country: z.array(MovieCountrySchema).optional(),
  modified: ModifiedSchema,
  sub_docquyen: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
})

// Pagination
export const PaginationSchema = z.object({
  currentPage: z.number(),
  totalItems: z.number(),
  totalItemsPerPage: z.number(),
  totalPages: z.number(),
  updateToday: z.number().optional(),
})

// Full API response
export const MovieNewUpdateListResponseSchema = z.object({
  status: z.boolean(),
  msg: z.string(),
  items: z.array(MovieItemSchema),
  pagination: PaginationSchema,
})
