import Loading from 'components/Loading'
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
  let devicesData
  if (data && Array.isArray(data) && data.length) {
    devicesData = data
  }
  return (
    <Dashboard>
      {devicesData ? (
        <>
          <ChartsContainer>
            <VoltageStats devicesVoltage={getVoltageStats(devicesData)} />
            <ConnectionTypeStat devicesConnectionType={getConnectionTypeData(devicesData)} />
          </ChartsContainer>
          <InfoTableContainer>
            <InfoTable devicesInfo={getInfoTableData(devicesData)} />
          </InfoTableContainer>
        </>
      ) : (
        <Loading />
      )}
    </Dashboard>
  )
}

export default GlobalDashboard
