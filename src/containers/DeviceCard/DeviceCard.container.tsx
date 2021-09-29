import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import ContactlessIcon from '@material-ui/icons/Contactless'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LinkIcon from '@material-ui/icons/Link'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import VisibilityIcon from '@material-ui/icons/Visibility'
import WifiIcon from '@material-ui/icons/Wifi'
import Status from 'components/Status'
import {
  CardContainer,
  ColumnContainer,
  Hr,
  InfoContainer,
  Label,
  LineContainer,
  Value,
} from 'containers/DeviceCard/deviceCard.style'
import { convertStringForTitle } from 'containers/DeviceCard/deviceCard.utils'
import React, { ReactElement } from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { momentFormatter } from 'utils/momentFormatter'

export const DeviceCard: React.FC<{ device: DashboardDeviceable }> = ({ device }) => {
  const iconByType: Record<'ethernet' | 'wifi' | 'cellular', ReactElement> = {
    cellular: <SignalCellularAltIcon data-testid={'icon-cellular'} className={'small-icon'} />,
    ethernet: <SettingsEthernetIcon data-testid={'icon-ethernet'} className={'small-icon'} />,
    wifi: <WifiIcon data-testid={'icon-wifi'} className={'small-icon'} />,
  }
  return (
    <CardContainer data-testid={'device-card'}>
      <LineContainer>
        <InfoContainer>
          <Label>{convertStringForTitle('serial_number')}</Label>
          {' : '}
          <Value>{device.serial_number}</Value>
        </InfoContainer>
        <ColumnContainer className={'status-column'}>
          <Status status={device.status} />
          {convertStringForTitle(device.status)}
        </ColumnContainer>
      </LineContainer>
      <Hr />
      <LineContainer>
        <ColumnContainer>
          <InfoContainer className={'info-container'}>
            <VisibilityIcon className={'small-icon'} />
            <Label>{convertStringForTitle('last_seen_at')}</Label>
            {' : '}
            <Value>{momentFormatter(device.last_seen_at)}</Value>
          </InfoContainer>
          <InfoContainer className={'info-container'}>
            {iconByType[device.connection_type]}
            <Label>{convertStringForTitle('connection_type')}</Label>
            {' : '}
            <Value>{device.connection_type}</Value>
          </InfoContainer>
          <InfoContainer className={'info-container'}>
            <FlashOnIcon className={'small-icon'} />
            <Label>{convertStringForTitle('voltage')}</Label>
            {' : '}
            <Value>{device.voltage}</Value>
          </InfoContainer>
        </ColumnContainer>
        <ColumnContainer>
          <InfoContainer className={'info-container'}>
            <ContactlessIcon className={'small-icon'} />
            <Label>{convertStringForTitle('mac_wifi')}</Label>
            {' : '}
            <Value>{device.mac_wifi}</Value>
          </InfoContainer>
          <InfoContainer className={'info-container'}>
            <ConfirmationNumberIcon className={'small-icon'} />
            <Label>{convertStringForTitle('sim_id')}</Label>
            {' : '}
            <Value>{device.sim_id}</Value>
          </InfoContainer>
          <InfoContainer className={'info-container'}>
            <LinkIcon className={'small-icon'} />
            <Label>{convertStringForTitle('url')}</Label>
            {' : '}
            <Value>
              <a href={device.url}>{device.url}</a>
            </Value>
          </InfoContainer>
        </ColumnContainer>
      </LineContainer>
    </CardContainer>
  )
}

export default DeviceCard
