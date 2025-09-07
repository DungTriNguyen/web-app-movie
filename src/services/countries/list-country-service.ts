import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { CountryApiResponse } from "@/types/movie-country";

export async function getListCountryService(
  options: any
): Promise<BaseServiceResponse<CountryApiResponse>> {
  try {
    const response = await axiosInstance.get<CountryApiResponse>(
      `${NEXT_PUBLIC_API_URL}/quoc-gia`,
      options
    );
    const { data } = response;
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return e as BaseServiceResponse<CountryApiResponse>;
  }
}
