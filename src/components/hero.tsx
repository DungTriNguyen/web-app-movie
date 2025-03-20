import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import useCrypto from "@/services/crypto";

// Mock data for trending tokens

export default function Hero() {
    const { data: trendingTokens, isLoading, isError } = useCrypto();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <section className="relative py-16 px-4 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat w-full aspect-[25/12] max-h-[768px]">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1A2030]/90 to-[#1A2030]/70"></div> */}
            <div className="container mx-auto relative z-10 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            The Next Dimension of Secure Crypto Trading
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Get real-time market updates and insights for making informed decisions. Trade with confidence on our secure platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" className="border-muted text-secondary-foreground px-8 py-6 rounded-lg text-base">

                                Explore Market Trends
                            </Button>
                            <Button className="bg-primary text-white px-8 py-6 rounded-lg text-base">
                                Start Trading Now
                            </Button>
                        </div>
                    </div>
                    <Tabs defaultValue="trending" className="relative max-w-[480px] w-full h-full aspect-square bg-background rounded-2xl p-9 gap-9">
                        <div className="flex justify-between items-center mb-4">
                            <TabsList className="bg-[#1E2535]">
                                <TabsTrigger value="trending" className="data-[state=active]:bg-[#F59E0B]/20 data-[state=active]:text-[#F59E0B]">TRENDING</TabsTrigger>
                                <TabsTrigger value="new-pair" className="data-[state=active]:bg-[#F59E0B]/20 data-[state=active]:text-[#F59E0B]">NEW PAIRS</TabsTrigger>
                            </TabsList>
                            <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center">
                                More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>
                        </div>
                        <TabsContent value="trending" className="mt-2">
                            <div className="text-sm text-gray-400 flex justify-between py-3 border-b border-gray-800">
                                <div className="pl-2">Token</div>
                                <div className="pr-2">Price (USDT)</div>
                                <div className="pr-2">1H change</div>
                            </div>
                            <div className="mt-2 space-y-2">
                                {trendingTokens.map((token) => (
                                    <div key={token.id} className="flex justify-between items-center py-3 hover:bg-[#2A3246]/50 rounded-lg px-2">
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 flex items-center justify-center text-xl mr-2">{token.icon}</span>
                                            <span className="font-medium">{token.name} / {token.pair}</span>
                                        </div>
                                        <div>{token.price}</div>
                                        <div className={token.isPositive ? "text-green-500" : "text-red-500"}>
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
            </div>
        </section>
    )
}

