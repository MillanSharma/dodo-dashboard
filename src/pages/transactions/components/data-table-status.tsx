type PaymentStatus = 'pending' | 'failed' | 'completed'

interface DataTableStatusProps {
  row: {
    transaction_id: string
    user_name: string
    amount: string
    currency: string
    payment: string
    status: string
  }
}

const paymentStatus: Record<PaymentStatus, JSX.Element> = {
  failed: <p className='text-red-400'>Failed</p>,
  completed: <p className='text-green-400'>Completed</p>,
  pending: <p className='text-yellow-400'>Pending</p>,
}

const isPaymentStatus = (status: string): status is PaymentStatus => {
  return status === 'pending' || status === 'failed' || status === 'completed'
}

const DataTableStatus: React.FC<DataTableStatusProps> = ({ row }) => {
  if (!isPaymentStatus(row.status)) {
    return <div>Invalid status</div>
  }

  const statusInfo = paymentStatus[row.status]

  return <div className='flex items-center'>{statusInfo}</div>
}

export default DataTableStatus
