"use client";
import { useLocale, useTranslations } from "next-intl";
import CardList from "../Cards/cardList";
import SearchBar from "../Common/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import useGetBlogCategories from "@/hooks/use-get-blog-categories";
import useGetBlogs from "@/hooks/use-get-blogs";
import { Skeleton } from "../ui/skeleton";
import { DEFAULT_PARAMS } from "@/constants/constants";
import { useEffect, useRef, useState } from "react";
import type { GetBlogResponse } from "@/types/blog";

export default function ArticleTabs() {
    const t = useTranslations("academy");
    const locale = useLocale();
    const [page, setPage] = useState(0);
    const [activeTab, setActiveTab] = useState("all");
    const [blogs, setBlogs] = useState<GetBlogResponse[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const {
        query: { isSuccess },
        data: categoryData,
    } = useGetBlogCategories({
        ...DEFAULT_PARAMS,
        LanguageCode: locale,
    });

    const params = {
        ...DEFAULT_PARAMS,
        LanguageCode: locale,
        PageIndex: page,
        ...(activeTab !== "all" && activeTab !== "search" ? { BlogCategoryId: activeTab } : {}),
        ...(activeTab === "search" && searchQuery ? { SearchTerm: searchQuery } : {})
    };

    const {
        query: { isSuccess: isBlogSuccess },
        data: blogData
    } = useGetBlogs(params);
    console.log("blogData", blogData);
    useEffect(() => {
        if (isBlogSuccess && blogData) {
            if (page === 0) {
                setBlogs(blogData.items || []);
            } else {
                setBlogs(prev => {
                    const newItems = (blogData.items || []).filter(
                        item => !prev.some(existing => existing.id === item.id)
                    );
                    return [...prev, ...newItems];
                });
            }
            setTotalCount(blogData.totalCount || 0);
        }
    }, [isBlogSuccess, blogData, page, activeTab]);

    useEffect(() => {
        setPage(0);
    }, [activeTab]);

    useEffect(() => {
        if (page > 0 && blogs.length > 0) {
            const lastCard = document.querySelector('.card-list .card-item:last-child');
            if (lastCard) {
                lastCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
                setTimeout(() => {
                    window.scrollBy({ top: 100, behavior: 'smooth' });
                }, 300);
            }
        }
    }, [blogs, page]);

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setActiveTab("all");
            setSearchQuery("");
        } else {
            setActiveTab("search");
            setSearchQuery(searchTerm);
        }
        setPage(0);
    }

    if (!isBlogSuccess) {
        return (
            <div className="bg-card-list pt-10 pb-20 px-4">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:px-4">
                    {[...Array(DEFAULT_PARAMS.PageSize)].map((_, idx) => (
                        <div key={idx} className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-4 min-h-[320px]">
                            <Skeleton className="w-full h-40 rounded-xl bg-slate-700" />
                            <Skeleton className="h-6 w-2/3 rounded-2xl bg-slate-700" />
                            <Skeleton className="h-4 w-1/2 rounded-2xl bg-slate-700" />
                            <Skeleton className="h-4 w-1/3 rounded-2xl bg-slate-700" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="w-full pt-12">
            <Tabs defaultValue="all" className="w-full gap-0" value={activeTab} onValueChange={tab => { setActiveTab(tab); }}>
                <div className="max-w-[1440px] mx-auto w-full flex flex-col-reverse md:flex-row items-start justify-between px-4 overflow-x-hidden">
                    <TabsList className="flex gap-4 rounded-none justify-start overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:w-auto bg-gray-900">
                        <TabsTrigger
                            value="all"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-gray-900 transition-colors rounded-none"
                        >
                            {t("tabs.all")}
                        </TabsTrigger>
                        {isSuccess && categoryData?.items.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-gray-900 transition-colors rounded-none"
                            >
                                {t(`tabs.${category?.title?.toLowerCase()}`)}
                            </TabsTrigger>
                        ))}
                        <TabsTrigger
                            value="search"
                            className="hidden"
                        />
                    </TabsList>
                    <SearchBar searchTerm={searchTerm} onChange={e => setSearchTerm(e.target.value)} onSearch={handleSearch} />
                </div>
                <TabsContent value="all" className="w-full">
                    {isBlogSuccess &&
                        <CardList blogs={blogs}
                            onLoadMore={() => setPage(page + 1)}
                            hasMore={blogs.length < totalCount}
                        />
                    }
                </TabsContent>
                <TabsContent value="search" className="w-full">
                    {isBlogSuccess &&
                        <CardList
                            blogs={blogs}
                            onLoadMore={() => setPage(page + 1)}
                            hasMore={blogs.length < totalCount}
                        />
                    }
                </TabsContent>
                {isSuccess && categoryData?.items.map((category) => (
                    <TabsContent value={category?.id} key={category.id} className="w-full">
                        {isBlogSuccess && (
                            <CardList
                                blogs={blogs}
                                category={category?.title}
                                onLoadMore={() => setPage(page + 1)}
                                hasMore={blogs.length < totalCount}
                            />
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}