import { z } from 'zod'

// TypeScript type cho 1 category
export interface Category {
  _id: string
  name: string
  slug: string
}

// Zod schema cho 1 category
export const CategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
})

const CountrySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

const TMDBSchema = z.object({
  id: z.string().nullable(),
  type: z.string().nullable(),
  season: z.number().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
})

const IMDBSchema = z.object({
  id: z.string().nullable(),
})

const MovieItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  origin_name: z.string(),
  slug: z.string(),
  poster_url: z.string(),
  thumb_url: z.string(),
  time: z.string(),
  quality: z.string(),
  type: z.string(),
  year: z.number(),
  lang: z.string(),
  chieurap: z.boolean(),
  sub_docquyen: z.boolean(),
  episode_current: z.string().optional(),
  tmdb: TMDBSchema,
  imdb: IMDBSchema,
  category: z.array(CategorySchema),
  country: z.array(CountrySchema),
  created: z.object({ time: z.string() }),
  modified: z.object({ time: z.string() }),
})

const PaginationSchema = z.object({
  currentPage: z.number(),
  totalItems: z.number(),
  totalItemsPerPage: z.number(),
  totalPages: z.number(),
})

const ParamsSchema = z.object({
  type_slug: z.string(),
  slug: z.string(),
  filterCategory: z.array(z.string()),
  filterCountry: z.array(z.string()),
  filterType: z.array(z.string()),
  filterYear: z.array(z.string()),
  pagination: PaginationSchema,
  sortField: z.string(),
  sortType: z.string(),
})

const BreadcrumbSchema = z.object({
  isCurrent: z.boolean().optional(),
  name: z.string(),
  position: z.number().optional(),
  slug: z.string().optional(),
})

const SEOOnPageSchema = z.object({
  titleHead: z.string(),
  descriptionHead: z.string(),
  og_type: z.string(),
  og_url: z.string(),
  og_image: z.array(z.string()),
})

export const MovieCategoryListResponseSchema = z.object({
  status: z.boolean(),
  msg: z.string(),
  data: z.object({
    APP_DOMAIN_CDN_IMAGE: z.string(),
    APP_DOMAIN_FRONTEND: z.string(),
    breadCrumb: z.array(BreadcrumbSchema),
    items: z.array(MovieItemSchema),
    params: ParamsSchema,
    seoOnPage: SEOOnPageSchema,
    titlePage: z.string(),
    type_list: z.string(),
  }),
})
