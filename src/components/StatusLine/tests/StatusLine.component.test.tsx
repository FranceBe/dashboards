import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import StatusLine from 'components/StatusLine'
import React from 'react'

describe('StatusLine', () => {
  describe('Given status is "connected"', () => {
    it('should match snapshot', () => {
      const { container } = render(<StatusLine status={'connected'} name={'device_0'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should find name', () => {
      render(<StatusLine status={'connected'} name={'device_0'} />)
      expect(screen.getByText('device_0')).toBeInTheDocument()
    })
    it('should find Status component', () => {
      render(<StatusLine status={'connected'} name={'device_0'} />)
      expect(screen.getByTestId('status-container')).toBeInTheDocument()
    })
  })
  describe('Given status is "disconnected"', () => {
    it('should match snapshot', () => {
      const { container } = render(<StatusLine status={'disconnected'} name={'device_0'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have red_primary background color', () => {
      render(<StatusLine status={'disconnected'} name={'device_0'} />)
      expect(screen.getByText('device_0')).toBeInTheDocument()
    })
    it('should find the disconnected icon', () => {
      render(<StatusLine status={'disconnected'} name={'device_0'} />)
      expect(screen.getByTestId('status-container')).toBeInTheDocument()
    })
  })
})
