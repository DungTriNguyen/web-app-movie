import { z } from 'zod'
import { MovieNewUpdateListResponseSchema } from '@/schemas/k-phim/movie-new-update'

export type MovieNewUpdateListResponse = z.infer<typeof MovieNewUpdateListResponseSchema>
