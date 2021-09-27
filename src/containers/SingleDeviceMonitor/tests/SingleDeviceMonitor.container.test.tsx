import '@testing-library/jest-dom/extend-expect'

import { render, screen, waitFor } from '@testing-library/react'
import { SingleDeviceMonitor } from 'containers/SingleDeviceMonitor'
import { createLocation, createMemoryHistory } from 'history'
import fetch from 'jest-fetch-mock'
import React from 'react'
import { match } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

describe('SingleDeviceMonitor', () => {
  // Set up
  // Mock react-router props
  const history = createMemoryHistory()
  const path = `/`
  const match: match<{ id: string }> = {
    isExact: false,
    params: { id: '1' },
    path,
    url: path.replace(':id', '1'),
  }
  const location = createLocation(match.url)
  const routerPropsMocked = {
    history,
    location,
    match,
  }

  // Mock fetch response so we does not need to call real API for testing
  beforeEach(() => {
    fetch.enableMocks()
    fetch.mockResponseOnce(
      JSON.stringify({
        connection_type: 'ethernet',
        last_seen_at: '2021-09-26T15:10:44.987',
        mac_wifi: 'c5:d7:14:84:f8:cf',
        serial_number: 'device_0',
        sim_id: 98962001,
        status: 'connected',
        url: 'http://url.com',
        voltage: 1234.933884,
      }),
    )
  })
  it('should match snapshot', async () => {
    const { container } = await waitFor(() =>
      render(
        <Router>
          <SingleDeviceMonitor {...routerPropsMocked} />
        </Router>,
      ),
    )

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should back to dashboard link', async () => {
    await waitFor(() =>
      render(
        <Router>
          <SingleDeviceMonitor {...routerPropsMocked} />
        </Router>,
      ),
    )
    expect(screen.getByText('Back to dashboards')).toBeInTheDocument()
  })
  it('should display title', async () => {
    await waitFor(() =>
      render(
        <Router>
          <SingleDeviceMonitor {...routerPropsMocked} />
        </Router>,
      ),
    )
    expect(screen.getByText('Monitoring - device_0')).toBeInTheDocument()
  })
  it('should display DeviceCard', async () => {
    await waitFor(() =>
      render(
        <Router>
          <SingleDeviceMonitor {...routerPropsMocked} />
        </Router>,
      ),
    )
    expect(screen.getByTestId('device-card')).toBeInTheDocument()
  })
})
