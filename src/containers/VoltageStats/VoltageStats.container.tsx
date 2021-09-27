import ChartBar from 'components/ChartBar'
import { VoltageStatContainer } from 'containers/VoltageStats/voltageStats.style'
import React from 'react'
import { VoltageStatsProps } from 'types/voltageStats'
export const VoltageStats: React.FC<VoltageStatsProps> = ({ devicesVoltage }) => {
  return (
    <VoltageStatContainer>
      <h2>Voltage per device</h2>
      <ChartBar data={devicesVoltage} valueKey={'voltage'} nameKey={'name'} />
    </VoltageStatContainer>
  )
}

export default VoltageStats
