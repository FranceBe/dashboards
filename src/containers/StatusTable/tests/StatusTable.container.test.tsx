import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StatusTable from 'containers/StatusTable'
import React from 'react'
import { StatusLineProps } from 'types/statusLine'

describe('StatusTable', () => {
  const devicesStatus: StatusLineProps[] = [
    { name: 'device_2', status: 'connected' },
    { name: 'device_0', status: 'connected' },
    { name: 'device_1', status: 'disconnected' },
    { name: 'device_4', status: 'connected' },
    { name: 'device_3', status: 'disconnected' },
  ]
  it('should match snapshot', () => {
    const { container } = render(<StatusTable devicesStatus={devicesStatus} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should display as many StatusLine as there are devices', () => {
    render(<StatusTable devicesStatus={devicesStatus} />)
    expect(screen.getAllByTestId('status-line-container')).toHaveLength(devicesStatus.length)
  })
  it('should sort by serial_number in asc order when header "serial_number" is clicked', () => {
    render(<StatusTable devicesStatus={devicesStatus} />)
    const nameHeader = screen.getAllByRole('columnheader')[0]
    userEvent.click(nameHeader)
    const firstColumn = screen.getAllByTestId('status-line-container')[0]
    expect(firstColumn).toHaveClass('line-device_0')
  })
  it('should sort by serial_number in desc order when header "serial_number" is clicked twice', () => {
    render(<StatusTable devicesStatus={devicesStatus} />)
    const nameHeader = screen.getAllByRole('columnheader')[0]
    userEvent.click(nameHeader)
    userEvent.click(nameHeader)
    const firstColumn = screen.getAllByTestId('status-line-container')[0]
    expect(firstColumn).toHaveClass('line-device_4')
  })
  it('should sort by status "connected" when header "status" is clicked', () => {
    render(<StatusTable devicesStatus={devicesStatus} />)
    const nameHeader = screen.getAllByRole('columnheader')[1]
    userEvent.click(nameHeader)
    const firstColumn = screen.getAllByTestId('status-line-container')[0]
    expect(firstColumn).toHaveClass('line-device_2') // device_2 is the first device to have "connected" status so it should be shown first
  })
  it('should sort by status "disconnected" when header "status" is clicked twice', () => {
    render(<StatusTable devicesStatus={devicesStatus} />)
    const nameHeader = screen.getAllByRole('columnheader')[1]
    userEvent.click(nameHeader)
    userEvent.click(nameHeader)
    const firstColumn = screen.getAllByTestId('status-line-container')[0]
    expect(firstColumn).toHaveClass('line-device_1') // device_1 is the first device to has "disconnected" status so it should be shown first
  })
})
