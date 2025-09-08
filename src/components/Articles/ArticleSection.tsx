import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import ArticleSlide from "./ArticleSlide";
import ArticleTabs from "./ArticleTabs";
import { useTranslations } from "next-intl";

export default function ArticleSection() {
    const t = useTranslations("academy");
    return (
        <div className="w-full">
            <div className="bg-gray-900 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/" className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">{t("root link")}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">/</span>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/academy" className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">{t("title")}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-white !text-5xl font-semibold font-['Inter'] uppercase leading-[67.20px]">
                        {t("title")}
                    </h1>
                    <ArticleSlide />
                </div>
            </div>
            <ArticleTabs />
        </div>
    );
}