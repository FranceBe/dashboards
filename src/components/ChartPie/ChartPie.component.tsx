import { COLORS, Text, TooltipContainer } from 'components/ChartPie/chartPie.style'
import React, { ReactElement } from 'react'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import { ChartProps } from 'types/chart'

export const ChartPie: React.FC<ChartProps> = ({ data, valueKey, nameKey }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    index: number
  }): ReactElement => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <Text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${data[index][nameKey]}`}
      </Text>
    )
  }
  const renderTooltipContent = ({ payload }: any) => {
    const index = payload.length && payload[0].name
    const value = payload.length && payload[0].value
    return (
      <TooltipContainer>
        {data[index][nameKey]}: {value}
      </TooltipContainer>
    )
  }
  return (
    <div data-testid={'chart-pie'}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          dataKey={valueKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={renderTooltipContent} />
      </PieChart>
    </div>
  )
}

export default ChartPie
