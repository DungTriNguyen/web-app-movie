import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
export default function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className="bg-accent flex flex-col items-center self-stretch w-full h-full md:px-20 px-4 max-md:py-10">
            <div className="flex w-full max-w-[1440px] flex-col md:flex-row py-16 px-4  justify-between items-start gap-12 self-stretch">
                <div className="flex flex-col items-start gap-9 max-w-[320px] flex-1">
                    <Image src="/images/logo.svg" alt="DexSpace Logo" width={100} height={30} className="items-center justify-center " />
                    <p className="text-gray-400 text-sm">
                        {t("description")}
                    </p>
                </div>
                <div className="flex flex-row gap-12 items-start flex-1 justify-between w-full">
                    <div className="flex flex-col gap-9 items-start flex-1">
                        <h4 className="text-base font-bold ">{t("products")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li>
                                <Link href={`${NEXT_PUBLIC_APP_URL}/dashboard`} className="text-gray-400 hover:text-white">
                                    {t("trading")}
                                </Link>
                            </li>
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("academy")}</a></li>
                            {/* <li><a href="#" className="text-gray-400 hover:text-white">{t("features")}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("analytics")}</a></li> */}
                        </ul>
                    </div>
                    {/* <div className="flex flex-col gap-9 items-start flex-1">
                        <h4 className="text-base font-bold ">{t("company")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("about")}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("blog")}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">{t("careers")}</a></li>
                        </ul>
                    </div> */}
                    <div className="flex flex-col gap-9 items-start flex-1">
                        <h4 className="text-base font-bold ">{t("legal")}</h4>
                        <ul className="gap-2.5 flex flex-col items-start text-sm">
                            <li><a href="/terms-of-service" className="text-gray-400 hover:text-white">{t("terms")}</a></li>
                            <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">{t("privacy")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-9 items-start flex-1" >
                    <h4 className="text-base font-bold hidden md:block">{t("connect")}</h4>
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
            <div className="px-4 py-9 text-center">
                <p className="text-gray-400 text-xs">© {new Date().getFullYear()} DexSpace Crypto Platform LLC. All rights reserved.</p>
            </div>

        </footer>
    )
}