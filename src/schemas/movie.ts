import { z } from "zod";
import {
  BreadCrumbSchema,
  PaginationSchema,
  SeoOnPageSchema,
  MovieDetailItemSchema,
} from "@/schemas/common";

// --- Movie Detail Response ---
export const MovieDetailResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    item: MovieDetailItemSchema,
    seoOnPage: SeoOnPageSchema,
    breadCrumb: z.array(BreadCrumbSchema),
  }),
});

// Response schema
export const GetListMoviesResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    seoOnPage: SeoOnPageSchema,
    titlePage: z.string(),
    breadCrumb: z.array(BreadCrumbSchema),
    items: z.array(MovieDetailItemSchema),
    params: z.object({
      pagination: PaginationSchema,
    }),
  }),
});
export const RequestMovieSchema = z.object({
  slug: z.enum([
    "phim-moi",
    "phim-bo",
    "phim-le",
    "tv-shows",
    "hoat-hinh",
    "phim-vietsub",
    "phim-thuyet-minh",
    "phim-long-tien",
    "phim-bo-dang-chieu",
    "phim-bo-hoan-thanh",
    "phim-sap-chieu",
    "subteam",
    "phim-chieu-rap",
  ]),
  page: z.number().optional().default(1).optional(),
  limit: z.number().optional().default(24).optional(),
  sort_field: z.string().optional(),
  sort_type: z.enum(["asc", "desc"]).optional(),
  country: z.string().optional(),
  category: z.string().optional(),
  year: z.number().optional(),
});
