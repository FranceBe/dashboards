import {
  ChartsContainer,
  Dashboard,
  StatusTableContainer,
} from 'containers/GlobalDashboard/globalDasboard.style'
import StatusTable from 'containers/StatusTable'
import VoltageStateContainer from 'containers/VoltageStats'
import React, { useEffect, useState } from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

import { getStatusTableData, getVoltageStats } from './globalDashboard.utils'

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

  return (
    <Dashboard>
      <StatusTableContainer>
        <StatusTable devicesStatus={getStatusTableData(devices)} />
      </StatusTableContainer>
      <ChartsContainer>
        <VoltageStateContainer devicesVoltage={getVoltageStats(devices)} />
      </ChartsContainer>
    </Dashboard>
  )
}

export default GlobalDashboard
