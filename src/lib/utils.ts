// import { TransactionsResponse, TransactionsResponseSchema } from "@/pages/transactions/data/schema";
// import { PaginationState } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchTransactions(pagination) {
 const { pageSize, pageIndex } = pagination;
  const response = await fetch(`http://localhost:3000/transactions?page=${pageIndex}&limit=${pageSize}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
    return {
    rows: data.records,
    pageCount: Math.ceil(data.total/ pageSize),
    rowCount: data.records.length,
  }

}