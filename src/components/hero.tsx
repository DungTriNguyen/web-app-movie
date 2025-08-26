'use client'

import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
import ChartTab from "./chart-tab";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";

export default function Hero() {
    const t = useTranslations('home.hero');
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        setIsLoading(true)
        try {
            // Your loading logic here
            window.open(NEXT_PUBLIC_APP_URL, '_blank')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center gap-6 md:gap-12 pt-40 px-2 md:px-20 md:py-16 overflow-hidden pb-30 md:pb-10">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/images/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent z-0" />
            <div className="max-w-[1440px] mx-auto z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
                <div className="flex flex-col gap-6 items-start justify-center py-9 flex-1  self-stretch z-10">
                    <h1 className="text-white text-3xl lg:text-5xl font-semibold font-['Inter'] uppercase leading-10 lg:leading-[67.20px] max-w-[700px]">
                        {t('title')}
                    </h1>
                    <p className="text-gray-100 text-sm font-medium font-['Inter'] leading-snug">
                        {t('description')}
                    </p>
                    <div className="flex flex-col max-md:hidden sm:flex-row gap-4">
                        <Button variant="outline" className="border-muted border-2 text-secondary-foreground px-8 py-6 rounded-lg text-base">
                            {t('button.explore')}
                        </Button>
                        <Button
                            className="bg-primary text-white px-8 py-6 rounded-lg text-base"
                            onClick={handleClick}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t('button.loading')}
                                </>
                            ) : (
                                t('button.start')
                            )}
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-16 flex-1 z-20">
                    <ChartTab />
                </div>
                <div className="flex justify-center items-start self-stretch md:hidden flex-row gap-4">
                    <Button variant="outline" className="border-muted border-2 text-secondary-foreground md:px-8 py-6 px-3 rounded-lg text-base" >
                        {t('button.explore')}
                    </Button>
                    <Button
                        className="bg-primary text-white px-8 py-6 rounded-lg text-base"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {t('button.loading')}
                            </>
                        ) : (
                            t('button.start')
                        )}
                    </Button>
                </div>
            </div>
            <div className="absolute left-0 bottom-5 right-0 flex flex-col z-20 animate-bounce -mb-7">
                <div className="text-center justify-center text-white text-xl font-bold font-['Inter'] uppercase lg:leading-loose">Scroll</div>
                <div className="flex justify-center items-center">
                    <ChevronDown className="w-6 h-6 text-white" />
                </div>
            </div>
        </section>
    )
}

