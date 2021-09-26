import ChartPie from 'components/ChartPie'
import React from 'react'
import { ConnectionTypeDataProps } from 'types/connectionType'

export const ConnectionType: React.FC<ConnectionTypeDataProps> = ({ devicesConnectionType }) => {
  return <ChartPie data={devicesConnectionType} nameKey={'connection_type'} valueKey={'length'} />
}

export default ConnectionType