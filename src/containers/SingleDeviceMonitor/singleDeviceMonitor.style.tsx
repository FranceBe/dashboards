import styled from 'styled-components'
import { spaces } from 'styles/variables'

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CardContainer = styled.div`
  margin-top: ${spaces.large};
  padding-right: 20px;
  h2 {
    text-align: center;
  }
  .live-voltage {
    margin-top: ${spaces.large};
  }
`
