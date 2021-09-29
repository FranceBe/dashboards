import { createGlobalStyle } from 'styled-components'
import { palette } from 'styles/variables'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 1.5em;
    background-color: ${palette.blue_light};
    color: ${palette.grey_primary};
  }
  a {
    text-decoration: none;
    :active, :visited {
      color: ${palette.blue_primary};
    }
    :hover, :visited:hover {
      color: ${palette.blue_secondary};
    }
  }
`
