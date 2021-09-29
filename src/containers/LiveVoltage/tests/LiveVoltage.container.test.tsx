import '@testing-library/jest-dom/extend-expect'

import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LiveVoltage from 'containers/LiveVoltage'
import fetch from 'jest-fetch-mock'
import React from 'react'
import { LiveVoltageProps } from 'types/liveVoltage'

describe('LiveVoltage', () => {
  // Set up
  // Mock fetch response
  beforeEach(() => {
    fetch.enableMocks()
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [],
      }),
    )
  })
  const defaultProps: LiveVoltageProps = {
    deviceId: 1,
    initialVoltage: {
      time: 'September 27th 2021, 2:59:09 pm',
      voltage: 12.343,
    },
  }
  it('should match snapshot', async () => {
    const { container } = await waitFor(() => render(<LiveVoltage {...defaultProps} />))
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render title', async () => {
    await waitFor(() => render(<LiveVoltage {...defaultProps} />))
    expect(screen.getByText('Live voltage stats')).toBeInTheDocument()
  })
  it('should render start button', async () => {
    await waitFor(() => render(<LiveVoltage {...defaultProps} />))
    expect(screen.getByText('Start live monitoring')).toBeInTheDocument()
  })
  it('should render stop button when user has clicked', async () => {
    await waitFor(() => render(<LiveVoltage {...defaultProps} />))
    act(() => {
      userEvent.click(screen.getByRole('button'))
    })
    await waitFor(() => expect(screen.getByText('Stop live monitoring')).toBeInTheDocument())
    // Stopping the live monitoring after testing to be clean
    act(() => {
      userEvent.click(screen.getByRole('button'))
    })
  })
  it('should render ChartLine', async () => {
    await waitFor(() => render(<LiveVoltage {...defaultProps} />))
    expect(screen.getByTestId('chart-line')).toBeInTheDocument()
  })
})
