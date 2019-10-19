import {curry} from "panda-garden"
import Method from "panda-generics"

{create, define} = Method

prototype = (value) -> if value? then Object.getPrototypeOf value

isPrototype = curry (p, value) -> p? && p == prototype value

isType = curry (type, value) -> isPrototype type?.prototype, value

isTransitivePrototype = curry (p, value) ->
  p? && (p == (q = prototype value) || (q? && isTransitivePrototype p, q))

isKind = curry (type, value) -> isTransitivePrototype type?.prototype, value

# TODO: is this correct? to check generally for a derived type
# needs tests ....
isDerived = curry (type, value) -> isKind type, value::

isNumber = isType Number

isNaN = (n) -> Number.isNaN n

isFinite = (n) -> Number.isFinite n

isInteger = (n) -> Number.isInteger n

isFloat = (n) -> n == +n && n != (n|0)

isBoolean = isType Boolean

isDate = isType Date

isRegExp = isType RegExp

isString = isType String

isRegularFunction = isType Function

isObject = isType Object

isArray = isType Array

isMap = isType Map

isWeakMap = isType WeakMap

isSet = isType Set

isError = isType Error

isDefined = (x) -> x?

isUndefined = (x) -> !x?

GeneratorFunction = (-> yield null).constructor

isGeneratorFunction = isType GeneratorFunction

isPromise = isType Promise

isAsyncFunction = isType (-> await null).constructor

isFunction = isKind Function

instanceOf = curry (t, x) -> x instanceof t

Type =
  create: (type) -> if type? then new type
  define: (parent = Object) -> class extends parent

size = length = create
  name: "size"
  description: "Returns the size of a given entity, if it has one."
  default: (x) ->
    throw new TypeError "size: not valid for type #{x.constructor}"

hasLength = (x) -> x.length?
hasByteLength = (x) -> x.byteLength?
hasSize = (x) -> x.size?

define size, hasByteLength, (x) -> x.byteLength
define size, isObject, (x) -> (Object.keys x).length
define size, hasSize, (x) -> x.size
define size, hasLength, (x) -> x.length

isEmpty = (x) -> (size x) == 0

# Only works in Node.js
isBuffer = isType Buffer

# Only works in browser. There is no global property named TypedArray.
isArrayBuffer = isType ArrayBuffer
isDataView = isType DataView
isTypedArray = isKind prototype Uint8Array

export {prototype, isPrototype, isTransitivePrototype,
  isType, isKind, Type, instanceOf,
  isDefined, isUndefined,
  isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat, isString, isDate,
  isObject, isArray, isMap, isWeakMap, isSet,
  isError, isRegExp, isPromise,
  isRegularFunction, isGeneratorFunction, isAsyncFunction, isFunction,
  size, length, isEmpty,
  isBuffer,
  isArrayBuffer, isDataView, isTypedArray
}
