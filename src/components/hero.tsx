import ChartTab from "./chart-tab";
import { Button } from "./ui/button";

export default function Hero() {
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
                <ChartTab />
            </div>
        </section>
    )
}

