import { Meta } from '@storybook/react/types-6-0'
import DeviceCard from 'components/DeviceCard'
import React from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

export default {
  component: DeviceCard,
  title: 'Components/DeviceCard',
} as Meta

const device: DashboardDeviceable = {
  connection_type: 'cellular',
  last_seen_at: '2021-09-27T14:59:09.021426',
  mac_wifi: '44:20:82:3c:fd:e6',
  serial_number: 'device_1',
  sim_id: 73383683,
  status: 'disconnected',
  url: 'http://localhost:8010/device/1',
  voltage: 8.167522699950393,
}

export const Default = () => <DeviceCard device={device} />
