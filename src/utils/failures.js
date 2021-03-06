import {
  prop,
  has,
  objOf,
  when,
  fromPairs,
  compose,
  mergeAll,
  assoc,
  map,
  either,
  both,
  always,
} from 'ramda'
import { isObj, appendFlipped, reduceIndexed } from 'ramda-adjunct'
import FAILURE_FIELD_NAMES from '../const/failureFieldNames'
import { hasMoreThanOneChild } from './predicates'
import { joinWithDot } from '../utils/formatting'
import { propValue, isFailure } from '../utils/validations'

const {
  NAME,
  FIELDS_FAILURE_MESSAGE,
  FIELDS,
  CHILDREN,
  AND,
  OR,
  SCOPE,
} = FAILURE_FIELD_NAMES

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export const propName = prop(NAME)
export const propFields = prop(FIELDS)
export const propChildren = prop(CHILDREN)
export const propFieldsFailureMessage = prop(FIELDS_FAILURE_MESSAGE)
export const propAnd = prop(AND)
export const propOr = prop(OR)
export const propScope = prop(SCOPE)

export const setPropName = assoc(NAME)
export const setPropScope = assoc(SCOPE)

export const hasPropChildren = has(CHILDREN)
export const isAndObj = has(AND)
export const isOrObj = has(OR)
export const isAndOrOrObj = both(isObj, either(isAndObj, isOrObj))

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

const filterFailuresToChildrenObj = map(
  compose(
    objOf(CHILDREN),
    reduceIndexed(
      (acc, value, index) =>
        when(always(isFailure(value)), assoc(index, propValue(value)))(acc),
      {}
    )
  )
)

// -----------------------------------------------------------------------------
// Creation
// -----------------------------------------------------------------------------

export const andMessages = when(hasMoreThanOneChild, objOf(AND))
export const orMessages = when(hasMoreThanOneChild, objOf(OR))
export const toObjectError = compose(objOf(FIELDS), mergeAll, fromPairs)
export const toObjectFieldsError = objOf(FIELDS_FAILURE_MESSAGE)
export const toArrayError = compose(objOf(CHILDREN), fromPairs)
export const toChildrenFieldsError = compose(
  objOf(FIELDS),
  filterFailuresToChildrenObj
)

// -----------------------------------------------------------------------------
// Validator UID
// -----------------------------------------------------------------------------

const UIDPrefix = `folktale-validations`
export const toValidatorUID = compose(joinWithDot, appendFlipped([UIDPrefix]))
