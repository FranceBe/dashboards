import { Dashboard, InfoTableContainer } from 'containers/GlobalDashboard/globalDasboard.style'
import { getInfoTableData, getVoltageStats } from 'containers/GlobalDashboard/globalDashboard.utils'
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
      <VoltageStats devicesVoltage={getVoltageStats(devices)} />
      <InfoTableContainer>
        <InfoTable devicesInfo={getInfoTableData(devices)} />
      </InfoTableContainer>
    </Dashboard>
  )
}

export default GlobalDashboard
