"use client";
import Hero from "@/components/Home/hero";
import Feature from "@/components/Home/feature";
import FAQ from "@/components/Home/faq";
import Ready from "@/components/Home/ready";
import Advance from "@/components/Home/advance";
import useGetHome from "@/hooks/home/use-get-home";
import useGetCategories from "@/hooks/categories/use-get-categories";
import useGetMoviesCategory from "@/hooks/categories/use-get-movies-category";
import useGetCountries from "@/hooks/countries/use-get-countries";
import useGetMoviesCountry from "@/hooks/countries/use-get-movies-country";
import useGetYears from "@/hooks/years/use-get-years";
import useGetMoviesYear from "@/hooks/years/use-get-movies-year";
import useGetMoviesSearch from "@/hooks/searchs/use-get-movies-search";
import useGetActorsMovie from "@/hooks/movies/use-get-actors-movie";
import useGetImgMovie from "@/hooks/movies/use-get-img-movie";
import useGetMovieInfo from "@/hooks/movies/use-get-movie-info";
import useGetListMovie from "@/hooks/movies/use-get-movies";
import useGetListMovieKphim from "@/hooks/k-phim/use-get-movies-kphim";

export default function Home() {
  // const { data: homeData } = useGetHome({});
  // const { data: categoriesData } = useGetCategories({});
  // const { data: moviesCategoryData } = useGetMoviesCategory({
  //   slug: "hanh-dong",
  // });
  // const { data: countriesData } = useGetCountries({});
  // const { data: moviesCountryData } = useGetMoviesCountry({
  //   slug: "han-quoc",
  // });
  // const { data: yearsData } = useGetYears({
  //   year: 2025,
  // });
  // const { data: moviesYearData } = useGetMoviesYear({
  //   year: 2025,
  // });
  // const { data: moviesSearchData } = useGetMoviesSearch({
  //   keywords: "batman",
  // });
  // const { data: actorsMovieData } = useGetActorsMovie({
  //   slug: "batman",
  // });
  // const { data: imgMovieData } = useGetImgMovie({
  //   slug: "tro-choi-con-muc",
  // });
  // const { data: movieInfoData } = useGetMovieInfo({
  //   slug: "tu-dinh-cao-den-vuc-sau",
  // });
  // const { data: moviesData } = useGetListMovie({
  //   slug: "phim-bo",
  // });
  const { data: moviesData } = useGetListMovieKphim({});
  console.log("dataa home page:", moviesData);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="bg-accent relative w-full md:h-[1200px] overflow-hidden -mt-1 flex flex-col justify-between">
        {/* <iframe
          src="https://my.spline.design/dotwaves-31mfNuH5WRrPGRGZn6joJgy2/"
          className="absolute inset-0 w-full h-full object-cover z-0 scale-120"
          loading="lazy"
        ></iframe> */}
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-accent to-transparent z-0 md:h-[1200px]" />
        <div className="relative z-10 flex flex-col h-full justify-between">
          <Feature />
          <div className="relative pb-0 md:pb-0 overflow-hidden">
            <Advance />
          </div>
        </div>
      </div>
      <Ready />
      <FAQ />
    </div>
  );
}
