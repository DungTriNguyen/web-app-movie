"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListMovieCountryService } from "@/services/countries/list-movie-country-service";
import { listMovieCountryResponse } from "@/types/movie-country";
import { Request } from "@/types/common";
export default function useGetMoviesCountry(
  params: Request,
  queryOptions?: ReactQueryOptions<listMovieCountryResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-country", JSON.stringify(params)],
    queryFn: () => getListMovieCountryService({ ...params }),
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
