import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import VoltageStats from 'containers/VoltageStats'
import React from 'react'

describe('VoltageStats', () => {
  const devicesVoltage = [
    { name: 'device_0', voltage: 11.3 },
    { name: 'device_1', voltage: 45.9833 },
    { name: 'device_2', voltage: 5 },
  ]
  it('should match snapshot', () => {
    const { container } = render(<VoltageStats devicesVoltage={devicesVoltage} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render a ChartBar component', () => {
    render(<VoltageStats devicesVoltage={devicesVoltage} />)
    expect(screen.getByTestId('chart-bar')).toBeInTheDocument()
  })
})
