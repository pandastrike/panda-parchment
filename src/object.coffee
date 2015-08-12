{curry, negate} = require "fairmont-core"
{isObject} = require "./type"
{deepEqual} = require "./util"

include = extend = (object, mixins...) ->
  for mixin in mixins
    for key, value of mixin
      object[key] = value
  object

merge = (objects...) ->

  destination = {}
  for object in objects
    destination[k] = v for k, v of object
  destination

clone = (object) ->

  if not object? or typeof object isnt 'object'
    return object

  if object instanceof Date
    return new Date(object.getTime())

  if object instanceof RegExp
    flags = ''
    flags += 'g' if object.global?
    flags += 'i' if object.ignoreCase?
    flags += 'm' if object.multiline?
    flags += 'y' if object.sticky?
    return new RegExp(object.source, flags)

  _clone = new object.constructor()

  for key of object
    _clone[key] = (clone object[key])

  return _clone

property = curry (key, object) -> object[key]

delegate = (from, to) ->

  for name, value of to when (type value) is "function"
    do (value) ->
      from[name] = (args...) -> value.call to, args...

bind = curry (f, x) -> f.bind x

detach = (f) -> curry (x, args...) -> f.apply x, args

properties = do ->
  defaults = enumerable: true, configurable: true
  (object, properties) ->
    for key, value of properties
      include value, defaults
      Object.defineProperty object, key, value

has = curry (p, x) -> x[p]?

keys = Object.keys

values = (x) -> v for k, v of x

pairs = (x) -> [k, v] for k, v of x

pick = curry (f, x) ->
  r = {}
  r[k] = v for k, v of x when f k, v
  r

omit = curry (f, x) -> pick (negate f), x

query = curry (example, target) ->
  if (isObject example) && (isObject target)
    for k, v of example
      return false unless query v, target[k]
    return true
  else
    deepEqual example, target

toJSON = (x, pretty = false) ->
  if pretty
    JSON.stringify x, null, 2
  else
    JSON.stringify x

fromJSON = JSON.parse

module.exports = {include, extend, merge, clone,
  properties, property, delegate, bind, detach,
  has, keys, values, pairs, pick, omit, query,
  toJSON, fromJSON}
