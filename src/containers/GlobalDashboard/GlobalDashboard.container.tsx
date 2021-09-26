import ConnectionType from 'containers/ConnectionType'
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
import React, { useEffect, useState } from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

export const GlobalDashboard: React.FC = () => {
  const [devices, setDevices] = useState<DashboardDeviceable[]>([])

  useEffect(() => {
    let shouldUpdateState = true
    fetch('/api/devices')
      .then((res) => res.json())
      .then((data) => {
        if (shouldUpdateState) {
          setDevices(data.results)
        }
      })
      .catch((err) => {
        throw Error(err)
      })
    return () => {
      shouldUpdateState = false
    }
  }, [])

  console.log(devices)
  return (
    <Dashboard>
      <ChartsContainer>
        <VoltageStats devicesVoltage={getVoltageStats(devices)} />
        <ConnectionType devicesConnectionType={getConnectionTypeData(devices)} />
      </ChartsContainer>
      <InfoTableContainer>
        <InfoTable devicesInfo={getInfoTableData(devices)} />
      </InfoTableContainer>
    </Dashboard>
  )
}

export default GlobalDashboard
