import { createGlobalStyle } from 'styled-components'
import { palette } from 'styles/variables'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 1em;
    background-color: ${palette.blue_light};
    color: ${palette.grey_primary};
  }
`
