import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { generateRealTimeTransaction } from '@/lib/utils'
import { RealTimeTransaction } from '@/pages/transactions/data/schema'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import '../transition.css'

const RealtimeDataCard: React.FC = () => {
  const [data, setData] = useState<RealTimeTransaction[]>([])
  
  useEffect(() => {
    const newData = Array.from({ length: 3 }, () =>
      generateRealTimeTransaction()
    )
    setData(newData)

    const intervalId = setInterval(() => {
      setData((prevData) => {
        const newItem = generateRealTimeTransaction()
        const updatedData = [...prevData.slice(1), newItem]
        return updatedData
      })
    }, 2000)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Card className='h-230 max-h-230px overflow-auto border-none p-4'>
        {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between px-8 py-4 ${
                index === 0 ? 'opacity-15' : index === 1 ? 'opacity-40' : index  === 2 ? 'opacity-90' : 'opacity-90'
              }`}
            >
              <div className='w-200 flex items-center gap-2'>
                <Avatar className='flex h-8 w-8 items-center justify-center bg-gray-950 text-white'>
                  <AvatarFallback>{item.avatarName}</AvatarFallback>
                </Avatar>
                <div className='ml-2'>
                  <p className={`font-extra-light text-${index <= 2 ? 'xs' : 'sm'}`}>{item.name}</p>
                </div>
              </div>
              <div className='min-w-20'>
                <p className={`font-extra-light text-${index <= 2 ? 'xs' : 'sm'}`}>{item.amount}</p>
                <p className={`font-extra-light text-${index <= 2 ? 'xs' : 'sm'}`}>{item.status}</p>
              </div>
            </div>
        ))}
    </Card>
  )
}

export default RealtimeDataCard
