import toPayload from '../../../failures/toPayload'

export const func = () => {}
export const funcWhichThrows = () => {
  throw new Error(`error`)
}

export const value1 = `value1`
export const value2 = `value2`
export const value3 = `value3`
export const value4 = `value4`
export const value5 = `value5`
export const value6 = `value6`
export const value7 = `value7`
export const value8 = `value8`
export const value9 = `value9`
export const name1 = `name1`
export const name2 = `name2`
export const invalidKeyValue = `invalidKeyValue`
export const invalidKeyName = `invalidKeyName`
export const key1 = `key1`
export const key2 = `key2`
export const key3 = `key3`
export const key4 = `key4`
export const key5 = `key5`
export const key6 = `key6`
export const key7 = `key7`
export const key8 = `key8`
export const key9 = `key9`
export const key10 = `key10`
export const key11 = `key11`
export const key12 = `key12`
export const key13 = `key13`
export const transformedValue1 = `transformed1`
export const transformedValue2 = `transformed2`
export const defaultValue1 = `default1`
export const defaultValue2 = `default2`
export const uid1 = `uid1`
export const uid2 = `uid2`
export const uid3 = `uid3`
export const uid4 = `uid4`
export const uid5 = `uid5`
export const uid6 = `uid6`
export const payload1 = toPayload(uid1, value1, [1, 2])
export const payload2 = toPayload(uid2, value2, [1, 2])
export const payload3 = toPayload(uid3, value3, [1, 2])
export const payload4 = toPayload(uid4, value4, [1, 2])
export const payload5 = toPayload(uid5, value5, [1, 2])
export const payload6 = toPayload(uid6, value6, [1, 2])
export const message1 = `message1`
export const message2 = `message2`
export const message3 = `message3`
export const message4 = `message4`
export const message5 = `message5`
export const scopeName1 = `scopeName1`
export const validator1 = func
