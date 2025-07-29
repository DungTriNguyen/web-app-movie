import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";

export default function Feature() {
    const t = useTranslations('feature');
    return (
        <section id="features" className="md:container md:mx-auto md:p-20 p-4 py-10 min-h-20 gap-12 flex flex-col items-center justify-center">
            <div className="text-center ">
                <h2 className="text-4xl font-bold">{t("title")}</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 self-stretch min-h-20">
                <Card className="p-6 border-none ">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2  ">
                        <Image src="/images/chart.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            {t("real-time-data")}
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("real-time-data-description")}

                        </div>
                    </CardContent>
                </Card>
                <Card className="p-6 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/reset.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            {t("seamless-trading")}
                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("seamless-trading-description")}
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-6 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/shield.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
                            {t("user-friendly-interface")}

                        </CardTitle>
                        <div className=" text-muted-foreground text-sm text-center">
                            {t("user-friendly-interface-description")}
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-6 border-none">
                    <CardContent className="flex flex-col items-center gap-2 text-xl space-y-2">
                        <Image src="/images/link.svg" alt="Real-Time Data" width={40} height={40} />
                        <CardTitle >
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