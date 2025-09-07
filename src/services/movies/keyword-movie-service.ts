import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import {
  GetMovieKeywordsResponse,
  GetMovieKeywordsRequest,
} from "@/types/movie-keyword";
import { GetMovieKeywordsRequestSchema } from "@/schemas/movie-keyword";

export async function getKeywordMovieService(
  options: GetMovieKeywordsRequest
): Promise<BaseServiceResponse<GetMovieKeywordsResponse>> {
  try {
    const params = GetMovieKeywordsRequestSchema.parse(options);
    const response = await axiosInstance.get<GetMovieKeywordsResponse>(
      `${NEXT_PUBLIC_API_URL}/phim/${params.keywords}/keywords`,
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
    return e as BaseServiceResponse<GetMovieKeywordsResponse>;
  }
}
