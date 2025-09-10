import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { GetImageResponse } from "@/types/movie-img";

export async function getImgMovieService(options: {
  slug: string;
  options?: any;
}): Promise<BaseServiceResponse<GetImageResponse>> {
  try {
    const response = await axiosInstance.get<GetImageResponse>(
      `${NEXT_PUBLIC_API_URL}/phim/${options.slug}/images`,
      {
        params: {
          ...options.options,
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
    return e as BaseServiceResponse<GetImageResponse>;
  }
}
