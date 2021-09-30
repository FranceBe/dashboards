import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import ConnectionType from 'containers/ConnectionTypeStat'
import React from 'react'
import { ConnectionTypeDataable } from 'types/connectionType'

describe('ConnectionType', () => {
  const devicesConnectionType: ConnectionTypeDataable[] = [
    { connection_type: 'ethernet', length: 400 },
    { connection_type: 'wifi', length: 300 },
    { connection_type: 'cellular', length: 300 },
  ]
  it('should match snapshot', () => {
    const { container } = render(<ConnectionType devicesConnectionType={devicesConnectionType} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render a ChartPie component', () => {
    render(<ConnectionType devicesConnectionType={devicesConnectionType} />)
    expect(screen.getByTestId('chart-pie')).toBeInTheDocument()
  })
})
