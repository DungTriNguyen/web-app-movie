import { z } from 'zod'

// TMDB
const TmdbSchema = z.object({
  type: z.string().nullable(),
  id: z.string().nullable(),
  season: z.number().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
})

// IMDb
const ImdbSchema = z.object({
  id: z.string().nullable(),
})

// Created / Modified
const TimeSchema = z.object({
  time: z.string(),
})

// Category / Country
const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})
export type Country = {
  _id: string
  name: string
  slug: string
}

// Zod schema cho 1 category
export const CountrySchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
})

// Movie item
const MovieItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  origin_name: z.string().nullable().optional(),
  slug: z.string(),
  poster_url: z.string(),
  thumb_url: z.string(),
  category: z.array(CategorySchema),
  country: z.array(CountrySchema),
  tmdb: TmdbSchema,
  imdb: ImdbSchema,
  created: TimeSchema,
  modified: TimeSchema,
  type: z.string(),
  year: z.number(),
  lang: z.string(),
  quality: z.string(),
  time: z.string(),
  sub_docquyen: z.boolean(),
  chieurap: z.boolean(),
  episode_current: z.string().optional(),
})

// BreadCrumb
const BreadCrumbSchema = z.object({
  name: z.string(),
  isCurrent: z.boolean(),
  position: z.number(),
  slug: z.string().optional(),
})

// Pagination
const PaginationSchema = z.object({
  currentPage: z.number(),
  totalItems: z.number(),
  totalItemsPerPage: z.number(),
  totalPages: z.number(),
})

// Params
const ParamsSchema = z.object({
  filterCategory: z.array(z.string()),
  filterCountry: z.array(z.string()),
  filterType: z.array(z.string()),
  filterYear: z.array(z.string()),
  pagination: PaginationSchema,
  slug: z.string(),
  sortField: z.string(),
  sortType: z.string(),
  type_slug: z.string(),
})

// SEO OnPage
const SeoOnPageSchema = z.object({
  descriptionHead: z.string(),
  og_image: z.array(z.string()),
  og_type: z.string(),
  og_url: z.string(),
  titleHead: z.string(),
})

// Data
const DataSchema = z.object({
  APP_DOMAIN_CDN_IMAGE: z.string(),
  APP_DOMAIN_FRONTEND: z.string(),
  breadCrumb: z.array(BreadCrumbSchema),
  items: z.array(MovieItemSchema),
  params: ParamsSchema,
  seoOnPage: SeoOnPageSchema,
  titlePage: z.string(),
  type_list: z.string(),
})

// Response
export const MovieCountryResponseSchema = z.object({
  status: z.string(), // "success"
  msg: z.string(),
  data: DataSchema,
})
