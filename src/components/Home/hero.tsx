"use client";

import { NEXT_PUBLIC_APP_URL } from "@/configs/env";
// import ChartTab from "../Charts/chart-tab";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import Image from "next/image";
import useGetHome from "@/hooks/home/use-get-home";
import { HomeApiResponse } from "@/types/home-response";
import { formatImageUrl } from "@/lib/utils";
import useGetListMovieKphim from "@/hooks/k-phim/use-get-movies-kphim";

export default function Hero() {
  const t = useTranslations("home.hero");
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const { data: homeData } = useGetHome({});
  const { data: moviesData } = useGetListMovieKphim({});
  const dataImage = homeData as HomeApiResponse;
  // console.log("dataa home data imggggggg:", homeData);
  const handleClick = async () => {
    setIsLoading(true);
    try {
      window.location.href = `${NEXT_PUBLIC_APP_URL}`;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
      // Opacity giảm dần từ 1 đến 0 khi scroll từ 0 đến 100
      const max = 500;
      const y = window.scrollY;
      setScrollOpacity(Math.max(0, 1 - y / max));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gap-6 md:gap-12 pt-40 px-2 md:px-20 md:py-16 overflow-hidden pb-30 md:pb-10 bg-accent ">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 max-h-[60vh] md:w-full md:max-h-[100vh] bg-hero">
        <iframe
          src="https://my.spline.design/intergalacticcloser-S9rSVcYf61pdQ54LKvbOwkr7/"
          className="w-[140%] md:w-full h-full object-cover z-20"
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent to-transparent z-20 h-[400px]" />
      </div>
      <div className="max-w-[1440px] mx-auto z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        <div className="flex flex-col gap-6 items-start justify-center py-9 flex-1  self-stretch z-10">
          <h1 className="text-white text-center md:text-left text-3xl lg:text-5xl font-semibold font-['Inter'] uppercase leading-10 lg:leading-[67.20px] max-w-[700px]">
            {t("title")}
          </h1>
          <p className="text-gray-100 text-sm font-normal font-['Inter'] leading-snug text-center md:text-left">
            {t("description")}
          </p>
          <div className="flex flex-col max-md:hidden sm:flex-row gap-4">
            <Button
              className="bg-primary text-white px-8 py-6 rounded-lg text-base cursor-pointer"
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("button.loading")}
                </>
              ) : (
                t("button.start")
              )}
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-16 flex-1 z-20 px-2"></div>
        <div className="flex justify-center items-start self-stretch md:hidden flex-row gap-4">
          <Button
            className="bg-primary text-white px-8 py-6 rounded-lg text-base"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("button.loading")}
              </>
            ) : (
              t("button.start")
            )}
          </Button>
        </div>
      </div> */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 max-h-[60vh] md:w-full md:max-h-[100vh] bg-hero">
        <Image
          src="/images/hero.png"
          alt="hero"
          fill
          className="object-cover"
        />
      </div> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full">
        <Image
          src={formatImageUrl(dataImage?.data?.items[3]?.thumb_url || "")}
          alt="hero"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full">
        <Image
          src={
            moviesData?.data?.items[0]?.poster_url ||
            "https://phimimg.com/upload/vod/20250909-1/e6156c5c1f14b1182a2e36f3d4a333fb.jpg"
          }
          alt="hero"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full">
        <Image
          src={
            moviesData?.data?.items[0]?.thumb_url ||
            "https://phimimg.com/upload/vod/20250909-1/c210e8252a160c9ff10cf23858d5f0b4.jpg"
          }
          alt="hero"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>
      {!isScrolled && (
        <div className="absolute left-0 bottom-5 right-0 flex flex-col z-20 animate-bounce -mb-7">
          <div
            className="text-center justify-center text-white text-xl font-bold font-['Inter'] uppercase lg:leading-loose"
            style={{ opacity: scrollOpacity }}
          >
            Scroll
          </div>
          <div
            className="flex justify-center items-center"
            style={{ opacity: scrollOpacity }}
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      )}
    </section>
  );
}
