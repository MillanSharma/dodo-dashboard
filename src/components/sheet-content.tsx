import { Activities, Notifications } from '@/data/sidelinks'

export function SheetContentRender() {
  const notificationData = Notifications
  const activitiesData = Activities

  return (
    <>
      <div className='my-4'>
        <p className='text-md font-bold'>Notifications</p>
      </div>
      <div className='flex flex-col space-y-8'>
        {notificationData.map((item) => (
          <div className='flex items-center gap-4' key={item.time}>
            <div>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-background_drawer'>
                {item.icon}
              </div>
            </div>
            <div className='mt-0 flex flex-col items-start justify-center'>
              <p className='w-72 truncate text-base'>{item.title}</p>
              <p className='text-sm font-thin'>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='my-4'>
        <p className='text-md font-bold'>Activities</p>
      </div>
      <div className='flex flex-col space-y-8'>
        {activitiesData.map((item, index) => (
          <div className='relative flex items-center gap-4' key={item.time}>
            <div>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-background_drawer'>
                <img
                  src={item.image}
                  alt='item_img'
                  height='inherit'
                  width='inherit'
                  className='rounded-full'
                />
              </div>
            </div>
            <div className='mt-0 flex flex-col items-start justify-center'>
              <p className='w-72 truncate text-base'>{item.title}</p>
              <p className='text-sm font-thin'>{item.time}</p>
            </div>
            {index < activitiesData.length - 1 && (
              <div className='absolute left-4 top-12 h-6 border-l border-gray-300 dark:border-gray-700'></div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
