import { routes } from 'utils/routes'

describe('Routes', () => {
  it('should match snapshot', () => {
    expect(routes).toMatchSnapshot()
  })
})
