'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import VideoIframe from './video-iframe'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  controls?: boolean
}

// Check if URL is an embed link (iframe) or direct video/m3u8
function isEmbedUrl(url: string): boolean {
  if (!url) return false
  // If it's an m3u8 file, use video tag
  if (url.includes('.m3u8')) return false
  // If it's a direct video file, use video tag
  if (url.match(/\.(mp4|webm|ogg|mov|avi|mkv)(\?|$)/i)) return false
  // For share links and other URLs, use iframe (most video hosting services)
  // This includes opstream90, ok.ru, and other streaming services
  return true
}

export default function VideoPlayer({ src, poster, className, autoPlay = false, controls = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const useIframe = isEmbedUrl(src)

  useEffect(() => {
    // Only setup video event listeners if not using iframe
    if (useIframe) {
      setIsLoading(false)
      return
    }

    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handleCanPlay = () => setIsLoading(false)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [useIframe])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    if (!isFullscreen) {
      container.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const time = parseFloat(e.target.value)
    video.currentTime = time
    setCurrentTime(time)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Use iframe for embed links, video tag for direct video/m3u8
  if (useIframe) {
    return <VideoIframe src={src} className={className} />
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative aspect-video w-full overflow-hidden rounded-lg bg-black', className)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className='h-full w-full'
        autoPlay={autoPlay}
        muted={isMuted}
        playsInline
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
          <Loader2 className='text-primary h-12 w-12 animate-spin' />
        </div>
      )}

      {/* Controls Overlay */}
      {controls && (
        <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100'>
          {/* Progress Bar */}
          <div className='px-4 pb-2'>
            <input
              type='range'
              min='0'
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className='accent-primary h-1 w-full cursor-pointer appearance-none rounded-lg bg-white/30'
            />
          </div>

          {/* Controls */}
          <div className='flex items-center justify-between px-4 pb-4'>
            <div className='flex items-center gap-2'>
              <Button variant='ghost' size='icon' onClick={togglePlay} className='text-white hover:bg-white/20'>
                {isPlaying ? <Pause className='h-5 w-5 fill-current' /> : <Play className='h-5 w-5 fill-current' />}
              </Button>

              <Button variant='ghost' size='icon' onClick={toggleMute} className='text-white hover:bg-white/20'>
                {isMuted ? <VolumeX className='h-5 w-5' /> : <Volume2 className='h-5 w-5' />}
              </Button>

              <span className='text-sm text-white'>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <Button variant='ghost' size='icon' onClick={toggleFullscreen} className='text-white hover:bg-white/20'>
              {isFullscreen ? <Minimize className='h-5 w-5' /> : <Maximize className='h-5 w-5' />}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
