import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";
export interface GetListSummaryMovieServiceKphimOptions {
  type_list:
    | "phim-bo"
    | "phim-le"
    | "tv-shows"
    | "hoat-hinh"
    | "phim-vietsub"
    | "phim-thuyet-minh"
    | "phim-long-tieng";
  page?: number;
  sort_field?: "modified.time" | "_id" | "year";
  sort_type?: "desc" | "asc";
  sort_lang?: "vietsub" | "thuyet-minh" | "long-tieng";
  category?: string;
  country?: string;
  year?: number;
  limit?: number;
}

export async function getListSummaryMovieServiceKphim(
  options: GetListSummaryMovieServiceKphimOptions
): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/v1/api/danh-sach/${options.type_list}`,
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
