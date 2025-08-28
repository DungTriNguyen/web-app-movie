import { DefaultParamsSchema, PaginationSchema } from "@/schemas/common"
import { UseQueryOptions } from "@tanstack/react-query"
import { z } from "zod"
export type BaseServiceResponse<T> = {
    data: T | null
    message: string
    success: boolean
    status?: number
}

export type ErrorResponse = {
    error: string
    error_description: string
    title?: string
    errors?: unknown[]
    traceId?: string
}

export type ReactQueryOptions<TData> = Omit<
    UseQueryOptions<unknown, ErrorResponse, BaseServiceResponse<TData>, string[]>,
    "queryKey" | "queryFn" | "initialData"
>

export type Pagination = z.infer<typeof PaginationSchema>
export type DefaultParams = z.infer<typeof DefaultParamsSchema>