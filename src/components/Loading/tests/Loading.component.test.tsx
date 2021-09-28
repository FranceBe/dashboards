import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import Loading from 'components/Loading'
import React from 'react'

describe('Loading', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
