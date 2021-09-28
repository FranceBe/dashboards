import styled from 'styled-components'
import { elements, palette, spaces } from 'styles/variables'

export const VoltageStatContainer = styled.div`
  border: 1px solid ${palette.grey_primary};
  padding-right: 20px;
  border-radius: ${spaces.small};
  box-shadow: ${elements.box_shadow};

  h2 {
    text-align: center;
  }
  .recharts-surface {
    margin-left: -10px;
  }
`