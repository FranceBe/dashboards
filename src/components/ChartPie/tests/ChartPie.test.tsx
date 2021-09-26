// ChartPie is a wrapper of the external module Recharts
// We only need to make a snapshot in order to test that
// it renders correctly but we assume that the module is correctly tested
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import ChartPie from 'components/ChartPie'
import React from 'react'

describe('ChartPie', () => {
  const data = [
    { name: 'ethernet', value: 400 },
    { name: 'wifi', value: 300 },
    { name: 'cellular', value: 300 },
  ]
  it('should match snapshot', () => {
    const { container } = render(<ChartPie data={data} nameKey={'name'} valueKey={'value'} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
