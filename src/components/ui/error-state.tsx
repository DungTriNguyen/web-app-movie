import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorStateProps {
  title?: string
  description?: string
  onRetry?: () => void
  className?: string
}

export default function ErrorState({
  title = 'Đã xảy ra lỗi',
  description = 'Không thể tải dữ liệu. Vui lòng thử lại sau.',
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 text-center', className)}>
      <AlertCircle className='text-destructive mb-4 h-16 w-16' />
      <h3 className='text-foreground mb-2 text-lg font-semibold'>{title}</h3>
      <p className='text-muted-foreground mb-4 text-sm'>{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant='outline'>
          Thử lại
        </Button>
      )}
    </div>
  )
}
