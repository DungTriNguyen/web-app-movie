import { BaseServiceResponse } from "@/types/common";
import { axiosInstance } from "@/api/axios";
import { NEXT_PUBLIC_API_URL_OP2 } from "@/configs/env";

export async function getConvertImgWebpServiceKphim(options: {
  url: string;
}): Promise<BaseServiceResponse<any>> {
  try {
    const response = await axiosInstance.get<any>(
      `${NEXT_PUBLIC_API_URL_OP2}/image.php?url=${options.url}`
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
