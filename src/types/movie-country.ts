import { z } from "zod";
import {
  CountryApiResponseSchema,
  listMovieCountryResponseSchema,
} from "@/schemas/movie-country";
import { CountryItemSchema } from "@/schemas/common";
export type CountryItem = z.infer<typeof CountryItemSchema>;
export type CountryApiResponse = z.infer<typeof CountryApiResponseSchema>;
export type listMovieCountryResponse = z.infer<
  typeof listMovieCountryResponseSchema
>;
