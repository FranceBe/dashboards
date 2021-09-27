import LoopIcon from '@material-ui/icons/Loop'
import { LoadingContainer } from 'components/Loading/loading.style'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoopIcon />
    </LoadingContainer>
  )
}

export default Loading
