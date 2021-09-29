// Component that display a circle that can display content and
// Can accept a specific color as border-color
import { RatioContainer } from 'components/RatioCircle/ratioCircle.style'
import React from 'react'
import { RatioCircleProps } from 'types/ratioCircle'
export const RatioCircle: React.FC<RatioCircleProps> = ({ content, color }) => {
  return (
    <RatioContainer data-testid={'ratio-circle'} color={color}>
      {content}
    </RatioContainer>
  )
}

export default RatioCircle
