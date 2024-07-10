import {
  IconArrowsDownUp,
  IconLayoutDashboard,
  IconFileInvoice,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconFileBarcode,
  IconUsers,
  IconReportAnalytics,
  IconAdjustmentsAlt,
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
    title: 'Customers',
    label: '',
    href: '/dashboard/customers',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Product Catalog',
    label: '',
    href: '/dashboard/catalog',
    icon: <IconFileBarcode size={18} />,
    sub: [
      {
        title: 'Overview',
        label: '',
        href: '/dashboard/catalog/overview',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Products',
        label: '',
        href: '/dashboard/catalog/products',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Discounts',
        label: '',
        href: '/dashboard/catalog/discounts',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Taxable Items',
        label: '',
        href: '/dashboard/catalog/taxable-items',
        icon: <IconHexagonNumber4 size={18} />,
      },
    ],
  },
  {
    title: 'Reports',
    label: '',
    href: '/dashboard/reports',
    icon: <IconReportAnalytics size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/dashboard/settings',
    icon: <IconAdjustmentsAlt size={18} />,
  },
]
