import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'
import { invoiceSchema } from '@/pages/transactions/data/schema'
import { DataTableColumnHeader } from '@/pages/transactions/components/data-table-column-header'
import DataTableInvoice from './data-table-invoice'
import { formattedDate } from '@/lib/utils'
import DataTableStatus from './data-table-status'

export const columns: ColumnDef<invoiceSchema>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'invoice_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Invoice Id' />
    ),
    cell: ({ row }) => <DataTableInvoice row={row.original} />,    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: 'customer_name',
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => <div className='w-[200px] truncate'>{row.getValue('customer_name')}</div>,
    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: 'amount',
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Amount' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('amount')}</div>, 
},
{
    accessorKey: 'currency',
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Currency' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('currency')}</div>,
    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: 'due_date',
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Due' />
    ),
    cell: ({ row }) => <div className='w-[200px] truncate'>{formattedDate(row.getValue('due_date'))}</div>,
    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: 'status',
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => <DataTableStatus row={row.original} />,  
    enableSorting: false,
    enableHiding: false,
  },
]
