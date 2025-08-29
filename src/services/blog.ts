import { PATHS } from "@/constants/constants"
import { BaseServiceResponse } from "@/types/common"
import { axiosInstance } from "../api/axios"
import { NEXT_PUBLIC_TENANT_ID } from "@/configs/env";
import { GetBlogsRequest, GetBlogsResponse } from "@/types/blog"
import { GetBlogsRequestSchema } from "@/schemas/blog";

export async function getBlogs(
    request: GetBlogsRequest
): Promise<BaseServiceResponse<GetBlogsResponse>> {
    try {
        const params = GetBlogsRequestSchema.parse(request)
        const response = await axiosInstance.get<GetBlogsResponse>(
            `${PATHS.BLOG.GET_ALL}/${NEXT_PUBLIC_TENANT_ID}/${params.languageCode}`,
            {
                params,
            }
        )
        const { data } = response
        return {
            data,
            message: response.statusText,
            success: true,
        }
    } catch (e) {
        return e as BaseServiceResponse<GetBlogsResponse>
    }
}