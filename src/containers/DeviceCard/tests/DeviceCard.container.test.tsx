import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import DeviceCard from 'containers/DeviceCard/index'
import moment from 'moment'
import React from 'react'
import { DashboardDeviceable } from 'types/dashboardDevice'

describe('DeviceCard', () => {
  const device: DashboardDeviceable = {
    connection_type: 'cellular',
    last_seen_at: '2021-09-27T14:59:09.021426',
    mac_wifi: '44:20:82:3c:fd:e6',
    serial_number: 'device_1',
    sim_id: 73383683,
    status: 'disconnected',
    url: 'http://localhost:8010/device/1',
    voltage: 8.167522699950393,
  }
  it('should match snapshot', () => {
    const { container } = render(<DeviceCard device={device} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should display data info of the device', () => {
    render(<DeviceCard device={device} />)
    expect(screen.getByText('Serial number')).toBeInTheDocument()
    expect(screen.getByText('device_1')).toBeInTheDocument()
    expect(screen.getByText('Connection type')).toBeInTheDocument()
    expect(screen.getByText('cellular')).toBeInTheDocument()
    expect(screen.getByText('Voltage')).toBeInTheDocument()
    expect(screen.getByText('8.167522699950393')).toBeInTheDocument()
    expect(screen.getByText('Last seen at')).toBeInTheDocument()
    expect(
      screen.getByText(moment('2021-09-27T14:59:09.021426').format('MMMM Do YYYY, h:mm:ss a')),
    ).toBeInTheDocument()
    expect(screen.getByText('Mac wifi')).toBeInTheDocument()
    expect(screen.getByText('44:20:82:3c:fd:e6')).toBeInTheDocument()
    expect(screen.getByText('Sim id')).toBeInTheDocument()
    expect(screen.getByText('73383683')).toBeInTheDocument()
    expect(screen.getByText('Url')).toBeInTheDocument()
    expect(screen.getByText('http://localhost:8010/device/1')).toBeInTheDocument()
  })
})
