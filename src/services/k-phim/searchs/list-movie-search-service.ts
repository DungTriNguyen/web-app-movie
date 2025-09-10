import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";
export interface GetListMovieSearchServiceKphimOptions {
  keyword: string;
  page: number;
  sort_field: "modified.time" | "_id" | "year";
  sort_type: "desc" | "asc";
  sort_lang: "vietsub" | "thuyet-minh" | "long-tieng";
  category: string;
  country: string;
  year: number;
  limit: number;
}

export async function getListMovieSearchServiceKphim(
  options: GetListMovieSearchServiceKphimOptions
): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/v1/api/tim-kiem?keyword=${options.keyword}`,
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
