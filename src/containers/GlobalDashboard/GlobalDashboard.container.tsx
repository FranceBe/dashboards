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
  getStatusDeviceLength,
  getVoltageStat,
} from 'containers/GlobalDashboard/globalDashboard.utils'
import InfoTable from 'containers/InfoTable'
import StatusStat from 'containers/StatusStat'
import VoltageStat from 'containers/VoltageStat'
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
          <h1>Global Dashboard</h1>
          <ChartsContainer>
            <VoltageStat devicesVoltage={getVoltageStat(devicesData)} />
            <ConnectionTypeStat devicesConnectionType={getConnectionTypeData(devicesData)} />
            <StatusStat
              connectedLength={getStatusDeviceLength(devicesData, 'connected')}
              disconnectedLength={getStatusDeviceLength(devicesData, 'disconnected')}
            />
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
