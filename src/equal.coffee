import {curry} from "panda-garden"
import Method from "panda-generics"
import {detach, keys} from "./object"
import {cat, unique} from "./array"
import {
  isSymbol, isRegExp,
  isBuffer, isArrayBuffer, isTypedArray, isDataView,
  isMap, isArray, isObject, isSet,
  isBoolean, isDate, isNumber, isString,
  isFunction, isWeakMap, isError
} from "./type"

{create, define} = Method

# Inspired by Lodash's implementation, though we use generic dispatch: https://github.com/lodash/lodash/blob/898b378f069ecb6c92b7713529985ba78ff34d31/.internal/baseIsEqualDeep.js

equal = create
  name: "equal"
  description: "Performs a deep comparison of two entities."
  default: (a, b) -> a == b

define equal, isObject, isObject, (a, b) ->
  keysA = keys a
  keysB = keys b
  if keysA.length != keysB.length
    return false

  keysA.sort()
  keysB.sort()
  for key, i in keysA
    if (! equal keysA[i], keysB[i]) || (! equal a[key], b[key])
      return false
  true

# Only available within Node.js API
if Buffer?.from?
  define equal, isBuffer, isBuffer, (a, b) ->
    a.equals b

define equal, isTypedArray, isTypedArray, (a, b) ->
  if (a.length != b.length) || (a.name != b.name)
    return false
  for i in [0..a.length]
    if a[i] != b[i]
      return false
  true

# Only available within browser APIs
define equal, isArrayBuffer, isArrayBuffer, (a, b) ->
  if a.byteLength != b.byteLength
    return false
  equal (new Uint8Array a), (new Uint8Array b)

define equal, isDataView, isDataView, (a, b) ->
  if (a.byteLength != b.byteLength) || (a.byteOffset != b.byteOffset)
    return false
  equal a.buffer, b.buffer


isPrimitive = (x) -> (isBoolean x) || (isNumber x) || (isString x)

define equal, isPrimitive, isPrimitive, (a, b) ->
  a == b

define equal, isDate, isDate, (a, b) ->
  a.getTime() == b.getTime()

define equal, isRegExp, isRegExp, (a, b) ->
  a.toString() == b.toString()

define equal, isError, isError, (a, b) ->
  (equal a.name, b.name) && (equal a.message, b.message)

define equal, isSymbol, isSymbol, (a, b) ->
  a.valueOf() == b.valueOf()



define equal, isArray, isArray, (a, b) ->
  if a.length != b.length
    return false
  for i in [0..a.length]
    if ! equal a[i], b[i]
      return false
  true

mapToArray = (iterable) -> (entry for entry from iterable)

define equal, isMap, isMap, (a, b) ->
  equal (mapToArray a), (mapToArray b)

define equal, isSet, isSet, (a, b) ->
  equal (mapToArray a), (mapToArray b)


export {equal}
