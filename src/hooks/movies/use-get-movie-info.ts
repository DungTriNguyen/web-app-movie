"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { MovieDetailResponse } from "@/types/movie";
import { getMovieInfoService } from "@/services/movies/movie-info-service";
export default function useGetMovieInfo(
  params: {
    slug: string;
    options?: any;
  },
  queryOptions?: ReactQueryOptions<MovieDetailResponse>
) {
  const query = useQuery({
    queryKey: ["get-movie-info", JSON.stringify(params)],
    queryFn: () => getMovieInfoService({ ...params }),
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
