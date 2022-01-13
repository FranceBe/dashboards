import { columns } from 'containers/InfoTable/infoTable.utils'

describe('InfoTable Utils', () => {
  describe('columns', () => {
    it('should match snapshot', () => {
      expect(columns).toMatchSnapshot()
    })
  })
})
