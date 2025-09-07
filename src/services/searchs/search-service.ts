import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import {
  GetMovieKeywordsResponse,
  GetMovieKeywordsRequest,
} from "@/types/movie-keyword";
export async function getMovieSearchService(
  request: GetMovieKeywordsRequest
): Promise<BaseServiceResponse<GetMovieKeywordsResponse>> {
  try {
    const response = await axiosInstance.get<GetMovieKeywordsResponse>(
      `${NEXT_PUBLIC_API_URL}/tim-kiem?keyword=${request.keywords}`,
      {
        params: {
          ...request,
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
