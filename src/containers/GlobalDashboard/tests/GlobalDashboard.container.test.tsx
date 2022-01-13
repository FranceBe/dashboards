import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { GlobalDashboard } from 'containers/GlobalDashboard'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { momentFormatter } from 'utils/momentFormatter'
import * as customHook from 'utils/useFetch'

describe('GlobalDashboard', () => {
  // Set up
  // Mock fetch response so we do not need to call real API for testing
  const spy = jest.spyOn(customHook, 'useFetch')
  spy.mockReturnValue({
    data: [
      {
        connection_type: 'ethernet',
        last_seen_at: '2021-09-26T15:10:44.987',
        mac_wifi: 'c5:d7:14:84:f8:cf',
        serial_number: 'device_0',
        sim_id: 98962001,
        status: 'connected',
        url: 'http://url.com',
        voltage: 1234.933884,
      },
      {
        connection_type: 'wifi',
        last_seen_at: '2021-09-26T15:10:43.987',
        mac_wifi: 'c4:d7:14:84:f8:cf',
        serial_number: 'device_1',
        sim_id: 98962002,
        status: 'disconnected',
        url: 'http://url.com',
        voltage: 14.84,
      },
      {
        connection_type: 'cellular',
        last_seen_at: '2021-09-26T15:10:42.987',
        mac_wifi: 'a4:d7:14:84:f8:cf',
        serial_number: 'device_2',
        sim_id: 98962003,
        status: 'connected',
        url: 'http://url.com',
        voltage: 3431.84,
      },
    ],
    status: 'fetched',
  })

  // Setup Test with render
  const setupTest = () => {
    return render(
      <Router>
        <GlobalDashboard />
      </Router>,
    )
  }
  it('should match snapshot', () => {
    // We need to await the render because GlobalDashboard use
    // The useFetch hooks
    const { container } = setupTest()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display VoltageStat', () => {
    setupTest()

    expect(screen.getByText('voltage')).toBeInTheDocument()
    // We test the presence of ChartBar component used in VoltageStat
    expect(screen.getByTestId('chart-bar')).toBeInTheDocument()
  })

  it('should display ConnectionTypeStat', () => {
    setupTest()

    // We test the presence of ChartPie component used in ConnectionTypeStat
    expect(screen.getByTestId('chart-pie')).toBeInTheDocument()
  })

  it('should display InfoTable & StatusStat', () => {
    setupTest()

    // We test the presence of each serial_number as text
    // We should find 2 times the serial_number as text
    // because it is rendered once in ChartBar (as axis legend)
    expect(screen.getAllByText('device_0')).toHaveLength(2)
    expect(screen.getAllByText('device_1')).toHaveLength(2)
    expect(screen.getAllByText('device_2')).toHaveLength(2)
    // We test the presence of each mac_wifi as text
    expect(screen.getByText('c5:d7:14:84:f8:cf')).toBeInTheDocument()
    expect(screen.getByText('c4:d7:14:84:f8:cf')).toBeInTheDocument()
    expect(screen.getByText('a4:d7:14:84:f8:cf')).toBeInTheDocument()
    // We test the presence of each sim_id as text
    expect(screen.getByText('98962001')).toBeInTheDocument()
    expect(screen.getByText('98962002')).toBeInTheDocument()
    expect(screen.getByText('98962003')).toBeInTheDocument()
    // We test the presence of each last_seen_at as converted date text
    const dateItem1 = momentFormatter('2021-09-26T15:10:44.987')
    const dateItem2 = momentFormatter('2021-09-26T15:10:43.987')
    const dateItem3 = momentFormatter('2021-09-26T15:10:42.987')
    expect(screen.getByText(dateItem1)).toBeInTheDocument()
    expect(screen.getByText(dateItem2)).toBeInTheDocument()
    expect(screen.getByText(dateItem3)).toBeInTheDocument()
    // We test the presence of each connection_type as icon
    expect(screen.getByTestId('icon-cellular')).toBeInTheDocument()
    expect(screen.getByTestId('icon-wifi')).toBeInTheDocument()
    expect(screen.getByTestId('icon-ethernet')).toBeInTheDocument()
    // We test the presence of each status as icon
    // Icons should display twice : once in InfoTable and once in StatusStat
    expect(screen.getAllByTestId('signal-off')).toHaveLength(2)
    expect(screen.getAllByTestId('signal-on')).toHaveLength(3) // signal on is
    // displayed 3 times, once in StatusStat and 2 in InfoTable because there are 2 devices that
    // are connected in the mocked data for this test
  })
})
