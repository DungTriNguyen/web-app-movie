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
    params: { slug: string[], locale: string }
}

export default function ArticleDetail({ params }: Props) {
    const t = useTranslations("academy");
    const [slug, id] = params.slug || [];
    const { locale } = params;
    const { data: blog, isLoading: isLoadingBlog, error: errorBlog } = useGetBlog({ customId: id, LanguageCode: locale });
    const { data: content, isLoading: isLoadingContent, error: errorContent } = useGetBlogContent({ customId: id, LanguageCode: locale });

    if (errorBlog || errorContent || (!blog && !isLoadingBlog) || (!content && !isLoadingContent)) {
        return <div className="w-full py-20 min-h-screen flex justify-center items-center text-center text-red-500 text-lg font-semibold">{t("not supported")}</div>;
    }

    return (
        <>
            <div className="w-full bg-gray-900 px-4">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center pt-[100px] md:pt-30">
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
                        <h1 className="text-white text-3xl md:!text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px]">{blog?.title || "Academy Title"}</h1>
                        <div className="flex gap-2 pb-1">
                            <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                                {blog?.createdDate ? formatDate(new Date(blog.createdDate), "dd MMM · HH:mm 'UTC'") : "dd MMM · HH:mm UTC"}
                            </p>
                            {blog?.author && (
                                <>
                                    <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">/</p>
                                    <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug">By: {blog.author}</p>
                                </>
                            )}

                        </div>
                        <div className="flex gap-2 pt-1">
                            {blog?.sameAs?.map((tag: string, tagIdx: number) => (
                                <Tag key={tagIdx} text={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-card-list min-h-screen">
                <ArticleContent blog={blog} content={content} />
            </div>
        </>
    );
}