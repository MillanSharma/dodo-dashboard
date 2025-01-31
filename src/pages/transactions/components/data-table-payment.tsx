import { IconBrandPaypal } from '@tabler/icons-react'
import { IconBuildingBank } from '@tabler/icons-react'
import { IconCreditCard } from '@tabler/icons-react'

type PaymentMethod = 'bank_transfer' | 'credit_card' | 'paypal'

interface DataTablePaymentProps {
  row: {
    transaction_id: string
    user_name: string
    amount: string
    currency: string
    payment: string
    status: string
  }
}

const paymentIconMapping: Record<
  PaymentMethod,
  { icon: JSX.Element; label: string }
> = {
  bank_transfer: {
    icon: <IconBuildingBank size='16' />,
    label: 'Bank transfer',
  },
  credit_card: {
    icon: <IconCreditCard size='16' />,
    label: 'Credit card',
  },
  paypal: {
    icon: <IconBrandPaypal size='16' />,
    label: 'Paypal',
  },
}

const isPaymentMethod = (payment: string): payment is PaymentMethod => {
  return (
    payment === 'bank_transfer' ||
    payment === 'credit_card' ||
    payment === 'paypal'
  )
}

const DataTablePayment: React.FC<DataTablePaymentProps> = ({ row }) => {
  if (!isPaymentMethod(row.payment)) {
    return <div>Invalid payment method</div>
  }

  const paymentInfo = paymentIconMapping[row.payment]

  return (
    <div className='flex items-center'>
      <p className='mr-2'>{paymentInfo?.label}</p>
      <div className='w-[80px] truncate'>{paymentInfo?.icon}</div>
    </div>
  )
}

export default DataTablePayment
