import { reject, isEmpty, ifElse } from 'ramda'
import { VALIDATE_REQUIRED_KEYS } from '../../const/validatorUids'
import {
  alwaysSuccess,
  alwaysFailureWithPayload,
} from '../../utils/validations'
import { hasFlipped } from '../../utils/object'

const validateRequiredKeys = requiredKeys => o => {
  const collectInvalidKeys = reject(hasFlipped(o))
  const invalidKeys = collectInvalidKeys(requiredKeys)
  return ifElse(
    isEmpty,
    alwaysSuccess(o),
    alwaysFailureWithPayload(VALIDATE_REQUIRED_KEYS, o, [
      requiredKeys,
      invalidKeys,
    ])
  )(invalidKeys)
}

export default validateRequiredKeys
