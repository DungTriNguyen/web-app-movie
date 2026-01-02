import { cn } from '@/lib/utils'
import { Film } from 'lucide-react'

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  className?: string
}

export default function EmptyState({
  title = 'Không tìm thấy dữ liệu',
  description = 'Không có nội dung nào để hiển thị',
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 text-center', className)}>
      {icon || <Film className='text-muted-foreground mb-4 h-16 w-16' />}
      <h3 className='text-foreground mb-2 text-lg font-semibold'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </div>
  )
}
