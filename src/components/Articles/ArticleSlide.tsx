"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Tag from "../Common/Tag";
import Link from "next/link";
import useGetBlogs from "@/hooks/use-get-blogs";
import { DEFAULT_PARAMS } from "@/constants/constants";
import { formatDate } from "date-fns";
import { Skeleton } from "../ui/skeleton";

export default function ArticleSlide() {
    const { data: blogData, isLoading } = useGetBlogs({ ...DEFAULT_PARAMS });
    const slides = blogData?.items
        ?.slice()
        .sort(
            (a, b) => new Date(b?.createdDate ?? 0).getTime() -
                new Date(a?.createdDate ?? 0).getTime()
        )
        ?.slice(0, 5);

    if (isLoading) {
        return (
            <div className="w-full featured-swiper !pt-6 animate-pulse">

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg bg-slate-700 w-full h-[220px] md:h-[470px]" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:px-12">
                        <Skeleton className="w-32 h-4 rounded-xl bg-slate-700" />
                        <Skeleton className="h-6 w-2/3 rounded-2xl bg-slate-700" />
                        <Skeleton className="h-4 w-1/2 rounded-2xl bg-slate-700" />
                        <div className="flex gap-x-2 mt-2">
                            {[0, 1, 2].map((tagIdx) => (
                                <div key={tagIdx} className="w-12 h-6 bg-slate-800 rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Swiper
            modules={[Pagination]}
            className="w-full featured-swiper !pt-6"
            pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet featured-bullet",
                bulletActiveClass:
                    "swiper-pagination-bullet-active featured-bullet-active",
            }}
        >
            {slides?.map((slide, idx) => (
                <SwiperSlide
                    key={idx}
                    className="w-full"
                >
                    <Link href={`/academy/${slide?.itemUrl}`}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={slide?.images?.[0]?.origin || "/images/image.png"}
                                    alt={slide?.title || ""}
                                    width={600}
                                    height={470}
                                    className="rounded-lg object-cover w-full max-h-[470px]"
                                    unoptimized
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:px-12">
                                <p className="text-slate-400 text-xs font-medium leading-tight my-2">
                                    {formatDate(slide?.createdDate ?? "", "dd MMM · HH:mm 'UTC'")}
                                </p>
                                <h3 className="text-white text-3xl md:text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px] line-clamp-2">
                                    {slide.title}
                                </h3>
                                <p className="text-slate-400 text-xl font-medium font-['Inter'] leading-loose line-clamp-2">
                                    {slide.description}
                                </p>
                                <div className="flex gap-x-2">

                                    {[0, 1, 2].map((tagIdx) => (
                                        <Tag key={tagIdx} text="New" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}