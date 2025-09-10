"use client";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListCategoryService } from "@/services/o-phim/categories/list-category-service";
import { CategoryApiResponse } from "@/types/movie-category";
export default function useGetCategories(
  params: any,
  queryOptions?: ReactQueryOptions<CategoryApiResponse>
) {
  const query = useQuery({
    queryKey: ["get-categories", params],
    queryFn: () => getListCategoryService({ ...params }),
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
