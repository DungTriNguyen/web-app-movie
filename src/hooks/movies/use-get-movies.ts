"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { GetListMoviesResponse, RequestMovie } from "@/types/movie";
import { getListMovieService } from "@/services/movies/list-movie-service";
export default function useGetListMovie(
  params: RequestMovie,
  queryOptions?: ReactQueryOptions<GetListMoviesResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies", JSON.stringify(params)],
    queryFn: () => getListMovieService({ ...params }),
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
