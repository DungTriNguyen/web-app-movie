import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";

export interface GetListMovieServiceOp2Options {
  version: ["v1", "v2", "v3"];
  options?: any;
}

export async function getListMovieServiceOp2(
  options: GetListMovieServiceOp2Options
): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/danh-sach/phim-moi-cap-nhat-${options.version}?page=${options.options}`,
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
