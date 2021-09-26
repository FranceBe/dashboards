import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar'
import SignalCellularOffIcon from '@material-ui/icons/SignalCellularOff'
import { StatusContainer } from 'components/Status/status.style'
import React from 'react'
import { StatusProps } from 'types/status'

export const Status: React.FC<StatusProps> = ({ status }) => {
  const statusIcon =
    status === 'disconnected' ? (
      <SignalCellularOffIcon data-testid={'signal-off'} />
    ) : (
      <SignalCellular4BarIcon data-testid={'signal-on'} />
    )

  return (
    <StatusContainer data-testid={'status-container'} status={status}>
      {statusIcon}
    </StatusContainer>
  )
}

export default Status
