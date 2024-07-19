import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import { NotificationSection } from './notification-section'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  const { pathname } = useLocation()
  const showNotification = pathname === '/dashboard'

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'}  h-full ${showNotification ? 'xl:mr-96' : ''}`}
      >
        <Outlet />
      </main>
      {showNotification && (
        <div className='hidden xl:flex'>
          <NotificationSection />
        </div>
      )}
    </div>
  )
}
