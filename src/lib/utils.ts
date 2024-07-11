import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { faker } from '@faker-js/faker'
import { PaginationState } from '@tanstack/react-table'
import {
  InvoiceResponse,
  RealTimeTransaction,
  TransactionsResponse,
} from '@/pages/transactions/data/schema'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_BASE_URL = import.meta.env.VITE_BASE_URL

export async function fetchTransactions(
  pagination: PaginationState,
  search: string = ''
): Promise<TransactionsResponse> {
  const { pageSize, pageIndex } = pagination
  const response = await fetch(
    `${API_BASE_URL}/transactions?page=${pageIndex}&limit=${pageSize}&search=${search}`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return {
    rows: data.records,
    pageCount: Math.ceil(data.total / pageSize),
    rowCount: data.records.length,
  }
}
export async function fetchInvoices(
  pagination: PaginationState,
  search: string = ''
): Promise<InvoiceResponse> {
  const { pageSize, pageIndex } = pagination
  console.log(process.env)
  const response = await fetch(
    `${API_BASE_URL}/invoices?page=${pageIndex}&limit=${pageSize}&search=${search}`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return {
    rows: data.records,
    pageCount: Math.ceil(data.total / pageSize),
    rowCount: data.records.length,
  }
}

export const formattedDate = (date?: Date) =>
  date
    ? format(new Date(date), 'MMM do, yyyy')
    : format(new Date(), 'MMM do, yyyy')

interface ChartData {
  month: string
  amount: number
}

export const generateTransactions = (years: number): ChartData[] => {
  const chartData: ChartData[] = []
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const currentYear = new Date().getFullYear()
  let baseValue = 500000 // Start with a base value

  for (let i = 0; i < years; i++) {
    const year = currentYear - years + i + 1 // Adjust for range
    for (const month of months) {
      chartData.push({
        month: `${month} ${year}`,
        amount: baseValue,
      })
      baseValue += 5 + Math.random() * 50000 // Increment by a small random fractional amount
    }
  }

  return chartData
}

export const generateRevenue = (years: number): ChartData[] => {
  const chartData: ChartData[] = []
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const currentYear = new Date().getFullYear()
  let baseValue = 50000 // Start with a base value

  for (let i = 0; i < years; i++) {
    const year = currentYear - years + i + 1 // Adjust for range
    for (const month of months) {
      chartData.push({
        month: `${month} ${year}`,
        amount: baseValue,
      })
      baseValue += 5 + Math.random() * 8000 // Increment by a small random fractional amount
    }
  }

  return chartData
}

export function generateRealTimeTransaction(): RealTimeTransaction {
  const name = faker.internet.userName()
  const status: 'Receive' | 'Transfer' = faker.helpers.arrayElement([
    'Receive',
    'Transfer',
  ])

  const initials = name
    .split(' ')
    .map((part) => part[0].toUpperCase())
    .join('')

  const data = {
    name: name,
    avatarName: initials,
    id: faker.number.int({ min: 1000000, max: 99999999 }),
    dateTime: faker.date.recent().toISOString(),
    amount: `$${faker.finance.amount()} USD`,
    status: status,
  }
  return data
}
