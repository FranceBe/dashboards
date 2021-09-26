import { Meta } from '@storybook/react/types-6-0'
import StatusTable from 'containers/StatusTable'
import React from 'react'
import { StatusLineProps } from 'types/statusLine'
import { StatusTableProps } from 'types/statusTable'

export default {
  component: StatusTable,
  title: 'Components/StatusTable',
} as Meta

const devicesStatus: StatusLineProps[] = [
  { name: 'device_0', status: 'connected' },
  { name: 'device_1', status: 'disconnected' },
  { name: 'device_2', status: 'connected' },
  { name: 'device_3', status: 'disconnected' },
  { name: 'device_4', status: 'connected' },
]

export const Default: React.FC<StatusTableProps> = () => (
  <StatusTable devicesStatus={devicesStatus} />
)
