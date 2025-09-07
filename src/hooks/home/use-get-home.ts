"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { HomeApiResponse } from "@/types/home-response";
import { getMovieHomeService } from "@/services/home/home-service";
export default function useGetHome(
  params: any,
  queryOptions?: ReactQueryOptions<HomeApiResponse>
) {
  const query = useQuery({
    queryKey: ["get-home", params],
    queryFn: () => getMovieHomeService({ ...params }),
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
