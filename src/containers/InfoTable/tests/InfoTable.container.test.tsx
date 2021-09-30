import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InfoTable from 'containers/InfoTable'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
  const setupTest = (props = {}) => {
    return render(
      <Router>
        <InfoTable devicesInfo={devicesInfo} {...props} />
      </Router>,
    )
  }
  it('should match snapshot', () => {
    const { container } = setupTest()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display as many status-container as there are devices', () => {
    setupTest()

    expect(screen.getAllByTestId('status-container')).toHaveLength(devicesInfo.length)
  })

  const cases: string[][] = [
    ['serial_number', 'desc', 'device_2'],
    ['mac_wifi', 'asc', 'device_2'],
    ['sim_id', 'asc', 'device_2'],
    ['last_seen_at', 'asc', 'device_0'],
    ['connection_type', 'asc', 'device_1'],
    ['status', 'asc', 'device_0'],
  ]
  it.each(cases)(
    'should sort by %s in %s order when corresponding header is clicked',
    (headerName: string, order: string, deviceName: string) => {
      setupTest()
      const header = screen.getByRole('columnheader', { name: `${headerName} ▲` })
      userEvent.click(header)
      expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass(deviceName)
    },
  )
  it('should sort by serial_number in asc order when header "serial_number" is clicked twice', () => {
    setupTest()

    const nameHeader = screen.getByRole('columnheader', { name: /serial_number/ })
    userEvent.click(nameHeader)
    userEvent.click(nameHeader)
    expect(screen.getAllByText('device', { exact: false })[0]).toHaveClass('device_0')
  })
})
