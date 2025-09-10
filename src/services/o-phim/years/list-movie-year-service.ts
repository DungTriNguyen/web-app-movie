import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { ListMovieYearResponse } from "@/types/movie-year";
import { RequestYearSchema } from "@/schemas/movie-year";
import { RequestYear } from "@/types/movie-year";

export async function getListMovieYearService(
  options: RequestYear
): Promise<BaseServiceResponse<ListMovieYearResponse>> {
  try {
    const params = RequestYearSchema.parse(options);
    const response = await axiosInstance.get<ListMovieYearResponse>(
      `${NEXT_PUBLIC_API_URL}/nam-phat-hanh/${params.year}`,
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
    return e as BaseServiceResponse<ListMovieYearResponse>;
  }
}
