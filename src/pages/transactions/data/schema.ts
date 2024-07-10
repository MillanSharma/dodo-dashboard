import { z } from 'zod'

export const transactionSchema = z.object({
  transaction_id: z.string(),
  user_name: z.string(),
  amount: z.string(),
  currency: z.string(),
  payment: z.string(),
  status: z.string(),
})

export type TransactionSchema = z.infer<typeof transactionSchema>

export const invoiceSchema = z.object({
  invoice_id: z.string(),
  user_name: z.string(),
  amount: z.string(),
  currency: z.string(),
  due_date: z.date(),
})

export type invoiceSchema = z.infer<typeof invoiceSchema>

interface Transaction {
  _id: string
  transaction_id: string
  user_name: string
  amount: number
  currency: string
  status: string
  payment: string
}

interface Invoices {
  _id: string
  invoice_id: string
  customer_name: string
  customer_email: string
  due_date: string
  amount: number
  currency: string
}

interface TransactionsResponse {
  pageCount: number
  rowCount: number
  rows: Transaction[]
}

interface InvoiceResponse {
  pageCount: number
  rowCount: number
  rows: Invoices[]
}

type PaymentStatus = 'pending' | 'failed' | 'completed'
type PaymentMethod = 'bank_transfer' | 'credit_card' | 'paypal'

interface DataTableStatusProps {
  row: {
    transaction_id: string
    user_name: string
    amount: string
    currency: string
    payment: PaymentMethod
    status: PaymentStatus
  }
}

interface RealTimeTransaction {
  name: string;
  avatarName: string;
  id: number;
  dateTime: string;
  amount: string;
  status: 'Receive' | 'Transfer';
}

export type {
  Transaction,
  TransactionsResponse,
  DataTableStatusProps,
  InvoiceResponse,
  RealTimeTransaction,
}
