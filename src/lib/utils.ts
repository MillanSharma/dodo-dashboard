// import { TransactionsResponse, TransactionsResponseSchema } from "@/pages/transactions/data/schema";
// import { PaginationState } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from 'date-fns';
import { faker } from '@faker-js/faker';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchTransactions(pagination, search='') {
 const { pageSize, pageIndex } = pagination;
  const response = await fetch(`http://localhost:3000/transactions?page=${pageIndex}&limit=${pageSize}&search=${search}`);
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
export async function fetchInvoices(pagination) {
 const { pageSize, pageIndex } = pagination;
  const response = await fetch(`http://localhost:3000/invoices?page=${pageIndex}&limit=${pageSize}`);
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

export const formattedDate = (date?: Date) => date ? format(new Date(date), "MMM do, yyyy") : format(new Date(), "MMM do, yyyy");



interface ChartData {
  month: string;
  amount: number;
}

export const generateTransactions = (years: number): ChartData[] => {
  const chartData: ChartData[] = [];
  const months: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const currentYear = new Date().getFullYear();
  let baseValue = 500000; // Start with a base value

  for (let i = 0; i < years; i++) {
    const year = currentYear - years + i + 1; // Adjust for range
    for (const month of months) {
      chartData.push({
        month: `${month} ${year}`,
        amount: baseValue
      });
      baseValue += 5 + Math.random() * 50000; // Increment by a small random fractional amount
    }
  }

  return chartData;
};

export const generateRevenue = (years: number): ChartData[] => {
  const chartData: ChartData[] = [];
  const months: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const currentYear = new Date().getFullYear();
  let baseValue = 50000; // Start with a base value

  for (let i = 0; i < years; i++) {
    const year = currentYear - years + i + 1; // Adjust for range
    for (const month of months) {
      chartData.push({
        month: `${month} ${year}`,
        amount: baseValue
      });
      baseValue += 5 + Math.random() * 8000; // Increment by a small random fractional amount
    }
  }

  return chartData;

};


interface Arc {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

export function generateSampleArcs(numArcs: number): Arc[] {
  const arcs: Arc[] = [];
  
  for (let i = 0; i < numArcs; i++) {
    const arc: Arc = {
      order: faker.datatype.number({ min: 1, max: 10 }),
      startLat: faker.location.latitude(),
      startLng: faker.location.longitude(),
      endLat: faker.location.latitude(),
      endLng: faker.location.longitude(),
      arcAlt: parseFloat((Math.random() * 0.7).toFixed(1)), // Arc altitude between 0 and 0.7
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    arcs.push(arc);
  }

  return arcs;
}
