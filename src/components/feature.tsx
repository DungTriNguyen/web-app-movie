import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Feature() {
    return (
        <section id="features" className="container mx-auto py-16 px-4 ">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DexSpace</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 min-h-20">
                <Card className="p-9 border-none ">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2  ">
                        <Image src="/images/chart.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            Real-Time Data
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            Instant updates with high speed analytics for informed trading decisions.

                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/reset.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            Seamless Trading
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            Trade directly from the platform with minimal slippage and maximum efficiency.
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/shield.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            User-Friendly Interface

                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            Simplified design that caters to both beginners and expert traders.
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/link.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            Multi-Chain Support
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            Track tokens across multiple blockchains in one unified platform.
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center items-center pt-20 px-20">
                <div className="flex-1">
                    <Image src="/images/feature.png" alt="Real-Time Data" width={40} height={40} />
                </div>
                <div className="flex-1 py-9 gap-6 space-y-4">
                    <h1 className="text-5xl font-bold">
                        Advanced Analytics at <br /> Your Fingertips
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Track market movements, analyze trends, and make informed decisions with our advanced analytics suite.
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className=" flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                Real-time price updates
                            </p>

                        </div>
                        <div className="flex items-center gap-2">
                            <p className=" flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                Custom chart indicators
                            </p>

                        </div>
                        <div className="flex items-center gap-2">
                            <p className=" flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                Market depth analysis
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}