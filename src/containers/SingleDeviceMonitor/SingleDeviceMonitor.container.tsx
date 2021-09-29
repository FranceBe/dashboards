// Display all information for a specific device
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Loading from 'components/Loading'
import DeviceCard from 'containers/DeviceCard'
import LiveVoltage from 'containers/LiveVoltage'
import {
  CardContainer,
  LinkContainer,
} from 'containers/SingleDeviceMonitor/singleDeviceMonitor.style'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { momentFormatter } from 'utils/momentFormatter'
import { useFetch } from 'utils/useFetch'

export const SingleDeviceMonitor: React.FC<RouteComponentProps> = ({ match }) => {
  const { id } = match.params as { id: number }
  // Using useFetch custom hook to call Api with a specific id using current URL to get a specific device
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
            <LiveVoltage
              deviceId={id}
              initialVoltage={{
                time: momentFormatter(deviceData.last_seen_at),
                voltage: deviceData.voltage,
              }}
            />
          </>
        ) : (
          <Loading />
        )}
      </CardContainer>
    </div>
  )
}

export default SingleDeviceMonitor
