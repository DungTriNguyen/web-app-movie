"use client";

import { getListCountriesServiceKphim } from "@/services/k-phim/countries/list-countries-service";
import { ReactQueryOptions } from "@/types/common";
import { useQuery } from "@tanstack/react-query";
export default function useGetCountriesKphim(
  params: any,
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-countries-kphim", JSON.stringify(params)],
    queryFn: () => getListCountriesServiceKphim({ ...params }),
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
