import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />
}

function MovieCardSkeleton() {
  return (
    <div className='space-y-3'>
      <Skeleton className='aspect-[2/3] w-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-3 w-2/3' />
      </div>
    </div>
  )
}

function BannerSkeleton() {
  return <Skeleton className='h-[400px] w-full md:h-[500px] lg:h-[600px]' />
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

export { Skeleton, MovieCardSkeleton, BannerSkeleton, MovieDetailSkeleton }
