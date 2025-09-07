"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { GetPeopleResponse } from "@/types/movie-actor";
import { getActorMovieService } from "@/services/movies/actor-movie-service";
export default function useGetActorsMovie(
  params: {
    slug: string;
    options?: any;
  },
  queryOptions?: ReactQueryOptions<GetPeopleResponse>
) {
  const query = useQuery({
    queryKey: ["get-actors-movie", JSON.stringify(params)],
    queryFn: () => getActorMovieService({ ...params }),
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
