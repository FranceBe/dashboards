import React from 'react'
import styled from 'styled-components'
import { elements, fontSizes, palette } from 'styles/variables'

export const RatioContainer = styled((props) => <div {...props} />)<{
  color: string
}>`
  height: 150px;
  width: 150px;
  border: 3px solid ${(props) => props.color || palette.grey_primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  place-self: center;
  box-shadow: ${elements.box_shadow};
  font-size: ${fontSizes.large};
`
