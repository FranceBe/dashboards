import { StatusTableContainer } from 'containers/GlobalDashboard/globalDasboard.style'
import StatusTable from 'containers/StatusTable'
import React, { useEffect, useState } from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

import { getStatusTableData } from './globalDashboard.utils'

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
    <div>
      <StatusTableContainer>
        <StatusTable devicesStatus={getStatusTableData(devices)} />
      </StatusTableContainer>
    </div>
  )
}

export default GlobalDashboard
