import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import StatusStat from 'containers/StatusStat'
import React from 'react'

describe('StatusStat', () => {
  it('should match snapshot', () => {
    const { container } = render(<StatusStat connectedLength={23} disconnectedLength={12} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should display title', () => {
    render(<StatusStat connectedLength={23} disconnectedLength={12} />)
    expect(screen.getByText('Status Ratio')).toBeInTheDocument()
  })
  it('should display sub title with status icon', () => {
    render(<StatusStat connectedLength={23} disconnectedLength={12} />)
    expect(screen.getByText('Connected')).toBeInTheDocument()
    expect(screen.getByTestId('signal-on')).toBeInTheDocument()
    expect(screen.getByText('Disconnected')).toBeInTheDocument()
    expect(screen.getByTestId('signal-off')).toBeInTheDocument()
  })
  it('should display 2 ratio circle', () => {
    render(<StatusStat connectedLength={23} disconnectedLength={12} />)
    expect(screen.getAllByTestId('ratio-circle')).toHaveLength(2)
  })
})
