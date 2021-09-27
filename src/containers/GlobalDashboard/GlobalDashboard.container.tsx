import ConnectionTypeStat from 'containers/ConnectionTypeStat'
import {
  ChartsContainer,
  Dashboard,
  InfoTableContainer,
} from 'containers/GlobalDashboard/globalDasboard.style'
import {
  getConnectionTypeData,
  getInfoTableData,
  getVoltageStats,
} from 'containers/GlobalDashboard/globalDashboard.utils'
import InfoTable from 'containers/InfoTable'
import VoltageStats from 'containers/VoltageStats'
import React from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { useFetch } from 'utils/useFetch'

export const GlobalDashboard: React.FC = () => {
  const { data } = useFetch<DashboardDeviceable>('/api/devices')

  return (
    <Dashboard>
      <ChartsContainer>
        <VoltageStats devicesVoltage={getVoltageStats(data)} />
        <ConnectionTypeStat devicesConnectionType={getConnectionTypeData(data)} />
      </ChartsContainer>
      <InfoTableContainer>
        <InfoTable devicesInfo={getInfoTableData(data)} />
      </InfoTableContainer>
    </Dashboard>
  )
}

export default GlobalDashboard
