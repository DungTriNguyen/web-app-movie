"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Tag from "../Tag";
import Link from "next/link";

export default function ArticleSlide() {
    // Example data array for slides
    const slides = [
        {
            image: "/images/image.png",
            alt: "image",
            date: "26 May · 16:10 UTC",
            title: "How to trade safely on DexSpace",
            description: "Learn the best practices for secure trading and maximizing your profits.",
            tag: ["New", "Featured", "Popular"]
        },
        {
            image: "/images/image.png",
            alt: "image",
            date: "27 May · 10:00 UTC",
            title: "Understanding Smart Contracts: The Code Behind DeFi",
            description: "Discover the latest trends and insights for crypto markets this year.",
            tag: ["New", "Featured", "Popular"]
        },
        {
            image: "/images/image.png",
            alt: "image",
            date: "27 May · 10:00 UTC",
            title: "Understanding Smart Contracts: The Code Behind DeFi",
            description: "Discover the latest trends and insights for crypto markets this year.",
            tag: ["New", "Featured", "Popular"]
        }
        // Add more slides as needed
    ];

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
            {slides.map((slide, idx) => (
                <SwiperSlide
                    key={idx}
                    className="w-full"
                >
                    <Link href={`/academy/detail/${idx}`}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    width={600}
                                    height={370}
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:px-12">
                                <p className="text-slate-400 text-xs font-medium leading-tight my-2">
                                    {slide.date}
                                </p>
                                <h3 className="text-white text-3xl md:text-4xl font-semibold font-['Inter'] uppercase leading-10 md:leading-[56px] line-clamp-2">
                                    {slide.title}
                                </h3>
                                <p className="text-slate-400 text-xl font-medium font-['Inter'] leading-loose line-clamp-2">
                                    {slide.description}
                                </p>
                                <div className="flex gap-x-2">

                                    {slide.tag && slide.tag.map((tagText, tagIdx) => (
                                        <Tag key={tagIdx} text={tagText} />
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