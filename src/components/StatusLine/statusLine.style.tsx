import styled from 'styled-components'
import { palette, spaces } from 'styles/variables'

export const StatusLineContainer = styled.div`
  background-color: ${palette.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spaces.regular};
`
