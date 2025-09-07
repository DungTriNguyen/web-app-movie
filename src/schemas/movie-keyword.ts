import { z } from "zod";

// Keyword schema
export const KeywordSchema = z.object({
  tmdb_keyword_id: z.number(),
  name: z.string(),
  name_vn: z.string(),
});

// Response schema
export const GetMovieKeywordsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    tmdb_id: z.number(),
    tmdb_type: z.string(), // có thể refine thành z.enum(["movie", "tv"])
    ophim_id: z.string(),
    slug: z.string(),
    imdb_id: z.string().optional(),
    keywords: z.array(KeywordSchema),
  }),
});

export const GetMovieKeywordsRequestSchema = z.object({
  keywords: z.string(),
  page: z.number().optional().default(1).optional(),
  limit: z.number().optional().default(24).optional(),
});
