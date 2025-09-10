"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getMovieSearchService } from "@/services/o-phim/searchs/search-service";
import {
  GetMovieKeywordsRequest,
  GetMovieKeywordsResponse,
} from "@/types/movie-keyword";
export default function useGetMoviesSearch(
  params: GetMovieKeywordsRequest,
  queryOptions?: ReactQueryOptions<GetMovieKeywordsResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-search", JSON.stringify(params)],
    queryFn: () => getMovieSearchService({ ...params }),
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
