import ChartTab from "./chart-tab";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-10  md:py-16 px-4 md:px-20 md:bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat w-full md:aspect-[25/12] items-center justify-center flex md:flex-row flex-col min-h-20 gap-6 md:gap-12 max-md:bg-[linear-gradient(0deg,#1E2535_0%,rgba(30,37,53,0)_100%),url('/images/hero.jpg')] 
   max-md:bg-lightgray">
            <div className="flex flex-col gap-6 items-start justify-center py-9 flex-1 md:mx-auto md:container self-stretch">
                <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold max-w-[600px]">
                    The Next Dimension of Secure Crypto Trading
                </h1>
                <p className="text-sm max-w-[600px] text-gray-300 text-center md:text-left">
                    Stay ahead of the market with instant price updates on the most trending and newly launched tokens. Fast, reliable, and built for DeFi traders.
                </p>
                <div className="flex flex-col max-md:hidden sm:flex-row gap-4">
                    <Button variant="outline" className="border-muted border-2 text-secondary-foreground px-8 py-6 rounded-lg text-base">

                        Explore Market Trends
                    </Button>
                    <Button className="bg-primary text-white px-8 py-6 rounded-lg text-base">
                        Start Trading Now
                    </Button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-16 flex-1">
                <ChartTab />
            </div>
            <div className="flex justify-center items-start self-stretch md:hidden flex-row gap-4">
                <Button variant="outline" className="border-muted border-2 text-secondary-foreground md:px-8 py-6 px-3 rounded-lg text-base">
                    Explore Market Trends
                </Button>
                <Button className="bg-primary text-white px-3 md:px-8 py-6 rounded-lg text-base">
                    Start Trading Now
                </Button>
            </div>
        </section>
    )
}

