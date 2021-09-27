import styled from 'styled-components'
import { palette, spaces } from 'styles/variables'

export const COLORS = [palette.blue_primary, palette.purple_secondary, palette.green_secondary]

export const Text = styled.text`
  fill: ${palette.white};
  font-size: 20px;
`

export const TooltipContainer = styled.div`
  background-color: ${palette.white};
  border-radius: ${spaces.small};
  padding: ${spaces.regular};
`
