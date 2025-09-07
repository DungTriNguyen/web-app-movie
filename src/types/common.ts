import {
  ParamsSchema,
  PaginationSchema,
  MessageSchema,
  BreadCrumbSchema,
  SeoOnPageSchema,
  RequestSchema,
  MovieDetailItemSchema,
  CategoryItemSchema,
  CountryItemSchema,
} from "@/schemas/common";
import { UseQueryOptions } from "@tanstack/react-query";
import { z } from "zod";
export type BaseServiceResponse<T> = {
  data: T | null;
  message: string;
  success: boolean;
  status?: number;
};

export type ErrorResponse = {
  error: string;
  error_description: string;
  title?: string;
  errors?: unknown[];
  traceId?: string;
};

export type ReactQueryOptions<TData> = Omit<
  UseQueryOptions<unknown, ErrorResponse, BaseServiceResponse<TData>, string[]>,
  "queryKey" | "queryFn" | "initialData"
>;

export type Pagination = z.infer<typeof PaginationSchema>;
export type DefaultParams = z.infer<typeof ParamsSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type BreadCrumb = z.infer<typeof BreadCrumbSchema>;
export type SeoOnPage = z.infer<typeof SeoOnPageSchema>;
export type Request = z.infer<typeof RequestSchema>;
export type MovieDetailItem = z.infer<typeof MovieDetailItemSchema>;
export type CategoryItem = z.infer<typeof CategoryItemSchema>;
export type CountryItem = z.infer<typeof CountryItemSchema>;
