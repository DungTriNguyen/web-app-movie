import { z } from 'zod'

// Schema cho TMDB info
const TmdbSchema = z.object({
  type: z.string(),
  id: z.string(),
  season: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
})

// Schema cho IMDb info
const ImdbSchema = z.object({
  id: z.string().nullable(),
})

// Schema cho created/modified time
const TimeSchema = z.object({
  time: z.string(), // ISO string
})

// Schema cho category và country
const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

const CountrySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

// Schema cho server_data
const ServerDataSchema = z.object({
  name: z.string(),
  slug: z.string(),
  filename: z.string(),
  link_embed: z.string().url(),
  link_m3u8: z.string().url(),
})

// Schema cho episodes
const EpisodeServerSchema = z.object({
  server_name: z.string(),
  server_data: z.array(ServerDataSchema),
})

// Schema cho movie
const MovieSchema = z.object({
  tmdb: TmdbSchema,
  imdb: ImdbSchema,
  created: TimeSchema,
  modified: TimeSchema,
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  origin_name: z.string(),
  content: z.string(),
  type: z.string(),
  status: z.string(),
  poster_url: z.string().url(),
  thumb_url: z.string().url(),
  is_copyright: z.boolean(),
  sub_docquyen: z.boolean(),
  chieurap: z.boolean(),
  trailer_url: z.string().url(),
  time: z.string(),
  episode_current: z.string(),
  episode_total: z.string(),
  quality: z.string(),
  lang: z.string(),
  notify: z.string(),
  showtimes: z.string(),
  year: z.number(),
  view: z.number(),
  actor: z.array(z.string()),
  director: z.array(z.string()),
  category: z.array(CategorySchema),
  country: z.array(CountrySchema),
})

// Schema chính
export const ApiMovieInfoResponseSchema = z.object({
  status: z.boolean(),
  msg: z.string(),
  movie: MovieSchema,
  episodes: z.array(EpisodeServerSchema),
})
