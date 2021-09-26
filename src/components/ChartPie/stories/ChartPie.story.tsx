import { Meta } from '@storybook/react/types-6-0'
import ChartPie from 'components/ChartPie'
import React from 'react'
import { ChartProps } from 'types/chart'

export default {
  component: ChartPie,
  title: 'Components/ChartPie',
} as Meta

const data = [
  { name: 'ethernet', value: 400 },
  { name: 'wifi', value: 300 },
  { name: 'cellular', value: 300 },
]

export const Default: React.FC<ChartProps> = () => (
  <ChartPie data={data} nameKey={'name'} valueKey={'value'} />
)
