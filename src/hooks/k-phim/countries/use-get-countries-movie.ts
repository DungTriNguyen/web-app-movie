"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  getListCountriesMovieServiceKphim,
  GetListCountriesMovieServiceKphimOptions,
} from "@/services/k-phim/countries/list-countries-movie-service";
export default function useGetCountriesMovieKphim(
  params: GetListCountriesMovieServiceKphimOptions,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-countries-movie-kphim", JSON.stringify(params)],
    queryFn: () => getListCountriesMovieServiceKphim({ ...params }),
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
