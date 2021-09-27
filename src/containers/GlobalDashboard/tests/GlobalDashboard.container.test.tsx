import '@testing-library/jest-dom/extend-expect'

import { render, screen, waitFor } from '@testing-library/react'
import { GlobalDashboard } from 'containers/GlobalDashboard'
import fetch from 'jest-fetch-mock'
import moment from 'moment'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('GlobalDashboard', () => {
  // Set up
  // Mock fetch response so we does not need to call real API for testing
  beforeEach(() => {
    fetch.enableMocks()
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
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
      }),
    )
  })
  describe('GlobalDashboard', () => {
    it('should match snapshot', async () => {
      // We need to await the render because GlobalDashboard use
      // The useFetch hooks
      const { container } = await waitFor(() =>
        render(
          <Router>
            <GlobalDashboard />
          </Router>,
        ),
      )
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should display VoltageStats', async () => {
      await waitFor(() =>
        render(
          <Router>
            <GlobalDashboard />
          </Router>,
        ),
      )
      // We test the legend text 'voltage' that should be displayed in the
      // ChartBar component used in VoltageStats
      expect(screen.getByText('voltage')).toBeInTheDocument()
      // We test the presence of ChartBar component used in VoltageStats
      expect(screen.getByTestId('chart-bar')).toBeInTheDocument()
    })
    it('should display ConnectionTypeStat', async () => {
      await waitFor(() =>
        render(
          <Router>
            <GlobalDashboard />
          </Router>,
        ),
      )
      // We test the presence of ChartPie component used in ConnectionTypeStat
      expect(screen.getByTestId('chart-pie')).toBeInTheDocument()
    })
    it('should display InfoTable', async () => {
      await waitFor(() =>
        render(
          <Router>
            <GlobalDashboard />
          </Router>,
        ),
      )
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
      const dateItem1 = moment('2021-09-26T15:10:44.987').format('MMMM Do YYYY, h:mm:ss a')
      const dateItem2 = moment('2021-09-26T15:10:43.987').format('MMMM Do YYYY, h:mm:ss a')
      const dateItem3 = moment('2021-09-26T15:10:42.987').format('MMMM Do YYYY, h:mm:ss a')
      expect(screen.getByText(dateItem1)).toBeInTheDocument()
      expect(screen.getByText(dateItem2)).toBeInTheDocument()
      expect(screen.getByText(dateItem3)).toBeInTheDocument()
      // We test the presence of each connection_type as icon
      expect(screen.getByTestId('icon-cellular')).toBeInTheDocument()
      expect(screen.getByTestId('icon-wifi')).toBeInTheDocument()
      expect(screen.getByTestId('icon-ethernet')).toBeInTheDocument()
      // We test the presence of each status as icon
      expect(screen.getByTestId('signal-off')).toBeInTheDocument()
      expect(screen.getAllByTestId('signal-on')).toHaveLength(2)
    })
  })
})
