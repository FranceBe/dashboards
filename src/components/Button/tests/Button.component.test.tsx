import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from 'components/Button'
import React from 'react'

describe('Button', () => {
  it('should match snapshot when enabled', () => {
    const { container } = render(<Button>Button text</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should match snapshot when disabled', () => {
    const { container } = render(<Button disabled>Button text</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should call provided function on click', () => {
    const mockedFn = jest.fn()
    render(<Button onClick={mockedFn}>Button text</Button>)
    userEvent.click(screen.getByRole('button'))
    expect(mockedFn).toHaveBeenCalledTimes(1)
  })
})
