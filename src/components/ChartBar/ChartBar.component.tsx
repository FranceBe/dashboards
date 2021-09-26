import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { palette } from 'styles/variables'
import { ChartProps } from 'types/chart'

export const ChartBar: React.FC<ChartProps> = ({ data, valueKey, nameKey }) => {
  return (
    <div data-testid={'chart-bar'}>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={valueKey} fill={palette.blue_primary} />
      </BarChart>
    </div>
  )
}

export default ChartBar
