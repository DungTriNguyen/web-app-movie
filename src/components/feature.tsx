import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Feature() {
    return (
        <section id="features" className="container mx-auto p-20 min-h-20 gap-12">
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


        </section>

    )
}