import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";
import { GetListMoviesResponse } from "@/types/movie";

export async function getListMovieServiceOp2(
  options: any
): Promise<BaseServiceResponse<GetListMoviesResponse>> {
  try {
    const response = await axiosInstance.get<GetListMoviesResponse>(
      `${NEXT_PUBLIC_API_URL_OP2}/danh-sach/phim-moi-cap-nhat-v3`,
      {
        params: {
          ...options,
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
