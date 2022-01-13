import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { SingleDeviceMonitor } from 'containers/SingleDeviceMonitor'
import { createLocation, createMemoryHistory } from 'history'
import React from 'react'
import { match } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import * as customHook from 'utils/useFetch'

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

  // Mock fetch response so we do not need to call real API for testing
  const spy = jest.spyOn(customHook, 'useFetch')
  spy.mockReturnValue({
    data: {
      connection_type: 'ethernet',
      last_seen_at: '2021-09-26T15:10:44.987',
      mac_wifi: 'c5:d7:14:84:f8:cf',
      serial_number: 'device_0',
      sim_id: 98962001,
      status: 'connected',
      url: 'http://url.com',
      voltage: 1234.933884,
    },
    status: 'fetched',
  })

  // clean all mocks after all
  afterAll(() => {
    jest.clearAllMocks()
  })

  // SetupTest for rendering component
  const setupTest = (props = {}) => {
    return render(
      <Router>
        <SingleDeviceMonitor {...routerPropsMocked} {...props} />
      </Router>,
    )
  }

  it('should match snapshot', () => {
    const { container } = setupTest()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render "back to dashboards" link', () => {
    setupTest()

    expect(screen.getByText('Back to dashboards')).toBeInTheDocument()
  })
  setupTest()
  it('should display title', () => {
    setupTest()

    expect(screen.getByText('Monitoring - device_0')).toBeInTheDocument()
  })

  it('should display DeviceCard', () => {
    setupTest()

    expect(screen.getByTestId('device-card')).toBeInTheDocument()
  })
})
