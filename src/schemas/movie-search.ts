import { z } from "zod";
import {
  SeoOnPageSchema,
  BreadCrumbSchema,
  PaginationSchema,
} from "@/schemas/common";
import { MovieDetailItemSchema } from "@/schemas/common";
// Search API response
export const SearchMoviesResponseSchema = z.object({
  status: z.string(), // "success"
  message: z.string(),
  data: z.object({
    seoOnPage: SeoOnPageSchema,
    titlePage: z.string(),
    breadCrumb: z.array(BreadCrumbSchema),
    items: z.array(MovieDetailItemSchema),
    params: z.object({
      keyword: z.string(),
      pagination: PaginationSchema,
    }),
  }),
});
