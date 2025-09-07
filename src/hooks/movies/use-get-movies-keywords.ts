"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import {
  GetMovieKeywordsRequest,
  GetMovieKeywordsResponse,
} from "@/types/movie-keyword";
import { getKeywordMovieService } from "@/services/movies/keyword-movie-service";
export default function useGetMoviesKeywords(
  params: GetMovieKeywordsRequest,
  queryOptions?: ReactQueryOptions<GetMovieKeywordsResponse>
) {
  const query = useQuery({
    queryKey: ["get-movies-keywords", JSON.stringify(params)],
    queryFn: () => getKeywordMovieService({ ...params }),
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
