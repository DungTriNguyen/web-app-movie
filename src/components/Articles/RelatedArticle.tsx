"use client";
import CardItem from "../Cards/cardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import useGetBlogs from "@/hooks/use-get-blogs";
import { DEFAULT_PARAMS } from "@/constants/constants";
export default function RelatedArticle({ BlogId }: { BlogId: string }) {
    const t = useTranslations("academy");

    const { data } = useGetBlogs({ ...DEFAULT_PARAMS, PageSize: 5, ExcludeBlogId: BlogId });
    return (
        <div className="max-w-[1440px] mx-auto px-4">
            <div className="w-full max-w-[1200px] justify-start text-white text-3xl md:text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px]">{t("related articles")}</div>
            <Swiper
                modules={[Pagination]}
                className="w-full featured-swiper !pt-2"
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet featured-bullet",
                    bulletActiveClass:
                        "swiper-pagination-bullet-active featured-bullet-active",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 48,
                    },
                }}
            >
                {data?.items?.map((blog) => (
                    <SwiperSlide
                        key={blog.id}
                        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        <CardItem blogs={[blog]} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
