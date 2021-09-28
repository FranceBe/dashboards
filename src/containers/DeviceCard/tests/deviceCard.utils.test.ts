import { convertStringForTitle } from 'containers/DeviceCard/deviceCard.utils'

describe('DeviceCard utils', () => {
  describe('convertStringForTitle', () => {
    it('should return a string with a capitalize first letter and spaces instead of _', () => {
      const stringToConvert = 'a_string_to_convert'
      const result = convertStringForTitle(stringToConvert)
      expect(result).toBe('A string to convert')
    })
  })
})
