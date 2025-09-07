import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { YearApiResponse } from "@/types/movie-year";

export async function getListYearService(
  options: any
): Promise<BaseServiceResponse<YearApiResponse>> {
  try {
    const response = await axiosInstance.get<YearApiResponse>(
      `${NEXT_PUBLIC_API_URL}/nam-phat-hanh`,
      options
    );
    const { data } = response;
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return e as BaseServiceResponse<YearApiResponse>;
  }
}
