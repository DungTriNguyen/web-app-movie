"use client"

import { useQuery } from "@tanstack/react-query"

import { ReactQueryOptions } from "@/types/common"
import { DEFAULT_PARAMS } from "@/constants/constants"
import { GetBlogsRequest, GetBlogsResponse } from "@/types/blog"
import { getBlogs } from "@/services/blog"

export default function useGetBlogs(
    params: GetBlogsRequest = DEFAULT_PARAMS,
    queryOptions: ReactQueryOptions<GetBlogsResponse> = { staleTime: 1000 * 60 * 5 }
) {
    const query = useQuery({
        queryKey: ["get-blogs", { ...DEFAULT_PARAMS, ...params } as never],
        queryFn: () => getBlogs({ ...DEFAULT_PARAMS, ...params }),
        ...queryOptions,
        refetchOnWindowFocus: false,
    })
    return {
        data: query?.data?.data,
        isLoading: query.isLoading,
        error: query.error,
        refetch: query.refetch,
        query,
    }
}
