import { Meta } from '@storybook/react/types-6-0'
import ConnectionType from 'components/ConnectionType'
import React from 'react'
import { ConnectionTypeProps } from 'types/connectionType'

export default {
  component: ConnectionType,
  title: 'Components/ConnectionType',
} as Meta

export const Wifi: React.FC<ConnectionTypeProps> = () => <ConnectionType connection_type={'wifi'} />
export const Ethernet: React.FC<ConnectionTypeProps> = () => (
  <ConnectionType connection_type={'ethernet'} />
)
export const Cellular: React.FC<ConnectionTypeProps> = () => (
  <ConnectionType connection_type={'cellular'} />
)
