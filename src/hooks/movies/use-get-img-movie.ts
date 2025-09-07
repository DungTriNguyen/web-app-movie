"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { GetImageResponse } from "@/types/movie-img";
import { getImgMovieService } from "@/services/movies/img-movie-service";
export default function useGetImgMovie(
  params: {
    slug: string;
    options?: any;
  },
  queryOptions?: ReactQueryOptions<GetImageResponse>
) {
  const query = useQuery({
    queryKey: ["get-img-movie", JSON.stringify(params)],
    queryFn: () => getImgMovieService({ ...params }),
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
