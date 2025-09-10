"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListSummaryMovieServiceKphim,
  GetListSummaryMovieServiceKphimOptions,
} from "@/services/k-phim/list-summary-movie/list-summary-movie-service";
export default function useGetListSummaryMoviesKphim(
  params: GetListSummaryMovieServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-summary-movies-kphim", JSON.stringify(params)],
    queryFn: () => getListSummaryMovieServiceKphim({ ...params }),
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
