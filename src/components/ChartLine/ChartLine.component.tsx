// ChartLine component that wraps the module Recharts
// So we can use this component in project
// Instead of using Recharts everytime we need a ChartLine
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { palette } from 'styles/variables'
import { ChartProps } from 'types/chart'

export const ChartLine: React.FC<ChartProps> = ({ data, valueKey, nameKey }) => {
  return (
    <div data-testid={'chart-line'}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} minTickGap={0} tickSize={3} interval={'preserveStart'} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign={'top'} />
        <Line
          type="monotone"
          dataKey={valueKey}
          stroke={palette.blue_primary}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  )
}

export default ChartLine
