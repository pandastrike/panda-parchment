import {curry} from "panda-garden"
import {Method} from "panda-generics"

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

isBuffer = isType Buffer

isRegularFunction = isType Function

isObject = isType Object

isArray = isType Array

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

size = length = Method.create default: (x) ->
  throw new TypeError "size: not valid for type #{x.constructor}"

hasLength = (x) -> x.length?
hasByteLength = (x) -> x.byteLength?
hasSize = (x) -> x.size?

Method.define size, hasByteLength, (x) -> x.byteLength
Method.define size, isObject, (x) -> (Object.keys x).length
Method.define size, hasSize, (x) -> x.size
Method.define size, hasLength, (x) -> x.length

isEmpty = (x) -> (size x) == 0

export {prototype, isPrototype, isTransitivePrototype,
  isType, isKind, Type, instanceOf, isDefined, isUndefined,
  isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat, isBuffer,
  isString, isObject, isArray, isRegExp, isDate, isPromise,
  isRegularFunction, isGeneratorFunction, isAsyncFunction, isFunction,
  size, length, isEmpty}
