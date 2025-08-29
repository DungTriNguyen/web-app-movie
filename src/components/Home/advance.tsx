import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Advance() {
    const t = useTranslations('advance');
    return (
        <section
            id="advance"
            className="flex items-center relative w-full h-full md:h-[400px] lg:h-[600px]"
        >
            <div className="flex w-full h-full justify-center gap-12 self-stretch flex-col md:flex-row-reverse relative">
                <div className="flex-1 justify-center flex flex-col py-9 gap-4 px-4 md:px-0 z-20">
                    <h1 className="text-white text-3xl lg:text-5xl font-semibold uppercase leading-10 lg:leading-[72px] max-w-[600px]">
                        {t("title")}
                    </h1>
                    <p className="text-gray-100 text-base font-normal font-['Inter'] leading-normal max-w-[600px] mb-2">
                        {t("description")}
                    </p>
                    <div className="flex flex-col gap-4 items-start self-stretch">
                        <div className="flex items-center">
                            <p className="flex text-muted-foreground text-sm gap-2.5">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                <span className="text-gray-100 text-base font-normal font-['Inter'] leading-normal">{t("real-time-price-updates")}</span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <p className="flex text-muted-foreground text-sm gap-2.5">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                <span className="text-gray-100 text-base font-normal font-['Inter'] leading-normal">
                                    {t("custom-chart-indicators")}
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <p className="flex text-muted-foreground text-sm gap-2.5">
                                <Image src="/images/check.svg" alt="Real-Time Data" width={20} height={20} />
                                <span className="text-gray-100 text-base font-normal font-['Inter'] leading-normal">
                                    {t("market-depth-analysis")}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-h-[500px] md:h-full flex flex-1 flex-col justify-center items-end gap-12 overflow-hidden pt-5 bg-accent md:pt-0 md:bg-transparent">
                    <div className="bg-[url('/images/token-trade.png')] bg-cover transform translate-y-28 -translate-x-3 md:translate-0 md:bg-right-top
 bg-no-repeat flex-1 flex w-[1200px] lg:w-[1390px] md:absolute top-0 rounded-t-2xl shadow-[-20px_-20px_0px_0px_rgba(17,24,39,0.8)] border-2 border-border aspect-[479/268]"></div>
                    <div className="bg-gradient-to-b  from-[#1C2230]/0 to-slate-900 w-full lg:w-[1390px] h-[300px] md:h-[306px] absolute bottom-0"></div>
                </div>

            </div>
        </section>
    );
}
