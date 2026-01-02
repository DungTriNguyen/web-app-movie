'use client'

import { HomeApiResponse } from '@/types/home-response'
import BannerSlider from '@/components/Movie/banner-slider'
import MovieSlider from '@/components/Movie/movie-slider'
import { MovieCardSkeleton, BannerSkeleton } from '@/components/ui/skeleton'
import EmptyState from '@/components/ui/empty-state'
import ErrorState from '@/components/ui/error-state'
import useGetHome from '@/hooks/o-phim/home/use-get-home'
import { MovieDetailItem } from '@/types/common'

interface HomePageClientProps {
  locale: string
  initialData?: HomeApiResponse['data']
}

export default function HomePageClient({ locale, initialData }: HomePageClientProps) {
  const { data, isLoading, error, refetch } = useGetHome(
    {},
    {
      // @ts-expect-error - initialData is omitted in ReactQueryOptions type but React Query supports it
      initialData: initialData
        ? {
            data: {
              status: 'success',
              message: '',
              data: initialData,
            },
            success: true,
            message: '',
          }
        : undefined,
      staleTime: 5 * 60 * 1000, // 5 minutes - prevent refetch for 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      refetchOnMount: false, // Don't refetch on mount if we have initialData
    },
  )

  if (error) {
    return <ErrorState onRetry={() => refetch()} className='min-h-[60vh]' />
  }

  // data is HomeApiResponse, items are in data.data.items
  const movies = data?.data?.items || []
  const featuredMovies = movies.slice(0, 10) // Top 10 for banner
  const trendingMovies = movies.slice(0, 20) // Trending section
  const latestMovies = movies.slice(20, 40) // Latest updates
  const recommendedMovies = movies.slice(40, 60) // Recommended

  return (
    <div className='container mx-auto px-4 py-20 md:px-6 md:py-24'>
      {/* Hero Banner */}
      <section className='mb-12'>
        {isLoading ? (
          <BannerSkeleton />
        ) : featuredMovies.length > 0 ? (
          <BannerSlider movies={featuredMovies as MovieDetailItem[]} locale={locale} />
        ) : (
          <EmptyState title='Không có phim nổi bật' />
        )}
      </section>

      {/* Trending Movies */}
      <section className='mb-12'>
        {isLoading ? (
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {Array.from({ length: 12 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        ) : trendingMovies.length > 0 ? (
          <MovieSlider
            movies={trendingMovies as MovieDetailItem[]}
            locale={locale}
            title='🔥 Phim Nổi Bật'
            showNavigation
          />
        ) : null}
      </section>

      {/* Latest Updates */}
      <section className='mb-12'>
        {isLoading ? (
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {Array.from({ length: 12 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        ) : latestMovies.length > 0 ? (
          <MovieSlider
            movies={latestMovies as MovieDetailItem[]}
            locale={locale}
            title='🎬 Phim Mới Cập Nhật'
            showNavigation
          />
        ) : null}
      </section>

      {/* Recommended Movies */}
      <section className='mb-12'>
        {isLoading ? (
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {Array.from({ length: 12 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        ) : recommendedMovies.length > 0 ? (
          <MovieSlider
            movies={recommendedMovies as MovieDetailItem[]}
            locale={locale}
            title='⭐ Phim Đề Xuất'
            showNavigation
          />
        ) : null}
      </section>
    </div>
  )
}
