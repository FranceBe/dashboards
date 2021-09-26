import React from 'react'
import styled from 'styled-components'
import { fontSizes, palette, spaces } from 'styles/variables'

export const StatusContainer = styled((props) => <div {...props} />)<{
  status: 'connected' | 'disconnected'
}>`
  background-color: ${(props) =>
    props.status === 'disconnected' ? palette.red_primary : palette.green_primary};
  width: fit-content;
  border-radius: ${spaces.small};
  padding: ${spaces.regular};
  font-size: ${fontSizes.small};
`
