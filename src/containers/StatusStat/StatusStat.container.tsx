import RatioCircle from 'components/RatioCircle'
import Status from 'components/Status/Status.component'
import {
  CircleContainer,
  ColumnContainer,
  CONNECTED_COLOR,
  DISCONNECTED_COLOR,
  Label,
  LineContainer,
  Separator,
  StatusContainer,
  StatusStatContainer,
} from 'containers/StatusStat/statusStat.style'
import React from 'react'

export const StatusStat: React.FC<{ connectedLength: number; disconnectedLength: number }> = ({
  connectedLength,
  disconnectedLength,
}) => {
  const totalLength = connectedLength + disconnectedLength
  return (
    <StatusStatContainer data-testid={'status-stat'}>
      <h2>Status Ratio</h2>
      <StatusContainer>
        <ColumnContainer>
          <LineContainer>
            <Status status={'connected'} /> <Label>Connected</Label>
          </LineContainer>
          <CircleContainer>
            <RatioCircle content={`${connectedLength} / ${totalLength}`} color={CONNECTED_COLOR} />
          </CircleContainer>
        </ColumnContainer>
        <Separator />
        <ColumnContainer>
          <LineContainer>
            <Status status={'disconnected'} /> <Label>Disconnected</Label>
          </LineContainer>
          <CircleContainer>
            <RatioCircle
              content={`${disconnectedLength} / ${totalLength}`}
              color={DISCONNECTED_COLOR}
            />
          </CircleContainer>
        </ColumnContainer>
      </StatusContainer>
    </StatusStatContainer>
  )
}

export default StatusStat
