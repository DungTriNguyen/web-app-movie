import { PATHS } from "@/constants/constants"
import { GetBlogCategoriesRequestSchema } from "@/schemas/blog-category"
import { GetBlogCategoriesRequest, GetBlogCategoriesResponse } from "@/types/blog-category"
import { BaseServiceResponse } from "@/types/common"
import { axiosInstance } from "../api/axios"
import { NEXT_PUBLIC_TENANT_ID } from "@/configs/env";

export async function getBlogCategories(
    request: GetBlogCategoriesRequest
): Promise<BaseServiceResponse<GetBlogCategoriesResponse>> {
    try {
        const params = GetBlogCategoriesRequestSchema.parse(request)
        const response = await axiosInstance.get<GetBlogCategoriesResponse>(
            `${PATHS.BLOG_CATEGORY.GET_ALL}/${NEXT_PUBLIC_TENANT_ID}`,
            {
                params,
            }
        )
        const { data } = response
        console.log("response", response)
        return {
            data,
            message: response.statusText,
            success: true,
        }
    } catch (e) {
        return e as BaseServiceResponse<GetBlogCategoriesResponse>
    }
}