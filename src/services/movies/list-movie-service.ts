import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { GetListMoviesResponse } from "@/types/movie";
import { RequestMovieSchema } from "@/schemas/movie";
import { RequestMovie } from "@/types/movie";

export async function getListMovieService(
  options: RequestMovie
): Promise<BaseServiceResponse<GetListMoviesResponse>> {
  try {
    const params = RequestMovieSchema.parse(options);
    const response = await axiosInstance.get<GetListMoviesResponse>(
      `${NEXT_PUBLIC_API_URL}/danh-sach/${params.slug}`,
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
    return e as BaseServiceResponse<GetListMoviesResponse>;
  }
}
