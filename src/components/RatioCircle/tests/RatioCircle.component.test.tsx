import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import RatioCircle from 'components/RatioCircle'
import React from 'react'
import { palette } from 'styles/variables'
import { RatioCircleProps } from 'types/ratioCircle'

describe('RatioCircle', () => {
  const defaultProps: RatioCircleProps = {
    content: '14/23',
  }
  it('should match snapshot', () => {
    const { container } = render(<RatioCircle {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should have grey_primary border color by default', () => {
    const { container } = render(<RatioCircle {...defaultProps} />)
    expect(container.firstChild).toHaveStyleRule('border', `3px solid ${palette.grey_primary}`)
  })
  it('should have custom border color when color props is provided', () => {
    const { container } = render(<RatioCircle {...defaultProps} color={'#003725'} />)
    expect(container.firstChild).toHaveStyleRule('border', '3px solid #003725')
  })
  it('should display content', () => {
    render(<RatioCircle {...defaultProps} color={'#003725'} />)
    expect(screen.getByText('14/23')).toBeInTheDocument()
  })
})
