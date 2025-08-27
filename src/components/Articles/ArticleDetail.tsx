import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import Tag from "../Tag";
import ArticleContent from "./ArticleContent";
import RelatedArticle from "./RelatedArticle";

type Props = {
    params: { slug: string[] }
}

export default function ArticleDetail({ params }: Props) {
    const [slug, id] = params.slug || [];
    console.log("Slug:", slug);
    console.log("ID:", id);
    return (
        <>
            <div className="w-full bg-gray-900 px-4">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center pt-30 gap-1">
                    <div className="max-w-[720px] py-4 px-0 md:px-4">
                        <Breadcrumb >
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
                                <BreadcrumbSeparator>
                                    <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">/</span>
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href="/articles"
                                            className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight max-w-[180px] truncate block"
                                        >
                                            What is DeFi? A Beginner’s Guide to Decentralized Finance
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="text-white text-3xl md:text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px]">What is DeFi? A Beginner’s Guide to Decentralized Finance</h1>
                        <div className="flex gap-6">
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">26 May · 16:10 UTC</p>
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">/</p>
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">By: Blackberry</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Tag text="Featured" />
                            <Tag text="Featured" />
                            <Tag text="Featured" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-800 min-h-screen">
                <ArticleContent />
            </div>
        </>
    );
}