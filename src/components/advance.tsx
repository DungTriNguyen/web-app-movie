import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Advance() {
    const t = useTranslations('advance');
    return (
        <section
            id="advance"
            className="flex items-center relative px-4 md:px-20 w-full h-[536px] "
        >
            <div className="flex w-full h-full justify-center gap-12 self-stretch flex-col-reverse md:flex-row relative">
                <div className="flex flex-1 flex-col justify-center items-end gap-12 overflow-hidden">
                    <div className="bg-[url('/images/token-trade.png')] bg-cover bg-right-top
 bg-no-repeat flex-1 flex w-[1390px] h-[536px] absolute top-0 rounded-t-2xl shadow-[-20px_-20px_0px_0px_rgba(17,24,39,0.8)] border-2 border-border aspect-[479/268]"></div>
                    <div className="bg-gradient-to-b  from-[#1C2230]/0 to-[#1C2230] w-[1390px] h-[536px] absolute top-0"></div>
                </div>
                <div className="flex-1 justify-center flex flex-col py-9 gap-6">
                    <h1 className="max-w-[600px] text-4xl md:text-5xl font-bold flex flex-col gap-4 items-start self-stretch">
                        {t("title")}
                        <p className="text-muted-foreground text-base font-normal">
                            {t("description")}
                        </p>
                    </h1>
                    <div className="flex flex-col gap-4 items-start self-stretch">
                        <div className="flex items-center gap-2">
                            <p className="flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                {t("real-time-price-updates")}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                {t("custom-chart-indicators")}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="flex text-muted-foreground text-sm gap-2">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                {t("market-depth-analysis")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
