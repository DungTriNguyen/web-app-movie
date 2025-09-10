"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryOptions } from "@/types/common";
import { getConvertImgWebpServiceKphim } from "@/services/k-phim/convert-img-webp/convert-img-webp-service";
export default function useGetImgWebpKphim(
  params: {
    url: string;
  },
  queryOptions?: ReactQueryOptions<any>
) {
  const query = useQuery({
    queryKey: ["get-img-webp-kphim", JSON.stringify(params)],
    queryFn: () => getConvertImgWebpServiceKphim({ ...params }),
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
