import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { MovieDetailResponse } from "@/types/movie";

export async function getMovieInfoService(options: {
  slug: string;
  options?: any;
}): Promise<BaseServiceResponse<MovieDetailResponse>> {
  try {
    const response = await axiosInstance.get<MovieDetailResponse>(
      `${NEXT_PUBLIC_API_URL}/phim/${options.slug}`,
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
    return e as BaseServiceResponse<MovieDetailResponse>;
  }
}
