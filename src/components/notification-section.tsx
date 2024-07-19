import { SheetContentRender } from './sheet-content'

export function NotificationSection() {
  return (
    <div className='w-96 border-l-2 p-6 lg:fixed lg:right-0 lg:top-0 lg:h-full lg:overflow-y-auto'>
      <SheetContentRender />
    </div>
  )
}
