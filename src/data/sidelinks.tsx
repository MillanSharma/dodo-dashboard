import {
  IconArrowsDownUp,
  IconLayoutDashboard,
  IconFileInvoice,
  IconAdjustmentsAlt,
  IconMap2,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Overview',
    label: '',
    href: '/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Transactions',
    label: '',
    href: '/dashboard/transactions',
    icon: <IconArrowsDownUp size={18} />,
  },
  {
    title: 'Invoices',
    label: '',
    href: '/dashboard/invoices',
    icon: <IconFileInvoice size={18} />,
  },
  {
    title: 'Interactions',
    label: '',
    href: '/dashboard/interactions',
    icon: <IconMap2 size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/dashboard/settings',
    icon: <IconAdjustmentsAlt size={18} />,
  },
]
