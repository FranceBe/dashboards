import styled from 'styled-components'
import { palette, spaces } from 'styles/variables'

export const CardContainer = styled.div`
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  padding: ${spaces.regular};
  border-radius: ${spaces.small};
  .small-icon {
    margin-right: ${spaces.small};
  }
`
export const Hr = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid ${palette.blue_primary};
`
export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.medium};
  margin-top: ${spaces.medium};
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.div`
  color: ${palette.blue_primary};
`

export const Value = styled.div`
  margin-left: ${spaces.small};
`
