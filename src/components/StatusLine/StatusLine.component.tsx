import Status from 'components/Status'
import { StatusLineContainer } from 'components/StatusLine/statusLine.style'
import React from 'react'
import { StatusLineProps } from 'types/statusLine'

export const StatusLine: React.FC<StatusLineProps> = ({ status, name }) => {
  return (
    <StatusLineContainer data-testid={'status-line-container'} className={`line-${name}`}>
      <div>{name}</div>
      <Status status={status} />
    </StatusLineContainer>
  )
}

export default StatusLine
