import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { listMovieCountryResponse } from "@/types/movie-country";
import { RequestSchema } from "@/schemas/common";
import { Request } from "@/types/common";

export async function getListMovieCountryService(
  options: Request
): Promise<BaseServiceResponse<listMovieCountryResponse>> {
  try {
    const params = RequestSchema.parse(options);
    const response = await axiosInstance.get<listMovieCountryResponse>(
      `${NEXT_PUBLIC_API_URL}/quoc-gia/${params.slug}`,
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
    return e as BaseServiceResponse<listMovieCountryResponse>;
  }
}
