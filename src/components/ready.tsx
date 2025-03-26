import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Ready() {
    const t = useTranslations('ready');
    return (
        <section id="ready" className="container mx-auto py-16 px-4">
            <div className="bg-[url('/images/ready.jpeg')] bg-cover bg-center bg-no-repeat md:gap-4 bg-background rounded-2xl text-center flex-col flex self-stretch py-[46px] px-6">
                <h1 className="text-4xl font-bold ">{t("title")}</h1>
                <p className="text-muted-foreground text-sm">{t("description")}</p>
                <Button className="w-fit mx-auto">{t("button")}</Button>
            </div>
        </section>
    )
}