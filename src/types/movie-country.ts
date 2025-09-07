import { z } from "zod";
import {
  CountryItemSchema,
  CountryApiResponseSchema,
  listMovieCountryResponseSchema,
} from "@/schemas/movie-country";
export type CountryItem = z.infer<typeof CountryItemSchema>;
export type CountryApiResponse = z.infer<typeof CountryApiResponseSchema>;
export type listMovieCountryResponse = z.infer<
  typeof listMovieCountryResponseSchema
>;
