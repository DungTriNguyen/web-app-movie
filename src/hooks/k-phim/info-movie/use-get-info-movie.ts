"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getInfoMovieServiceKphim } from "@/services/k-phim/info-movie/info-movie-service";
export default function useGetInfoMovieKphim(
  params: {
    slug: string;
    options?: any;
  },
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-info-movie-kphim", JSON.stringify(params)],
    queryFn: () => getInfoMovieServiceKphim({ ...params }),
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
