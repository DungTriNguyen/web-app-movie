import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import HomePageClient from '@/components/Home/home-page-client'
import { getMovieHomeService } from '@/services/o-phim/home/home-service'

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  // Fetch home data
  const homeResponse = await getMovieHomeService({})

  const homeData = homeResponse.data?.data

  return <HomePageClient locale={locale} initialData={homeData} />
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

  return {
    // title: t('title', { defaultValue: 'Xem Phim Online - Phim Mới Cập Nhật' }),
    // description: t('description', {
    //   defaultValue: 'Xem phim online miễn phí, chất lượng cao. Phim mới cập nhật hàng ngày với đầy đủ thể loại.',
    // }),
  }
}
