// ConnectionType component to display an icon matching
// The device connection type with a specific color
import Tooltip from '@material-ui/core/Tooltip'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import WifiIcon from '@material-ui/icons/Wifi'
import { ConnectionTypeContainer } from 'components/ConnectionType/connectionType.style'
import React, { ReactElement } from 'react'
import { ConnectionTypeProps } from 'types/connectionType'

export const ConnectionType: React.FC<ConnectionTypeProps> = ({ connection_type }) => {
  const iconByType: Record<'ethernet' | 'wifi' | 'cellular', ReactElement> = {
    cellular: <SignalCellularAltIcon data-testid={'icon-cellular'} />,
    ethernet: <SettingsEthernetIcon data-testid={'icon-ethernet'} />,
    wifi: <WifiIcon data-testid={'icon-wifi'} />,
  }

  return (
    <ConnectionTypeContainer data-testid={'connection_type-container'} type={connection_type}>
      <Tooltip title={connection_type}>{iconByType[connection_type]}</Tooltip>
    </ConnectionTypeContainer>
  )
}

export default ConnectionType
