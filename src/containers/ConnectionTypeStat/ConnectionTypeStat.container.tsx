import ChartPie from 'components/ChartPie'
import { ConnectionTypeStatContainer } from 'containers/ConnectionTypeStat/connectionTypeStat.style'
import React from 'react'
import { ConnectionTypeDataProps } from 'types/connectionType'

export const ConnectionTypeStat: React.FC<ConnectionTypeDataProps> = ({
  devicesConnectionType,
}) => {
  return (
    <ConnectionTypeStatContainer>
      <h2>Connection Type Ratio</h2>
      <ChartPie data={devicesConnectionType} nameKey={'connection_type'} valueKey={'length'} />
    </ConnectionTypeStatContainer>
  )
}

export default ConnectionTypeStat
