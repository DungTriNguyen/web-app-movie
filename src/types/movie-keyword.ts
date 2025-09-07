import {
  KeywordSchema,
  GetMovieKeywordsResponseSchema,
  GetMovieKeywordsRequestSchema,
} from "@/schemas/movie-keyword";
import { z } from "zod";
// Types
export type Keyword = z.infer<typeof KeywordSchema>;
export type GetMovieKeywordsResponse = z.infer<
  typeof GetMovieKeywordsResponseSchema
>;
export type GetMovieKeywordsRequest = z.infer<
  typeof GetMovieKeywordsRequestSchema
>;
