import React from 'react'
import { GlobalStyle } from '../src/styles/global-styles'
import { MemoryRouter } from 'react-router'
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
  ),
]
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
