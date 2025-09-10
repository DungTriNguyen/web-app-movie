"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListCategoriesMovieServiceKphim,
  GetListCategoriesMovieServiceKphimOptions,
} from "@/services/k-phim/categories/list-categories-movie-service";
export default function useGetCategoriesMovieKphim(
  params: GetListCategoriesMovieServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-categories-movie-kphim", JSON.stringify(params)],
    queryFn: () => getListCategoriesMovieServiceKphim({ ...params }),
    ...queryOptions,
    refetchOnWindowFocus: false,
  });
  return {
    data: query?.data?.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    query,
  };
}
