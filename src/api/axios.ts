import { NEXT_PUBLIC_API_STORIMS_URL } from "@/configs/env";
import axios from "axios";
import queryString from "query-string";

export const axiosInstance = axios.create({
    baseURL: `${NEXT_PUBLIC_API_STORIMS_URL}`,
    headers: {
        'content-type': 'application/json',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paramsSerializer: (params: any) => queryString.stringify({ ...params }),
    // adapter: cache.adapter,
})

