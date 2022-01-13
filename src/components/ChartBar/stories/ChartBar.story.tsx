import { Meta } from '@storybook/react/types-6-0'
import ChartBar from 'components/ChartBar'
import React from 'react'
import { ChartProps } from 'types/chart'

export default {
  component: ChartBar,
  title: 'Components/ChartBar',
} as Meta

const values = [
  { name: 'name1', value: 3 },
  { name: 'name2', value: 1 },
  { name: 'name3', value: 45 },
  { name: 'name4', value: 23 },
  { name: 'name5', value: 12 },
  { name: 'name6', value: 12.9 },
]
export const Default: React.FC<ChartProps> = () => (
  <div style={{ margin: '50px' }}>
    <ChartBar data={values} nameKey={'name'} valueKey={'value'} />
  </div>
)
