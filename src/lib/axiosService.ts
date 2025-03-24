import axios, { AxiosError } from 'axios'
import queryString from 'query-string'

// import { toast } from 'sonner'
import { NEXT_PUBLIC_API_URL } from '@/configs/env'
import { IS_BROWSER } from '@/lib/utils'

const axiosService = axios.create({
    baseURL: `${NEXT_PUBLIC_API_URL}`,
    headers: {
        'content-type': 'application/json',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paramsSerializer: (params: any) => queryString.stringify({ ...params }),
    // adapter: cache.adapter,
})

axiosService.interceptors.request.use(async (config) => {
    try {
        if (!IS_BROWSER) {


        } else {

        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) { }
    return config
})

axiosService.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (response: { data: any }) => {
        // check them is success
        if (response && response.data) {
            return response.data
        }

        return response
    },
    (error: AxiosError) => {
        switch (error.response?.status) {
            case 400:
                throw error?.response?.data
            case 401:
                // removeUserDataFromCookies()
                // window.location.reload()
                break
            case 404:
                break
            case 500:
                // return toast.error('Internal server error', {
                //   description: (error?.response?.data as any)?.message || (error?.response?.data as string),
                // })
                throw error?.response?.data
            default:
                throw error?.response?.data
        }
    },
)

export default axiosService
