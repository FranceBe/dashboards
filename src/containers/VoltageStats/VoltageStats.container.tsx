import ChartBar from 'components/ChartBar'
import React from 'react'
import { VoltageStatsProps } from 'types/voltageStats'
export const VoltageStats: React.FC<VoltageStatsProps> = ({ devicesVoltage }) => {
  return (
    <div>
      <ChartBar data={devicesVoltage} valueKey={'voltage'} nameKey={'name'} />
    </div>
  )
}

export default VoltageStats
