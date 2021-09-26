import styled from 'styled-components'
import { palette, spaces } from 'styles/variables'

export const COLORS = [palette.pink_primary, palette.purple_primary, palette.yellow_light]

export const Text = styled.text`
  fill: ${palette.grey_primary};
`

export const TooltipContainer = styled.div`
  background-color: ${palette.white};
  border-radius: ${spaces.small};
  padding: ${spaces.regular};
`
