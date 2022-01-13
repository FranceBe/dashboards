import { Meta } from '@storybook/react/types-6-0'
import ConnectionTypeStat from 'containers/ConnectionTypeStat'
import React from 'react'
import { ConnectionTypeDataable, ConnectionTypeDataProps } from 'types/connectionType'

export default {
  component: ConnectionTypeStat,
  title: 'Containers/ConnectionTypeStat',
} as Meta

const devicesConnectionType: ConnectionTypeDataable[] = [
  { connection_type: 'ethernet', length: 45 },
  { connection_type: 'wifi', length: 12 },
  { connection_type: 'cellular', length: 29 },
]

export const Default: React.FC<ConnectionTypeDataProps> = () => (
  <ConnectionTypeStat devicesConnectionType={devicesConnectionType} />
)
