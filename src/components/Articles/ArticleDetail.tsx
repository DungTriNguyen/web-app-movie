"use client";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import Tag from "../Common/Tag";
import ArticleContent from "./ArticleContent";
import { useTranslations } from "next-intl";
import useGetBlog from "@/hooks/use-get-blog";
import { formatDate } from "date-fns";
import useGetBlogContent from "@/hooks/use-get-blog-content";

type Props = {
    params: { slug: string[] }
}

export default function ArticleDetail({ params }: Props) {
    const t = useTranslations("academy");
    const [slug, id] = params.slug || [];
    const { data: blog } = useGetBlog({ customId: id });
    const { data: content } = useGetBlogContent({ customId: id });
    return (
        <>
            <div className="w-full bg-gray-900 px-4">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center pt-30 gap-1">
                    <div className="w-full md:w-[720px] py-4 px-0 md:px-4">
                        <Breadcrumb >
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
                                <BreadcrumbSeparator>
                                    <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight">/</span>
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href={`/academy/${blog?.itemUrl}`}
                                            className="text-gray-500 text-xs font-medium font-['Inter'] leading-tight max-w-[180px] truncate block"
                                        >
                                            {blog?.title || "Academy Detail"}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="text-white text-3xl md:text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px]">{blog?.title || "Academy Title"}</h1>
                        <div className="flex gap-6">
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                                {blog?.createdDate ? formatDate(new Date(blog.createdDate), "dd MMM · HH:mm 'UTC'") : "dd MMM · HH:mm UTC"}
                            </p>
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">/</p>
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">By: {blog?.author || "Unknown"}</p>
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
                <ArticleContent blog={blog} content={content} />
            </div>
        </>
    );
}