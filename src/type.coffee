{curry}  = require "fairmont-core"

type = (x) -> x?.constructor

isType = curry (t, x) -> type(x) == t

instanceOf = curry (t, x) -> x instanceof t

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

module.exports = {type, isType, instanceOf,
  isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat,
  isString, isFunction, isObject, isArray, isDefined,
  isRegExp, isDate, isGenerator, isPromise}
