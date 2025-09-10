"use client";

import { getListCategoriesServiceKphim } from "@/services/k-phim/categories/list-categories-service";
import { ReactQueryOptions } from "@/types/common";
import { useQuery } from "@tanstack/react-query";
export default function useGetCategoriesKphim(
  params: any,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-categories-kphim", JSON.stringify(params)],
    queryFn: () => getListCategoriesServiceKphim({ ...params }),
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
