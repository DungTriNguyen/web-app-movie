"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getListYearService } from "@/services/years/list-year-service";
import { YearApiResponse } from "@/types/movie-year";
import { RequestYear } from "@/types/movie-year";
export default function useGetYears(
  params: RequestYear,
  queryOptions?: ReactQueryOptions<YearApiResponse>
) {
  const query = useQuery({
    queryKey: ["get-years", JSON.stringify(params)],
    queryFn: () => getListYearService({ ...params }),
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
