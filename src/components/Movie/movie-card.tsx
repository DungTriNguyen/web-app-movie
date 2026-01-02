'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MovieDetailItem } from '@/types/common'
import { cn } from '@/lib/utils'
import { formatImageUrl } from '@/lib/utils'
import { Play, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface MovieCardProps {
  movie: MovieDetailItem
  locale: string
  className?: string
  variant?: 'default' | 'compact'
}

export default function MovieCard({ movie, locale, className, variant = 'default' }: MovieCardProps) {
  const movieUrl = `/${locale}/movie/${movie.slug}`
  const posterUrl = movie.poster_url || movie.thumb_url
  const imageUrl = posterUrl?.startsWith('http') ? posterUrl : formatImageUrl(posterUrl || '')

  return (
    <Link href={movieUrl} className={cn('group block', className)}>
      <div
        className={cn(
          'bg-card hover-glow relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]',
          variant === 'compact' ? 'aspect-[2/3]' : 'aspect-[2/3]',
        )}
      >
        {/* Poster Image */}
        <div className='relative h-full w-full'>
          <Image
            src={imageUrl || '/placeholder-movie.jpg'}
            alt={movie.name}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-110'
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
          />

          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='bg-primary/90 flex items-center gap-2 rounded-full p-3 backdrop-blur-sm'>
              <Play className='h-6 w-6 fill-white text-white' />
            </div>
            {variant !== 'compact' && <p className='text-center text-sm font-medium text-white'>Xem ngay</p>}
          </div>

          {/* Badges */}
          <div className='absolute top-2 left-2 flex flex-wrap gap-2'>
            {movie.quality && (
              <Badge className='bg-primary/90 text-primary-foreground backdrop-blur-sm'>{movie.quality}</Badge>
            )}
            {movie.episode_current && movie.episode_total && (
              <Badge className='bg-secondary/90 text-secondary-foreground backdrop-blur-sm'>
                {movie.episode_current}/{movie.episode_total}
              </Badge>
            )}
          </div>

          {/* Rating/View Badge */}
          {movie.tmdb?.vote_average && (
            <div className='bg-quaternary/90 absolute top-2 right-2 flex items-center gap-1 rounded-full px-2 py-1 backdrop-blur-sm'>
              <span className='text-quinary text-xs font-semibold'>⭐ {movie.tmdb.vote_average.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Movie Info */}
      <div className='mt-3 space-y-1'>
        <h3 className='text-foreground group-hover:text-primary line-clamp-2 text-sm font-semibold transition-colors'>
          {movie.name}
        </h3>
        <div className='text-muted-foreground flex items-center gap-2 text-xs'>
          <span>{movie.year}</span>
          {movie.view > 0 && (
            <>
              <span>•</span>
              <div className='flex items-center gap-1'>
                <Eye className='h-3 w-3' />
                <span>{movie.view.toLocaleString()}</span>
              </div>
            </>
          )}
        </div>
        {variant !== 'compact' && movie.category && movie.category.length > 0 && (
          <div className='flex flex-wrap gap-1 pt-1'>
            {movie?.category?.slice(0, 2).map((cat: any, index: number) => (
              <Badge key={index} variant='outline' className='text-xs'>
                {cat.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
