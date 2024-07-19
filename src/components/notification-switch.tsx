import { useState } from 'react'
import { IconLayoutSidebar, IconLayoutSidebarRight } from '@tabler/icons-react'
import { Button } from './custom/button'
import { NotificationBar } from './notification-bar'

export default function NotificationSwitch() {
  const [isNotificationOpened, setIsNotificationOpened] =
    useState<boolean>(false)

  return (
    <div className='xl:hidden'>
      <Button
        size='icon'
        variant='ghost'
        className='rounded-full'
        onClick={() => setIsNotificationOpened(!isNotificationOpened)}
      >
        {isNotificationOpened ? (
          <IconLayoutSidebar size={20} />
        ) : (
          <IconLayoutSidebarRight size={20} />
        )}
      </Button>
      <NotificationBar
        isNotificationOpened={isNotificationOpened}
        setIsNotificationOpened={() =>
          setIsNotificationOpened(!isNotificationOpened)
        }
      />
    </div>
  )
}
