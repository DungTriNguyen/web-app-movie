import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { CategoryApiResponse } from "@/types/movie-category";

export async function getListCategoryService(
  options: any
): Promise<BaseServiceResponse<CategoryApiResponse>> {
  try {
    const response = await axiosInstance.get<CategoryApiResponse>(
      `${NEXT_PUBLIC_API_URL}/the-loai`,
      options
    );
    const { data } = response;
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return e as BaseServiceResponse<CategoryApiResponse>;
  }
}
