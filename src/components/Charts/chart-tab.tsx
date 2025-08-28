'use client'

import { useTokens } from "@/hooks/use-tokens";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TokenItem } from "@/services/token";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
// import { useEffect } from "react";

export default function ChartTab() {
    const { data: trendingTokens, isLoading, error } = useTokens({ page: 1, limit: 5 });

    const { data: newPairs } = useTokens({ page: 1, limit: 5, sortOrder: 'desc', sortBy: 'born_at' });

    const defaultLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNTcyN18xMzkzNCkiPgo8cGF0aCBkPSJNMTI4IDI1NkMxOTguNjkyIDI1NiAyNTYgMTk4LjY5MiAyNTYgMTI4QzI1NiA1Ny4zMDc2IDE5OC42OTIgMCAxMjggMEM1Ny4zMDc2IDAgMCA1Ny4zMDc2IDAgMTI4QzAgMTk4LjY5MiA1Ny4zMDc2IDI1NiAxMjggMjU2WiIgZmlsbD0iI0JEQzVEMSIvPgo8cGF0aCBkPSJNMjA1LjE4MiAxNjguNTkzTDE3OS40MyAxOTYuMTAzQzE3OC44NzMgMTk2LjcgMTc4LjE5OSAxOTcuMTc3IDE3Ny40NDkgMTk3LjUwNEMxNzYuNjk4IDE5Ny44MyAxNzUuODg5IDE5Ny45OTkgMTc1LjA3IDE5OEg1Mi45OTIxQzUyLjQwOTggMTk4IDUxLjg0MDMgMTk3LjgzIDUxLjM1MzMgMTk3LjUxMkM1MC44NjYyIDE5Ny4xOTQgNTAuNDgyOCAxOTYuNzQyIDUwLjI0OTggMTk2LjIxQzUwLjAxNyAxOTUuNjc5IDQ5Ljk0NDggMTk1LjA5MSA1MC4wNDIxIDE5NC41MTlDNTAuMTM5MyAxOTMuOTQ3IDUwLjQwMTkgMTkzLjQxNiA1MC43OTc2IDE5Mi45OUw3Ni41MjExIDE2NS40OEM3Ny4wNzgyIDE2NC44ODIgNzcuNzUyOCAxNjQuNDA1IDc4LjUwMjggMTY0LjA4Qzc5LjI1MyAxNjMuNzUzIDgwLjA2MjUgMTYzLjU4NCA4MC44ODExIDE2My41ODRIMjAyLjk1OUMyMDMuNTQ3IDE2My41NzEgMjA0LjEyNCAxNjMuNzMyIDIwNC42MjEgMTY0LjA0NkMyMDUuMTE2IDE2NC4zNjIgMjA1LjUwNyAxNjQuODE1IDIwNS43NDYgMTY1LjM1QzIwNS45ODMgMTY1Ljg4NSAyMDYuMDU3IDE2Ni40NzkgMjA1Ljk1NiAxNjcuMDU2QzIwNS44NTYgMTY3LjYzNCAyMDUuNTg3IDE2OC4xNjggMjA1LjE4MiAxNjguNTkzWk0xNzkuNDMgMTEzLjE4MUMxNzguODcgMTEyLjU4NyAxNzguMTk2IDExMi4xMTIgMTc3LjQ0NiAxMTEuNzg2QzE3Ni42OTcgMTExLjQ1OSAxNzUuODg5IDExMS4yODkgMTc1LjA3IDExMS4yODVINTIuOTkyMUM1Mi40MDk4IDExMS4yODUgNTEuODQwMyAxMTEuNDU0IDUxLjM1MzMgMTExLjc3MkM1MC44NjYyIDExMi4wOSA1MC40ODI4IDExMi41NDMgNTAuMjQ5OCAxMTMuMDc0QzUwLjAxNyAxMTMuNjA2IDQ5Ljk0NDggMTE0LjE5NCA1MC4wNDIxIDExNC43NjZDNTAuMTM5MyAxMTUuMzM4IDUwLjQwMTkgMTE1Ljg2OSA1MC43OTc2IDExNi4yOTRMNzYuNTIxMSAxNDMuODE5Qzc3LjA4MDMgMTQ0LjQxNCA3Ny43NTUzIDE0NC44ODkgNzguNTA0OSAxNDUuMjE1Qzc5LjI1NDYgMTQ1LjU0MSA4MC4wNjMxIDE0NS43MTIgODAuODgxMSAxNDUuNzE3SDIwMi45NTlDMjAzLjU0IDE0NS43MTIgMjA0LjEwOCAxNDUuNTQxIDIwNC41OTIgMTQ1LjIyMkMyMDUuMDc3IDE0NC45MDMgMjA1LjQ1OCAxNDQuNDUgMjA1LjY5IDE0My45MTlDMjA1LjkyMSAxNDMuMzg4IDIwNS45OTEgMTQyLjgwMiAyMDUuODk0IDE0Mi4yMzFDMjA1Ljc5NiAxNDEuNjYxIDIwNS41MzQgMTQxLjEzMSAyMDUuMTM5IDE0MC43MDZMMTc5LjQzIDExMy4xODFaTTUyLjk5MjEgOTMuNDE3NUgxNzUuMDdDMTc1Ljg4OSA5My40MTY4IDE3Ni42OTggOTMuMjQ3OSAxNzcuNDQ5IDkyLjkyMTdDMTc4LjE5OSA5Mi41OTUzIDE3OC44NzMgOTIuMTE4NCAxNzkuNDMgOTEuNTIwN0wyMDUuMTgyIDY0LjAxMDNDMjA1LjQ4NSA2My42OTI1IDIwNS43MTIgNjMuMzEyIDIwNS44NDkgNjIuODk2MUMyMDUuOTg3IDYyLjQ4MDQgMjA2LjAzIDYyLjAzOTYgMjA1Ljk3NiA2MS42MDUyQzIwNS45MjMgNjEuMTcwOSAyMDUuNzcyIDYwLjc1MzcgMjA1LjUzOCA2MC4zODM2QzIwNS4zMDUgNjAuMDEzNCAyMDQuOTkxIDU5LjY5OTMgMjA0LjYyIDU5LjQ2MzlDMjA0LjEyNCA1OS4xNDk3IDIwMy41NDcgNTguOTg4NCAyMDIuOTU5IDU5LjAwMDZIODAuODgxMUM4MC4wNjI1IDU5LjAwMTUgNzkuMjUzIDU5LjE3MDQgNzguNTAyOCA1OS40OTY2Qzc3Ljc1MjggNTkuODIzIDc3LjA3ODIgNjAuMjk5NyA3Ni41MjExIDYwLjg5NzNMNTAuNzk3NiA4OC40MDc2QzUwLjQwMTkgODguODMzMyA1MC4xMzkzIDg5LjM2NDUgNTAuMDQyMSA4OS45MzY0QzQ5Ljk0NDggOTAuNTA4MyA1MC4wMTcgOTEuMDk2IDUwLjI0OTggOTEuNjI3N0M1MC40ODI4IDkyLjE1OTQgNTAuODY2MiA5Mi42MTE4IDUxLjM1MzMgOTIuOTI5N0M1MS44NDAzIDkzLjI0NzYgNTIuNDA5OCA5My40MTcxIDUyLjk5MjEgOTMuNDE3NVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTU3MjdfMTM5MzQiPgo8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
    if (isLoading) return null;
    if (error) return null;



    return (
        <Tabs defaultValue="trending" className="max-w-[480px] w-full h-full md:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] bg-background rounded-2xl p-4 md:p-9 gap-9 justify-center items-center md:border-[16px] md:border-background ">
            <div className="flex flex-1 w-full items-center justify-between gap-4 self-stretch border-b-2 border-border">
                <TabsList className="bg-background gap-4 p-0 flex">
                    <TabsTrigger value="trending" className="border-spacing-2 rounded-none data-[state=active]:border-b-secondary data-[state=active]:text-secondary border-b-2 p-0 font-bold text-sm">TRENDING</TabsTrigger>
                    <TabsTrigger value="new-pair" className="border-spacing-2 rounded-none data-[state=active]:border-b-secondary data-[state=active]:text-secondary border-b-2 p-0 font-bold text-sm">NEW PAIRS</TabsTrigger>
                </TabsList>
                <Link href={`${NEXT_PUBLIC_APP_URL}/dashboard`} className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-1 min-w-5">
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </Link>
            </div>
            <TabsContent value="trending" className="w-full h-full">
                <div className="flex min-h-9 items-center w-full h-full  gap-2.5 self-stretch text-text-secondary text-xs">
                    <div className="flex-1">Token</div>
                    <div className=" min-w-[160px] text-right">Price (USDT)</div>
                    <div className="text-right min-w-[120px] max-w-40 flex-1">1H change</div>
                </div>
                <div className="flex self-stretch flex-col items-start">
                    {trendingTokens?.data.data.map((token: TokenItem) => (
                        <Link href={`${NEXT_PUBLIC_APP_URL}/${token.contract_address}`} key={token._id} className="flex self-stretch gap-2.5 items-center px-1 min-h-14 h-14 hover:bg-[#2A3246]/50 rounded-lg ">
                            <div className="flex flex-1 gap-1 items-center font-medium text-sm">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className="rounded-full"  ><img src={token.logo ? token.logo : defaultLogo} alt={token.symbol} width={20} height={20} /></div>
                                <span className="font-medium whitespace-nowrap"> {token.symbol}</span>
                            </div>
                            <div className="flex min-w-28 items-center justify-end max-w-40 text-right font-medium text-sm">{formatNumber(token.price_usd, 2, 6)}</div>
                            <div className={`${token['1h'].price_change_usd_percent > 0 ? "text-green-500" : "text-red-500"} flex-1 font-medium text-sm text-right min-w-28 max-w-40`}>
                                {formatNumber(token['1h'].price_change_usd_percent)}%
                            </div>
                        </Link>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="new-pair" className="w-full h-full">
                <div className="flex min-h-9 items-center w-full h-full  gap-2.5 self-stretch text-text-secondary text-xs">
                    <div className="flex-1">Token</div>
                    <div className=" min-w-[160px] text-right">Price (USDT)</div>
                    <div className="text-right min-w-[120px] max-w-40 flex-1">1H change</div>
                </div>
                <div className="flex self-stretch flex-col items-start">
                    {newPairs?.data.data.map((token: TokenItem) => (
                        <Link href={`${NEXT_PUBLIC_APP_URL}/${token.contract_address}`} key={token._id} className="flex self-stretch gap-2.5 items-center px-1 min-h-14 h-14 hover:bg-[#2A3246]/50 rounded-lg ">
                            <div className="flex flex-1 gap-1 items-center font-medium text-sm">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className="rounded-full"  ><img src={token.logo ? token.logo : defaultLogo} alt={token.symbol} width={20} height={20} /></div>
                                <span className="font-medium whitespace-nowrap"> {token.symbol}</span>
                            </div>
                            <div className="flex min-w-28 items-center justify-end max-w-40 text-right font-medium text-sm">{formatNumber(token.price_usd, 2, 6)}</div>
                            <div className={`${token['1h'].price_change_usd_percent > 0 ? "text-green-500" : "text-red-500"} flex-1 font-medium text-sm text-right min-w-28 max-w-40`}>
                                {formatNumber(token['1h'].price_change_usd_percent)}%
                            </div>
                        </Link>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}