import { isNotNull, isArray } from 'ramda-adjunct';
import { always, curry, ifElse, when, compose, of } from 'ramda';
import { validation as Validation } from 'folktale';
import {
  joinWithColon,
  joinWithOr,
  joinWithAnd,
  quote,
  tabsForLevel,
  joinWithSpace,
  propValue,
} from './utils';
import { ROOT_FIELD } from './const';

const { Failure } = Validation;

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------

export const joinMessagesWithAnd = joinWithAnd;
export const joinMessagesWithOr = joinWithOr;

export const wrapFailureMessageWith = messageWrapper =>
  compose(Failure, of, messageWrapper, propValue);

// -----------------------------------------------------------------------------
// Message Renderers
// -----------------------------------------------------------------------------

export const prefixWithKey = curry((level, s) =>
  joinWithSpace([`\n${tabsForLevel(level)} – Key`, s])
);

export const prefixWithIndex = (level, index, s) =>
  joinWithSpace([`\n${tabsForLevel(level)} – [${index}]`, s]);

export const objectValueErrorMessage = (level, name) => value => {
  const s = when(isArray, joinWithAnd)(value);
  return ifElse(
    isNotNull,
    _ => prefixWithKey(level, joinWithColon([quote(name), s])),
    always(s)
  )(name);
};

export const arrayValueErrorMessage = (level, index, value) =>
  prefixWithIndex(level, index, value);

export const fieldsErrorMessage = (level, value) =>
  `\n${tabsForLevel(level)} – ${value}`;

export const invalidObjectPrefix = always(`Object`);
export const invalidArrayPrefix = always(`Array`);

export const invalidObjectReasonInvalidValues = level =>
  `\n${tabsForLevel(level)} – included invalid value(s)`;

export const invalidArrayReasonInvalidObjects = always(
  `included invalid object(s)`
);

// -----------------------------------------------------------------------------
// Constraint Validator Messages
// -----------------------------------------------------------------------------

export const constraintsObjPrefix = always(`constraints`);

export const objectValidatorErrorMessage = fieldName => messages =>
  fieldName === ROOT_FIELD
    ? joinWithColon([`Object Invalid`, messages])
    : `for field ${joinWithColon([quote(fieldName), messages])}`;

export const fieldErrorMessage = (field, errorMessage) =>
  `Field ${joinWithColon([quote(field), errorMessage])}`;

export const constraintValidatorErrorMessage = messages =>
  `Constraints ${messages}`;

export const objectErrorMessageWrapper = fieldName =>
  wrapFailureMessageWith(objectValidatorErrorMessage(fieldName));

export const constraintErrorMessageWrapper = wrapFailureMessageWith(
  constraintValidatorErrorMessage
);
