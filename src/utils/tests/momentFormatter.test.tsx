import { momentFormatter } from 'utils/momentFormatter'

describe('momentFormatter', () => {
  it('should format date using moment', () => {
    const date = '2021-09-27T14:59:09.021426'
    expect(momentFormatter(date)).toBe('September 27th 2021, 2:59:09 pm')
  })
})
