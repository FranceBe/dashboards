import styled from 'styled-components'
import { elements, palette, spaces } from 'styles/variables'

export const LiveVoltageContainer = styled.div`
  border: 1px solid ${palette.grey_primary};
  padding: 0 20px 20px 20px;
  border-radius: ${spaces.small};
  box-shadow: ${elements.box_shadow};
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
  }
`

export const ChartAndButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-left: 10%;
    height: 100px;
  }
`
