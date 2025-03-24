'use client'

import { useTokens } from "@/hooks/use-tokens";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TokenItem } from "@/services/token";
import { formatNumber } from "@/lib/utils";
import { useEffect } from "react";

export default function ChartTab() {
    const { data: trendingTokens, isLoading, error, refetch } = useTokens({ page: 1, limit: 5 });
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 60000);

        return () => clearInterval(intervalId);
    }, [refetch]);

    if (isLoading) return null;
    if (error) return null;



    return (
        <Tabs defaultValue="trending" className=" max-w-[480px] w-full h-full shadow-[20px_20px_0px_0px_rgba(17,24,39,0.8)] bg-background rounded-2xl p-9 gap-9 justify-center items-center ">
            <div className="flex w-full items-center justify-between gap-4 self-stretch border-b-2 border-border">
                <TabsList className="bg-background gap-4 p-0 flex">
                    <TabsTrigger value="trending" className="border-spacing-2 rounded-none data-[state=active]:border-b-secondary data-[state=active]:text-secondary border-b-2 p-0 font-bold text-sm">TRENDING</TabsTrigger>
                    <TabsTrigger value="new-pair" className="border-spacing-2 rounded-none data-[state=active]:border-b-secondary data-[state=active]:text-secondary border-b-2 p-0 font-bold text-sm">NEW PAIRS</TabsTrigger>
                </TabsList>
                <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-1 min-w-5">
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>
            <TabsContent value="trending" className="w-full h-full">
                <div className="flex min-h-9 items-center w-full h-full  gap-2.5 self-stretch text-text-secondary text-xs">
                    <div className="flex-1">Token</div>
                    <div className=" min-w-[160px] text-right">Price (USDT)</div>
                    <div className="text-right min-w-[120px] max-w-40 flex-1">1H change</div>
                </div>
                <div className="flex self-stretch flex-col items-start">
                    {trendingTokens?.data.data.map((token: TokenItem) => (
                        <div key={token._id} className="flex self-stretch gap-2.5 items-center px-1 min-h-14 h-14 hover:bg-[#2A3246]/50 rounded-lg ">
                            <div className="flex flex-1 gap-1 items-center font-medium text-sm">
                                <span className={`${token.symbol}`}></span>
                                <span className="font-medium whitespace-nowrap"> {token.symbol}</span>
                            </div>
                            <div className="flex min-w-28 items-center justify-end max-w-40 text-right font-medium text-sm">{formatNumber(token.price_usd, 2, 6)}</div>
                            <div className={`${token["1h"].buy_txns > token["1h"].sell_txns ? "text-green-500" : "text-red-500"} flex-1 font-medium text-sm text-right min-w-28 max-w-40`}>
                                {formatNumber(token['1h'].price_change_usd_percent)}%
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="new-pair">
                <div className="text-sm text-gray-400 flex justify-between py-3 border-b border-gray-800">
                    <div className="pl-2">Token</div>
                    <div className="pr-2">Price (USDT)</div>
                    <div className="pr-2">Launch</div>
                </div>
                <div className="p-4 text-center text-gray-400">
                    No new pairs available
                </div>
            </TabsContent>
        </Tabs>
    )
}