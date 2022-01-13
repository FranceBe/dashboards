import React from 'react'
import styled from 'styled-components'
import { elements, fontSizes, palette, spaces } from 'styles/variables'

export const ConnectionTypeContainer = styled((props) => <div {...props} />)<{
  type: 'ethernet' | 'wifi' | 'cellular'
}>`
  background-color: ${(props) => {
    if (props.type === 'wifi') {
      return palette.purple_secondary
    } else if (props.type === 'ethernet') {
      return palette.blue_primary
    } else {
      return palette.green_secondary
    }
  }};
  svg {
    fill: ${palette.white};
  }
  box-shadow: ${elements.box_shadow};
  width: fit-content;
  border-radius: ${spaces.small};
  padding: ${spaces.regular};
  font-size: ${fontSizes.small};
`
