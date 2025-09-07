import { z } from "zod";
import {
  ListMovieYearResponseSchema,
  YearApiResponseSchema,
  YearItemSchema,
  RequestYearSchema,
} from "@/schemas/movie-year";
export type YearItem = z.infer<typeof YearItemSchema>;
export type YearApiResponse = z.infer<typeof YearApiResponseSchema>;
export type ListMovieYearResponse = z.infer<typeof ListMovieYearResponseSchema>;
export type RequestYear = z.infer<typeof RequestYearSchema>;
