import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { useTranslations } from "next-intl";

export default function Feature() {
    const t = useTranslations('feature');
    return (
        <section id="features" className="md:max-w-[1600px] md:mx-auto md:p-20 p-4 py-10 min-h-20 gap-12 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="w-full max-w-[600px] text-center justify-center text-white text-3xl lg:text-5xl font-semibold uppercase leading-10 lg:leading-[72px]">{t("title")}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 self-stretch min-h-20">
                <Card className="p-9 border-none flex-1">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2 !px-0">
                        <Image src="/images/chart.svg" alt="Real-Time Data" width={48} height={48} />
                        <CardTitle className="text-white text-center text-base lg:text-xl font-bold font-['Inter'] uppercase leading-6">
                            {t("real-time-data")}
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("real-time-data-description")}

                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none flex-1 ">
                    <CardContent className="flex flex-col items-center text-center gap-2 text-xl space-y-2 !px-0">
                        <Image src="/images/reset.svg" alt="Real-Time Data" width={48} height={48} />
                        <CardTitle className="text-white text-base lg:text-xl text-center font-bold font-['Inter'] uppercase leading-6">
                            {t("seamless-trading")}
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("seamless-trading-description")}
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none flex-1 ">
                    <CardContent className="flex flex-col items-center text-xl space-y-2 !px-0">
                        <Image src="/images/shield.svg" alt="Real-Time Data" width={48} height={48} />
                        <CardTitle className="text-white text-base lg:text-xl text-center font-bold font-['Inter'] uppercase leading-6">
                            {t("user-friendly-interface")}

                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("user-friendly-interface-description")}
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-9 border-none flex-1 ">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2 !px-0">
                        <Image src="/images/link.svg" alt="Real-Time Data" width={48} height={48} />
                        <CardTitle className="text-white text-base lg:text-xl text-center font-bold font-['Inter'] uppercase leading-6">
                            {t("multi-chain-support")}
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("multi-chain-support-description")}
                        </div>
                    </CardContent>
                </Card>
            </div>


        </section>

    )
}