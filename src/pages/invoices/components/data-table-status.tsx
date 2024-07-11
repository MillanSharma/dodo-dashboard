type PaymentStatus = 'pending' | 'past_due'

interface DataTableStatusProps {
  row: {
    user_name: string
    amount: string
    currency: string
    invoice_id: string
    due_date: Date
    status: string
  }
}

const paymentStatus: Record<PaymentStatus, JSX.Element> = {
  past_due: <p className='text-green-400'>Past due</p>,
  pending: <p className='text-yellow-400'>Pending</p>,
}

const isPaymentStatus = (status: string): status is PaymentStatus => {
  return status === 'pending' || status === 'past_due'
}

const DataTableStatus: React.FC<DataTableStatusProps> = ({ row }) => {
  if (!isPaymentStatus(row.status)) {
    return <div>Invalid status</div>
  }

  const statusInfo = paymentStatus[row.status]

  return <div className='flex items-center'>{statusInfo}</div>
}

export default DataTableStatus
