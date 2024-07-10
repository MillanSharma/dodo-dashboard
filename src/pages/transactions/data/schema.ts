import { z } from 'zod'

export const taskSchema = z.object({
  transaction_id: z.string(),
  user_name: z.string(),
  amount: z.string(),
  currency: z.string(),
  payment: z.string(),
  status: z.string(), 
})

export type Task = z.infer<typeof taskSchema>

interface Transaction {
  _id: string;
  transaction_id: string;
  user_name: string;
  amount: number;
  currency: string;
  status: string;
  payment: string;
}

interface TransactionsResponse {
  pageCount: number;
  rowCount: number;
  rows: Transaction[];
}

type PaymentStatus = 'pending' | 'failed' | 'completed';
type PaymentMethod = 'bank_transfer' | 'credit_card' | 'paypal';

interface DataTableStatusProps {
    row: {
        transaction_id: string;
        user_name: string;
        amount: string;
        currency: string;
        payment: PaymentMethod;
        status: PaymentStatus;
    };
}

export type { Transaction, TransactionsResponse, DataTableStatusProps }
