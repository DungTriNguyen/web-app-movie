"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListCountryService } from "@/services/countries/list-country-service";
import { CountryApiResponse } from "@/types/movie-country";
export default function useGetCountries(
  params: any,
  queryOptions?: ReactQueryOptions<CountryApiResponse>
) {
  const query = useQuery({
    queryKey: ["get-countries", params],
    queryFn: () => getListCountryService({ ...params }),
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
