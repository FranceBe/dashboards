// Global Dashboard displaying information of all devices
import Loading from 'components/Loading'
import ConnectionTypeStat from 'containers/ConnectionTypeStat'
import {
  ChartsContainer,
  Dashboard,
  InfoTableContainer,
} from 'containers/GlobalDashboard/globalDasboard.style'
import {
  getConnectionTypeData,
  getDeviceLengthByStatus,
  mapInfoTableData,
  mapVoltageStat,
} from 'containers/GlobalDashboard/globalDashboard.utils'
import InfoTable from 'containers/InfoTable'
import StatusStat from 'containers/StatusStat'
import VoltageStat from 'containers/VoltageStat'
import React from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { useFetch } from 'utils/useFetch'

export const GlobalDashboard: React.FC = () => {
  // Using useFetch custom hook to call Api to get all devices data
  // We could add a "refresh" button or a real-time refresh to
  // Get fresh data anytime without clicking on browser "reload" button
  const { data } = useFetch<DashboardDeviceable>('/api/devices')

  if (!data || !Array.isArray(data)) {
    return <Loading />
  }

  return (
    <Dashboard>
      <h1>Global Dashboard</h1>
      <ChartsContainer>
        <VoltageStat devicesVoltage={mapVoltageStat(data)} />
        <ConnectionTypeStat devicesConnectionType={getConnectionTypeData(data)} />
        <StatusStat
          connectedLength={getDeviceLengthByStatus(data, 'connected')}
          disconnectedLength={getDeviceLengthByStatus(data, 'disconnected')}
        />
      </ChartsContainer>
      <InfoTableContainer>
        <InfoTable devicesInfo={mapInfoTableData(data)} />
      </InfoTableContainer>
    </Dashboard>
  )
}

export default GlobalDashboard
