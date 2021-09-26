import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InfoTable from 'containers/InfoTable'
import React from 'react'
import { InfoTableable } from 'types/infoTable'

describe('InfoTable', () => {
  const devicesInfo: InfoTableable[] = [
    {
      connection_type: 'ethernet',
      last_seen_at: '2021-09-26T15:10:44.987987',
      mac_wifi: 'c5:d7:14:84:f8:cf',
      name: 'device_0',
      sim_id: 50709944,
      status: 'connected',
    },
    {
      connection_type: 'cellular',
      last_seen_at: '2021-09-26T15:10:45.006415',
      mac_wifi: '44:20:82:3c:fd:e6',
      name: 'device_1',
      sim_id: 73383683,
      status: 'disconnected',
    },
    {
      connection_type: 'wifi',
      last_seen_at: '2021-09-26T15:10:45.006701',
      mac_wifi: '1c:2e:2b:b8:56:9d',
      name: 'device_2',
      sim_id: 43766938,
      status: 'disconnected',
    },
  ]
  it('should match snapshot', () => {
    const { container } = render(<InfoTable devicesInfo={devicesInfo} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should display as many status-container as there are devices', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    expect(screen.getAllByTestId('status-container')).toHaveLength(devicesInfo.length)
  })
  it('should sort by serial_number in asc order when header "serial_number" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[0]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_0')
  })
  it('should sort by serial_number in desc order when header "serial_number" is clicked twice', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[0]
    userEvent.click(nameHeader)
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_2')
  })
  it('should sort by mac_wifi (alphanumeric) when header "mac_wifi" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[1]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_2')
  })
  it('should sort by sim_id (alphanumeric) when header "sim_id" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[2]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_2')
  })
  it('should sort by last_seen_at (by date) when header "last_seen_at" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[3]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_0')
  })
  it('should sort by connection_type when header "connection_type" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[4]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_0')
  })
  it('should sort by status "connected" when header "status" is clicked', () => {
    render(<InfoTable devicesInfo={devicesInfo} />)
    const nameHeader = screen.getAllByRole('columnheader')[5]
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_0') // device 0 is the first device to be connected so it should appear first
  })
})
