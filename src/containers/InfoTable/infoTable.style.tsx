import styled from 'styled-components'
import { elements, palette, spaces } from 'styles/variables'

export const TableContainer = styled.div`
  box-shadow: ${elements.box_shadow};
  border: 1px solid ${palette.grey_primary};
  border-radius: ${spaces.small};
  .rdt_TableHeadRow {
    background-color: ${palette.blue_light};
  }
`
