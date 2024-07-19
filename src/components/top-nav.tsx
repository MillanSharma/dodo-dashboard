interface TopNavProps {
  basePage: string
  currentPage: string
}

export function TopNav({ basePage, currentPage }: TopNavProps) {
  return (
    <div className='flex gap-4'>
      <p className='text-sm font-extralight text-slate-500'>{basePage}</p>
      <p className='text-sm font-extralight text-slate-500'>/</p>
      <p className='text-sm font-light'>{currentPage}</p>
    </div>
  )
}
