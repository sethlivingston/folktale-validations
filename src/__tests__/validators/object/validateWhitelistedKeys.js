import { validateWhitelistedKeys } from '../../../index'
import {
  key1,
  key2,
  key3,
  key4,
} from '../../testHelpers/fixtures/constraintValues'
import toPayload from '../../../failures/toPayload'
import { WHITELISTED_KEYS } from '../../../const/uids'

describe(`validateWhitelistedKeys()`, () => {
  const whitelistedKeys = [key1, key2, key3]
  let validateWhitelistedKeysWithKeys

  beforeEach(() => {
    validateWhitelistedKeysWithKeys = validateWhitelistedKeys(whitelistedKeys)
  })

  describe(`when object has only valid keys`, () => {
    it.only(`returns a Validation.Success with a value of the object`, () => {
      const value = {
        [key1]: 1,
        [key2]: 2,
        [key3]: 3,
      }

      const validation = validateWhitelistedKeysWithKeys(value)
      expect(validation).toEqualSuccessWithValue(value)
    })
  })

  describe(`when object has only invalid keys`, () => {
    it.only(`returns a Validation.Failure with a payload`, () => {
      const value = {
        [key1]: 1,
        [key2]: 2,
        [key3]: 3,
        [key4]: 4,
      }
      const invalidKeys = [key4]
      const expectedPayload = toPayload(WHITELISTED_KEYS, value, [
        whitelistedKeys,
        invalidKeys,
      ])
      const validation = validateWhitelistedKeysWithKeys(value)
      expect(validation).toEqualFailureWithValue(expectedPayload)
    })
  })

  describe(`when object has no keys`, () => {
    it.only(`returns a Validation.Success with a value of the object`, () => {
      const value = {}
      const validation = validateWhitelistedKeysWithKeys(value)
      expect(validation).toEqualSuccessWithValue(value)
    })
  })
})
