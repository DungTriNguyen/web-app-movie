import { z } from "zod";
import {
  listMovieCategory,
  listMovieCategoryResponseSchema,
  CategoryApiResponseSchema,
} from "@/schemas/movie-category";

export type listMovieCategory = z.infer<typeof listMovieCategory>;
export type listMovieCategoryResponse = z.infer<
  typeof listMovieCategoryResponseSchema
>;
export type CategoryApiResponse = z.infer<typeof CategoryApiResponseSchema>;
