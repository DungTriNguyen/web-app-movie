import { z } from 'zod'

/**
 * Pagination schema
 */
export const PaginationSchema = z.object({
  currentPage: z.number(),
  totalItems: z.number(),
  totalItemsPerPage: z.number(),
  totalPages: z.number().optional(), // đôi khi có, đôi khi không
})

/**
 * Params
 */
export const ParamsSchema = z.object({
  pagination: PaginationSchema.optional(),
})
/**
 * SeoOnPage schema
 */
export const SeoOnPageSchema = z.object({
  titleHead: z.string(),
  descriptionHead: z.string(),
  og_Type: z.string().optional(),
  og_Image: z.array(z.string()).optional(),
})

/**
 * BreadCrumb schema
 */
export const BreadCrumbSchema = z.object({
  name: z.string(),
  slug: z.string().optional(), // item cuối có thể không có slug
  isCurrent: z.boolean(),
})

export const MessageSchema = z.object({
  status: z.string(),
  message: z.string(),
})

export const RequestSchema = z.object({
  slug: z.string(),
  page: z.number().optional().default(1).optional(),
  limit: z.number().optional().default(24).optional(),
  sort_field: z.string().optional(),
  sort_type: z.enum(['asc', 'desc']).optional(),
  country: z.string().optional(),
  year: z.number().optional(),
})

export const EpisodeFileSchema = z.object({
  name: z.string(),
  slug: z.string(),
  filename: z.string(),
  link_embed: z.string().url(),
  link_m3u8: z.string().url(),
})

export const EpisodeServerSchema = z.object({
  server_name: z.string(),
  server_data: z.array(EpisodeFileSchema),
})

export const TMDBSchema = z.object({
  type: z.string(),
  id: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
})

export const IMDBSchema = z.object({
  id: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
})

/**
 * Category item
 */
export const CategoryItemSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  name: z.string(),
})

export const CountryItemSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  name: z.string(),
})
// --- Movie Detail Item ---
export const MovieDetailItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  origin_name: z.string(),
  content: z.string(),
  type: z.string(),
  status: z.string(),
  thumb_url: z.string(),
  poster_url: z.string(),
  trailer_url: z.string().url().optional(),
  time: z.string().optional(),
  episode_current: z.string(),
  episode_total: z.string(),
  quality: z.string(),
  lang: z.string(),
  year: z.number(),
  view: z.number(),
  actor: z.array(z.string()),
  director: z.array(z.string()),
  category: z.array(CategoryItemSchema),
  country: z.array(CountryItemSchema),
  episodes: z.array(EpisodeServerSchema),
  tmdb: TMDBSchema.optional(),
  imdb: IMDBSchema.optional(),
})
