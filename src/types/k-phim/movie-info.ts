import { z } from 'zod'
import { ApiMovieInfoResponseSchema } from '@/schemas/k-phim/movie-info'

// TypeScript type
export type ApiMovieInfoResponse = z.infer<typeof ApiMovieInfoResponseSchema>
