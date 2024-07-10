import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { generateRevenue, generateTransactions } from "@/lib/utils"

const transactionData = generateTransactions(2);
const revenueData = generateRevenue(2);

const chartConfig = {
  amount: {
    label: "Amount",
  },
} satisfies ChartConfig

export function LineGraph({ render }: { render: string }): JSX.Element {
  const data = render === 'revenue' ? revenueData : transactionData;

  return (

      <ResponsiveContainer width='100%' height={350}>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
         <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="w-[200px]"
                  nameKey="amount"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }

            />
            <Line
              dataKey="amount"
              type="natural"
              stroke="blue"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
  )
}
