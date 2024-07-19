import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  {
    label: 'USA',
    browser: 'USA',
    visitors: 29075,
    fill: 'var(--color-chrome)',
  },
  {
    label: 'Canada',
    browser: 'Canada',
    visitors: 20045,
    fill: 'var(--color-safari)',
  },
  {
    label: 'Europe',
    browser: 'Europe',
    visitors: 10087,
    fill: 'var(--color-firefox)',
  },
  {
    label: 'Others',
    browser: 'Others',
    visitors: 10330,
    fill: 'var(--color-other)',
  },
]

const chartConfig = {
  visitors: {
    label: 'Transactions: ',
  },
  chrome: {
    label: 'USA',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Canada',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Europe',
    color: 'hsl(var(--chart-3))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function PieChartGraph() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <ChartContainer
        config={chartConfig}
        className='mx-auto aspect-square max-h-[250px]'
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Legend align='right' values='label' />
          <Pie
            data={chartData}
            dataKey='visitors'
            nameKey='browser'
            innerRadius={100}
            elevation={12}
          />
        </PieChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
