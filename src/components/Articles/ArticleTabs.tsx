"use client";
import { useTranslations } from "next-intl";
import CardList from "../Cards/cardList";
import SearchBar from "../Common/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import useGetBlogCategories from "@/hooks/use-get-blog-categories";
import useGetBlogs from "@/hooks/use-get-blogs";
import { Skeleton } from "../ui/skeleton";

export default function ArticleTabs() {
    const t = useTranslations("academy");

    const {
        query: { isSuccess },
        data: categoryData,
    } = useGetBlogCategories();

    const {
        query: { isSuccess: isBlogSuccess },
        data: blogData
    } = useGetBlogs();
    if (!isBlogSuccess) {
        return (
            <div className="bg-gray-900 pt-10 pb-20 px-4">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:px-4">
                    {[...Array(6)].map((_, idx) => (
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
            <Tabs defaultValue="all" className="w-full gap-0">
                <div className="max-w-[1440px] mx-auto w-full flex flex-col-reverse md:flex-row items-start justify-between px-4 overflow-x-hidden">
                    <TabsList className="flex gap-4 rounded-none justify-start overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:w-auto">
                        <TabsTrigger
                            value="all"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.all")}
                        </TabsTrigger>
                        {isSuccess && categoryData?.items.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category?.title?.toLowerCase() as string}
                                className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                            >
                                {t(`tabs.${category?.title?.toLowerCase()}`)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <SearchBar />
                </div>
                <TabsContent value="all" className="w-full">
                    {isBlogSuccess && <CardList blogs={blogData?.items || []} />}
                </TabsContent>
                {isSuccess && categoryData?.items.map((category) => (
                    <TabsContent value={category?.title?.toLowerCase() || ""} key={category.id} className="w-full">
                        {isBlogSuccess && (
                            <CardList blogs={blogData?.items || []} category={category?.title?.toLowerCase()} />
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}