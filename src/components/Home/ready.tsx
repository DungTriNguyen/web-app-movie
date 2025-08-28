'use client'

import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function Ready() {
    const t = useTranslations('ready');
    const handleClick = () => {
        window.location.href = `${NEXT_PUBLIC_APP_URL}`;
    }
    return (
        <section id="ready" className="py-16 px-4 bg-accent">
            <div className="container mx-auto bg-[url('/images/ready.jpeg')] bg-cover bg-center bg-no-repeat gap-4 bg-background rounded-2xl text-center flex-col flex self-stretch py-[46px] px-6">
                <h1 className="text-gray-100 text-3xl lg:text-5xl font-semibold font-['Inter'] text-center uppercase leading-10 lg:leading-[67.20px] max-w-[700px] mx-auto">{t("title")}</h1>
                <p className="text-gray-100 text-sm font-medium font-['Inter'] leading-snug">{t("description")}</p>
                <Button onClick={handleClick} className="w-fit mx-auto py-6 cursor-pointer">{t("button")}</Button>
            </div>
        </section>
    )
}