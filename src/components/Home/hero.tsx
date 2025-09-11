'use client'

import useGetHome from '@/hooks/o-phim/home/use-get-home'
import Image from 'next/image'
import { formatImageUrl, formatImageUrlKphim } from '@/lib/utils'
import useGetListMovieKphim from '@/hooks/k-phim/list-movie-new-update/use-get-movies-service'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Hero() {
  const { data: homeData } = useGetHome({})
  const { data: movieNewUpdata } = useGetListMovieKphim({ version: 'v3', page: 1 })
  return (
    <section className='relative min-h-screen'>
      {homeData?.data?.items?.map((movie: any, index: number) => (
        <div className='relative z-10 w-full lg:pt-12'>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 10 },
              1024: { slidesPerView: 1.937, spaceBetween: 48 },
            }}
            className='custom-swiper swiper-custom-pagination w-full'
          >
            <SwiperSlide key={movie.id}>
              <div>
                <Image
                  src={formatImageUrl(movie.thumb_url)}
                  alt={movie.name}
                  width={100}
                  height={100}
                  className='h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='custom-swiper-pagination mt-12 flex justify-center' />
        </div>
      ))}
      <div className='absolute inset-0 bg-black/20' />
    </section>
  )
}
