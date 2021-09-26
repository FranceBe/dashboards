import React from 'react'
import styled from 'styled-components'
import { fontSizes, palette, spaces } from 'styles/variables'

export const ConnectionTypeContainer = styled((props) => <div {...props} />)<{
  type: 'ethernet' | 'wifi' | 'cellular'
}>`
  background-color: ${(props) => {
    if (props.type === 'wifi') {
      return palette.purple_primary
    } else if (props.type === 'ethernet') {
      return palette.pink_primary
    } else {
      return palette.yellow_light
    }
  }};
  width: fit-content;
  border-radius: ${spaces.small};
  padding: ${spaces.regular};
  font-size: ${fontSizes.small};
`
