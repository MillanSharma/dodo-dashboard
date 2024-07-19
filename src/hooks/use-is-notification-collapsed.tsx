import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'

export default function useIsNotificationCollapsed() {
  const [isNotificationCollapsed, setIsNotificationCollapsed] = useLocalStorage(
    {
      key: 'collapsed-sidebar',
      defaultValue: false,
    }
  )

  useEffect(() => {
    const handleResize = () => {
      setIsNotificationCollapsed(
        window.innerWidth < 768 ? false : isNotificationCollapsed
      )
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isNotificationCollapsed, setIsNotificationCollapsed])

  return [isNotificationCollapsed, setIsNotificationCollapsed] as const
}
