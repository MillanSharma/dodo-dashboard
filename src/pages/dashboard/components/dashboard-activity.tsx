
const slugData = [
  {
    title: 'Transactions reports updated and refund initiated',
    time: 'Just now',
  },
  {
    title: 'Downloaded July invoices',
    time: '30 Mins Ago',
  },
  {
    title: 'Refund cleared for Mr. Talwar',
    time: '14 Hours Ago',
  },
  {
    title: 'User Brown just joined',
    time: '3 Days ago',
  },
  {
    title: 'Downloaded July invoices',
    time: '30 Mins Ago',
  },
  {
    title: 'Refund cleared for Mr. Talwar',
    time: '14 Hours Ago',
  },
  {
    title: 'User Brown just joined',
    time: '3 Days ago',
  },
]

export function DashboardActivities() {
  return (
    <div className='flex flex-col w-100 items-center gap-2'>
      {slugData.map((item) => (
        <div className='w-full' key={item.time}>
          <p className='text-md'>{item.title}</p>
          <p className='text-sm'>{item.time}</p>
        </div>
      ))}
    </div>
  )
}
