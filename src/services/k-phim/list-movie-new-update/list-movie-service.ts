import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";

export interface GetListMovieServiceKphimOptions {
  version: "v1" | "v2" | "v3";
  page: number;
  options?: any;
}

export async function getListMovieServiceKphim(
  options: GetListMovieServiceKphimOptions
): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/danh-sach/phim-moi-cap-nhat-${options.version}?page=${options.page}`,
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
    return e as BaseServiceResponse<any>;
  }
}
