"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { GetListMoviesResponse } from "@/types/movie";
import { getListMovieServiceOp2 } from "@/services/k-phim/list-movie-new-update/list-movie-service";
export default function useGetListMovieKphim(
  params: any,
  queryOptions?: ReactQueryOptions<GetListMoviesResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-kphim", JSON.stringify(params)],
    queryFn: () => getListMovieServiceOp2({ ...params }),
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
