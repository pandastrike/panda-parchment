import {curry} from "fairmont-core"
import {Method} from "fairmont-multimethods"

prototype = (value) -> if value? then Object.getPrototypeOf value

isPrototype = curry (p, value) -> p? && p == prototype value

isType = curry (type, value) -> isPrototype type?.prototype, value

isTransitivePrototype = curry (p, value) ->
  p? && (p == (q = prototype value) || (q? && isTransitivePrototype p, q))

isKind = curry (type, value) -> isTransitivePrototype type?.prototype, value

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

isFunction = isType Function

isObject = isType Object

isArray = isType Array

isError = isType Error

isDefined = (x) -> x?

isUndefined = (x) -> !x?

GeneratorFunction = (-> yield null).constructor

isGeneratorFunction = isType GeneratorFunction

isPromise = isType Promise

isAsyncFunction = isType (-> await null).constructor

instanceOf = curry (t, x) -> x instanceof t

Type =
  create: (type) -> Object.create type?.prototype
  define: (parent = Object) -> prototype: Type.create parent

size = length = Method.create default: (x) ->
  throw new TypeError "size: not valid for type #{x.constructor}"

hasLength = (x) -> x.length?
hasByteLength = (x) -> x.byteLength?
hasSize = (x) -> x.size?

Method.define size, hasByteLength, (x) -> x.byteLength
Method.define size, isObject, (x) -> (keys x).length
Method.define size, hasSize, (x) -> x.size
Method.define size, hasLength, (x) -> x.length

isEmpty = (x) -> (size x) == 0

export {prototype, isPrototype, isTransitivePrototype,
  isType, isKind, Type, instanceOf,
  isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat,
  isString, isBuffer, isFunction, isObject, isArray, isDefined, isUndefined
  isRegExp, isDate, isGeneratorFunction, isPromise, isAsyncFunction,
  size, length, isEmpty}
