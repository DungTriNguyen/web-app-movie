"use client"
import CardItem from "./cardItem";
import { useTranslations } from "next-intl";
import { GetBlogResponse } from "@/types/blog";

type CardListProps = {
    category?: string,
    blogs: GetBlogResponse[],
    onLoadMore?: () => void,
    hasMore?: boolean,
};

export default function CardList({ blogs, category, onLoadMore, hasMore }: CardListProps) {
    const t = useTranslations("academy");
    let items = blogs || [];
    if (category) {
        items = items.filter((item) => item.categoryName === category);
    }

    if (items.length === 0) {
        return (
            <div className="bg-card-list pt-10 pb-20 px-4">
                <div className="max-w-[1440px] mx-auto text-center text-white text-xl md:text-2xl font-semibold font-['Inter'] leading-10 md:leading-[56px]">
                    {t("no articles")}
                </div>
            </div>
        )
    }

    return (
        <div className="bg-card-list pt-10 pb-20 px-4">
            <div className="card-list max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:px-4">
                {items.map((item) => (
                    <div className="card-item" key={item.id}>
                        <CardItem blogs={[item]} />
                    </div>
                ))}
            </div>
            {hasMore && onLoadMore && (
                <div className="flex justify-center mt-12">
                    <div
                        className="max-h-11 min-h-9 pl-3 pr-4 bg-gray-900 rounded-lg outline outline-offset-[-1px] outline-gray-700 inline-flex justify-center items-center gap-0.5 overflow-hidden cursor-pointer"
                        onClick={onLoadMore}
                    >
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.11523 9.41034L4.883 7.64258L9.99912 12.7587L15.1152 7.64258L16.883 9.41034L9.99912 16.2942L3.11523 9.41034Z" fill="#A0AEC0" />
                        </svg>
                        <div className="justify-center text-slate-400 text-sm font-semibold font-['Inter'] leading-tight ml-2">{t("load more")}</div>
                    </div>
                </div>
            )}
        </div>
    )
}