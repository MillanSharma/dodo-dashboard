import { Sheet, SheetContent } from '@/components/ui/sheet'
import { SheetContentRender } from './sheet-content'

interface NotificationBarProps {
  isNotificationOpened: boolean
  setIsNotificationOpened: () => void
}

export function NotificationBar({
  isNotificationOpened,
  setIsNotificationOpened,
}: NotificationBarProps) {
  return (
    <Sheet
      open={isNotificationOpened}
      onOpenChange={() => setIsNotificationOpened()}
    >
      <SheetContent className='h-full overflow-y-auto'>
        <SheetContentRender />
      </SheetContent>
    </Sheet>
  )
}
