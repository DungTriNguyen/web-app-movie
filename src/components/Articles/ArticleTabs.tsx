"use client";
import { useTranslations } from "next-intl";
import CardList from "../cardList";
import SearchBar from "../SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import useGetBlogCategories from "@/hooks/use-get-blog-categories";
import useGetBlogs from "@/hooks/use-get-blogs";

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

    return (
        <div className="w-full pt-12">
            <Tabs defaultValue="all" className="w-full gap-0 ">
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