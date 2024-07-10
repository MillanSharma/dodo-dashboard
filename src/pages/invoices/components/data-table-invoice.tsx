import * as React from 'react'
import { IconCheck } from '@tabler/icons-react'
import { IconCopy } from '@tabler/icons-react'
import { invoiceSchema } from '@/pages/transactions/data/schema'

interface DataTableInvoice {
  row: invoiceSchema
}

const DataTableInvoice = ({ row }: DataTableInvoice) => {
  const [copied, setCopied] = React.useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(row.invoice_id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <div className='flex items-center'>
      <div className='w-[80px] truncate'>{row.invoice_id}</div>
      <button
        className='ml-2 rounded p-1 hover:bg-gray-800'
        onClick={copyToClipboard}
      >
        {copied ? <IconCheck size={12} /> : <IconCopy size={12} />}
      </button>
    </div>
  )
}

export default DataTableInvoice
