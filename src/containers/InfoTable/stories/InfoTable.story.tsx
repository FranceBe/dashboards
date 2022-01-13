import { Meta } from '@storybook/react/types-6-0'
import InfoTable from 'containers/InfoTable'
import React from 'react'
import { InfoTableable, InfoTableProps } from 'types/infoTable'

export default {
  component: InfoTable,
  title: 'Containers/InfoTable',
} as Meta

const devicesStatus: InfoTableable[] = [
  {
    connection_type: 'ethernet',
    last_seen_at: '2021-09-26T15:10:44.987987',
    mac_wifi: 'c5:d7:14:84:f8:cf',
    name: 'device_0',
    sim_id: 50709944,
    status: 'connected',
  },
  {
    connection_type: 'cellular',
    last_seen_at: '2021-09-26T15:10:45.006415',
    mac_wifi: '44:20:82:3c:fd:e6',
    name: 'device_1',
    sim_id: 73383683,
    status: 'disconnected',
  },
  {
    connection_type: 'wifi',
    last_seen_at: '2021-09-26T15:10:45.006701',
    mac_wifi: '1c:2e:2b:b8:56:9d',
    name: 'device_2',
    sim_id: 43766938,
    status: 'disconnected',
  },
]

export const Default: React.FC<InfoTableProps> = () => <InfoTable devicesInfo={devicesStatus} />
