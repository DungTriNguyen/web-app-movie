'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { EpisodeServerSchema } from '@/schemas/common'
import { z } from 'zod'

type EpisodeServer = z.infer<typeof EpisodeServerSchema>

interface EpisodeListProps {
  episodes: EpisodeServer[]
  currentEpisode?: string
  onSelectEpisode: (serverName: string, episodeLink: string) => void
  className?: string
}

export default function EpisodeList({ episodes, currentEpisode, onSelectEpisode, className }: EpisodeListProps) {
  const [selectedServer, setSelectedServer] = useState<string>(episodes[0]?.server_name || '')

  // Update selectedServer when episodes change
  useEffect(() => {
    if (episodes && episodes.length > 0 && !selectedServer) {
      setSelectedServer(episodes[0].server_name)
    }
  }, [episodes, selectedServer])

  if (!episodes || episodes.length === 0) return null

  const currentServer = episodes.find(server => server.server_name === selectedServer)
  const episodeList = currentServer?.server_data || []

  return (
    <div className={cn('space-y-4', className)}>
      {/* Server Selection */}
      {episodes.length > 1 && (
        <div className='flex flex-wrap gap-2'>
          {episodes.map(server => (
            <button
              key={server.server_name}
              onClick={() => setSelectedServer(server.server_name)}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                selectedServer === server.server_name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80',
              )}
            >
              {server.server_name}
            </button>
          ))}
        </div>
      )}

      {/* Episode List */}
      <div>
        <h3 className='text-foreground mb-3 text-lg font-semibold'>Danh sách tập ({episodeList.length})</h3>
        <div className='grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
          {episodeList.map((episode, index) => {
            const episodeUrl = episode.link_embed || episode.link_m3u8
            const isActive = currentEpisode === episodeUrl
            return (
              <button
                key={`${episode.slug}-${index}`}
                onClick={() => {
                  if (episodeUrl) {
                    onSelectEpisode(selectedServer, episodeUrl)
                  }
                }}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-primary-foreground ring-primary ring-offset-background ring-2 ring-offset-2'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80',
                )}
              >
                {episode.name || `Tập ${index + 1}`}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
