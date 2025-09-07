import { z } from "zod";
import {
  MovieDetailResponseSchema,
  GetListMoviesResponseSchema,
  RequestMovieSchema,
} from "@/schemas/movie";
export type MovieDetailResponse = z.infer<typeof MovieDetailResponseSchema>;
export type GetListMoviesResponse = z.infer<typeof GetListMoviesResponseSchema>;
export type RequestMovie = z.infer<typeof RequestMovieSchema>;
