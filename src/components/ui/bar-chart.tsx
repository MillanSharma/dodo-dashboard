import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { browser: 'chrome', visitors: 27440, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 29000, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 18907, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 10073, fill: 'var(--color-edge)' },
]

const chartConfig = {
  visitors: {
    label: 'Value :',
  },
  chrome: {
    label: 'YouTube',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Twitter',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Reddit',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Indiehacker',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

export function BarGraph() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout='horizontal'
          margin={{
            left: 0,
          }}
        >
          <XAxis
            dataKey='browser'
            type='category'
            tickLine={true}
            tickMargin={5}
            axisLine={true}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <YAxis dataKey='visitors' type='number' />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey='visitors'
            layout='horizontal'
            radius={[4, 4, 0, 0]}
            width={5}
            barSize={25}
          />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
