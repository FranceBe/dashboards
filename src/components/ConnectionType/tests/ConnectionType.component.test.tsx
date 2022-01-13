import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import ConnectionType from 'components/ConnectionType'
import React from 'react'
import { palette } from 'styles/variables'

describe('ConnectionType', () => {
  describe('Given connection_type is "wifi"', () => {
    it('should match snapshot', () => {
      const { container } = render(<ConnectionType connection_type={'wifi'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have green_primary background color', () => {
      const { container } = render(<ConnectionType connection_type={'wifi'} />)
      expect(container.firstChild).toHaveStyleRule('background-color', palette.purple_secondary)
    })
    it('should find the connected icon', () => {
      render(<ConnectionType connection_type={'wifi'} />)
      expect(screen.getByTestId('icon-wifi')).toBeInTheDocument()
    })
  })
  describe('Given connection_type is "ethernet"', () => {
    it('should match snapshot', () => {
      const { container } = render(<ConnectionType connection_type={'ethernet'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have green_primary background color', () => {
      const { container } = render(<ConnectionType connection_type={'ethernet'} />)
      expect(container.firstChild).toHaveStyleRule('background-color', palette.blue_primary)
    })
    it('should find the connected icon', () => {
      render(<ConnectionType connection_type={'ethernet'} />)
      expect(screen.getByTestId('icon-ethernet')).toBeInTheDocument()
    })
  })
  describe('Given connection_type is "cellular"', () => {
    it('should match snapshot', () => {
      const { container } = render(<ConnectionType connection_type={'cellular'} />)
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have green_primary background color', () => {
      const { container } = render(<ConnectionType connection_type={'cellular'} />)
      expect(container.firstChild).toHaveStyleRule('background-color', palette.green_secondary)
    })
    it('should find the connected icon', () => {
      render(<ConnectionType connection_type={'cellular'} />)
      expect(screen.getByTestId('icon-cellular')).toBeInTheDocument()
    })
  })
})
