"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListMovieSearchServiceKphim,
  GetListMovieSearchServiceKphimOptions,
} from "@/services/k-phim/searchs/list-movie-search-service";
export default function useGetListMoviesSearchKphim(
  params: GetListMovieSearchServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-movies-search-kphim", JSON.stringify(params)],
    queryFn: () => getListMovieSearchServiceKphim({ ...params }),
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
