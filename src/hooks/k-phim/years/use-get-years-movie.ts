"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListYearsMovieServiceKphim,
  GetListYearsMovieServiceKphimOptions,
} from "@/services/k-phim/years/list-years-movie-service";
export default function useGetListYearsMovieKphim(
  params: GetListYearsMovieServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-years-movie-kphim", JSON.stringify(params)],
    queryFn: () => getListYearsMovieServiceKphim({ ...params }),
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
