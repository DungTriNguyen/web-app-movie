import { DefaultParams } from "@/types/common"

export const PATHS = {
    BLOG_CATEGORY: {
        GET_ALL: "/BlogCategory",
        GET_SINGLE: "/BlogCategory/:id",
    },
    BLOG: {
        GET_ALL: "/Blog",
        GET_SINGLE: "/Blog/:id",
    },
}

export const DEFAULT_PARAMS: DefaultParams = {
    PageNumber: 0,
    PageSize: 10,
}