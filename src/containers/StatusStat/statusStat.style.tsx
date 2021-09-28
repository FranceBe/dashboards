import styled from 'styled-components'
import { elements, palette, spaces } from 'styles/variables'
export const StatusStatContainer = styled.div`
  border: 1px solid ${palette.grey_primary};
  border-radius: ${spaces.small};
  box-shadow: ${elements.box_shadow};
  min-height: 370px;
  min-width: 340px;
  h2 {
    text-align: center;
  }
`

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
  width: 48%;
`

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Separator = styled.div`
  border-left: 1px solid ${palette.grey_primary};
  min-height: 290px;
  width: 1px;
`

export const Label = styled.div`
  margin-left: ${spaces.regular};
`

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const CONNECTED_COLOR = palette.green_primary
export const DISCONNECTED_COLOR = palette.red_primary
