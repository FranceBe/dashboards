// Display a bar chart to monitor voltage of each device
import ChartBar from 'components/ChartBar'
import { VoltageStatContainer } from 'containers/VoltageStat/voltageStat.style'
import React from 'react'
import { VoltageStatProps } from 'types/voltageStat'
export const VoltageStat: React.FC<VoltageStatProps> = ({ devicesVoltage }) => {
  return (
    <VoltageStatContainer>
      <h2>Voltage per device</h2>
      <ChartBar data={devicesVoltage} valueKey={'voltage'} nameKey={'name'} />
    </VoltageStatContainer>
  )
}

export default VoltageStat
