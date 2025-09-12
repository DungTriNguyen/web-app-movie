'use client'
import Hero from '@/components/Home/hero'
import Feature from '@/components/Home/feature'
import FAQ from '@/components/Home/faq'
import Ready from '@/components/Home/ready'
import Advance from '@/components/Home/advance'
import useGetCategoriesMovieKphim from '@/hooks/k-phim/categories/use-get-categories-movie'
import useGetCategoriesKphim from '@/hooks/k-phim/categories/use-get-categories'
import useGetCountriesMovieKphim from '@/hooks/k-phim/countries/use-get-countries-movie'
import useGetCountriesKphim from '@/hooks/k-phim/countries/use-get-countries'
import useGetListMovieKphim from '@/hooks/k-phim/list-movie-new-update/use-get-movies-service'
export default function Home() {
  const { data: categories } = useGetCategoriesMovieKphim({ type_list: 'phim-18' })
  const { data: categoriesKphim } = useGetCategoriesKphim({})
  const { data: countries } = useGetCountriesMovieKphim({ type_list: 'viet-nam' })
  const { data: countriesKphim } = useGetCountriesKphim({})
  const { data: dataInfoMovie } = useGetListMovieKphim({ page: 1, version: 'v3' })
  console.log('print hahahaha:', dataInfoMovie)
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <div className='relative z-10'>
        <Hero />
      </div>
      <div className='bg-accent relative -mt-1 flex w-full flex-col justify-between overflow-hidden md:h-[1200px]'>
        <iframe
          src='https://my.spline.design/dotwaves-31mfNuH5WRrPGRGZn6joJgy2/'
          className='absolute inset-0 z-0 h-full w-full scale-120 object-cover'
          loading='lazy'
        ></iframe>
        <div className='from-accent absolute top-0 left-0 z-0 h-full w-full bg-gradient-to-b to-transparent md:h-[1200px]' />
        <div className='relative z-10 flex h-full flex-col justify-between'>
          <Feature />
          <div className='relative overflow-hidden pb-0 md:pb-0'>
            <Advance />
          </div>
        </div>
      </div>
      <Ready />
      <FAQ />
    </div>
  )
}
