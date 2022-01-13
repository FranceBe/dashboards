// ChartBar is a wrapper of the external module Recharts
// We only need to make a snapshot in order to test that
// it renders correctly but we assume that the module is correctly tested
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import ChartBar from 'components/ChartBar'
import React from 'react'

describe('ChartBar', () => {
  const values = [
    { name: 'name1', value: 3 },
    { name: 'name2', value: 1 },
    { name: 'name3', value: 45 },
    { name: 'name4', value: 23 },
    { name: 'name5', value: 12 },
    { name: 'name6', value: 12.9 },
  ]
  it('should match snapshot', () => {
    const { container } = render(<ChartBar data={values} nameKey={'name'} valueKey={'value'} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
