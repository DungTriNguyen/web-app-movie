"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListMovieYearService } from "@/services/years/list-movie-year-service";
import { ListMovieYearResponse } from "@/types/movie-year";
import { RequestYear } from "@/types/movie-year";
export default function useGetMoviesYear(
  params: RequestYear,
  queryOptions?: ReactQueryOptions<ListMovieYearResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-year", JSON.stringify(params)],
    queryFn: () => getListMovieYearService({ ...params }),
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
