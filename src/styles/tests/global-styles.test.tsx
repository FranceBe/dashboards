import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import React from 'react'
import { GlobalStyle } from 'styles/global-styles'

describe('GlobalStyle', () => {
  it('should match snapshot', () => {
    const { container } = render(<GlobalStyle />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
