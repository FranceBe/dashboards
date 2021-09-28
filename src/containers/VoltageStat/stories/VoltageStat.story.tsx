import { Meta } from '@storybook/react/types-6-0'
import VoltageStat from 'containers/VoltageStat'
import React from 'react'
import { VoltageStatable, VoltageStatProps } from 'types/voltageStat'

export default {
  component: VoltageStat,
  title: 'Containers/VoltageStat',
} as Meta

const devicesVoltage: VoltageStatable[] = [
  {
    name: 'device_0',
    voltage: 234.392,
  },
  {
    name: 'device_1',
    voltage: 21827.293829,
  },
  {
    name: 'device_2',
    voltage: 1129.0293,
  },
  {
    name: 'device_3',
    voltage: 9378.282,
  },
  {
    name: 'device_4',
    voltage: 7292.0283,
  },
]
export const Default: React.FC<VoltageStatProps> = () => (
  <VoltageStat devicesVoltage={devicesVoltage} />
)
