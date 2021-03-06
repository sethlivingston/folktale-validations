import { compose, curry, addIndex, reduce, toPairs, mapObjIndexed } from 'ramda'

export const reduceObjIndexed = curry((f, acc, v) =>
  compose(reduce(f, acc), toPairs)(v)
)

export const mapObjIndexedWithIndex = addIndex(mapObjIndexed)
export const reduceObjIndexedWithIndex = addIndex(reduceObjIndexed)
