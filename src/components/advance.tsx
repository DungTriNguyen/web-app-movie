import Image from "next/image";
export default function Advance() {
    return (
        <section id="advance" className="flex items-center  relative px-20 w-full h-[536px] ">
            <div className="flex w-full h-full justify-center gap-12 self-stretch ">
                <div className="flex flex-1 flex-col justify-center items-end gap-12 ">
                    <Image src="/images/token-trade.png" alt="token trade" className="absolute top-0 flex flex-col justify-end items-start gap-8 rounded-2xl border-2 border-border bg-background shadow-[-20px_-20px_0px_0px_rgba(17,24,39,0.8)] h-[868px] aspect-[479/268]" width={1390} height={868} />

                    <div className="bg-gradient-to-b from-[#1C2230]/0 to-[#1C2230] w-[1390px] h-[536px] absolute top-0"></div>
                </div>
                <div className="flex-1 justify-center flex flex-col py-9 gap-6 ">
                    <h1 className="text-5xl font-bold flex flex-col gap-4 items-start self-stretch">
                        Advanced Analytics at <br /> Your Fingertips
                        <p className="text-muted-foreground text-sm">
                            Track market movements, analyze trends, and make informed decisions with our advanced analytics suite.
                        </p>
                    </h1>
                    <div className="flex flex-col gap-4 items-start self-stretch">
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