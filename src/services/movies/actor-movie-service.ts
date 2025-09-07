import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import { GetPeopleResponse } from "@/types/movie-actor";

export async function getActorMovieService(options: {
  slug: string;
  options?: any;
}): Promise<BaseServiceResponse<GetPeopleResponse>> {
  try {
    const response = await axiosInstance.get<GetPeopleResponse>(
      `${NEXT_PUBLIC_API_URL}/phim/${options.slug}/peoples`,
      {
        params: {
          ...options.options,
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
    return e as BaseServiceResponse<GetPeopleResponse>;
  }
}
