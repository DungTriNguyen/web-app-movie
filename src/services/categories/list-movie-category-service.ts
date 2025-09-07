import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { listMovieCategoryResponse } from "@/types/movie-category";
import { RequestSchema } from "@/schemas/common";
import { Request } from "@/types/common";
export async function getListMovieCategoryService(
  options?: Request
): Promise<BaseServiceResponse<listMovieCategoryResponse>> {
  try {
    const params = RequestSchema.parse(options);
    const response = await axiosInstance.get<listMovieCategoryResponse>(
      `${NEXT_PUBLIC_API_URL}/the-loai/${params.slug}`,
      {
        params: {
          ...params,
        },
      }
    );
    const { data } = response;
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return e as BaseServiceResponse<listMovieCategoryResponse>;
  }
}
