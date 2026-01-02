'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MovieDetailResponse } from '@/types/movie'
import { formatImageUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { Play, Calendar, Clock, Globe, Users, Film, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import VideoPlayer from './video-player'
import EpisodeList from './episode-list'
import MovieSlider from './movie-slider'
import { Skeleton } from '@/components/ui/skeleton'
import ErrorState from '@/components/ui/error-state'
import useGetMovieInfo from '@/hooks/o-phim/movies/use-get-movie-info'

interface MovieDetailClientProps {
  locale: string
  slug: string
  initialData?: MovieDetailResponse['data']
}

export default function MovieDetailClient({ locale, slug, initialData }: MovieDetailClientProps) {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null)

  const { data, isLoading, error, refetch } = useGetMovieInfo(
    { slug },
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

  if (isLoading && !initialData) {
    return <MovieDetailSkeleton />
  }

  // data is MovieDetailResponse, item is in data.data.item
  if (!data?.data?.item) {
    return <ErrorState title='Không tìm thấy phim' className='min-h-[60vh]' />
  }

  const movie = data.data.item
  const posterUrl = movie.poster_url || movie.thumb_url
  const imageUrl = posterUrl?.startsWith('http') ? posterUrl : formatImageUrl(posterUrl || '')
  const backdropUrl = movie.thumb_url
  const backdropImageUrl = backdropUrl?.startsWith('http') ? backdropUrl : formatImageUrl(backdropUrl || '')

  // Auto-select first episode when movie data is available
  useEffect(() => {
    if (movie.episodes && movie.episodes.length > 0 && !selectedVideoUrl) {
      const firstEpisode = movie.episodes[0]?.server_data?.[0]
      const videoUrl = firstEpisode?.link_embed || firstEpisode?.link_m3u8
      if (videoUrl) {
        setSelectedVideoUrl(videoUrl)
        setSelectedEpisode(videoUrl)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.episodes])

  const handleEpisodeSelect = (serverName: string, episodeLink: string) => {
    setSelectedVideoUrl(episodeLink)
    setSelectedEpisode(episodeLink)
  }

  // Get video URL - use selectedVideoUrl or fallback to first episode
  const videoUrl =
    selectedVideoUrl ||
    movie.episodes?.[0]?.server_data?.[0]?.link_embed ||
    movie.episodes?.[0]?.server_data?.[0]?.link_m3u8 ||
    null

  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section with Backdrop */}
      <div className='relative h-[400px] md:h-[500px] lg:h-[600px]'>
        <div className='absolute inset-0'>
          {backdropImageUrl && (
            <Image src={backdropImageUrl} alt={movie.name} fill className='object-cover' priority sizes='100vw' />
          )}
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black' />
        </div>

        {/* Content Overlay */}
        <div className='relative z-10 container mx-auto flex h-full items-end px-4 pb-12'>
          <div className='flex w-full max-w-7xl flex-col gap-6 md:flex-row'>
            {/* Poster */}
            <div className='flex-shrink-0'>
              <div className='relative aspect-[2/3] w-[200px] overflow-hidden rounded-lg shadow-2xl'>
                <Image
                  src={imageUrl || '/placeholder-movie.jpg'}
                  alt={movie.name}
                  fill
                  className='object-cover'
                  sizes='200px'
                />
              </div>
            </div>

            {/* Movie Info */}
            <div className='flex flex-1 flex-col justify-end text-white'>
              <h1 className='mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>{movie.name}</h1>

              <div className='mb-4 flex flex-wrap items-center gap-4 text-sm'>
                {movie.year && (
                  <div className='flex items-center gap-2'>
                    <Calendar className='h-4 w-4' />
                    <span>{movie.year}</span>
                  </div>
                )}
                {movie.time && (
                  <div className='flex items-center gap-2'>
                    <Clock className='h-4 w-4' />
                    <span>{movie.time}</span>
                  </div>
                )}
                {movie.country && movie.country.length > 0 && (
                  <div className='flex items-center gap-2'>
                    <Globe className='h-4 w-4' />
                    <span>{movie.country[0].name}</span>
                  </div>
                )}
                {movie.tmdb?.vote_average && (
                  <div className='flex items-center gap-2'>
                    <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                    <span>{movie.tmdb.vote_average.toFixed(1)}</span>
                  </div>
                )}
                {movie.view > 0 && (
                  <div className='flex items-center gap-2'>
                    <Eye className='h-4 w-4' />
                    <span>{movie.view.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className='mb-4 flex flex-wrap gap-2'>
                {movie.category?.map((cat: any, index: number) => (
                  <Link key={cat._id || `cat-${index}`} href={`/${locale}/category/${cat.slug}`}>
                    <Badge variant='outline' className='border-white/20 bg-white/10 text-white hover:bg-white/20'>
                      {cat.name}
                    </Badge>
                  </Link>
                ))}
              </div>

              <div className='flex gap-3'>
                {videoUrl && (
                  <Button
                    size='lg'
                    className='bg-primary hover:bg-primary/90'
                    onClick={() => setSelectedVideoUrl(videoUrl)}
                  >
                    <Play className='mr-2 h-5 w-5 fill-current' />
                    Xem ngay
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Left Column - Main Content */}
          <div className='space-y-8 lg:col-span-2'>
            {/* Video Player */}
            {videoUrl && (
              <div>
                <VideoPlayer src={videoUrl} poster={imageUrl} />
              </div>
            )}

            {/* Episode List */}
            {movie.episodes && movie.episodes.length > 0 && (
              <div>
                <EpisodeList
                  episodes={movie.episodes}
                  currentEpisode={selectedEpisode || undefined}
                  onSelectEpisode={handleEpisodeSelect}
                />
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className='mb-4 text-2xl font-bold'>Nội dung</h2>
              <div
                className='prose prose-invert text-muted-foreground max-w-none'
                dangerouslySetInnerHTML={{ __html: movie.content || '' }}
              />
            </div>

            {/* Movie Info Details */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {movie.director && movie.director.length > 0 && (
                <div>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Film className='h-4 w-4' />
                    Đạo diễn
                  </h3>
                  <p className='text-muted-foreground'>{movie.director.join(', ')}</p>
                </div>
              )}

              {movie.actor && movie.actor.length > 0 && (
                <div>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Users className='h-4 w-4' />
                    Diễn viên
                  </h3>
                  <p className='text-muted-foreground'>{movie.actor.join(', ')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className='space-y-6'>
            {/* Movie Stats */}
            <div className='bg-card space-y-4 rounded-lg p-6'>
              <h3 className='text-lg font-semibold'>Thông tin</h3>
              <div className='space-y-3 text-sm'>
                {movie.type && (
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Loại phim:</span>
                    <span className='font-medium'>{movie.type}</span>
                  </div>
                )}
                {movie.status && (
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Trạng thái:</span>
                    <span className='font-medium'>{movie.status}</span>
                  </div>
                )}
                {movie.quality && (
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Chất lượng:</span>
                    <Badge>{movie.quality}</Badge>
                  </div>
                )}
                {movie.lang && (
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Ngôn ngữ:</span>
                    <span className='font-medium'>{movie.lang}</span>
                  </div>
                )}
                {movie.episode_total && (
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Số tập:</span>
                    <span className='font-medium'>{movie.episode_total}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MovieDetailSkeleton() {
  return (
    <div className='bg-background min-h-screen'>
      <Skeleton className='h-[400px] w-full md:h-[500px] lg:h-[600px]' />
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='space-y-8 lg:col-span-2'>
            <Skeleton className='aspect-video w-full' />
            <Skeleton className='h-64 w-full' />
            <Skeleton className='h-32 w-full' />
          </div>
          <div>
            <Skeleton className='h-64 w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
