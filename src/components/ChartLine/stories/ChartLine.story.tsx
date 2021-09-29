import { Meta } from '@storybook/react/types-6-0'
import ChartLine from 'components/ChartLine'
import React from 'react'
import { ChartProps } from 'types/chart'

export default {
  component: ChartLine,
  title: 'Components/ChartLine',
} as Meta

const values = [
  { name: 'data1', value: 3 },
  { name: 'data2', value: 1 },
  { name: 'data3', value: 45 },
  { name: 'data4', value: 23 },
  { name: 'data5', value: 12 },
  { name: 'data6', value: 12.9 },
]
export const Default: React.FC<ChartProps> = () => (
  <div style={{ margin: '50px' }}>
    <ChartLine data={values} nameKey={'name'} valueKey={'value'} />
  </div>
)
