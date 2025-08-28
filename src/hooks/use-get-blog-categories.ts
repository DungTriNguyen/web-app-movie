"use client"

import { useQuery } from "@tanstack/react-query"
import { getBlogCategories } from "@/services/blog-category"
import { GetBlogCategoriesRequest, GetBlogCategoriesResponse } from "@/types/blog-category"
import { ReactQueryOptions } from "@/types/common"
import { DEFAULT_PARAMS } from "@/constants/constants"

export default function useGetBlogCategories(
    params: GetBlogCategoriesRequest = DEFAULT_PARAMS,
    queryOptions?: ReactQueryOptions<GetBlogCategoriesResponse>
) {
    const query = useQuery({
        queryKey: ["get-blog-categories", { ...DEFAULT_PARAMS, ...params } as never],
        queryFn: () => getBlogCategories({ ...DEFAULT_PARAMS, ...params }),
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
