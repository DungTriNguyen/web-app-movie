"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListMovieCategoryService } from "@/services/o-phim/categories/list-movie-category-service";
import { listMovieCategoryResponse } from "@/types/movie-category";
import { Request } from "@/types/common";
export default function useGetMoviesCategory(
  params: Request,
  queryOptions?: ReactQueryOptions<listMovieCategoryResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-category", JSON.stringify(params)],
    queryFn: () => getListMovieCategoryService({ ...params }),
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
