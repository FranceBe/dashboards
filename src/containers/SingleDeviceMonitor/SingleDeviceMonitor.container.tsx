import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Loading from 'components/Loading'
import DeviceCard from 'containers/DeviceCard'
import {
  CardContainer,
  LinkContainer,
} from 'containers/SingleDeviceMonitor/singleDeviceMonitor.style'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { useFetch } from 'utils/useFetch'

export const SingleDeviceMonitor: React.FC<RouteComponentProps> = ({ match }) => {
  const { id } = match.params as { id: number }
  const { data } = useFetch<DashboardDeviceable>(`api/device/${id}`)
  let deviceData
  if (data && 'serial_number' in data) {
    deviceData = data
  }
  return (
    <div>
      <Link to={'/'}>
        <LinkContainer>
          <ChevronLeftIcon /> Back to dashboards
        </LinkContainer>
      </Link>
      <CardContainer>
        {deviceData ? (
          <>
            <h2>Monitoring - {deviceData.serial_number}</h2>
            <DeviceCard device={deviceData} />
          </>
        ) : (
          <Loading />
        )}
      </CardContainer>
    </div>
  )
}

export default SingleDeviceMonitor
