import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import Status from 'components/Status'
import React from 'react'
import { palette } from 'styles/variables'

describe('Status', () => {
  describe('Given status is "connected"', () => {
    it('should match snapshot', () => {
      const { container } = render(<Status status={'connected'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have green_primary background color', () => {
      const { container } = render(<Status status={'connected'} />)
      expect(container.firstChild).toHaveStyleRule('background-color', palette.green_primary)
    })
    it('should find the connected icon', () => {
      render(<Status status={'connected'} />)
      expect(screen.getByTestId('signal-on')).toBeInTheDocument()
    })
  })
  describe('Given status is "disconnected"', () => {
    it('should match snapshot', () => {
      const { container } = render(<Status status={'disconnected'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have red_primary background color', () => {
      const { container } = render(<Status status={'disconnected'} />)
      expect(container.firstChild).toHaveStyleRule('background-color', palette.red_primary)
    })
    it('should find the disconnected icon', () => {
      render(<Status status={'disconnected'} />)
      expect(screen.getByTestId('signal-off')).toBeInTheDocument()
    })
  })
})
