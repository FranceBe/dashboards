import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import ContactlessIcon from '@material-ui/icons/Contactless'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LinkIcon from '@material-ui/icons/Link'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ConnectionType from 'components/ConnectionType'
import {
  CardContainer,
  Hr,
  InfoContainer,
  Label,
  LineContainer,
  Value,
} from 'components/DeviceCard/deviceCard.style'
import Status from 'components/Status'
import moment from 'moment'
import React from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

export const DeviceCard: React.FC<{ device: DashboardDeviceable }> = ({ device }) => {
  return (
    <CardContainer data-testid={'device-card'}>
      <LineContainer>
        <InfoContainer>
          <Label>Serial Number :</Label>
          <Value>{device.serial_number}</Value>
        </InfoContainer>
        <InfoContainer>
          <ConnectionType connection_type={device.connection_type} />
          <Label>Connection Type :</Label>
          <Value>{device.connection_type}</Value>
        </InfoContainer>
        <Status status={device.status} />
      </LineContainer>
      <Hr />
      <LineContainer>
        <InfoContainer>
          <FlashOnIcon className={'small-icon'} />
          <Label>Voltage :</Label>
          <Value>{device.voltage}</Value>
        </InfoContainer>
        <InfoContainer>
          <VisibilityIcon className={'small-icon'} />
          <Label>Last seen at :</Label>
          <Value>{moment(device.last_seen_at).format('MMMM Do YYYY, h:mm:ss a')}</Value>
        </InfoContainer>
      </LineContainer>
      <LineContainer>
        <InfoContainer>
          <ContactlessIcon className={'small-icon'} />
          <Label>Mac wifi :</Label>
          <Value>{device.mac_wifi}</Value>
        </InfoContainer>
        <InfoContainer>
          <ConfirmationNumberIcon className={'small-icon'} />
          <Label>Sim id :</Label>
          <Value>{device.sim_id}</Value>
        </InfoContainer>
      </LineContainer>
      <LineContainer>
        <InfoContainer>
          <LinkIcon className={'small-icon'} />
          <Label>Url :</Label>
          <Value>
            <a href={device.url}>{device.url}</a>
          </Value>
        </InfoContainer>
      </LineContainer>
    </CardContainer>
  )
}

export default DeviceCard
