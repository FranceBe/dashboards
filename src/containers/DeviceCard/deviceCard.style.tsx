import styled from 'styled-components'
import { elements, fontSizes, palette, spaces } from 'styles/variables'

export const CardContainer = styled.div`
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  padding: ${spaces.regular} ${spaces.x_large};
  box-shadow: ${elements.box_shadow};
  border: 1px solid ${palette.grey_primary};
  border-radius: ${spaces.small};
  font-size: ${fontSizes.medium};
  .small-icon {
    margin-right: ${spaces.small};
    color: ${palette.blue_secondary};
  }
  .status-container {
    width: 100px;
    height: 100px;
    margin: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
export const Hr = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid ${palette.blue_secondary};
`
export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.medium};
  margin-top: ${spaces.medium};
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .info-container {
    margin-bottom: ${spaces.medium};
  }
  &.status-column {
    justify-content: center;
    align-items: center;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.div`
  color: ${palette.blue_secondary};
  text-decoration: underline;
`

export const Value = styled.div`
  margin-left: ${spaces.small};
`
