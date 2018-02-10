import { toValidatorUID } from '../failures/utils'

module.exports = {
  // ---------------------------------------------------------------------------
  // Predicates
  // ---------------------------------------------------------------------------
  IS_ARRAY: toValidatorUID(`validateIsArray`),
  IS_NOT_ARRAY: toValidatorUID(`validateIsNotArray`),
  IS_OBJECT: toValidatorUID(`validateIsObject`),
  IS_NOT_OBJECT: toValidatorUID(`validateIsNotObject`),
  IS_BOOLEAN: toValidatorUID(`validateIsBoolean`),
  IS_NOT_BOOLEAN: toValidatorUID(`validateIsNotBoolean`),
  IS_DATE: toValidatorUID(`validateIsDate`),
  IS_NOT_DATE: toValidatorUID(`validateIsNotDate`),
  IS_STRING: toValidatorUID(`validateIsString`),
  IS_NOT_STRING: toValidatorUID(`validateIsNotString`),
  IS_EMPTY: toValidatorUID(`validateIsEmpty`),
  IS_NOT_EMPTY: toValidatorUID(`validateIsNotEmpty`),
  IS_EMPTY_ARRAY: toValidatorUID(`validateIsEmptyArray`),
  IS_NON_EMPTY_ARRAY: toValidatorUID(`validateIsNonEmptyArray`),
  IS_EMPTY_STRING: toValidatorUID(`validateIsEmptyString`),
  IS_NON_EMPTY_STRING: toValidatorUID(`validateIsNonEmptyString`),
  IS_FUNCTION: toValidatorUID(`validateIsFunction`),
  IS_NOT_FUNCTION: toValidatorUID(`validateIsNotFunction`),
  IS_NAN: toValidatorUID(`validateIsNaN`),
  IS_NOT_NAN: toValidatorUID(`validateIsNotNaN`),
  IS_NIL: toValidatorUID(`validateIsNil`),
  IS_NOT_NIL: toValidatorUID(`validateIsNotNil`),
  IS_NULL: toValidatorUID(`validateIsNull`),
  IS_NOT_NULL: toValidatorUID(`validateIsNotNull`),
  IS_UNDEFINED: toValidatorUID(`validateIsUndefined`),
  IS_NOT_UNDEFINED: toValidatorUID(`validateIsNotUndefined`),
  IS_PLAIN_OBJECT: toValidatorUID(`validateIsPlainObject`),
  IS_NOT_PLAIN_OBJECT: toValidatorUID(`validateIsNotPlainObject`),
  IS_NUMBER: toValidatorUID(`validateIsNumber`),
  IS_NOT_NUMBER: toValidatorUID(`validateIsNotNumber`),
  IS_VALID_DATE: toValidatorUID(`validateIsValidDate`),
  IS_NOT_VALID_DATE: toValidatorUID(`validateIsNotValidDate`),
  IS_VALID_NUMBER: toValidatorUID(`validateIsValidNumber`),
  IS_NOT_VALID_NUMBER: toValidatorUID(`validateIsNotValidNumber`),
  IS_POSITIVE: toValidatorUID(`validateIsPositive`),
  IS_NEGATIVE: toValidatorUID(`validateIsNegative`),
  // ---------------------------------------------------------------------------
  // Array
  // ---------------------------------------------------------------------------
  IS_ARRAY_OF: toValidatorUID(`validateIsArrayOf`),
  ARRAY_ELEMENTS: toValidatorUID(`validateArrayElements`),
  // ---------------------------------------------------------------------------
  // Association
  // ---------------------------------------------------------------------------
  IS_LENGTH_BETWEEN: toValidatorUID(`validateIsLengthBetween`),
  IS_LENGTH_GREATER_THAN: toValidatorUID(`validateIsLengthGreaterThan`),
  IS_LENGTH_LESS_THAN: toValidatorUID(`validateIsLengthLessThan`),
  // ---------------------------------------------------------------------------
  // Object
  // ---------------------------------------------------------------------------
  EXCLUSIVE_KEYS: toValidatorUID(`validateExclusiveKeys`),
  OBJECT_VALUES: toValidatorUID(`validateOjectValues`),
  REQUIRED_KEYS: toValidatorUID(`validateRequiredKeys`),
  WHITELISTED_KEYS: toValidatorUID(`validateWhitelistedKeys`),
  // ---------------------------------------------------------------------------
  // Other
  // ---------------------------------------------------------------------------
  IS_WHITELISTED_VALUE: toValidatorUID(`validateIsWhitelistedValue`),
  IS_NOT_BLACKLISTED_VALUE: toValidatorUID(`isNotBlacklistedValue`),
  IS_NUMBER_WITH_UNIT: toValidatorUID(`validateIsNumberWithUnit`),
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
}
