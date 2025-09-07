import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { HomeApiResponse } from "@/types/home-response";
export async function getMovieHomeService(
  options: any
): Promise<BaseServiceResponse<HomeApiResponse>> {
  try {
    const response = await axiosInstance.get<HomeApiResponse>(
      `${NEXT_PUBLIC_API_URL}/home`,
      options
    );
    const { data } = response;
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return e as BaseServiceResponse<HomeApiResponse>;
  }
}
