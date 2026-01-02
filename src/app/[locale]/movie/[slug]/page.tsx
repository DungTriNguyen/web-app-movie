import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { getMovieInfoService } from '@/services/o-phim/movies/movie-info-service'
import MovieDetailClient from '@/components/Movie/movie-detail-client'
import { NEXT_PUBLIC_BASE_URL } from '@/configs/env'

type PageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export default async function MovieDetailPage({ params }: PageProps) {
  const { locale, slug } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  // Fetch movie data
  const movieResponse = await getMovieInfoService({ slug })

  if (!movieResponse.data || !movieResponse.success) {
    notFound()
  }

  const movieData = movieResponse.data.data
  console.log(movieData, 'movieData')

  return <MovieDetailClient locale={locale} slug={slug} initialData={movieData} />
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  // const t = await getTranslations({ locale, namespace: 'movie' })

  try {
    const movieResponse = await getMovieInfoService({ slug })

    if (!movieResponse.data?.data?.item) {
      return {
        // title: t('notFound', { defaultValue: 'Không tìm thấy phim' }),
      }
    }

    const movie = movieResponse.data.data.item
    const seoData = movieResponse.data.data.seoOnPage

    const title = seoData?.titleHead || movie.name
    const description = seoData?.descriptionHead || movie.content?.substring(0, 160) || ''
    const imageUrl = movie.poster_url || movie.thumb_url
    const canonicalUrl = `${NEXT_PUBLIC_BASE_URL}/${locale}/movie/${slug}`

    return {
      title,
      description,
      keywords: movie.category?.map(cat => cat.name).join(', ') || '',
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: 'Movie Streaming',
        images: imageUrl ? [{ url: imageUrl }] : [],
        locale,
        type: 'video.movie',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: imageUrl ? [imageUrl] : [],
      },
      alternates: {
        canonical: canonicalUrl,
      },
    }
  } catch {
    return {
      // title: t('notFound', { defaultValue: 'Không tìm thấy phim' }),
    }
  }
}
