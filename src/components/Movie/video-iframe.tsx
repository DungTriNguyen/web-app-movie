'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface VideoIframeProps {
  src: string
  className?: string
}

export default function VideoIframe({ src, className }: VideoIframeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={cn('relative aspect-video w-full overflow-hidden rounded-lg bg-black', className)}>
      {!hasError && (
        <iframe
          key={src}
          src={src}
          className='h-full w-full'
          allowFullScreen
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          style={{ border: 'none' }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {isLoading && !hasError && (
        <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
          <Loader2 className='h-12 w-12 animate-spin text-primary' />
        </div>
      )}
      {hasError && (
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white'>
          <p className='mb-2 text-sm'>Không thể tải video</p>
          <a
            href={src}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:underline'
          >
            Mở trong tab mới
          </a>
        </div>
      )}
    </div>
  )
}

