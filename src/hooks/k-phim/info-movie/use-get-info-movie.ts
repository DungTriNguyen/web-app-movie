"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListInfoMovieServiceKphim,
  GetListInfoMovieServiceKphimOptions,
} from "@/services/k-phim/info-movie/list-info-movie-service";
export default function useGetInfoMovieKphim(
  params: GetListInfoMovieServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-info-movie-kphim", JSON.stringify(params)],
    queryFn: () => getListInfoMovieServiceKphim({ ...params }),
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
