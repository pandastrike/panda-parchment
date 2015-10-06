{curry}  = require "fairmont-core"

prototype = (value) -> if value? then Object.getPrototypeOf value

isPrototype = curry (p, value) ->
  p? && value? && p == prototype value

isType = curry (type, value) -> isPrototype type?.prototype, value

isTransitivePrototype = curry (p, value) ->
  (isPrototype p, value) || (isPrototype p, (prototype value))

isKind = curry (type, value) ->
  isTransitivePrototype type?.prototype, value

isNumber = isType Number

isNaN = (n) -> Number.isNaN n

isFinite = (n) -> Number.isFinite n

isInteger = (n) -> Number.isInteger n

isFloat = (n) -> n == +n && n != (n|0)

isBoolean = isType Boolean

isDate = isType Date

isRegExp = isType RegExp

isString = isType String

isFunction = isType Function

isObject = isType Object

isArray = isType Array

isError = isType Error

isDefined = (x) -> x?

GeneratorFunction = (-> yield null).constructor

isGenerator = isType GeneratorFunction

isPromise = (x) -> x?.then? && isFunction x.then

instanceOf = curry (t, x) -> x instanceof t

Type =
  create: (type) -> Object.create type?.prototype
  define: (parent = Object) -> prototype: Type.create parent

module.exports = {prototype, isPrototype, isTransitivePrototype,
  isType, isKind, Type, instanceOf,
  isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat,
  isString, isFunction, isObject, isArray, isDefined,
  isRegExp, isDate, isGenerator, isPromise}
