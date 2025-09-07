import { z } from "zod";
import {
  SeoOnPageSchema,
  BreadCrumbSchema,
  PaginationSchema,
  MovieDetailItemSchema,
  CountryItemSchema,
} from "@/schemas/common";

export const CountryApiResponseSchema = z.object({
  status: z.string(),
  data: z.array(CountryItemSchema),
});

export const listMovieCountryResponseSchema = z.object({
  status: z.string(),
  message: z.string().optional(),
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
