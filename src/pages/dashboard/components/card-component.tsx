import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconTrendingUp2 } from '@tabler/icons-react'
import { IconTrendingDown2 } from '@tabler/icons-react'
import clsx from 'clsx'

interface CardComponentProps {
  index: number
  title: string
  quantity: string
  trendUp: string
  trending: boolean
}

export default function CardComponent(props: CardComponentProps) {
  const { title, trendUp, quantity, trending, index } = props
  return (
    <Card
      className={clsx(
        'flex flex-col flex-wrap items-start justify-center',
        index % 2 === 0
          ? 'border-none bg-card_even shadow-none'
          : 'border-none bg-card_odd shadow-none'
      )}
    >
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='md:text-md text-sm font-medium'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row flex-wrap items-center justify-between w-full'>
        <div className='text-sm font-thin md:text-xl md:font-bold'>
          {quantity}
        </div>
        <div className='flex flex-row text-xs text-muted-foreground'>
          {trendUp}
          <p>
            {trending ? (
              <IconTrendingUp2 size='16' className='ml-2' />
            ) : (
              <IconTrendingDown2 size='16' className='ml-2' />
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
