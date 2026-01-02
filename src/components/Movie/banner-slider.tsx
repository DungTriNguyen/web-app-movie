'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MovieDetailItem } from '@/types/common'
import { cn } from '@/lib/utils'
import { formatImageUrl } from '@/lib/utils'
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BannerSliderProps {
  movies: MovieDetailItem[]
  locale: string
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function BannerSlider({
  movies,
  locale,
  className,
  autoPlay = true,
  autoPlayInterval = 5000,
}: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!autoPlay || isHovered || movies.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % movies.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, movies.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + movies.length) % movies.length)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % movies.length)
  }

  if (!movies || movies.length === 0) return null

  const currentMovie = movies[currentIndex]
  const backdropUrl = currentMovie.thumb_url || currentMovie.poster_url
  const imageUrl = backdropUrl?.startsWith('http') ? backdropUrl : formatImageUrl(backdropUrl || '')
  const movieUrl = `/${locale}/movie/${currentMovie.slug}`

  return (
    <div
      className={cn('relative h-[400px] w-full overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src={imageUrl || '/placeholder-backdrop.jpg'}
          alt={currentMovie.name}
          fill
          className='object-cover'
          priority={currentIndex === 0}
          sizes='100vw'
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col justify-end p-6 md:p-12'>
        <div className='max-w-2xl space-y-4'>
          <h1 className='line-clamp-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>{currentMovie.name}</h1>

          <div className='flex flex-wrap items-center gap-3 text-sm text-white/80'>
            {currentMovie.year && <span>{currentMovie.year}</span>}
            {currentMovie.category && currentMovie.category.length > 0 && (
              <>
                <span>•</span>
                <span>{currentMovie.category[0].name}</span>
              </>
            )}
            {currentMovie.country && currentMovie.country.length > 0 && (
              <>
                <span>•</span>
                <span>{currentMovie.country[0].name}</span>
              </>
            )}
            {currentMovie.tmdb?.vote_average && (
              <>
                <span>•</span>
                <span className='flex items-center gap-1'>⭐ {currentMovie.tmdb.vote_average.toFixed(1)}</span>
              </>
            )}
          </div>

          <p className='line-clamp-3 text-sm text-white/90 md:text-base'>
            {currentMovie.content || currentMovie.origin_name}
          </p>

          {/* Actions */}
          <div className='flex gap-3 pt-2'>
            <Link href={movieUrl}>
              <Button size='lg' className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Play className='mr-2 h-5 w-5 fill-current' />
                Xem ngay
              </Button>
            </Link>
            <Link href={movieUrl}>
              <Button size='lg' variant='outline' className='border-white/20 bg-white/10 text-white hover:bg-white/20'>
                <Info className='mr-2 h-5 w-5' />
                Chi tiết
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {movies.length > 1 && (
        <>
          <Button
            variant='ghost'
            size='icon'
            onClick={goToPrevious}
            className='absolute top-1/2 left-4 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50'
          >
            <ChevronLeft className='h-6 w-6 text-white' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={goToNext}
            className='absolute top-1/2 right-4 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50'
          >
            <ChevronRight className='h-6 w-6 text-white' />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {movies.length > 1 && (
        <div className='absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-primary w-8' : 'w-2 bg-white/30 hover:bg-white/50',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
