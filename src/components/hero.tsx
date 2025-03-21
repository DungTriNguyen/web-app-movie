import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import useCrypto from "@/services/crypto";

// Mock data for trending tokens

export default function Hero() {
    const { data: trendingTokens, isLoading, isError } = useCrypto();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <section className="relative py-16 px-4 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat w-full aspect-[25/12] px-20 pt-36 items-center justify-center flex min-h-20 gap-12 ">
            <div className="flex flex-col gap-6 items-start justify-center py-9 flex-1 mx-auto container self-stretch">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-[600px]">
                    The Next Dimension of Secure Crypto Trading
                </h1>
                <p className="text-lg max-w-[600px] text-gray-300 mb-8">
                    Get real-time market updates and insights for making informed decisions. Trade with confidence on our secure platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="border-muted border-2 text-secondary-foreground px-8 py-6 rounded-lg text-base">

                        Explore Market Trends
                    </Button>
                    <Button className="bg-primary text-white px-8 py-6 rounded-lg text-base">
                        Start Trading Now
                    </Button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-16 flex-1">
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
                            {trendingTokens.map((token) => (
                                <div key={token.id} className="flex self-stretch gap-2.5 items-center px-1 min-h-14 h-14 hover:bg-[#2A3246]/50 rounded-lg ">
                                    <div className="flex flex-1 gap-1 items-center font-medium text-sm">
                                        <span className={`${token.icon}`}></span>
                                        <span className="font-medium whitespace-nowrap">{token.name} / {token.pair}</span>
                                    </div>
                                    <div className="flex min-w-28 items-center justify-end max-w-40 text-right font-medium text-sm">{token.price}</div>
                                    <div className={`${token.isPositive ? "text-green-500" : "text-red-500"} flex-1 font-medium text-sm text-right min-w-28 max-w-40`}>
                                        {token.change}
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
            </div>
        </section>
    )
}

