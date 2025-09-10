import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";

interface GetListCategoriesMovieServiceKphimOptions {
  type_list: string;
  page: number;
  sort_field: string;
  sort_type: string;
  sort_lang: string;
  country: string;
  year: number;
  limit: number;
}

export async function getListCategoriesMovieServiceKphim(
  options: GetListCategoriesMovieServiceKphimOptions
): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/v1/api/the-loai/${options.type_list}`,
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
