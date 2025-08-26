import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import ArticleSlide from "./ArticleSlide";
import ArticleTabs from "./ArticleTabs";

export default function ArticleSection() {
    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/" className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">/</span>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/articles" className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Articles</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-white text-5xl font-semibold font-['Inter'] uppercase leading-[67.20px]">
                    Articles
                </h1>
                <ArticleSlide />
            </div>
            <ArticleTabs />
        </div>
    );
}