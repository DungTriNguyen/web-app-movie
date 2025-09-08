import { getBlog } from "@/services/blog"
import { GetBlogRequest, GetBlogResponse } from "@/types/blog"
import { ReactQueryOptions } from "@/types/common"
import { useQuery } from "@tanstack/react-query"

export default function useGetBlog(params: GetBlogRequest, queryOptions?: ReactQueryOptions<GetBlogResponse>) {
    const query = useQuery({
        queryKey: ["get-blog", JSON.stringify({ ...params })],
        queryFn: () => getBlog({ ...params }),
        ...queryOptions,
        refetchOnWindowFocus: false,
    })

    return {
        data: query.data?.data,
        isLoading: query.isLoading,
        error: query.error,
        refetch: query.refetch,
        query,
    }
}
