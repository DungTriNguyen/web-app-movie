import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
export default function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className="bg-accent flex flex-col px-0 md:px-4">
            <div className="w-full max-w-[1440px] mx-auto py-20 px-4 self-stretch flex flex-col md:flex-row md:gap-12 gap-0">
                <div className="flex flex-col md:flex-col items-start gap-9 w-full md:w-auto md:flex-1 mb-8 md:mb-0">
                    <Image src="/images/logo.svg" alt="DexSpace Logo" width={237} height={67} className="items-center justify-center " />
                    <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                        {t("description")}
                    </p>
                </div>
                <div className="flex flex-row md:flex-col gap-12 w-full md:w-auto md:flex-1 mb-8 md:mb-0">
                    <div className="flex flex-col gap-9 items-start flex-1">
                        <h4 className="text-gray-100 text-base font-semibold font-['Inter'] uppercase leading-normal">{t("product")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li>
                                <Link href={`${NEXT_PUBLIC_APP_URL}/dashboard`} className="text-gray-400 hover:text-white">
                                    {t("trading")}
                                </Link>
                            </li>
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("academy")}</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-9 items-start flex-1 md:hidden">
                        <h4 className="text-gray-100 text-base font-semibold font-['Inter'] uppercase leading-normal">{t("company")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li><a href="/terms-of-service" className="text-gray-400 hover:text-white">{t("terms")}</a></li>
                            <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">{t("privacy")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-row md:flex-col gap-12 w-full md:w-auto md:flex-1 mb-8 md:mb-0 hidden md:flex">
                    <div className="flex flex-col gap-9 items-start flex-1">
                        <h4 className="text-gray-100 text-base font-semibold font-['Inter'] uppercase leading-normal">{t("company")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li><a href="/terms-of-service" className="text-gray-400 hover:text-white">{t("terms")}</a></li>
                            <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">{t("privacy")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-9 items-start w-full md:w-auto md:flex-1 pt-10 md:pt-0">
                    <h4 className="text-gray-100 text-base font-semibold font-['Inter'] uppercase leading-normal hidden md:block">{t("connect")}</h4>
                    <div className="flex space-x-4">
                        <a href="https://x.com/dexspace_io" >
                            <img src="/images/twitter.svg" alt="Twitter" className="w-5 h-5" />
                        </a>
                        <a href="https://discord.com/channels/1399657161390424146/1399657162082353164" >
                            <img src="/images/discord.svg" alt="Discord" />
                        </a>
                        <a href="http://t.me/dexspace_io" >
                            <img src="/images/telegram.svg" alt="Telegram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 py-9 md:text-center">
                <p className="text-gray-400 text-xs">© {new Date().getFullYear()} DexSpace Crypto Platform LLC. All rights reserved.</p>
            </div>

        </footer>
    )
}