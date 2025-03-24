import { NEXT_PUBLIC_API_URL } from "@/configs/env";
import axiosService from '@/lib/axiosService';


export interface TokenItem {
    _id: string
    contract_address: string
    "1h": N1h
    "1m": N1m
    "5m": N5m
    "6h": N6h
    "15m": N15m
    "24h": N24h
    "30m": N30m
    __v: number
    blockchain_code: string
    born_at: string
    createdAt: string
    decimals: number
    fdv: number
    isActive: boolean
    links: Links
    liquidity_usd: number
    name: string
    pools: number
    price_usd: number
    symbol: string
    total_supply: number
    updatedAt: string
}

export interface N1h {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
    price_change_usd_percent: number
}

export interface N1m {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
}

export interface N5m {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
    price_change_usd_percent: number
}

export interface N6h {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
}

export interface N15m {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
}

export interface N24h {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
    price_change_usd_percent: number
}

export interface N30m {
    volume: number
    volume_usd: number
    txns: number
    buy_txns: number
    sell_txns: number
}

export interface Links {
    self: string
}

export interface Meta {
    total: number
    page: string
    limit: string
    totalPages: number
}

export interface TokenResponse {
    data: TokenItem[]
    meta: Meta
}

export interface TokenRequest {
    page?: number
    limit?: number
    search?: string
    sortBy?: string
    sortOrder?: string
    isActive?: boolean
}


const getTokens = async (request?: TokenRequest) => {
    const response = await axiosService.get<TokenRequest, TokenResponse>(`${NEXT_PUBLIC_API_URL}/tokens`, { params: request })
    console.log("🚀 ~ getTokens ~ response:", response)

    return {
        data: response
    }
}

export default getTokens;