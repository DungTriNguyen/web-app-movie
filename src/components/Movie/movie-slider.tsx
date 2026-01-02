'use client'

import { useRef, useEffect } from 'react'
import { MovieDetailItem } from '@/types/common'
import MovieCard from './movie-card'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MovieSliderProps {
  movies: MovieDetailItem[]
  locale: string
  title?: string
  className?: string
  showNavigation?: boolean
}

export default function MovieSlider({ movies, locale, title, className, showNavigation = true }: MovieSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = container.clientWidth * 0.8

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  if (!movies || movies.length === 0) return null

  return (
    <div className={cn('relative w-full', className)}>
      {title && (
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-foreground text-2xl font-bold md:text-3xl'>{title}</h2>
          {showNavigation && movies.length > 4 && (
            <div className='hidden gap-2 md:flex'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll('left')}
                className='border-primary/20 hover:bg-primary/10 hover:border-primary h-10 w-10'
              >
                <ChevronLeft className='h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll('right')}
                className='border-primary/20 hover:bg-primary/10 hover:border-primary h-10 w-10'
              >
                <ChevronRight className='h-5 w-5' />
              </Button>
            </div>
          )}
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className='scrollbar-hide flex gap-4 overflow-x-auto pb-4'
        style={{
          scrollSnapType: 'x mandatory',
        }}
      >
        {movies.map(movie => (
          <div key={movie._id} className='scroll-snap-align-start min-w-[150px] flex-shrink-0 md:min-w-[180px]'>
            <MovieCard movie={movie} locale={locale} variant='default' />
          </div>
        ))}
      </div>
    </div>
  )
}
