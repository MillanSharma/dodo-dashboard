import { Layout } from '@/components/custom/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import CardComponent from './components/card-component'
import { LineGraph } from '@/components/ui/line-chart'

const slugData = [
  {
    title: 'Revenue',
    quantity: '$24M',
    trendUp: '+11.01%',
    trending: true,
  },
  {
    title: 'Transaction',
    quantity: '14K',
    trendUp: '-0.03%',
    trending: false,
  },
  {
    title: 'Average transaction',
    quantity: '$2K',
    trendUp: '+15.03%',
    trending: true,
  },
  {
    title: 'Refunds',
    quantity: '1K',
    trendUp: '+6.08%',
    trending: true,
  },
]

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <div className='mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {slugData.map((item) => (
            <CardComponent
              key={item.title}
              title={item.title}
              quantity={item.quantity}
              trendUp={item.trendUp}
              trending={item.trending}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-8'>
          <Card className='col-span-1 lg:col-span-4'>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              {/* <Overview /> */}
              <LineGraph />
            </CardContent>
          </Card>
          <Card className='md: col-span-1 lg:col-span-4'>
            <CardHeader>
              <CardTitle>Transaction</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              {/* <Overview /> */}
              <LineGraph />
            </CardContent>
          </Card>
          {/* <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card> */}
        </div>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: '',
    isActive: true,
  },
  {
    title: 'Settings',
    href: 'settings',
    isActive: false,
  },
]
