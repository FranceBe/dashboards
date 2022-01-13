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

  if (!data || Array.isArray(data)) {
    return <Loading />
  }

  return (
    <div>
      <Link to={'/'}>
        <LinkContainer>
          <ChevronLeftIcon /> Back to dashboards
        </LinkContainer>
      </Link>
      <CardContainer>
        <h2>Monitoring - {data.serial_number}</h2>
        <DeviceCard device={data} />
        <LiveVoltage
          deviceId={id}
          initialVoltage={{
            time: momentFormatter(data.last_seen_at),
            voltage: data.voltage,
          }}
        />
      </CardContainer>
    </div>
  )
}

export default SingleDeviceMonitor
