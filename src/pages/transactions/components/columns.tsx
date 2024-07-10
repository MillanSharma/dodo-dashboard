import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'

import { TransactionSchema } from '../data/schema'
import DataTableRowTransaction from './data-table-row-transaction'
import DataTablePayment from './data-table-payment'
import DataTableStatus from './data-table-status'

export const columns: ColumnDef<TransactionSchema>[] = [
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
    accessorKey: 'transaction_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Transaction Id' />
    ),
    cell: ({ row }) => <DataTableRowTransaction row={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'user_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='User' />
    ),
    cell: ({ row }) => (
      <div className='w-[200px] truncate'>{row.getValue('user_name')}</div>
    ),
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
    cell: ({ row }) => (
      <div className='w-[80px]'>{row.getValue('currency')}</div>
    ),
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
  {
    accessorKey: 'payment',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Payment' />
    ),
    cell: ({ row }) => <DataTablePayment row={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
]
